import Service from "@/services/Service";

class SponsorService extends Service {
    async all() {
        return await this._fetch(`/sponsors`);
    }
}

export default SponsorService;