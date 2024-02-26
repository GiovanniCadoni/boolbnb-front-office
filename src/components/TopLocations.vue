<template>
    <section class="top-locations d-flex justify-content-between">
        <!--<div class="row w-100 d-flex gap-3">
            <div v-for="(location, index) in locations" :key="index" :class="(index % 2) === 0 && index !== 0 ? 'd-none': 'col-2'">
                        <div v-if="(index === 0) || ((index % 3) === 0)">
                            <LocationCard :propName="location.name" :propImage="location.image" />
                        </div>
                        <div v-else-if="(index !== 0)">   && ((index % 3) !== 0) && ((index % 2) !== 0) 
                            <div v-for="(location, index) in locations" :key="index" :class="(index === 0) || ((index % 3) === 0) ? 'd-none' : 'row-6 pb-3'">
                                    <LocationCard :propName="location.name" :propImage="location.image" />
                            </div>
                        </div>
                        <div v-else class="d-none"></div>
            </div>
        </div> -->

        <div class="row d-flex g-5">
            <div v-for="(location, index) in locations" :key="index" class="col-3">
                        <LocationCard :propName="location.name" :propImage="location.image" />
            </div>
        </div>

        
        
    </section>
</template>
<script>
import axios from "axios";
import LocationCard from './LocationCard.vue';
export default {
    data() {
    return {
        locations: [
                {
                    name:  "Bologna",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518068480974858/Image_5.png?ex=65ead9cd&is=65d864cd&hm=89718d399df6807f0efc44f19c5831229d6f0725a251177a1e0a387809e8da27&=&format=webp&quality=lossless",
                },

                {
                    name: "Roma",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518069336875018/Image_3.png?ex=65ead9ce&is=65d864ce&hm=2912d49b7686a408249ff020171d10a498acad3887bbceec93306cb80f05eb41&=&format=webp&quality=lossless",
                },

                {
                    name: "Torino",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518068984545290/Image_4.png?ex=65ead9cd&is=65d864cd&hm=59a44498a47c7bdc41b4ea3ae52a12f2b3875a920f7058b343a14b571a14c769&=&format=webp&quality=lossless",
                },

                {
                    name: "Napoli",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518069621956658/Image_2.png?ex=65ead9ce&is=65d864ce&hm=6f4b846ec861c5c82f7683ae690dd5f080aa4a103032d5770eb3774d93b1c47b&=&format=webp&quality=lossless",
                },

                {
                    name: "Brescia",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518068204408853/Image_6.png?ex=65ead9cd&is=65d864cd&hm=105686abaed6c7d438a774e565c4acba09fd0256d9146e7b4b0c331da24074d4&=&format=webp&quality=lossless",
                },

                {
                    name: "Milano",
                    image: "https://media.discordapp.net/attachments/1206904820351639612/1210518067885510737/Image_7.png?ex=65ead9cd&is=65d864cd&hm=15abed0b37a542f882d2d71c572399d1e5a792b210e0f901ffa3c1f66ecb0577&=&format=webp&quality=lossless",
                },
            ],
    };
  },
  components: { LocationCard },

  methods:{
    // getCol: function (index){
    //     if(index === 0 || index % 3 === 0){
    //         return true;
    //     }
    // }
  }
};
</script>
<style lang="scss" scoped>
    
</style>