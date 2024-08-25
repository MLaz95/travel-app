<script>

import CardComponent from "./components/CardComponent.vue";
import { store } from "./components/store"
import Map from "./components/MapComponent.vue"
import CarouselComponent from "./components/CarouselComponent.vue"


export default{
  data(){
    return{
      store,
    }
  },

  components:{
    CardComponent,
    Map,
    CarouselComponent,
  },

  mounted(){
  // console.log(store.trip)
  }
}

</script>

<template>
  <!-- background image -->
  <img :src="store.trip.stops[store.trip.active].img" alt="" class="position-absolute w-100 h-100 object-fit-cover z-n1">
  <!-- heading up top -->
  <h1 class="text-center p-5 text-white my_gradient">Current Destination: {{ store.trip.name }}</h1>

  <!-- container -->
  <div class="container-flui px-5">
    <!-- separates main in left and right block -->
      <div class="row row-cols-2 my_wrap p-2">
        
        <!-- carousel component -->
        <div class="col h-100">
          <CarouselComponent></CarouselComponent>
        </div>

        <!-- map component -->
        <div class="col">
          <Map></Map>
        </div>
        
      </div>
  </div>
</template>

<style scoped>

.my_gradient{
  background-image: linear-gradient(black, transparent);
}

.my_wrap{
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: red dashed 1px;
  height: 700px;
  /* test */
}

</style>
