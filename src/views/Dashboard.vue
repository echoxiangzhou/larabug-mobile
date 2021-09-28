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
    
      <ion-list>
          <exception-card title="Exception 3" status="open" />

          <exception-card title="Exception 2" status="read" />

          <exception-card title="Exception 1" status="fixed" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import ExceptionCard from "@/components/Exception/ExceptionCard.vue";

export default  {
  name: 'Tab1',
  components: {
      ExceptionCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList }
}
</script>