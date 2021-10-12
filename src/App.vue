<template>
    <ion-app>
        <ion-router-outlet/>
    </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';
import {StatusBar} from '@capacitor/status-bar';
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
        StatusBar.setOverlaysWebView({overlay: true});

        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: ActionPerformed) => {
                this.$router.push(`/tabs/dashboard/exceptions/${notification.notification.data.exception_id}`)
            }
        );

        SplashScreen.hide();
    }
});
</script>