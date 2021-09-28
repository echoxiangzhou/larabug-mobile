import Service from "@/services/Service";

class UserService extends Service {
    async login(email: string, password: string) {
        return await this._fetch(`/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
    }

    async details() {
        return await this._fetch(`/user`);
    }
}

export default UserService;