<template>
    <v-app-bar absolute elevation="0" dark app class="mb-5">
        <v-container class="pa-0 d-flex align-content-center align-center">
            <v-toolbar-title style="width: 50%">
                <router-link to="/"><b>JSDelivr</b></router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div style="width: 100%">
                <Search />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import Search from '@/components/Search';

export default {
    name: 'HeaderComponent',

    components: {
        Search,
    },
};
</script>

<style></style>
