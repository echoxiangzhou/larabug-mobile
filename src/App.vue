<template>
    <ion-app>
        <ion-router-outlet/>
    </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';
import {SplashScreen} from '@capacitor/splash-screen';

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet
    },

    created(){
        SplashScreen.hide();
    }
});
</script>

<style>
ion-item {
    --padding-start: 0px;
}
</style>