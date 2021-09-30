<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Projects</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Projects</ion-title>
                </ion-toolbar>
            </ion-header>

            <app-pull-to-refresh :do-refresh="doRefresh"></app-pull-to-refresh>

            <app-alert class="mx-4" v-if="!projects.length">You don't have any projects.</app-alert>

            <ion-list>
                <project-card
                    @click="$router.push(`/tabs/projects/${project.id}`)"
                    v-for="(project, index) in projects"
                    :key="index"
                    :name="project.title"
                    :unread="project.unread_exceptions"
                    :total="project.total_exceptions"/>
            </ion-list>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="$router.push(`/tabs/projects/create`)">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonFab, IonFabButton, IonIcon} from '@ionic/vue';
import ProjectCard from "@/components/Project/ProjectCard.vue";
import ProjectService from "@/services/ProjectService";
import AppPullToRefresh from "@/components/AppPullToRefresh";
import AppAlert from "@/components/AppAlert";
import RefreshEvent from "@/mixins/RefreshEvent";
import {
    add,
} from 'ionicons/icons';

export default {
    name: 'Projects',
    components: {
        ProjectCard, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
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
        }
    },
    mixins: [
        RefreshEvent
    ],
    computed: {
        client() {
            return new ProjectService();
        },
    },
    ionViewDidEnter() {
        this.getData();
    },
    methods: {
        async getData(event) {
            await this.client.all().then(res => {
                this.projects = res.data;

                if (event) {
                    this.completeEvent(event);
                }
            });
        },

        doRefresh: function (event) {
            this.getData(event);
        },
    },
}
</script>