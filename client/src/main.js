import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie';
import { BootstrapVue } from 'bootstrap-vue';
import x5GMaps from 'x5-gmaps';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { GOOGLE_API_KEY } from './KEYS.js';

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(x5GMaps, GOOGLE_API_KEY);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')