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
import { GET_SEARCH_QUERY } from '@/store/getters.type';

export default {
    name: 'SearchInputComponent',

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
        }),
    },

    watch: {
        '$route.query.query': {
            handler(query, queryOld) {
                this[SET_SEARCH_QUERY](query || '');

                if (!query && queryOld) {
                    this[SET_SEARCH_LIST]();
                }
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

            query = this.searchQuery || undefined;

            this.$router
                .replace({
                    path: '/',
                    query: {
                        ...this.$route.query,
                        query,
                    },
                })
                .catch(() => {});
        },
    },
};
</script>

<style></style>
