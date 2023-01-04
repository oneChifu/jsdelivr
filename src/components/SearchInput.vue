<template>
    <v-text-field
        placeholder="search npm package"
        solo
        flat
        light
        hide-details
        prepend-inner-icon="mdi-magnify"
        maxlength="100"
        :value.sync="searchQuery"
        @input="onSearch"
        @keyup.enter="onSearch"
    ></v-text-field>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { SET_SEARCH_QUERY, SET_SEARCH_LIST } from '@/store/mutations.type';
import { GET_SEARCH_QUERY, GET_SEARCH_LIST } from '@/store/getters.type';

export default {
    name: 'SearchInputComponent',

    computed: {
        ...mapGetters({
            searchList: GET_SEARCH_LIST,
            searchQuery: GET_SEARCH_QUERY,
        }),
    },

    watch: {
        '$route.query.query': {
            handler(query) {
                this[SET_SEARCH_QUERY](query || '');
            },
            immediate: true,
        },
    },

    methods: {
        ...mapMutations([SET_SEARCH_QUERY, SET_SEARCH_LIST]),

        onSearch(query) {
            if (query.target) {
                query = query.target.value;
            }

            this[SET_SEARCH_QUERY](query);

            this.$router
                .replace({
                    path: '/',
                    query: {
                        ...this.$route.query,
                        query: this.searchQuery ? this.searchQuery : undefined,
                    },
                })
                .catch(() => {});
        },
    },
};
</script>

<style></style>
