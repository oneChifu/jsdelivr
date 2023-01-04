import { NpmService } from '@/common/api.service';

import {
    FETCH_SEARCH_LIST,
    FETCH_POPULAR_LIST,
    FETCH_PACKAGE_DATA,
} from './actions.type';

import {
    SET_SEARCH_QUERY,
    SET_SEARCH_LIST,
    SET_POPULAR_LIST,
    SET_PACKAGE_DATA,
} from './mutations.type';

import {
    GET_SEARCH_QUERY,
    GET_SEARCH_LIST,
    GET_POPULAR_LIST,
    GET_PACKAGE_DATA,
} from './getters.type';

export const state = {
    searchQuery: '',
    searchList: [],
    popularList: [],
    popularListType: '',
    popularListDate: '',
    packageData: {},
};

export const actions = {
    async [FETCH_SEARCH_LIST]({ state, commit }, { query, page, perPage }) {
        page = page <= 1 ? 0 : page - 1;
        perPage = perPage < 10 ? 10 : perPage > 200 ? 200 : perPage;

        if (!state.searchList.hits) {
            commit(SET_SEARCH_LIST, [{ loading: true }]);
        }

        const { response: data } = await NpmService.search({
            query,
            page,
            perPage,
        });

        commit(SET_SEARCH_LIST, data);
        return data;
    },

    async [FETCH_POPULAR_LIST]({ state, commit }, { period, type, count }) {
        if (
            Date.now() - state.popularListDate < 1000 * 60 * 60 &&
            state.popularList.length &&
            state.popularListType === type
        ) {
            return state.popularList;
        }

        let data = await NpmService.popular(period || 'month');
        state.popularListDate = Date.now();

        if (type) {
            state.popularListType = type;
            data = data.filter(e => e.type === type);
        }

        data = data
            .sort((a, b) => {
                return b.hits - a.hits;
            })
            .slice(0, count || 10);

        commit(SET_POPULAR_LIST, data);
        return data;
    },

    async [FETCH_PACKAGE_DATA]({ state, commit }, { name }) {
        let data = state.packageData.name === name ? state.packageData : {};

        if (!Object.values(data).length) {
            data = await NpmService.package(name);
        }

        commit(SET_PACKAGE_DATA, data);
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

    [SET_PACKAGE_DATA](state, data) {
        state.packageData = data;
    },
};

export const getters = {
    [GET_SEARCH_QUERY](state) {
        return state.searchQuery;
    },

    [GET_SEARCH_LIST](state) {
        return state.searchList;
    },

    [GET_POPULAR_LIST](state) {
        return state.popularList;
    },

    [GET_PACKAGE_DATA](state) {
        return state.packageData;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
