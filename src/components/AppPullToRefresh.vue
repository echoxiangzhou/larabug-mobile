<template>
    <ion-refresher slot="fixed" @ionRefresh="run($event)" pull-factor="0.5" pull-min="100" pull-max="200">
        <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
</template>

<script>
import {IonRefresher, IonRefresherContent} from '@ionic/vue';
import {Haptics, ImpactStyle} from '@capacitor/haptics';

export default {
    props: {
        doRefresh: {
            type: Function
        },
        reset: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        IonRefresher,
        IonRefresherContent,
    },
    methods: {
        async run(event) {
            if (this.reset) {
                this.doRefresh(event, true);
            } else {
                this.doRefresh(event);
            }

            // Send signal to device to run a small haptic feedback indicating the user has pulled far enough
            await Haptics.impact({style: ImpactStyle.Light});
        }
    }
}
</script>