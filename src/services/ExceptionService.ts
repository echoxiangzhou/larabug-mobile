import Service from "@/services/Service";

class ExceptionService extends Service {
    async all() {
        return await this._fetch(`/exceptions`);
    }

    async show(id: string) {
        return await this._fetch(`/exceptions/${id}`);
    }

    async delete(id: string) {
        return await this._fetch(`/exceptions/${id}`, {
            method: 'DELETE',
        });
    }

    async markAsRead(id: string) {
        return await this._fetch(`/exceptions/${id}/read`, {
            method: 'POST',
        });
    }

    async togglePublic(id: string) {
        return await this._fetch(`/exceptions/${id}/toggle-public`, {
            method: 'POST',
        });
    }
}

export default ExceptionService;