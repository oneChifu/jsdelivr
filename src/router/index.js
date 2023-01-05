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
            if (to.params.pathMatch) {
                next({ name: 'not-found' });
            } else {
                next();
            }
        },
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
        props: true,
    },
    {
        path: '*',
        redirect: {
            name: '404',
            params: {
                resource: 'page',
            },
        },
    },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;
