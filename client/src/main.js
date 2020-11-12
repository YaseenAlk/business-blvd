import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie'

Vue.use(VueCookie);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')