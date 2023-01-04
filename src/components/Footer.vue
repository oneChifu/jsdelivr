<template>
    <v-footer padless dark class="mt-3">
        <v-container class="text-center">
            <div>
                {{ new Date().getFullYear() }} <strong>JSDelivr</strong> —
                inspired by
                <a href="https://www.jsdelivr.com/" target="_blank">
                    jsdelivr.com
                </a>
            </div>

            <small>
                Real-time search by
                <a
                    class="search-by"
                    target="_blank"
                    rel="noopener"
                    href="https://www.algolia.com"
                >
                    Algolia
                </a>
            </small>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
footer {
    a {
        color: #fff;
    }
}
</style>
