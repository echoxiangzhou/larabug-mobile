<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Projects</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-searchbar mode="ios" color="light" v-model="search" debounce="500" placeholder="Zoeken.."></ion-searchbar>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Projects</ion-title>
                </ion-toolbar>
            </ion-header>

            <app-pull-to-refresh :do-refresh="doRefresh"></app-pull-to-refresh>

            <app-alert class="mx-4" v-if="!projects.length && !isLoading">You don't have any projects.</app-alert>

            <app-loading v-if="isLoading" />

            <ion-list v-if="!isLoading" lines="none">
                <project-card
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"/>
            </ion-list>

            <ion-infinite-scroll
                @ionInfinite="getData($event)"
                threshold="100px"
                id="infinite-scroll"
                :disabled="isDisabled"
            >
                <ion-infinite-scroll-content
                    loading-spinner="bubbles"
                    loading-text="Loading more projects">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="$router.push(`/tabs/projects/create`)">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonFab, IonFabButton, IonIcon, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
import ProjectCard from "@/components/Project/ProjectCard.vue";
import ProjectService from "@/services/ProjectService";
import AppPullToRefresh from "@/components/AppPullToRefresh";
import AppAlert from "@/components/AppAlert";
import RefreshEvent from "@/mixins/RefreshEvent";
import {
    add,
} from 'ionicons/icons';
import Loading from "../mixins/Loading";
import AppLoading from "../components/AppLoading";

export default {
    name: 'Projects',
    components: {
        AppLoading,
        ProjectCard, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent,
        IonFab,
        IonFabButton,
        IonIcon,
        AppPullToRefresh,
        AppAlert,
    },
    setup() {
        return {
            add,
        }
    },
    data() {
        return {
            projects: [],
            isDisabled: false,
            page: 1,
            search: '',
        }
    },
    mixins: [
        RefreshEvent,
        Loading,
    ],
    computed: {
        client() {
            return new ProjectService();
        },
    },
    ionViewDidEnter() {
        this.page = 1;
        this.getData();
    },
    methods: {
        async getData(event) {
            if (event) {
                this.page++;
            }

            await this.client.all(this.page, this.search).then(res => {
                if (event) {
                    this.projects = [...this.projects, ...res.data];
                    event.target.complete();

                    if (this.page === res.meta.last_page) {
                        this.isDisabled = true;
                    }
                } else {
                    this.projects = res.data;
                }

                this.hideLoading();
            });
        },

        doRefresh: async function (event) {
            this.page = 1;

            await this.client.all(this.page, this.search).then(res => {
                this.projects = res.data;
                this.completeEvent(event);
            });
        },
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