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

<!--                        <ion-item detail @click="openUrl('https://github.com/sponsors/Cannonb4ll')">-->
<!--                            <ion-icon class="text-yellow-400" slot="start" :icon="happy"></ion-icon>-->

<!--                            <ion-label>-->
<!--                                Become a sponsor-->
<!--                            </ion-label>-->
<!--                        </ion-item>-->

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

                        <ion-item detail @click="openUrl('https://ploi.io/?ref=larabug-mobile-app')">
                            <ion-img style="margin-inline: 0 15px;" src="https://ploi.io/favicon-32x32.png" slot="start"/>

                            <ion-label class="-pr-4">
                                Proudly deployed with <span class="font-bold">ploi</span>.io
                            </ion-label>
                        </ion-item>
                    </ion-list>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonImg
} from '@ionic/vue';
import {logoDiscord, happy, logoGithub, logoTwitter} from "ionicons/icons";
import config from "@/config";
import SponsorService from "@/services/SponsorService";

export default {
    name: 'More',
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonIcon, IonLabel, IonImg},
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
        // async getData() {
        //     await this.client.all().then(res => {
        //         this.sponsors = res.data;
        //     });
        // },
        openUrl(url) {
            window.open(url, '_blank');
        },
    },
    ionViewWillEnter() {
        // this.getData();
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