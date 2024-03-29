<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Exception</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title size="large">Exception</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="p-4 space-y-4" v-if="exception">
                <ion-segment scrollable="true" @ionChange="segmentChanged($event)" :value="tab">
                    <ion-segment-button value="general">
                        <ion-label>General</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="request">
                        <ion-label>Request</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="server">
                        <ion-label>Server</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="stack-trace">
                        <ion-label>Stack trace</ion-label>
                    </ion-segment-button>
                </ion-segment>

                <list label="General" v-if="tab === 'general'">
                    <list-item v-if="exception.class" label="Class" :value="exception.class" />

                    <list-item label="Exception" :value="exception.exception" />

                    <list-item label="File" :value="`${exception.file} on line ${exception.line}`" />

                    <list-item label="URL" :value="exception.url" />

                    <list-item label="Date" :value="`${exception.human_date} (${exception.created_at})`" />
                </list>

                <list label="Request" v-if="tab === 'request'">
                    <list-item v-bind:key="key" v-for="(key, label) in exception.headers" :label="label" :value="key[0]" />
                </list>

                <list label="Server" v-if="tab === 'server'">
                    <list-item v-bind:key="key" v-for="(key, label) in exception.server" :label="label" :value="key" />
                </list>

                <list label="Stack trace" v-if="tab === 'stack-trace'">
                    <list-item label="Trace" :value="exception.error" />
                </list>
            </div>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="share">
                    <ion-icon :icon="shareOutline"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonLabel, IonFabButton, IonFab, IonIcon } from "@ionic/vue";
import ListItem from "../../components/List/ListItem";
import List from "../../components/List/List";
import ExceptionService from "../../services/ExceptionService";
import { shareOutline } from "ionicons/icons";
import { Share } from "@capacitor/share";

export default {
    name: "Show",
    components: {
        List,
        ListItem,
        IonPage,
        IonContent,
        IonLabel,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonSegment,
        IonSegmentButton,
        IonFabButton,
        IonFab,
        IonIcon,
    },
    data() {
        return {
            tab: 'general',
            exception: null,
        }
    },
    computed: {
        client() {
            return new ExceptionService();
        },
    },
    ionViewDidEnter() {
        this.getData();
    },
    methods: {
        async getData() {
            await this.client.show(this.$route.params.exceptionId).then(res => {
                this.exception = res.data;
            });
        },

        segmentChanged(ev) {
            this.tab = ev.detail.value;
        },

        async share() {
            if (!this.exception.public_hash) {
                // Toggle to public exception
                await this.client.togglePublic(this.exception.id).then(res => {
                    this.exception = res.data;
                });
            }

            await Share.share({
                title: this.exception.exception,
                text: `${this.exception.exception} at ${this.exception.created_at} in ${this.exception.project_title}`,
                url: `${this.exception.public_hash_url}`,
                dialogTitle: 'Share with buddies',
            });
        },
    },
    setup() {
        return {
            shareOutline,
        }
    },
}
</script>

<style scoped>

</style>