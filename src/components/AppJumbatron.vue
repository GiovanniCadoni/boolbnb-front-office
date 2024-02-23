<script>
import axios from 'axios'

export default {
    data(){
        return {
            baseUrl    : 'http://127.0.0.1:8000',
            address : '',
            apartments: []
        }
    },
    methods: {     
        searchByAddress() {
            axios.get(`${this.baseUrl}/api/apartments`, {
                params: {
                    address: this.address
                }
            }).then((resp) => {
                
                this.apartments = resp.data.results.data
                console.log(this.apartments)
            })
        }
    }
}
</script>

<template>
    <div class="background">
        <div class="container">
            <h1 class="text-start title pt-5">Scegli la <strong class="evidenced">Destinazione</strong><br> e parti <br> per il tuo <strong class="evidenced">Viaggio</strong></h1>
        </div>
        <div class="ms_container d-flex justify-content-around p-2">
            <h4 class="d-none d-sm-block">Inizia la tua ricerca</h4>
            <input class="form-width form-control form-control" type="text" name="search-bar" id="search-bar" placeholder="Cerca..." v-model.trim="address" @keypress.enter="searchByAddress()">
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

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

.form-width {
    width: 40%;
}

@media screen and (max-width: 576px) {
    .form-width {
        width: 100%;
    }
}

</style>