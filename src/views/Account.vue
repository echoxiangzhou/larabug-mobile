<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Account</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="p-4 space-y-5">
          <div>
              <h2 class="font-bold text-2xl">{{ $store.state.user.name }} {{ $store.state.user.surname }}</h2>
              <p class="text-sm text-gray-500">{{ $store.state.user.email }}</p>
          </div>

          <div>
              <p>We currently only support the hosted version of LaraBug. You can manage your account at LaraBug.com.</p>
          </div>

          <div class="grid grid-cols-2 gap-4">
              <div>
                  <ion-button @click="openAccountSettings" size="block">
                      Manage account
                  </ion-button>
              </div>

              <div>
                  <ion-button @click="$store.dispatch('logout'); $router.go('/')" size="block">
                      Logout
                  </ion-button>
              </div>
          </div>

          <div>
              <p class="text-center text-gray-500 text-sm">App version: {{ config.version }}</p>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import config from "@/config";

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  data() {
      return {
          config: config,
      }
  },
  methods: {
    openAccountSettings() {
        window.open('https://www.larabug.com/panel/profile', '_blank');
    },
  },
}
</script>