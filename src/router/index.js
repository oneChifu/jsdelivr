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
        path: '/:path/:type',
        redirect: { name: 'home' },
    },
    {
        path: '/:path/:type/:name(.*)*',
        name: 'package',
        component: () => import('@/views/Package.vue'),
        beforeEnter(to, from, next) {
            const { params } = to;

            if (params.pathMatch) {
                next({ name: 'not-found' });
            } else {
                next();
            }
        },
    },
    {
        path: '/404',
        name: 'not-found',
        component: NotFound,
    },
    { path: ':pathMatch(.*)*', redirect: '/404' },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
