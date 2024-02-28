<script>
import axios from 'axios';
import BaseCard from "../components/BaseCard.vue";

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apartments: [],
            services: [],
            address: '',
            kmRange: 20,
            curPage: 1,
            lastPage: 1,
            total: 0,
            selectedServices: [],
            service_filter: []
        };
    },
    components: {
        BaseCard
    },
    created() {
        // this.searchByAddress
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
        searchFromOtherPage(apartmentsAddress) {
            this.address = apartmentsAddress
            this.searchByFilter()
        },
        searchByFilter(pageNum) {
            this.loading = true;
            const paramsToSend = {
                page: pageNum
            }
            if (this.selectedServices.length > 0) {
                paramsToSend.services = this.selectedServices
            }
            if (this.address !== '') {
                paramsToSend.address = this.address
            }
            if(this.kmRange){
                paramsToSend.range = this.kmRange
            }
            axios.get(`${this.baseUrl}/api/apartments`, {
                params: paramsToSend
            }).then((resp) => {
                this.apartments = []
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
        checkboxFilter(event) {
            if (event.target.checked) {
                this.selectedServices.push(event.target.id)
            } else {
                const id = event.target.id
                for (let data of this.selectedServices) {
                    if (data == id) {
                        const index = this.selectedServices.indexOf(data)
                        this.selectedServices.splice(index, 1)
                    }
                }
            }
        },
        getFilterData() {
            const pars = this.selectedServices.map((str) => {
                return parseInt(str)
            })

            const data = {
                services: pars
            }
            axios.post(`${this.baseUrl}/api/apartments/service_filter`, data, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }).then((resp) => {
                this.service_filter = resp.data
                this.searchByFilter(1)
            })
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
                        <h4>Indirizzo:</h4>
                        <input class="form-control" type="text" name="search-bar" id="search-bar" placeholder="Cerca..."
                            v-model.trim="address">
                        <input type="range" id="rangeSlider" class="form-range" v-model="kmRange" min="0" max="50"
                            step="0.5">
                        <label for="rangeSlider" class="sliderValue">Raggio km: {{ kmRange }}</label>
                        <h4>Servizi:</h4>
                        <div v-for="(service, index) in services" class="form-check mb-3">
                            <input type="checkbox" :name="service.id" :value="service.id" :id="`${service.id}`"
                                v-model="selectedServices" @click="checkboxFilter($event)" :checked="service.checked">
                            <label class="ms-3 " :for="`${service.id}`">{{ service.name }}</label>
                        </div>

                        <button class="btn btn-primary" @click="getFilterData()">Filtra</button>
                    </div>
                </div>


            </div>
            <div class="col-10 ms_border px-2 py-4">
                <div class="container ">
                    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 flex-wrap">
                        <div class="col" v-for="(apartment) in apartments">
                            <BaseCard :item="apartment" />
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