import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('./views/Home.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () =>
                import ('./views/NotFound.vue')
        },
    ]
})