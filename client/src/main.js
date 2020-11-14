import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie';
import { BootstrapVue } from 'bootstrap-vue';
import x5GMaps from 'x5-gmaps';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(x5GMaps, 'AIzaSyAbz0sx6stm-M10t1XmipmyXDY-3EJPj4g');

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')