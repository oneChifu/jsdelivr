<template>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                :timeout="snackbar.timeout"
                v-bind="attrs"
                @click="hideSnackbar"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { SET_SNACKBAR } from '@/store/mutations.type';
import { GET_SNACKBAR } from '@/store/getters.type';

export default {
    name: 'SnackbarComponent',

    data: () => ({
        showSnackbar: false,
        color: '',
        timeout: null,
        text: '',
    }),

    computed: {
        ...mapGetters({
            snackbar: GET_SNACKBAR,
        }),
    },

    methods: {
        ...mapMutations([SET_SNACKBAR]),

        hideSnackbar() {
            this[SET_SNACKBAR]({ show: false });
        },
    },
};
</script>

<style></style>
