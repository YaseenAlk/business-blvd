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
            path: '/map',
            name: 'Map',
            component: () =>
                import ('./views/Map.vue')
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: () =>
                import ('./views/SignUp.vue')
        },
        {
            path: '/login',
            name: 'LogIn',
            component: () =>
                import ('./views/LogIn.vue')
        },
        {
            path: '/map',
            name: 'Map',
            component: () =>
                import ('./views/Map.vue')
        },
        {
            path: '/business',
            name: 'Business',
            component: () => 
                import('./views/Business.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () =>
                import ('./views/NotFound.vue')
        },

    ]
})