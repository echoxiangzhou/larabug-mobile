<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>{{ project.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ project.title }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-list>
                <exception-card
                    v-for="(exception, index) in exceptions"
                    :key="index"
                    :title="exception.exception"
                    status="read"
                    :date="exception.human_date"
                />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButtons, IonBackButton } from '@ionic/vue';
import ProjectService from "@/services/ProjectService";
import ExceptionCard from "../../components/Exception/ExceptionCard";

export default {
    name: 'Exceptions',
    components: {ExceptionCard, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton },
    data() {
        return {
            project: {},
            exceptions: [],
        }
    },
    computed: {
        client() {
            return new ProjectService();
        },
        projectId() {
            return this.$route.params.id;
        },
    },
    ionViewWillEnter() {
        this.getData();
    },
    methods: {
        async getData() {
            await this.client.show(this.projectId).then(res => {
                this.project = res.data;
            });

            await this.client.exceptions(this.projectId).then(res => {
                this.exceptions = res.data;
            });
        },
    },
}
</script>