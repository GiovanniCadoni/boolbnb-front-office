<script>
export default {
    props: {
        sponsored: Object,
    },
    data() {
        return {
            name: this.sponsored.title,
            location: this.sponsored.address,
            baseUrl: "http://127.0.0.1:8000",
        }
    },
}
</script>

<template>
    <div class="d-flex flex-column justify-content-between p-2 h-100 rounded-4 g-3 my-card">
        <div class="mb-2">
            <img v-if="this.sponsored.images != '' " class="rounded-4" :src="`${baseUrl}/storage/${this.sponsored.images[0].image_path}`" alt="">
            <img v-else class="rounded-4" src="../assets/img/missing-image.png" alt="">
            <span></span>
        </div>
        <div>
            <div>
                <p class="my-text-black m-0 ms-1">{{ name }}</p>
            </div>
            <div>
                <p class="my-text-grey mb-1 ms-1">{{ location }}</p>
            </div>
            <div class="d-flex justify-content-between">
                <h6 class="my-text-black ms-1 mb-1">Starting from</h6>
                <i class="fa-solid fa-chevron-right fa-fade my-text-black me-1"></i>
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
    width: 300px;
    transition: transform 0.5s ease;
}

.my-text-black {
    color: $text-black;
}

.my-text-grey {
    color: $text-grey;
    font-size: 0.9rem;
}

.my-card:hover img {
    transform: scale(.95);
}
</style>