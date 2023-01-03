<template>
    <v-footer padless dark class="mt-3">
        <v-container class="text-center">
            {{ new Date().getFullYear() }} <strong>JSDelivr</strong> — inspired
            by
            <a href="https://www.jsdelivr.com/" target="_blank">jsdelivr.com</a>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style></style>
