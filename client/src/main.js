import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import x5GMaps from 'x5-gmaps';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/swiper-bundle.css'

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAwesomeSwiper);
Vue.use(x5GMaps, { key: process.env.VUE_APP_GOOGLE_API_KEY });

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')