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
                    <h2 class="break-all">{{ exceptionTitle }}</h2>
                    <p class="text-gray-500 text-sm">{{ exception.human_date }} &centerdot; {{ !hideProjectName ? `${exception.project_title} &centerdot; ` : '' }}{{ localStatus }}</p>
                </div>
            </div>
        </ion-item>

        <ion-item-options side="end">
            <ion-item-option @click="deleteException($event)">Delete</ion-item-option>
            <ion-item-option class="bg-blue-500" v-if="exception.status === 'open'" @click="markAsRead($event)">Read</ion-item-option>
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
        exception: {
            type: Object,
            required: true,
        },
        hideProjectName: {
            type: Boolean,
            default: false,
        }
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
        exceptionTitle() {
            if (this.exception.exception.length > 100) {
                return `${this.exception.exception.substr(0, 100)}...`;
            }

            return this.exception.exception;
        },
    },
    methods: {
        async markAsRead(event) {
            event.stopPropagation();

            await this.client.markAsRead(this.exception.id).then(res => {
                if (res.data) {
                    this.localStatus = res.data.status;
                    this.$refs.sliding.$el.close();
                }
            });
        },
        async deleteException(event) {
            event.stopPropagation();

            await this.client.delete(this.exception.id).then(() => {
                this.deleted = true;
                this.$refs.sliding.$el.close();
            });
        },
    },
    watch: {
        status: {
            handler() {
                this.localStatus = this.exception.status;
            },
            immediate: true,
            deep: false,
        },
    },
}
</script>