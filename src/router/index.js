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
        component: () => import('@/views/Package.vue'),
        children: [
            {
                path: ':type',
                children: [
                    {
                        path: ':name(.*)*',
                        name: 'package',
                    },
                ],
            },
        ],
        beforeEnter(to, from, next) {
            const { params } = to;
            if (!params.type || !params.name) {
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
