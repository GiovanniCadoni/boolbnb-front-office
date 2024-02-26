<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <section class="bg-light">
        <div class="container py-3">
            <div class="row justify-content-between">
                <div class="col-6 d-flex flex-row align-items-center">
                    <div class="col-12">
                        <h4 class="ms_red fw-bold">BoolBnB</h4>
                        <p>Your ultimate booking experince since 1997!</p>
                        <p>BoolBnB ©</p>
                    </div>
                </div>
                <div class="col-6 d-flex flex-row justify-content-end align-items-center">
                    <ul>
                        <li class="fw-bold"><a href="">Support</a></li>
                        <li><a href="">How it works</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">TomTom</a></li>
                        <li><a href="">BrainTree</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_red {
    color: $secondary;
}

ul {
    text-align: end;

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
}</style>