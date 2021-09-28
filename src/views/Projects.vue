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
      
      <ion-list>
          <project-card
              @click="$router.push(`/tabs/projects/${project.id}`)"
              v-for="(project, index) in projects"
              :key="index"
              :name="project.title"
              :unread="project.unread_exceptions"
              :total="project.total_exceptions" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import ProjectCard from "@/components/Project/ProjectCard.vue";
import ProjectService from "@/services/ProjectService";

export default {
    name: 'Tab2',
    components: { ProjectCard, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    data() {
        return {
            projects: [],
        }
    },
    computed: {
        client() {
            return new ProjectService();
        },
    },
    ionViewDidEnter() {
        this.getData();
    },
    methods: {
        async getData() {
            await this.client.all().then(res => {
                this.projects = res.data;
            });
        },
    },
}
</script>