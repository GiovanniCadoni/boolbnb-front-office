<script>

export default {
    props: {
        apartament: Object,
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            name: this.apartament.title,
            location: this.apartament.address,
            bedsNumber: this.apartment.beds_number,
            bathroomsNumber: this.apartment.bathrooms_number,
            dimensionMq: this.apartment.dimension_mq,
            price: this.apartment.price,
            img: this.sponsored.images.image_path,
        };
    },
}
</script>

<template>
    <div class="d-flex justify-content-start rounded-4 p-3 my-card w-75">
        <div class="">
            <img class="rounded-4" src="`${baseUrl}/storage/${img}`"
                alt="">
        </div>
        <div class="d-flex justify-content-between w-100">
            <div class="ps-3">
                <div>
                    <h4 class="my-text-black m-0">{{ name }}</h4>
                </div>
                <div class="py-2">
                    <p class="my-text-grey mb-1">{{ location }}</p>
                </div>
                <div class="icon-grey">
                    <span><i class="fa-solid fa-bed"></i> {{ bedsNumber }}</span>
                    <span class="px-2"><i class="fa-solid fa-minus fa-rotate-90 fa-lg"></i></span>
                    <span><i class="fa-solid fa-bath"></i> {{ bathroomsNumber }}</span>
                    <span class="px-2"><i class="fa-solid fa-minus fa-rotate-90 fa-lg"></i></span>
                    <span><i class="fa-solid fa-ruler-combined"></i> {{ dimensionMq }} m²</span>
                </div>
            </div>
            <div class="d-flex align-items-end">
                <div>
                    <h4 class="my-text-black">${{price}} per notte</h4>
                    <button type="button" class="button-red rounded-5 me-4 mt-3">Scopri di più</button>
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
</style>