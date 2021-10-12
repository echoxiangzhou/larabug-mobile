<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-icon :icon="home" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="projects" href="/tabs/projects">
          <ion-icon :icon="briefcase" />
          <ion-label>Projects</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="account" href="/tabs/account">
          <ion-icon :icon="personCircle" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="more" href="/tabs/more">
          <ion-icon :icon="informationCircle" />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, briefcase, personCircle, informationCircle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      home,
      briefcase,
      personCircle,
      informationCircle,
    }
  }
}
</script>