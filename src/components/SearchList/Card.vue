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
                        <v-btn
                            :href="pkg.repository.url"
                            target="_blank"
                            class="mr-2"
                            outlined
                            tile
                            icon
                            color="grey"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon class="black--text">mdi-github</v-icon>
                        </v-btn>
                    </template>
                    <span>GitHub</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :href="`https://www.npmjs.com/package/${pkg.name}`"
                            target="_blank"
                            class="mr-2"
                            outlined
                            tile
                            icon
                            color="grey"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon class="black--text">mdi-npm</v-icon>
                        </v-btn>
                    </template>
                    <span>NPM</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :href="[pkg.name, pkg.version] | packageDownloadUrl"
                            outlined
                            tile
                            icon
                            color="grey"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon class="black--text">mdi-download</v-icon>
                        </v-btn>
                    </template>
                    <span>Download</span>
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
