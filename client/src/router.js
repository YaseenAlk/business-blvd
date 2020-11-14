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
            path: '/signin',
            name: 'SignIn',
            component: () =>
                import ('./views/SignIn.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () =>
                import ('./views/NotFound.vue')
        },

    ]
})