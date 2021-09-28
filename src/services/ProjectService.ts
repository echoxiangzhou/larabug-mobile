import Service from "@/services/Service";

class ProjectService extends Service {
    async all() {
        return await this._fetch(`/projects`);
    }

    async show(id: string) {
        return await this._fetch(`/projects/${id}`);
    }

    async exceptions(id: string) {
        return await this._fetch(`/projects/${id}/exceptions`);
    }

    async exception(projectId: string, exceptionId: string) {
        return await this._fetch(`/projects/${projectId}/exceptions/${exceptionId}`);
    }
}

export default ProjectService;