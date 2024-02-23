<script>
import AppJumbatron from '../components/AppJumbatron.vue';
import AppMain from '../components/AppMain.vue';

    export default {
    data() {
        return {

        };
    },
    components: { AppMain, AppJumbatron }
}
</script>

<template>
    <!-- <h2>Questa è la Homepage</h2> -->
    <AppJumbatron />
    <AppMain />
</template>

<style lang="scss" scoped>
</style>