import { ADD_SNACKBAR } from './actions.type';

import { SET_SNACKBAR } from './mutations.type';

import { GET_SNACKBAR } from './getters.type';

export const state = {
    snackbar: {},
};

export const actions = {
    async [ADD_SNACKBAR]({ commit }, { color, timeout, text }) {
        const data = {
            color: color || 'success',
            timeout: timeout || 2000,
            text: text || 'Success',
            show: true,
        };

        commit(SET_SNACKBAR, data);
        return data;
    },
};

export const mutations = {
    [SET_SNACKBAR](state, data) {
        state.snackbar = data;
    },
};

export const getters = {
    [GET_SNACKBAR](state) {
        return state.snackbar;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
