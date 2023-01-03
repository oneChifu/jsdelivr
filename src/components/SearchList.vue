<template>
    <div>
        <!-- searchLoading - {{ searchLoading }} -->
        <!-- <pre>{{ searchList }}</pre> -->

        <!-- "nbHits": 90198,
        "page": 0,
        "nbPages": 100,
        "hitsPerPage": 10,
        "exhaustiveNbHits": false,
        "exhaustiveTypo": true,
        "exhaustive": {
          "nbHits": false,
          "typo": true
        },
        "query": "vue",
        "params": "query=vue&page=0&hitsPerPage=10&attributesToHighlight=%5B%5D&optionalFacetFilters=%5B%22_searchInternal.popularAlternativeNames%3Avue%22%5D",
        "processingTimeMS": 44,
        "processingTimingsMS": {
          "afterFetch": {
            "total": 1
          },
          "fetch": {
            "scanning": 42,
            "total": 42
          },
          "request": {
            "roundTrip": 42
          },
          "total": 44
        },
        "serverTimeMS": 45 -->

        <div v-if="searchLoading">loading ...</div>

        <template v-if="isSearchList">
            <v-card
                v-for="hit in searchList.hits"
                :key="hit.name"
                class="mt-2 mb-5 pb-3"
                outlined
            >
                <v-card-title class="text-h5 mb-1">
                    <router-link :to="{ path: `package/npm/${hit.name}` }">
                        {{ hit.name }}
                    </router-link>
                </v-card-title>
                <v-card-text>
                    {{ hit.description }}
                </v-card-text>

                <v-card-actions v-if="hit.keywords.length" class="flex-wrap">
                    <v-chip
                        v-for="(keyword, index) in hit.keywords"
                        :key="index"
                        class="mr-2 mb-2"
                        label
                        link
                    >
                        {{ keyword }}
                    </v-chip>
                </v-card-actions>

                <v-card-actions>
                    <v-avatar size="30" class="mr-2">
                        <img :src="hit.lastPublisher.avatar" />
                    </v-avatar>
                    <a :href="hit.lastPublisher.link" target="_blank">
                        <b>{{ hit.lastPublisher.name }}</b>
                    </a>
                    <i class="ml-2">• published {{ hit.version }}</i>
                    <i class="ml-2"> • {{ hit.modified | moment('from') }} </i>
                </v-card-actions>

                <!-- <pre>{{ hit }}</pre> -->
            </v-card>

            <v-pagination
                v-model="page"
                :length="pages"
                :total-visible="5"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
            ></v-pagination>
        </template>

        <h3 v-else-if="!searchLoading && !isSearchList">No packages</h3>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import {
    GET_SEARCH_LOADING,
    GET_SEARCH_QUERY,
    GET_SEARCH_LIST,
} from '@/store/getters.type';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';

export default {
    name: 'SearchListComponent',

    data: () => ({
        page: 1,
    }),

    computed: {
        ...mapGetters({
            searchLoading: GET_SEARCH_LOADING,
            searchQuery: GET_SEARCH_QUERY,
            searchList: GET_SEARCH_LIST,
        }),

        isSearchList() {
            return Boolean(this.searchList.hits && this.searchList.hits.length);
        },

        pages() {
            return this.searchList.nbPages || 1;
        },
    },

    watch: {
        page: {
            handler(page) {
                if (page) {
                    if (Number(page) <= 1) {
                        page = undefined;
                    }

                    this.$router
                        .replace({
                            query: { ...this.$route.query, page },
                        })
                        .catch(() => {});
                }
            },
        },
        '$route.query.page': {
            handler(page) {
                if (page) {
                    this.page = Number(page);

                    if (this.page <= 1) {
                        this.$router
                            .replace({
                                query: {
                                    ...this.$route.query,
                                    page: undefined,
                                },
                            })
                            .catch(() => {});
                    }
                }

                console.log('WATCH PAGE ROUTE', page);
            },
            immediate: true,
        },
    },

    methods: {
        ...mapMutations([SET_SEARCH_QUERY]),
        ...mapActions([FETCH_SEARCH_LIST]),
    },
};
</script>

<style></style>
