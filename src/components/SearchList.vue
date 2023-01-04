<template>
    <div>
        <template v-if="searchList.hits">
            <v-card
                v-for="pkg in searchList.hits"
                :key="pkg.name"
                class="mt-2 mb-5"
                outlined
            >
                <v-card-title
                    class="text-h5 d-flex flex-column align-start flex-sm-row justify-sm-space-between"
                >
                    <div>
                        <router-link
                            :to="{ path: `package/npm/${pkg.name}` }"
                            class="d-flex align-center"
                        >
                            <v-avatar
                                v-if="pkg.owner.avatar"
                                size="40"
                                class="mr-2"
                            >
                                <img :src="pkg.owner.avatar" />
                            </v-avatar>

                            <span class="mr-2">{{ pkg.name }}</span>

                            <v-badge v-if="pkg.deprecated" inline color="error">
                                <template #badge>deprecated</template>
                            </v-badge>

                            <v-badge
                                v-if="searchQuery === pkg.name"
                                inline
                                color="primary"
                            >
                                <template #badge>exact match</template>
                            </v-badge>
                        </router-link>
                    </div>

                    <div class="mt-2 mt-sm-0">
                        <v-tooltip v-if="pkg.repository.url" top>
                            <template v-slot:activator="{ on, attrs }">
                                <a
                                    :href="pkg.repository.url"
                                    target="_blank"
                                    class="v-btn v-btn--icon v-btn--outlined v-btn--round v-btn--tile theme--light v-size--default grey--text mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon class="black--text"
                                        >mdi-github</v-icon
                                    >
                                </a>
                            </template>
                            <span>GitHub</span>
                        </v-tooltip>

                        <v-tooltip v-if="pkg.repository.url" top>
                            <template v-slot:activator="{ on, attrs }">
                                <a
                                    :href="`https://www.npmjs.com/package/${pkg.name}`"
                                    target="_blank"
                                    class="v-btn v-btn--icon v-btn--outlined v-btn--round v-btn--tile theme--light v-size--default grey--text"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon class="black--text">mdi-npm</v-icon>
                                </a>
                            </template>
                            <span>NPM</span>
                        </v-tooltip>
                    </div>
                </v-card-title>

                <v-card-text v-if="pkg.description">
                    {{ pkg.description }}
                </v-card-text>

                <div v-if="pkg.keywords.length" class="flex-wrap px-4">
                    <v-chip-group column>
                        <v-chip
                            v-for="(keyword, index) in pkg.keywords"
                            :key="index"
                            class="mr-2 my-1"
                            label
                            link
                            outlined
                        >
                            {{ keyword }}
                        </v-chip>
                    </v-chip-group>
                </div>
            </v-card>

            <v-pagination
                v-model="page"
                :length="pages"
                :total-visible="5"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
            ></v-pagination>
        </template>

        <h2 v-else-if="!searchList && !searchList.loading && !searchList.hits">
            No packages
        </h2>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import { GET_SEARCH_QUERY, GET_SEARCH_LIST } from '@/store/getters.type';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';

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
};
</script>
