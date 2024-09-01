<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { store } from './store';
import CardComponent from './CardComponent.vue';

export default {
    data() {
        return {
            modules: [Navigation, Pagination],
            store,
            storageActive: null,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        CardComponent
    },

    mounted() {
        this.storageActive = localStorage.getItem('active')
    },

    methods: {
        onSwiper(swiper){
            console.log(swiper)
            if(this.storageActive =! 0){
            this.store.trip.active = localStorage.getItem('active')
            this.store.trip.currentSlide = this.store.trip.active
            console.log('active', this.store.trip.active)
            console.log('slide', this.store.trip.currentSlide)
            }

            if(this.store.trip.active != swiper.realIndex){
                swiper.slideTo(this.store.trip.active)
            }
        },

        onSlideChange(swiper){
            if(this.store.trip.currentSlide != swiper.realIndex){
                this.store.trip.currentSlide = swiper.realIndex
            }
        }
    },
}
</script>

<template>
    <swiper
    :modules="modules"
    :slides-per-view="1"
    :loop="true" :navigation="true"
    :direction="'vertical'"
    :pagination="{
        type: 'progressbar',
    }"
    :initialSlide="Number(this.store.trip.active)"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide v-for="stop in store.trip.stops">
            <CardComponent :stop="stop"></CardComponent>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss">
.swiper {
    height: 100%;
    
    .swiper-button-next,
    .swiper-button-prev {
        left: 50%;
        transform: rotate(90deg);
        transform-origin: left center;
        color: white;
    }
    
    .swiper-button-prev {
        top: 10px;
    }
    
    .swiper-button-next {
        top: auto;
        bottom: 10px;
    }

    .swiper-pagination-progressbar-fill{
        background-color: white;
    }
}

</style>