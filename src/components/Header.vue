<template>
    <v-app-bar
        app
        absolute
        elevation="0"
        :height="isSearchQuery ? 60 : 100"
        :dark="isSearchQuery"
        :class="[
            'header',
            {
                header__center: !isSearchQuery,
            },
        ]"
    >
        <v-container>
            <v-toolbar-title>
                <router-link to="/"><b>JSDelivr</b></router-link>
            </v-toolbar-title>

            <div class="header_search">
                <SearchInput />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_SEARCH_QUERY } from '@/store/getters.type';
import SearchInput from '@/components/SearchInput';

export default {
    name: 'HeaderComponent',

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
        }),

        isSearchQuery() {
            return Boolean(this.searchQuery || this.$route.name !== 'home');
        },
    },

    components: {
        SearchInput,
    },
};
</script>

<style lang="scss">
@import '@/scss/header.scss';
</style>
