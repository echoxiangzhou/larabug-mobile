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
                    <ion-list lines="none">
                        <ion-item detail @click="openUrl('https://www.larabug.com/discord?utm_source=com.larabug.app')">
                            <ion-icon class="text-indigo-600" slot="start" :icon="logoDiscord"></ion-icon>

                            <ion-label>
                                Join our Discord server
                            </ion-label>
                        </ion-item>

                        <ion-item detail @click="openUrl('https://github.com/sponsors/Cannonb4ll')">
                            <ion-icon class="text-yellow-400" slot="start" :icon="happy"></ion-icon>

                            <ion-label>
                                Become a sponsor
                            </ion-label>
                        </ion-item>

                        <ion-item detail @click="openUrl('https://github.com/larabug')">
                            <ion-icon slot="start" :icon="logoGithub"></ion-icon>

                            <ion-label>
                                LaraBug on Github
                            </ion-label>
                        </ion-item>

                        <ion-item detail @click="openUrl('https://twitter.com/LaraBugEN')">
                            <ion-icon class="text-blue-400" slot="start" :icon="logoTwitter"></ion-icon>

                            <ion-label>
                                LaraBug on Twitter
                            </ion-label>
                        </ion-item>
                    </ion-list>
                </div>

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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/vue';
import { logoDiscord, happy, logoGithub, logoTwitter } from "ionicons/icons";
import config from "@/config";
import SponsorService from "@/services/SponsorService";

export default  {
    name: 'More',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonIcon, IonLabel },
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
    setup() {
        return {
            logoDiscord,
            happy,
            logoGithub,
            logoTwitter,
        }
    },
}
</script>