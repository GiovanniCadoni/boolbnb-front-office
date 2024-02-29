<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav class="navbar bg-light py-2">
        <div class="container">
            <div class="row w-100 align-items-center">
                <div class="col-2">
                    <a class="ms_red d-flex align-items-center navbar-brand fw-bold fs-4" href="#">
                        <img src="../assets/img/image_5.jpg" alt="">
                        BoolBnB
                    </a>
                </div>
                <div class="col-10">
                    <div class="row">
                        <div class="col">
                            <ul class="navbar-nav d-flex flex-row gap-4">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'about-us' }" class="nav-link">About Us</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col nav-item d-flex flex-row justify-content-end px-0">
                            <a class="ms_btn-login btn btn-danger" href="http://127.0.0.1:8000/login">Accedi</a>
                            <a class="ms_btn-sign btn btn-danger" href="http://127.0.0.1:8000/register">Registrati</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_red {
    color: $secondary;
}

.ms_btn-login {
    background-color: $secondary;
    border-radius: 25px;
    padding: 5px 25px;
}

.ms_btn-sign {
    color: black;
    background-color: white;
    border-radius: 25px;
    border: 1px solid black;
    padding: 5px 25px;
    margin-left: 15px;
}
</style>