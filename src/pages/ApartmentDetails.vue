<script>
import axios from 'axios';
import Map from '../components/Map.vue';
import { store } from "../store";

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            curApartment: '',
            loading: false,
            lat: '',
            lon: '',
            store,
        };
    },
    name: 'App',
    components: { Map },

    created() {

        this.loading = true;
        axios.get(`${this.baseUrl}/api/apartment/research/${this.$route.params.slug}`)
            .then((resp) => {
                this.curApartment = resp.data.results;
                this.lat = resp.data.results.latitude;
                this.lon = resp.data.results.longitude;
            })
            .finally(() => {
                this.loading = false;
                this.store.contact_apartment_id = this.curApartment.id;
            }); 
            
    },
}
</script>

<template>
    <div class="container py-5">
        <h2 class="fw-bold">{{ curApartment.title }}</h2>
        <p class="text-secondary fst-italic">A partire da <span class="text-success">{{ curApartment.price }}$</span> a notte</p>
        <!-- Images -->
        <div v-if="!loading">
            <Map :latitude="lat" :longitude="lon" />
        </div>
        <!-- Services -->

        <!-- contact button -->
        <router-link :to="{name: 'contact'}">
            <button type="button" class="button-red rounded-5 me-4 mt-3" @click="store.contact_apartment_id = curApartment.id">Contattaci</button>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
</style>