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

                <ion-searchbar color="light" v-model="search" debounce="500"></ion-searchbar>
            </ion-header>

            <app-pull-to-refresh :do-refresh="doRefresh"></app-pull-to-refresh>

            <app-alert class="mx-4" v-if="!exceptions.length">There are no recent exceptions 🐞</app-alert>

            <ion-list>
                <exception-card
                    v-for="(exception, index) in exceptions"
                    :key="index"
                    @click="$router.push(`/tabs/projects/${$route.params.id}/exceptions/${exception.id}`)"
                    :title="exception.exception"
                    status="read"
                    :date="exception.human_date"
                />
            </ion-list>

            <ion-infinite-scroll
                @ionInfinite="getData($event)"
                threshold="100px"
                id="infinite-scroll"
                :disabled="isDisabled"
            >
                <ion-infinite-scroll-content
                    loading-spinner="bubbles"
                    loading-text="Loading more exceptions 🐞">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>
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
    IonButtons,
    IonSearchbar,
    IonBackButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent
} from '@ionic/vue';
import ProjectService from "@/services/ProjectService";
import ExceptionCard from "../../components/Exception/ExceptionCard";
import AppPullToRefresh from "../../components/AppPullToRefresh";
import AppAlert from "../../components/AppAlert";
import RefreshEvent from "../../mixins/RefreshEvent";

export default {
    name: 'Exceptions',
    components: {
        AppPullToRefresh,
        ExceptionCard,
        IonList,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonButtons,
        IonSearchbar,
        IonBackButton,
        IonInfiniteScroll,
        IonInfiniteScrollContent,
        AppAlert,
    },
    data() {
        return {
            project: {},
            exceptions: [],
            isDisabled: false,
            page: 1,
            search: '',
        }
    },
    mixins: [
        RefreshEvent,
    ],
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
        async getData(event = null) {
            if (!event && this.search === '') {
                await this.client.show(this.projectId).then(res => {
                    this.project = res.data;
                });
            }

            if (event) {
                this.page++;
            }

            await this.client.exceptions(this.projectId, this.page, this.search).then(res => {
                if (event) {
                    this.exceptions = [...this.exceptions, ...res.data]
                    event.target.complete();

                    if (this.page === res.meta.last_page) {
                        this.isDisabled = true;
                    }
                } else {
                    this.exceptions = res.data;
                }
            });
        },
        async doRefresh(event) {
            this.page = 1;

            await this.client.exceptions(this.projectId, this.page).then(res => {
                this.exceptions = res.data;
                this.completeEvent(event);
            });
        }
    },
    watch: {
        search: {
            handler() {
                this.getData();
            },
            immediate: false,
            deep: false,
        },
    },
}
</script>