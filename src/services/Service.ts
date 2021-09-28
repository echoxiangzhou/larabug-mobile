import { store } from "@/store";
import config from "@/config";
import Crypto from "@/helper/Crypto";
import { RequestOptions } from "@/types/RequestOptions";

class Service {
    async _fetch(url: string, options: RequestOptions = {}, blob = null) {
        const crypto = new Crypto();
        const endpoint = `${config.apiUrl}${url}`;
        const token = crypto.decrypt(store.state.token);

        return await fetch(endpoint, {
            ...options,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-LaraBug-Agent': 'LaraBug App',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(this.handleErrors)
            .then(response => this.handleResponse(response, options.method ? options.method : '', blob));
    }

    handleResponse(response: Response, method: string, blob: any) {
        if (method === 'DELETE' || method === 'PATCH') {
            return response;
        }

        if (blob) {
            return response.blob();
        }

        return response.json();
    }

    async handleErrors(response: any) {
        if (response.status === 401) {
            await store.dispatch('logout');
        }

        if (!response.ok) {
            //https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
            const result = await response.json();

            const responseError = {
                type: 'Error',
                message: result.message || 'Something went wrong',
                errors: result.errors ? result.errors : result.error,
            };

            let error = new Error();
            error = {...error, ...responseError};
            throw (error);
        }

        return response;
    }
}

export default Service;