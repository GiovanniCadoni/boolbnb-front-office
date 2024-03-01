<script>
import axios from 'axios'

export default {
    data(){
        return {
            baseUrl    : 'http://127.0.0.1:8000',
            address : '',
            apartments: [],
            errorMessage: '',
            loading: false,
        }
    },
    methods: {     
        searchByAddress() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/apartments`, {
                params: {
                    address: this.address
                }
            }).then((resp) => {
                if(resp.data.success == false){
                    this.errorMessage = resp.data.message
                } else if(resp.data.success == true && resp.data.results.data.length == 0){
                    this.errorMessage = 'Nessun appartamento trovato'
                }else {
                    this.apartments = resp.data.results.data
                    this.$router.push({
                         path: 'research',
                         query: {
                             apartmentsTest: this.address
                         }
                    });
                }
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>

<template>
    <div class="background">
        <div class="container">
            <h1 class="text-start title pt-5">Scegli la <strong class="evidenced px-3">Destinazione</strong><br> e parti <br> per il tuo <strong class="evidenced px-3">Viaggio</strong></h1>
        </div>
        <div class="ms_container d-flex justify-content-center align-items-center gap-3 py-2">
            <h4 class="d-none d-lg-block m-0">Inizia qui la tua ricerca</h4>
            <input class="form-width form-control form-control rounded-4 ms-2" type="text" name="search-bar" id="search-bar" placeholder="Cerca..." v-model.trim="address" @keypress.enter="searchByAddress()">
            <!-- <button class="btn btn-primary px-4" @click="searchByAddress()"><i class="fa-solid fa-magnifying-glass"></i></button> -->
            <button class="btn rounded-4 btn-sm button-red d-lg-none px-4" @click="searchByAddress()"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn rounded-4 d-none d-lg-block button-red px-4" @click="searchByAddress()"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.background {
    background-image: url('../assets/img/jumbatron.jpg');
    height: 350px;
    position: relative;

    .ms_container {
        width: 60%;
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        border-radius: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.261);
        background-color: rgb(240, 240, 240);
        // background-color: white;
    }
}

.title{
    color: white;
    letter-spacing: -3px;
    margin-bottom: 10px;
    font-size: 3rem;
    .evidenced {
        color: #d50703;
        background-color: white;
        border-radius: 20px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;

    }
}

.button-red {
    background-color: $secondary;
    color: white;
}

.button-red:hover {
        color: black;
        background-color: transparent;
        border-color: $secondary;
    }

.form-width {
    width: 40%;
}

@media screen and (max-width: 576px) {
    .form-width {
        width: 100%;
    }
}

</style>