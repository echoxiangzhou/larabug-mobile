<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Recent exceptions</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Recent exceptions</ion-title>
                </ion-toolbar>
            </ion-header>

            <app-pull-to-refresh :do-refresh="doRefresh"></app-pull-to-refresh>

            <app-alert class="mx-4" v-if="!exceptions.length && !isLoading">There are no recent exceptions 🐞</app-alert>

            <app-loading v-if="isLoading" />

            <ion-list lines="none" v-if="!isLoading">
                <exception-card
                    v-for="exception in exceptions"
                    :exception="exception"
                    :key="exception.id"
                    @click="$router.push(`/tabs/dashboard/exceptions/${exception.id}`)"
                />
            </ion-list>
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
} from '@ionic/vue';
import ExceptionCard from "@/components/Exception/ExceptionCard";
import AppPullToRefresh from "@/components/AppPullToRefresh";
import AppAlert from "@/components/AppAlert";
import ExceptionService from "@/services/ExceptionService";
import RefreshEvent from "@/mixins/RefreshEvent";
import Loading from "../mixins/Loading";
import AppLoading from "../components/AppLoading";

export default {
    name: 'Dashboard',
    components: {
        AppLoading,
        ExceptionCard,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonList,
        AppPullToRefresh,
        AppAlert
    },

    data() {
        return {
            exceptions: [],
        };
    },

    mixins: [
        RefreshEvent,
        Loading,
    ],

    computed: {
        client() {
            return new ExceptionService();
        },
    },

    ionViewDidEnter() {
        this.getData();
    },

    methods: {
        async getData(event) {
            await this.client.all().then(res => {
                this.exceptions = res.data;

                if (event) {
                    this.completeEvent(event);
                }

                this.hideLoading();
            });
        },

        doRefresh: function (event) {
            this.getData(event);
        },
    },
}
</script>