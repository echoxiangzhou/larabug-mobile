import { store } from "@/store";

export default (to: any, from: any, next: any) => {
    if (!store.state.token) {
        next('/login');
    } else {
        next();
    }
};