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
          <exception-card
              v-for="(exception, index) in exceptions"
              :key="index"
              @click="$router.push(`/tabs/dashboard/exceptions/${exception.id}`)"
              :date="exception.human_date"
              :title="exception.exception"
              :status="exception.status"
          />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import ExceptionCard from "@/components/Exception/ExceptionCard.vue";
import ExceptionService from "@/services/ExceptionService";

export default  {
  name: 'Tab1',
  components: {
      ExceptionCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList
  },
  data() {
    return {
      exceptions: [],
    };
  },
  computed: {
    client() {
      return new ExceptionService();
    },
  },
  ionViewWillEnter() {
      // Load the exceptions
      this.getData();
  },
  methods: {
    async getData() {
      await this.client.all().then(res => {
        this.exceptions = res.data;
      });
    },
  },
}
</script>