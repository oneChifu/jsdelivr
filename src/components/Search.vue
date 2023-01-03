<template>
    <div>
        <v-text-field
            placeholder="search npm packages"
            solo
            flat
            light
            hide-details
            prepend-inner-icon="mdi-magnify"
            maxlength="100"
            :value.sync="searchQuery"
            @input="onInput"
        ></v-text-field>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FETCH_SEARCH_LIST } from '@/store/actions.type';
import { SET_SEARCH_QUERY } from '@/store/mutations.type';
import { GET_SEARCH_QUERY } from '@/store/getters.type';

export default {
    name: 'SearchComponent',

    computed: {
        ...mapGetters({
            searchQuery: GET_SEARCH_QUERY,
        }),
    },

    // created() {
    //     this[SET_SEARCH_QUERY](this.$route.query.query);
    // },

    watch: {
        '$route.query.query': {
            handler(query) {
                this[SET_SEARCH_QUERY](query);
            },
            immediate: true,
        },
    },

    methods: {
        ...mapMutations([SET_SEARCH_QUERY]),
        ...mapActions([FETCH_SEARCH_LIST]),

        onInput(query) {
            this[SET_SEARCH_QUERY](query);
        },
    },
};
</script>

<style></style>
