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
            store
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        CardComponent
    }
}
</script>

<template>
    <swiper :modules="modules" :slides-per-view="1" :loop="true" :navigation="true" :direction="'vertical'" :pagination="{
        type: 'progressbar',
    }">
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
    }
    
    .swiper-button-prev {
        top: 10px;
    }
    
    .swiper-button-next {
        top: auto;
        bottom: 10px;
    }
}

</style>