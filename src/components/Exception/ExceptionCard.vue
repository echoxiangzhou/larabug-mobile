<template>
    <ion-item-sliding v-if="!deleted" ref="sliding">
        <ion-item>
            <div class="p-4 flex relative space-x-3">
                <div>
                    <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="localStatus === 'open'"></div>

                    <div class="bg-green-700 w-2 h-full rounded-xl block" v-if="localStatus === 'fixed'"></div>

                    <div class="bg-blue-700 w-2 h-full rounded-xl block" v-if="localStatus === 'read'"></div>
                </div>

                <div>
                    <h2 class="break-all">{{ `${title.substr(0, 100)}...` }}</h2>
                    <p class="text-gray-500 text-sm">{{ date }} | {{ localStatus }}</p>
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
import ExceptionService from "../../services/ExceptionService";

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
    data() {
        return {
            localStatus: 'open',
            deleted: false,
        }
    },
    computed: {
        client() {
            return new ExceptionService();
        },
    },
    methods: {
        async markAsRead(event) {
            event.stopPropagation();

            await this.client.markAsRead(this.id).then(res => {
                if (res.data) {
                    this.localStatus = res.data.status;
                    this.$refs.sliding.$el.close();
                }
            });
        },
        async deleteException(event) {
            event.stopPropagation();

            await this.client.delete(this.id).then(() => {
                this.deleted = true;
                this.$refs.sliding.$el.close();
            });
        },
    },
    watch: {
        status: {
            handler() {
                this.localStatus = this.status;
            },
            immediate: true,
            deep: false,
        },
    },
}
</script>