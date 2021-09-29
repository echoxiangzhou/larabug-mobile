import Service from "@/services/Service";

class ExceptionService extends Service {
    async all() {
        return await this._fetch(`/exceptions`);
    }

    async show(id: string) {
        return await this._fetch(`/exceptions/${id}`);
    }
}

export default ExceptionService;