<script>
import HighlyRatedCard from './HighlyRatedCard.vue';

export default {
    data() {
        return {
            store,
            baseUrl: "http://127.0.0.1:8000",
        };
    },
    computed: {
        
    },
    components: { HighlyRatedCard }
}
</script>

<template>
    <div class="container">
        <h3>Highly-rated hotels</h3>
        <div class="row row-cols-6">
            <div class="col" v-for="(sponsored) in store.sponsored"> <HighlyRatedCard :sponsored="sponsored" /> </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>