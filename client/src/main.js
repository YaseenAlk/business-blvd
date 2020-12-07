import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie';
import { BootstrapVue, IconsPlugin, SidebarPlugin } from 'bootstrap-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/swiper-bundle.css'

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(SidebarPlugin)
Vue.use(IconsPlugin);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMapbox, { mapboxgl: Mapbox });

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')