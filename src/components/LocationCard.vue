<template>
    <div class="my-card position-relative top-0 start-0">
            <img :src="propImage" alt="" />
            <span class="card-name position-absolute border rounded-pill bg-light">{{ propName }}</span>
    </div>
</template>
<script>
export default {
    props:{
        propName: String,
        propImage: String,
    },
    methods:{
        // handleClick(){
        //     this.$emit('location-clicked');
        // }
    },
    data(){
        return{
            
        };
    },

    methods: {
        
    }
}
</script>
<style lang="scss">
    .my-card{

        height: 350px;
        width: 315px;
        border-radius: 50px;
        // border: 1px solid black;
        display: flex;
        cursor: pointer;
        

            img{
                border-radius: 50px;
                object-fit: cover;
                filter: grayscale(1);
            }

        .card-name{
            bottom: 10%;
            left: 0;
            text-align: center;
            margin-left: 1rem;
            padding: 2px 4px;
        }
    }

    .my-card:hover{
        
        img{
            filter: grayscale(0);
            transition: all 1s;
        }

        .card-name{
            color: red;
            transition: all 1s;
        }
    }
</style>