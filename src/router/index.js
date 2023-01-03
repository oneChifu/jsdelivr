import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/package',
        name: 'package',
        component: () => import('@/views/Package.vue'),
        children: [
            {
                path: ':type',
                children: [
                    {
                        path: ':packageId(.*)*',
                    },
                ],
            },
        ],
        beforeEnter(to, from, next) {
            const { params } = to;
            if (!params.type || !params.packageId) {
                next('/');
            } else {
                next();
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
