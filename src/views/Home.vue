<template>
    <v-container>
        <SearchList v-if="isQuery" />
        <PopularList v-else />
    </v-container>
</template>

<script>
import throttle from '@/utils/throttle';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import {
    GET_SEARCH_QUERY,
    GET_SEARCH_LIST,
    GET_POPULAR,
} from '@/store/getters.type';
import SearchList from '@/components/SearchList';
import PopularList from '@/components/PopularList';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';

export default {
    name: 'HomePage',

    data: () => ({}),

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
            searchList: GET_SEARCH_LIST,
            popular: GET_POPULAR,
        }),

        isQuery() {
            return Boolean(this.searchQuery || this.$route.query.query);
        },
    },

    watch: {
        searchQuery: {
            handler(query) {
                if (!query) {
                    this.$router.replace({ path: '/' }).catch(() => {});
                } else {
                    let { page } = this.$route.query;

                    this.$router
                        .replace({
                            query: { query, page },
                        })
                        .catch(() => {});
                }
            },
        },

        $route: {
            async handler(route) {
                const { query, page } = route.query;

                if (query) {
                    console.log('throttle');
                    await throttle(this[FETCH_SEARCH_LIST], 200, {
                        query,
                        page,
                    });

                    console.log('setTimeout');
                    setTimeout(() => {
                        window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }, 150);
                }
            },
            deep: true,
            immediate: true,
        },
    },

    methods: {
        ...mapActions([FETCH_SEARCH_LIST]),
        ...mapMutations([SET_SEARCH_QUERY]),
    },

    components: {
        SearchList,
        PopularList,
    },
};
</script>
