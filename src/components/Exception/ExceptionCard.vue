<template>
    <ion-item-sliding>
        <ion-item>
            <div class="p-4 flex relative space-x-3">
                <div>
                    <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="status === 'open'"></div>

                    <div class="bg-green-700 w-2 h-full rounded-xl block" v-if="status === 'fixed'"></div>

                    <div class="bg-blue-700 w-2 h-full rounded-xl block" v-if="status === 'read'"></div>
                </div>

                <div>
                    <h2 class="break-all">{{ `${title.substr(0, 100)}...` }}</h2>
                    <p class="text-gray-500 text-sm">{{ date }} | {{ status }}</p>
                </div>
            </div>
        </ion-item>

        <ion-item-options side="end">
            <ion-item-option @click="deleteException($event)">Delete</ion-item-option>
            <ion-item-option class="bg-blue-500" v-if="status === 'open'" @click="markAsRead($event)">Read</ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script>
import { IonItemSliding, IonItemOptions, IonItemOption, IonItem } from "@ionic/vue";

export default {
    name: "ExceptionCard",
    components: {
        IonItemSliding,
        IonItemOptions,
        IonItemOption,
        IonItem,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: false,
        },
    },
    methods: {
        markAsRead(event) {
            console.log('Mark exception as read');
            event.stopPropagation();
        },
        deleteException(event) {
            console.log('Delete exception');
            event.stopPropagation();
        },
    },
}
</script>

<style scoped>
ion-item {
    --padding-start: 0px;
}
</style>