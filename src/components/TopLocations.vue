<script>
import axios from "axios";
import LocationCard from './LocationCard.vue';
export default {
    data() {
    return {
        locations: [
                {
                    name:  "Londra",
                    image: "src/assets/img/londra.jpg"
                },

                {
                    name: "Tokyo",
                    image: "src/assets/img/tokyo.jpg"
                },

                {
                    name: "Torino",
                    image: "src/assets/img/torino.jpg"
                },

                {
                    name: "Roma",
                    image: "src/assets/img/roma.jpg"
                },

                {
                    name: "Milano",
                    image: "src/assets/img/milano.jpg"
                },

                {
                    name: "New York",
                    image: "src/assets/img/new_york.jpg"
                },
            ],

        baseUrl: 'http://127.0.0.1:8000',
        apartments: [],
        errorMessage: ''
    };
  },
  components: { LocationCard },

  methods:{
    searchByClick(index) {
        axios.get(this.baseUrl + '/api/apartments?address=', {
                params:{
                    address: this.locations[index].name,
                }
            }).then((resp) => {
                
                if(resp.data.success == false){
                    this.errorMessage = resp.data.message
                } else if(resp.data.success == true && resp.data.results.data.length == 0){
                    this.errorMessage = 'Nessun appartamento trovato'
                } else {
                    this.apartments = resp.data.results.data
                     this.$router.push({
                         path: 'research',
                         query: {
                             apartmentsTest: this.locations[index].name
                         }
                    });
                }
            })

        }
  }
};
</script>
<template>
    <section class="top-locations p-5">
        <h3 class="mb-3">Top Rated Locations</h3>
        <!--<div class="row w-100 d-flex gap-3">
            <div v-for="(location, index) in locations" :key="index" :class="(index % 2) === 0 && index !== 0 ? 'd-none': 'col-2'">
                        <div v-if="(index === 0) || ((index % 3) === 0)">
                            <LocationCard :propName="location.name" :propImage="location.image" />
                        </div>
                        <div v-else-if="(index !== 0)">   && ((index % 3) !== 0) && ((index % 2) !== 0) 
                            <div v-for="(location, index) in locations" :key="index" :class="(index === 0) || ((index % 3) === 0) ? 'd-none' : 'row-6 pb-3'">
                                    <LocationCard :propName="location.name" :propImage="location.image" />
                            </div>
                        </div>
                        <div v-else class="d-none"></div>
            </div>
        </div> -->
        <div class="w-100 my-0 mx-auto d-flex justify-content-center ">
            <div class="row location-row">
                <div v-for="(location, locationIndex) in locations" :key="locationIndex" class="col-4 mb-3 d-flex justify-content-center">
                            <!-- <router-link :to="{ name: 'research' }" class="nav-link"> -->
                                <LocationCard :propName="location.name" :propImage="location.image" v-model.trim="address" @click="searchByClick(locationIndex)" />
                            <!-- </router-link> -->
                        </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .location-row{
        overflow-y: auto;
    }
</style>