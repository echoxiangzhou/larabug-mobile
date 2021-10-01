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

            <div class="space-y-5 p-4">
                <input-item label="Title" name="title" v-model="form.title" />

                <input-item label="Url" name="url" v-model="form.url" />

                <input-item label="Description" name="description" type="textarea" v-model="form.description" />

                <ion-button @click="create" color="primary" size="block">Create</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from '@ionic/vue';
import ProjectService from "@/services/ProjectService";
import InputItem from "../../components/form/InputItem";

export default {
    name: 'Exceptions',
    components: { InputItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonButton },
    data() {
        return {
            form: {
                title: null,
                description: null,
                url: null,
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
                if (res.data) {
                    this.reset();
                    this.$router.back();
                }
            });
        },
        reset() {
            this.form.title = null;
            this.form.description = null;
            this.form.url = null;
        },
    },
}
</script>