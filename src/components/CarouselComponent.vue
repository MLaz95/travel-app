<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default{
    data(){
        return{
            modules: [Navigation, Pagination],
        }
    },

    components:{
        Swiper,
        SwiperSlide,
    }
}
</script>

<template>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :navigation="true"
        :pagination="{
            type: 'progressbar',
        }"
    >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<style lang="scss">
    .swiper{
        height: 300px;
        margin-top: 2rem;
        /* position: relative; */
    }

    /* .swiper-button-prev, .swiper-button-next{
        position: absolute;
        left: 0;
        top:0;
    } */
</style>