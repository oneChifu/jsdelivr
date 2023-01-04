import Vue from 'vue';
import Vuex from 'vuex';

import common from './common.module';
import packages from './packages.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        packages,
    },
});
