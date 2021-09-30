<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Create</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Create</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-list>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButtons, IonBackButton } from '@ionic/vue';
import ProjectService from "@/services/ProjectService";

export default {
    name: 'Exceptions',
    components: { IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton },
    data() {
        return {
            form: {
                title: null,
            }
        }
    },
    computed: {
        client() {
            return new ProjectService();
        },
    },
    methods: {
        async create() {
            await this.client.store(this.form).then(res => {
                console.log(res.data);
            });
        },
    },
}
</script>