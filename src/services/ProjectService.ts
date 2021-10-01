import Service from "@/services/Service";

class ProjectService extends Service {
    async all(page = 1, search = '') {
        return await this._fetch(`/projects?page=${page}&search=${search}`);
    }

    async show(id: string) {
        return await this._fetch(`/projects/${id}`);
    }

    async store(data: string) {
        return await this._fetch(`/projects`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async exceptions(id: string, page = 1, search = '') {
        return await this._fetch(`/projects/${id}/exceptions?page=${page}&search=${search}`);
    }

    async exception(projectId: string, exceptionId: string) {
        return await this._fetch(`/projects/${projectId}/exceptions/${exceptionId}`);
    }
}

export default ProjectService;