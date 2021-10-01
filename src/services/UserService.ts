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

    async registerPushNotificationToken(token: string, device: string) {
        return await this._fetch(`/register-fcm-token`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                device: device
            })
        });
    }
}

export default UserService;