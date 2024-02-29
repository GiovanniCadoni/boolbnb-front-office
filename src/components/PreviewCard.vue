<script>

export default {
    props: {
        apartment: Object,
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
        };
    },
    methods:{
        // getDetails(currentSlug){
        //     return `research/${currentSlug}`
        // }
    }
}
</script>

<template>
    <div class="d-flex justify-content-start rounded-4 p-3 my-card w-75">
        <div class="">
            <img v-if="this.apartment.images != '' " class="rounded-4 like" :src="`${baseUrl}/storage/${this.apartment.images[0].image_path}`" alt="">
            <img v-else class="rounded-4 like" src="../assets/img/missing-image.png" alt="">
        </div>
        <div class="d-flex justify-content-between w-100">
            <div class="ps-3">
                <div>
                    <h4 class="my-text-black m-0">{{ this.apartment.title }}</h4>
                </div>
                <div class="py-2">
                    <p class="my-text-grey mb-1">{{ this.apartment.address }}</p>
                </div>
                <div class="icon-grey">
                    <span><i class="fa-solid fa-bed"></i> {{ this.apartment.beds_number }}</span>
                    <span class="px-2"><i class="fa-solid fa-minus fa-rotate-90 fa-lg"></i></span>
                    <span><i class="fa-solid fa-bath"></i> {{ this.apartment.bathrooms_number }}</span>
                    <span class="px-2"><i class="fa-solid fa-minus fa-rotate-90 fa-lg"></i></span>
                    <span><i class="fa-solid fa-ruler-combined"></i> {{ this.apartment.dimension_mq }} m²</span>
                </div>
            </div>
            <div class="d-flex align-items-end">
                <div>
                    <h4 class="my-text-black"> {{this.apartment.price}} per notte</h4>
                    <router-link :to="{name: 'apartment-details', params:{slug: this.apartment.slug}}">
                        <button type="button" class="button-red rounded-5 me-4 mt-3">Scopri di più</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.my-card {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    width: fit-content;
}

img {
    max-width: 200px;
}

.my-text-black {
    color: $text-black;
}

.my-text-grey {
    color: $text-grey;
    font-size: 0.9rem;
}

.icon-grey {
    color: $icon-grey;
}

.button-red {
    background-color: $secondary;
    padding: .4rem 1rem;
    border-color: transparent;
    color: $primary;
}

.button-red:hover {
        color: black;
        background-color: transparent;
        border-color: $secondary;
    }
</style>