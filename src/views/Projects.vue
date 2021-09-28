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
          <project-card name="LaraBug Application" :unread="5" :total="10" />

          <project-card name="Ploi Application" :unread="0" :total="10" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import ProjectCard from "@/components/Project/ProjectCard.vue";

export default  {
  name: 'Tab2',
  components: {ProjectCard, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>