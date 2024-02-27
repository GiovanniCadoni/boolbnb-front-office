<script>
import axios from 'axios';
import BaseCard from "../components/BaseCard.vue"

export default {
    data() {
        return {
            baseUrl     : 'http://127.0.0.1:8000',
            apartments  : [],
            services    : [],
            address     : '',
            kmRange     : 20
        };
    },
    components: {
        BaseCard
    },
    created() {
        this.getApartments()
        this.getServices()
        const apartmentsTest = this.$route.query.apartmentsTest;
        this.searchFromOtherPage(apartmentsTest);
    },
    methods: {
        getApartments() {
            axios.get(`${this.baseUrl}/api/apartments`).then((resp) => {
                this.apartments = resp.data.results.data
            })
        },
        getServices() {
            axios.get(`${this.baseUrl}/api/services`).then((resp) => {
                this.services = resp.data.results
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
                }
            }).finally(() => {
                this.loading = false;
            });
        },
        searchFromOtherPage(apartmentsAddress){
            this.address = apartmentsAddress
            this.searchByAddress()
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="row g-0">
            <div class="col-2 px-3 py-4">
                <div class="container">
                    <div class="row flex-column">
                        <div class="col ms_separator py-4">
                            <h4>Indirizzo:</h4>
                            <input class="form-control" type="text" name="search-bar" id="search-bar" placeholder="Cerca..." v-model.trim="address" @keypress.enter="searchByAddress()">
                            <input type="range" id="rangeSlider" class="form-range" v-model="kmRange" min="0" max="50" step="0.5">
                            <label for="rangeSlider" class="sliderValue">Raggio km: {{ kmRange }}</label>
                        </div>
                        <div class="col">
                            <h4>Servizi:</h4>
                            <div v-for="(service, index) in services" class="form-check mb-3">
                                <input type="checkbox" name="" :id="`service-${service.id}`">
                                <label class="ms-3 " :for="`service-${service.id}`">{{ service.name }}</label>
                            </div>    
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="col-10 ms_border px-2 py-4">
                <div class="container ">
                    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 flex-wrap">
                        <div class="col" v-for="(apartment) in apartments">
                            <BaseCard :item="apartment"/>
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

.ms_border {
    border-left: 1px solid rgb(201, 201, 201);
}

</style>