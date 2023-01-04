import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const jsdelivr = process.env.NODE_ENV === 'production' ? '/jsdelivr/' : '/';

const routes = [
    {
        path: '/',
        redirect: { name: 'home' },
    },
    {
        path: jsdelivr,
        name: 'home',
        component: Home,
    },
    {
        path: `${jsdelivr}:path/:type`,
        redirect: { name: 'home' },
    },
    {
        path: `${jsdelivr}:path/:type/:name/(.*)*`,
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
        path: `/404(.*)*`,
        name: 'not-found',
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
