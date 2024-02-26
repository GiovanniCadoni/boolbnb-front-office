<script>
import axios from 'axios';
import HighlyRatedCard from "../components/HighlyRatedCard.vue"

export default {
    data() {
        return {
            baseUrl     : 'http://127.0.0.1:8000',
            apartments  : [],
            services    : []
        };
    },
    components: {
        HighlyRatedCard
    },
    created() {
        this.getApartments()
        this.getServices()
    },
    methods: {
        getApartments() {
            axios.get(`${this.baseUrl}/api/apartments`).then((resp) => {
                this.apartments = resp.data.results.data
                console.log(this.apartments);
            })
        },
        getServices() {
            axios.get(`${this.baseUrl}/api/services`).then((resp) => {

                this.services = resp.data.results
                console.log(this.services);
            })
        },
        searchByAddress() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/apartments`, {
                params: {
                    address: this.address
                }
            }).then((resp) => {
                if (resp.data.success == false) {
                    this.errorMessage = resp.data.message
                } else if (resp.data.success == true && resp.data.results.data.length == 0) {
                    this.errorMessage = 'Nessun appartamento trovato'
                } else {
                    this.apartments = resp.data.results.data
                    console.log(this.apartments)
                }
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="row g-0">
            <div class="col-2 px-0">
                FILTRI
            </div>
            <div class="col px-0 py-5">
                <div class="container">
                    <div class="row gy-5 row-cols-4 flex-wrap">
                        <div class="col" v-for="(apartment) in apartments">
                            <HighlyRatedCard :sponsored="apartment"/>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    height: calc(100vh - 258px);
    width: 100%;
    overflow-y: auto;
}

</style>