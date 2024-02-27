<script>
import axios from "axios";

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

    methods: {
        searchByClick(index) {
            axios.get(this.baseUrl + '/api/apartments?address=', {
                params: {
                    address: this.locations[index].name,
                }
            }).then((resp) => {

                if (resp.data.success == false) {
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
    <div class="container py-5">
        <h3 class="mb-3">Top Rated Locations</h3>
        <div class="row row-cols-4">
            <div class="col">
                <img class="big-image" @click="searchByClick(0)" :src="this.locations[0].image" alt="">
            </div>
            <div class="col">
                <div class="container">
                    <div class="row flex-column ms_gap">
                        <div class="col">
                            <img class="mid-image" @click="searchByClick(1)" :src="this.locations[1].image" alt="">
                        </div>
                        <div class="col">
                            <img class="small-image" @click="searchByClick(2)" :src="this.locations[2].image" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col h-100">
                <img class="big-image" @click="searchByClick(3)" :src="this.locations[3].image" alt="">
            </div>
            <div class="col h-100">
                <div class="container">
                    <div class="row flex-column ms_gap">
                        <div class="col">
                            <img class="small-image" @click="searchByClick(4)" :src="this.locations[4].image" alt="">
                        </div>
                        <div class="col">
                            <img class="mid-image" @click="searchByClick(5)" :src="this.locations[5].image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    <!-- <div class="w-100 my-0 mx-auto d-flex justify-content-center ">
            <div class="row location-row">
                <div v-for="(location, locationIndex) in locations" :key="locationIndex"
                    class="col-4 mb-3 d-flex justify-content-center">
                    <router-link :to="{ name: 'research' }" class="nav-link">
                    <LocationCard :propName="location.name" :propImage="location.image" v-model.trim="address"
                        @click="searchByClick(locationIndex)" />
                    </router-link>
                </div>
            </div>
        </div> -->
</template>

<style lang="scss" scoped>
// .location-row {
//     overflow-y: auto;
// }
.ms_gap{
    gap: 2.5rem;
}

.big-image{
    height: 300px;
    width: 100%;
}

.small-image{
    height: calc(125px - 1.25rem);
    width: 100%;
}

.mid-image{
    height: calc(175px - 1.25rem);
    width: 100%;
}

[class*="-image"]{
    border-radius: 25px;
    object-fit: cover;

    cursor: pointer;
}
</style>