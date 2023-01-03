<template>
    <div v-if="loading || popularList.length">
        <h3>Popular packages</h3>
        <div v-if="loading">loading ...</div>
        <pre>{{ popularList }}</pre>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { FETCH_POPULAR_LIST } from '@/store/actions.type';
import { GET_POPULAR_LIST } from '@/store/getters.type';

export default {
    name: 'PopularComponent',

    data: () => ({
        loading: true,
    }),

    computed: {
        ...mapGetters({
            popularList: GET_POPULAR_LIST,
        }),
    },

    async created() {
        await this[FETCH_POPULAR_LIST]({ period: 'month', type: 'npm' });
        this.loading = false;
    },

    methods: {
        ...mapActions([FETCH_POPULAR_LIST]),
    },
};
</script>

<style></style>
