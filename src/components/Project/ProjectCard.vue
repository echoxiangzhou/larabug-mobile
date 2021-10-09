<template>
    <ion-item button @click="$router.push(`/tabs/projects/${project.id}`)">
        <div class="py-4 pl-4 flex relative space-x-3">
            <div>
                <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="project.unread_exceptions > 0"></div>

                <div class="bg-gray-500 w-2 h-full rounded-xl block" v-if="project.unread_exceptions === 0"></div>
            </div>

            <div>
                <h2>{{ project.title }}</h2>
                <p class="text-gray-500 text-sm">{{ project.unread_exceptions }} unread | {{ project.total_exceptions ? project.total_exceptions : 0 }} total</p>
            </div>
        </div>
    </ion-item>
</template>

<script>
import {
    IonItem,
} from '@ionic/vue';

export default {
    name: "ProjectCard",
    props: {
        project: {
            required: true,
            type: Object
        }
    },
    components: {
        IonItem
    }
}
</script>