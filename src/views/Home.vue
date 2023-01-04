<template>
    <v-container>
        <SearchList />
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
import { SET_SEARCH_QUERY, SET_SEARCH_LIST } from '@/store/mutations.type';

export default {
    name: 'HomePage',

    data: () => ({}),

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
            searchList: GET_SEARCH_LIST,
            popular: GET_POPULAR,
        }),
    },

    watch: {
        $route: {
            async handler(route) {
                const { query, page } = route.query;

                if (query) {
                    await throttle(this[FETCH_SEARCH_LIST], 200, {
                        query,
                        page,
                    });
                    setTimeout(() => {
                        this.$vuetify.goTo(0);
                    }, 150);
                } else {
                    this[SET_SEARCH_QUERY]('');
                }
            },
            immediate: true,
            deep: true,
        },
    },

    methods: {
        ...mapActions([FETCH_SEARCH_LIST]),
        ...mapMutations([SET_SEARCH_QUERY, SET_SEARCH_LIST]),
    },

    components: {
        SearchList,
    },
};
</script>
