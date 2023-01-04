<template>
    <v-card class="mt-2 mb-5" outlined>
        <v-card-title
            v-if="pkg.name"
            class="text-h5 d-flex flex-column align-start flex-sm-row justify-sm-space-between"
        >
            <div>
                <router-link
                    :to="{ path: `package/npm/${pkg.name}` }"
                    class="d-flex align-center"
                >
                    <v-avatar v-if="pkg.owner.avatar" size="40" class="mr-2">
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
                <v-tooltip v-if="pkg.repository && pkg.repository.url" top>
                    <template v-slot:activator="{ on, attrs }">
                        <a
                            :href="pkg.repository.url"
                            target="_blank"
                            class="v-btn v-btn--icon v-btn--outlined v-btn--round v-btn--tile theme--light v-size--default grey--text mr-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon class="black--text">mdi-github</v-icon>
                        </a>
                    </template>
                    <span>GitHub</span>
                </v-tooltip>

                <v-tooltip v-if="pkg.name" top>
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

        <div v-if="pkg.keywords && pkg.keywords.length" class="flex-wrap px-4">
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
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_SEARCH_QUERY } from '@/store/getters.type';

export default {
    name: 'SearchListCardComponent',

    props: {
        pkg: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
        }),
    },
};
</script>
