<template>
    <ion-app>
        <ion-router-outlet/>
    </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';
import {SplashScreen} from '@capacitor/splash-screen';
import {
    ActionPerformed,
    PushNotifications,
} from '@capacitor/push-notifications';

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet
    },

    created() {
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: ActionPerformed) => {
                this.$router.push(`/tabs/dashboard/exceptions/${notification.notification.data.exception_id}`)
            }
        );

        SplashScreen.hide();
    }
});
</script>