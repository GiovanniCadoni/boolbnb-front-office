<script>
import axios from "axios";
import HighlyRatedCard from './HighlyRatedCard.vue';

export default {
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            sponsoreds: [],
        };
    },
    created() {
        axios.get(`http://127.0.0.1:8000/api/apartments`, {
            params: {
                address: "Roma"
            }
        }).then((resp) => {
            this.sponsoreds = resp.data.results.data
            console.log(this.sponsoreds)
        })
    },
    components: { HighlyRatedCard }
}
</script>

<template>
    <div class="container py-5">
        <h3 class="pb-4 fw-bold">Highly-rated hotels</h3>
        <div class="row row-cols-6">
            <div class="col" v-for="(sponsored) in sponsoreds">
                <HighlyRatedCard :sponsored="sponsored" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>