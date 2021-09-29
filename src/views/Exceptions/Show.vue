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

            <div class="p-4 space-y-4">
                <div>
                    <h2 class="text-md">{{ exception.title }}</h2>
                </div>

                <list label="General">
                    <list-item label="class" :value="exception.class" />

                    <list-item label="exception" :value="exception.exception" />

                    <list-item label="created" :value="`${exception.human_date} (${exception.created_at})`" />
                </list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from "@ionic/vue";
import ListItem from "../../components/List/ListItem";
import List from "../../components/List/List";
import ExceptionService from "../../services/ExceptionService";

export default {
    name: "Show",
    components: {
        List,
        ListItem,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
    },
    data() {
        return {
            exception: {
                class: '',
                error: '',
                exception: '',
                line: '',
                file: '',
                url: '',
                // eslint-disable-next-line @typescript-eslint/camelcase
                route_url: '',
                executor: '',
                // eslint-disable-next-line @typescript-eslint/camelcase
                human_date: '',
            },
        }
    },
    computed: {
        client() {
            return new ExceptionService();
        },
    },
    ionViewWillEnter() {
        this.getData();
    },
    methods: {
        async getData() {
            await this.client.show(this.$route.params.exceptionId).then(res => {
                this.exception = res.data;
            });
        },
    },
}
</script>

<style scoped>

</style>