<template>
    <v-container>
        <SearchList />
    </v-container>
</template>

<script>
import throttle from '@/utils/throttle';
import { mapActions, mapMutations } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';
import SearchList from '@/components/SearchList';

export default {
    name: 'HomePage',

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
                }
            },
            immediate: true,
            deep: true,
        },
    },

    methods: {
        ...mapActions([FETCH_SEARCH_LIST]),
        ...mapMutations([SET_SEARCH_QUERY]),
    },

    components: {
        SearchList,
    },
};
</script>
