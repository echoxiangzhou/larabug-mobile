<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="p-4 w-full space-y-5">
                <div class="text-center py-14">
                    <h1 class="text-4xl"><span class="font-bold">Lara</span><span class="text-red-700">Bug</span></h1>
                </div>

                <div class="max-w-md mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg p-4">

                    <form class="space-y-5">

                        <input-item v-model="email" name="email" label="Email" />

                        <input-item v-model="password" name="password" label="Password" type="password" />

                        <p class="text-red-500" v-if="error">{{ error }}</p>

                        <ion-button size="block" @click="login">
                            Login
                        </ion-button>

                    </form>

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import InputItem from "../../components/Form/InputItem";
import UserService from "../../services/UserService";
import Crypto from "../../helper/Crypto";

export default {
    name: "Login",
    components: {
        InputItem,
        IonPage,
        IonContent,
        IonButton,
    },
    data() {
        return {
            error: '',
            email: null,
            password: null,
        }
    },
    computed: {
        client() {
            return new UserService();
        },
    },
    methods: {
        async login() {
            const crypto = new Crypto();

            await this.client.login(this.email, this.password).then(async (res) => {
                await this.$store.dispatch('login', crypto.encrypt(res.token));
                await this.$store.dispatch('user', res.user);

                this.error = '';
                this.email = '';
                this.password = '';

                await this.$router.push('/');
            }, err => {
                this.error = err.errors;
                this.password = '';
            });
        },
    },
}
</script>