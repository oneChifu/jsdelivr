<template>
    <div>
        <Card v-for="pkg in pkgs" :key="pkg.name" :pkg="pkg" />

        <v-pagination
            v-if="isPagination"
            v-model="page"
            :length="pages"
            :total-visible="5"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
        ></v-pagination>

        <div v-if="!isLoading && !isPkgs" class="text-center my-5">
            <div class="text-h3 mb-3">No packages</div>

            <div class="text-h6">Try another search request</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import { GET_SEARCH_QUERY, GET_SEARCH_LIST } from '@/store/getters.type';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';
import Card from '@/components/SearchList/Card';

export default {
    name: 'SearchListComponent',

    data: () => ({
        page: 1,
    }),

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
            searchList: GET_SEARCH_LIST,
        }),

        pkgs() {
            return this.searchList.hits || [];
        },

        pages() {
            return this.searchList.nbPages || 1;
        },

        isLoading() {
            return Boolean(
                !Object.values(this.searchList).length ||
                    this.searchList.loading
            );
        },

        isPkgs() {
            return Boolean(this.pkgs.length);
        },

        isPagination() {
            return Boolean(this.isPkgs && this.pages > 1);
        },
    },

    watch: {
        page: {
            handler(page) {
                if (Number(page) <= 1) {
                    page = undefined;
                }

                this.$router
                    .replace({
                        query: { ...this.$route.query, page },
                    })
                    .catch(() => {});
            },
        },
    },

    methods: {
        ...mapMutations([SET_SEARCH_QUERY]),
        ...mapActions([FETCH_SEARCH_LIST]),
    },

    components: {
        Card,
    },
};
</script>
