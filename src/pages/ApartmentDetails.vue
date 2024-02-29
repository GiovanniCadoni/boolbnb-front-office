<script>
import axios from 'axios';
import Map from '../components/Map.vue';
import { Navigation, Pagination, Mousewheel, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            curApartment: '',
            loading: false,
            lat: '',
            lon: '',
        };
    },
    name: 'App',
    components: { Map, Swiper, SwiperSlide },

    setup() {
        const onSwiper = (swiper) => {
        //   console.log(swiper);
        };
        const onSlideChange = () => {
        //   console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Mousewheel, A11y, Autoplay],
        };
    },

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
            });
    },
}
</script>

<template>
    <div class="container py-5">
        <h2 class="fw-bold">{{ curApartment.title }}</h2>
        <p class="text-secondary fst-italic">A partire da <span class="text-success">{{ curApartment.price }}$</span> a notte</p>

        <div class="swiper-container">
            <h3 class="mt-4">Foto appartamento ({{ curApartment.images.length }}) </h3>
            <swiper
                :modules="modules"
                :slides-per-view="3"
                :space-between="100"
                :loop="true"
                navigation
                :pagination="{ clickable: true }"
                :mousewheel="{ enabled: true }"
                :autoplay="{delay: 3000}"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
        
                <swiper-slide v-for="image in curApartment.images">
                    <img :src="`${baseUrl}/storage/${image.image_path}`" alt="">
                </swiper-slide>
        
            </swiper>

        </div>

        

        <h3 class="mt-4">Dove trovarci</h3>

        <div v-if="!loading">
            <Map :latitude="lat" :longitude="lon" />
        </div>
        <!-- Services -->
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
    .swiper-container{
        width: 100%;
        margin: 2.5rem auto;

        .swiper{
            display: flex;
            justify-content: center;
            // width: 1145px;
            width: calc((315px * 3) + (100px * 2));

            .swiper-wrapper{
            width: 100%;

                .swiper-slide:active{
                    filter: sepia(1);
                }
            }
        }


        img{
            width: 315px;
            height: 350px;
            border-radius: 25px;
        }

        
    }

    #popup-block{
        background-color: white;
        box-shadow: 0 0 10px 5px rgb(0, 0, 0, 0.5);
        padding: 0 1rem;
        width: 20rem;
        height: 20rem;
        z-index: 9999;
        position: absolute;
        top: 40vh;
        right: 30vw;
        
        i{
            position: relative;
            top: 0.5rem;
            left: 17rem;
            color: red;
            cursor: pointer;
        }
    }
</style>