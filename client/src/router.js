import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
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
                import ('./views/Map.vue'),
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
            path: '/claim',
            name: 'Claim',
            component: () =>
                import ('./views/Claim.vue')
        },
        {
            path: '/account',
            name: 'Account',
            component: () =>
                import ('./views/Account.vue')
        },
        {
            path: '/report',
            name: 'Report',
            component: () =>
                import ('./views/Report.vue')
        },
        {
            path: '/manage/:id',
            props: {
                id: String,
            },
            name: 'Manage',
            component: () =>
                import ('./views/Manage.vue')
        },
        {
            path: '/inbox',
            name: 'Inbox',
            component: () =>
                import ('./views/Inbox.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () =>
                import ('./views/NotFound.vue')
        },
    ]
});

const authRoutes = new Set(['Report', 'Claim', 'Account', 'Inbox'])

router.beforeEach((from, to, next) => {

    const cookieID = Vue.cookie.get('business-blvd-userId');

    const isLoggedIn = cookieID !== 'undefined' && cookieID !== '';
    const requiresAuth = authRoutes.has(from.name);

    if (!isLoggedIn && requiresAuth) next({ name: 'LogIn' });
    else next();
})

export default router;