import { NpmService } from '@/common/api.service';

import { FETCH_SEARCH_LIST, FETCH_POPULAR_LIST } from './actions.type';

import {
    SET_SEARCH_QUERY,
    SET_SEARCH_LIST,
    SET_POPULAR_LIST,
} from './mutations.type';

import {
    GET_SEARCH_LOADING,
    GET_SEARCH_QUERY,
    GET_SEARCH_LIST,
    GET_POPULAR_LIST,
} from './getters.type';

export const state = {
    searchLoading: true,
    searchQuery: '',
    searchList: [],
    popularList: [],
    popularListDate: '',
};

export const actions = {
    async [FETCH_SEARCH_LIST]({ state, commit }, { query, page, perPage }) {
        page = page <= 1 ? 0 : page - 1;
        perPage = perPage < 10 ? 10 : perPage > 200 ? 200 : perPage;

        state.searchLoading = true;
        const { response: data } = await NpmService.search({
            query,
            page,
            perPage,
        });

        commit(SET_SEARCH_LIST, data);
        state.searchLoading = false;
        return data;
    },

    async [FETCH_POPULAR_LIST]({ state, commit }, { period, type, count }) {
        if (
            state.popularList.length &&
            Date.now() - state.popularListDate < 1000 * 60 * 60
        ) {
            return state.popularList;
        }

        let data = await NpmService.popular(period || 'month');

        if (type) {
            data = data.filter(e => e.type === type);
        }

        data = data.sort((a, b) => {
            return b.hits - a.hits;
        });

        data = data.slice(0, count || 10);

        state.popularListDate = Date.now();

        commit(SET_POPULAR_LIST, data);
        return data;
    },
};

export const mutations = {
    [SET_SEARCH_QUERY](state, data) {
        state.searchQuery = data ? data.trim().replaceAll('  ', ' ') : data;
    },

    [SET_SEARCH_LIST](state, data) {
        state.searchList = data;
    },

    [SET_POPULAR_LIST](state, data) {
        state.popularList = data;
    },
};

export const getters = {
    [GET_SEARCH_LOADING](state) {
        return state.searchLoading;
    },

    [GET_SEARCH_QUERY](state) {
        return state.searchQuery;
    },

    [GET_SEARCH_LIST](state) {
        return state.searchList;
    },

    [GET_POPULAR_LIST](state) {
        return state.popularList;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
