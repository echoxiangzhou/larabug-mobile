<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Exception</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title size="large">Exception</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="p-4 space-y-4">
                <div>
                    <h2 class="text-md">{{ exception.title }}</h2>
                </div>

                <list label="Request">
                    <list-item label="host" :value="exception.request.host" />

                    <list-item label="accept" :value="exception.request.accept" />

                    <list-item label="origin" :value="exception.request.origin" />
                </list>

                <list label="Server">
                    <list-item label="user" :value="exception.server.user" />

                    <list-item label="php_version" :value="exception.server.phpVersion" />

                    <list-item label="http_user_agent" :value="exception.server.httpUserAgent" />

                    <list-item label="server_protocol" :value="exception.server.serverProtocol" />
                </list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from "@ionic/vue";
import ListItem from "../../components/List/ListItem";
import List from "../../components/List/List";

export default {
    name: "Show",
    components: {
        List,
        ListItem,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
    },
    data() {
        return {
            exception: {
                title: 'file(/home/ploi/www.larabug.com/xx/x.php(191) : eval()\'d code): failed to open stream: No such file or directory',
                method: 'POST',
                url: 'https://www.larabug.com/panel/projects/xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx',
                file: '/home/ploi/larabug.com/public/xx/x.php',
                class: 'ErrorException',
                reported: '2021-09-08 11:25:08',
                request: {
                    host: 'www.larabug.com',
                    accept: '*/*',
                    origin: 'https://www.larabug.com',
                },
                server: {
                    user: 'ploi',
                    phpVersion: '7.4.14',
                    httpUserAgent: 'Mozilla/5.0 (X11; CrOS x86_64 14092.57.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.85 Safari/537.36',
                    serverProtocol: 'HTTP/2.0',
                    serverSoftware: 'nginx/1.18.0',
                },
            },
        }
    },
}
</script>

<style scoped>

</style>