<script>
import axios from 'axios';
import BaseCard from "../components/BaseCard.vue"

export default {
    data() {
        return {
            baseUrl     : 'http://127.0.0.1:8000',
            apartments  : [],
            services    : [],
        };
    },
    components: {
        BaseCard
    },
    created() {
        this.getApartments()
        this.getServices()
    },
    mounted(){
        const apartmentsTest = this.$route.query.apartmentsTest;
        console.log("Here:", apartmentsTest);
        this.searchFromOtherPage(apartmentsTest);
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
        },
        searchFromOtherPage(newApartments){
            axios.get(newApartments, {
                params: {
                    address: this.address
                }
            }).then((resp) => {
                this.address = newApartments;
                this.searchByAddress();
            })
        },
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="row g-0">
            <div class="col-2 px-3 py-4">
                <h4>Indirizzo</h4>
                <input class="form-width form-control form-control" type="text" name="search-bar" id="search-bar" placeholder="Cerca..." v-model.trim="address" @keypress.enter="searchByAddress()">
            </div>
            <div class="col-10 px-2 py-4">
                <div class="container">
                    <div class="row gy-4 row-cols-4 flex-wrap">
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
    overflow-y: auto
}

</style>