import {createStore, Store} from "vuex";
import { RootState } from "@/types";
import { InjectionKey } from "vue";
import { Storage } from "@capacitor/storage";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
    state: {
        user: {},
        token: '',
        pushNotificationStatus: false,
    },
    mutations: {
        login(state, token: string) {
            state.token = token;
        },
        user(state, user: object) {
            state.user = user;
        },
        logout(state) {
            state.user = {};
            state.token = '';
            state.pushNotificationStatus = false; // disable push notifications
        },
        update(state, payload) {
            Object.keys(payload).forEach((key: string) => {
                state[key] = payload[key];
            });
        },
    },
    actions: {
        save(context) {
            Storage.set({
                key: 'state',
                value: JSON.stringify(context.state),
            });
        },
        user(context, user) {
            context.commit('user', user);
        },
        login(context, token: string) {
            context.commit('login', token);
        },
        logout(context) {
            context.commit('logout');
        },
        update(context, payload) {
            context.commit('update', payload);
        },
        async init(context) {
            const savedState = await Storage.get({
                key: 'state',
            });

            if (savedState.value) {
                const data = JSON.parse(savedState.value);
                await context.commit('login', data.token);
                await context.commit('user', data.user);
            } else {
                await context.dispatch('logout');
            }

            return true;
        },
    },
});