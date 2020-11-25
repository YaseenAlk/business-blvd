import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
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
            path: '/business/:id',
            props: {
                id: String,
            },
            name: 'Business',
            component: () =>
                import ('./views/Business.vue')
        },
        {
            path: '/edit',
            name: 'EditBusiness',
            component: () =>
                import ('./views/EditBusiness.vue')
        },
        {
            path: '/account',
            name: 'Account',
            component: () =>
                import ('./views/Account.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () =>
                import ('./views/NotFound.vue')
        },

    ]
})