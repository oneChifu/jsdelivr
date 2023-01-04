<template>
    <v-app>
        <Header :isSearchQuery="isSearchQuery" />

        <v-main v-if="isSearchQuery">
            <router-view />
        </v-main>

        <Footer v-if="isSearchQuery" />

        <Snackbar />
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_SEARCH_QUERY } from '@/store/getters.type';
import Snackbar from '@/components/Snackbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
    name: 'App',

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
        }),

        isSearchQuery() {
            return Boolean(this.searchQuery || this.$route.name !== 'home');
        },
    },

    components: {
        Snackbar,
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
