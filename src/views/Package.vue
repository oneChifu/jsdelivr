<template>
    <v-container>
        <v-row v-if="pkg.name" class="pt-5">
            <v-col cols="12" class="col-md-8">
                <div class="d-flex align-center">
                    <div class="d-none d-sm-block">
                        <v-avatar
                            v-if="pkg.owner && pkg.owner.avatar"
                            size="60"
                            class="mr-2"
                        >
                            <img :src="pkg.owner.avatar" />
                        </v-avatar>
                    </div>
                    <div>
                        <h1 class="d-inline-block mr-2">{{ pkg.name }}</h1>
                        <v-badge v-if="pkg.deprecated" inline color="error">
                            <template #badge>deprecated</template>
                        </v-badge>

                        <div v-if="pkg.description" class="subtitle">
                            {{ pkg.description }}
                        </div>
                    </div>
                </div>

                <v-card
                    v-if="pkg.readme"
                    outlined
                    class="mt-5 py-3 px-5"
                    style="overflow: auto"
                >
                    <v-card-title class="pa-0 text-subtitle-2"
                        >README.md</v-card-title
                    >
                    <v-divider class="my-2" />
                    <vue-markdown class="text--primary">
                        {{ pkg.readme }}
                    </vue-markdown>
                </v-card>
            </v-col>

            <v-col cols="12" class="col-md-4">
                <v-row no-gutters>
                    <v-col cols="12">
                        <div class="subtitle-1">Install</div>
                        <v-chip
                            class="pkg_copy-clipboard mb-3"
                            label
                            outlined
                            large
                            text-color="black"
                            @click="onCopyClipboard(`npm install ${pkg.name}`)"
                        >
                            npm install {{ pkg.name }}
                            <v-icon right>mdi-content-copy</v-icon>
                        </v-chip>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col cols="12">
                        <v-btn
                            :href="[pkg.name, pkg.version] | packageDownloadUrl"
                            class="mb-5"
                            dark
                            depressed
                            x-large
                            block
                        >
                            <v-icon left large>mdi-download</v-icon>
                            Download
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row v-if="pkg.repository" no-gutters>
                    <v-col cols="12">
                        <div class="subtitle-1">Repository</div>
                        <div class="d-flex">
                            <v-icon color="black" left size="24">
                                mdi-github
                            </v-icon>
                            <a
                                :href="pkg.repository.url"
                                target="_blank"
                                style="word-break: break-all"
                            >
                                <b>{{ pkg.repository.url }}</b>
                            </a>
                        </div>
                    </v-col>
                </v-row>

                <v-divider v-if="pkg.homepage" class="my-3" />

                <v-row v-if="pkg.homepage" no-gutters>
                    <v-col cols="12">
                        <div class="subtitle-1">Homepage</div>
                        <div class="d-flex">
                            <v-icon color="black" left size="24">
                                mdi-link-variant
                            </v-icon>
                            <a
                                :href="pkg.homepage"
                                target="_blank"
                                style="word-break: break-all"
                            >
                                <b>{{ pkg.homepage }}</b>
                            </a>
                        </div>
                    </v-col>
                </v-row>

                <v-divider v-if="pkg.lastPublisher" class="my-3" />

                <v-row v-if="pkg.lastPublisher" no-gutters>
                    <v-col cols="12">
                        <div class="subtitle-1">Last publisher</div>
                        <div>
                            <a :href="pkg.lastPublisher.link" target="_blank">
                                <v-avatar
                                    v-if="pkg.lastPublisher.avatar"
                                    size="24"
                                    class="mr-2"
                                >
                                    <img :src="pkg.lastPublisher.avatar" />
                                </v-avatar>

                                <b>{{ pkg.lastPublisher.name }}</b>
                            </a>
                            <small>
                                • {{ pkg.modified | moment('from') }}
                            </small>
                        </div>
                    </v-col>
                </v-row>

                <v-divider v-if="pkg.changelogFilename" class="my-3" />

                <v-row v-if="pkg.changelogFilename" no-gutters>
                    <v-col cols="12">
                        <div class="subtitle-1">Changelog</div>
                        <v-icon color="black" left>
                            mdi-file-arrow-left-right-outline
                        </v-icon>
                        <a :href="pkg.changelogFilename" target="_blank">
                            <b>CHANGELOG.md</b>
                        </a>
                    </v-col>
                </v-row>

                <v-divider class="my-3" />

                <v-row no-gutters>
                    <v-col cols="6">
                        <div class="subtitle-1">Version</div>
                        <b>{{ pkg.version }}</b>
                    </v-col>

                    <v-col cols="6">
                        <div class="subtitle-1">License</div>
                        <b>{{ pkg.license }}</b>
                    </v-col>
                </v-row>

                <v-divider v-if="pkg.keywords" class="my-3" />

                <v-chip-group v-if="pkg.keywords" column>
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import copyClipboard from '@/utils/copy-clipboard';
import VueMarkdown from 'vue-markdown/src/VueMarkdown';
import { mapActions, mapGetters } from 'vuex';
import { ADD_SNACKBAR, FETCH_PACKAGE_DATA } from '@/store/actions.type';
import { GET_PACKAGE_DATA } from '@/store/getters.type';

export default {
    name: 'PackagePage',

    data: () => ({
        loading: true,
    }),

    computed: {
        ...mapGetters({
            pkg: GET_PACKAGE_DATA,
        }),
    },

    async created() {
        this.loading = true;
        await this[FETCH_PACKAGE_DATA]({
            name: this.$route.params.name.trim(),
        });
        this.loading = false;
    },

    mounted() {
        setTimeout(() => {
            this.$vuetify.goTo(0);
        }, 150);
    },

    methods: {
        ...mapActions([FETCH_PACKAGE_DATA, ADD_SNACKBAR]),

        onCopyClipboard(text) {
            copyClipboard(text);
            this[ADD_SNACKBAR]({ text: 'Copied to clipboard!' });
        },
    },

    components: {
        VueMarkdown,
    },
};
</script>

<style lang="scss">
.pkg {
    &_copy-clipboard.v-chip {
        width: 100%;

        .v-chip__content {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
}
</style>
