<template>
    <v-snackbar v-model="showSnackbar" :color="color">
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                :timeout="timeout"
                v-bind="attrs"
                @click="showSnackbar = false"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'SnackbarComponent',

    data: () => ({
        showSnackbar: false,
        color: '',
        timeout: null,
        text: '',
    }),

    methods: {
        show(data) {
            const { color, timeout, text } = data;

            this.color = color || 'success';
            this.timeout = timeout || 2000;
            this.text = text;
            this.showSnackbar = true;
        },
    },
};
</script>

<style></style>
