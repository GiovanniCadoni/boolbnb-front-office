<template>
    <div class="my-card position-relative top-0 start-0">
            <img :src="propImage" alt="" />
            <span class="card-name position-absolute border border-dark rounded-pill bg-light">{{ propName }}</span>
    </div>
</template>
<script>
export default {
    props:{
        propName: String,
        propImage: String,
    },
    data(){
        return{
            
        };
    },
}
</script>
<style lang="scss">
    .my-card{

        img{
            height: 350px;
            width: 315px;
        }

        .card-name{
            bottom: 10%;
            left: 0;
            text-align: center;
            margin-left: 1rem;
            padding: 2px 4px;
        }
    }
</style>