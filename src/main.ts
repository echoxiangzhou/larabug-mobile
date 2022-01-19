import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store, key } from "./store";

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Theme variables */
import './theme/variables.css';
import './theme/tailwind.css';
import './theme/android.css';

store.dispatch('init').then(() => {
  const app = createApp(App)
      .use(IonicVue)
      .use(router)
      .use(store, key);

  store.subscribe(() => {
    store.dispatch('save');
  });

  router.isReady().then(() => {
    app.mount('#app');
  });
});