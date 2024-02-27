<template>
    <h2>{{ apartment.title }}</h2>
    <p>A partire da: {{ apartment.price }}€ a notte</p>
    <!-- Images -->
    <!-- Map -->
    <!-- Services -->
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            baseUrl: 'http://127.0.0.1:8000',
            apartment: "",
        };
    },

    mounted(){
        axios.get(`${this.baseUrl}/api/apartments/${this.$route.params.slug}`)
        .then((resp) => {
            this.apartment = resp.data.results.data;
        });
    },
}
</script>
<style lang="scss" scoped>
    
</style>