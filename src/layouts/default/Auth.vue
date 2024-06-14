<template>
    <v-app>
        <v-main>
            <v-container fill-height> 
                <router-view :key="$route.path" />
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: 'AuthLayout',
}
</script>