import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import packageDownloadUrl from './filters/package-download';

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

Vue.filter('packageDownloadUrl', packageDownloadUrl);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
