<script>
import {Haptics, ImpactStyle} from '@capacitor/haptics';

export default {
    name: 'RefreshEvent',

    methods: {
        completeEvent(event) {
            setTimeout(() => {
                event.target.complete();

                // Send out a small haptic feedback to the user letting them know refreshing is done
                Haptics.impact({style: ImpactStyle.Light});
            }, 250);
        }
    },
}
</script>