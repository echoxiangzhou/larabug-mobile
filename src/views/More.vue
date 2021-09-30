<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>More</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">More</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="p-4 space-y-5">
                <div>
                    <h2 class="text-lg">Shout out to our awesome sponsors</h2>
                </div>

                <div class="grid grid-cols-5 gap-2">
                    <div @click="openUrl(sponsor.url)" class="" v-for="(sponsor, index) in sponsors" :key="index">
                        <img class="rounded-full" :src="sponsor.avatar" />
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import config from "@/config";
import SponsorService from "@/services/SponsorService";

export default  {
    name: 'More',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    computed: {
        client() {
            return new SponsorService();
        },
    },
    data() {
        return {
            config: config,
            sponsors: [],
        }
    },
    methods: {
        async getData() {
            await this.client.all().then(res => {
                this.sponsors = res.data;
            });
        },
        openUrl(url) {
            window.open(url, '_blank');
        },
    },
    ionViewWillEnter() {
        this.getData();
    },
}
</script>