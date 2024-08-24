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
  console.log(store.trip)
  }
}

</script>

<template>
  <h1 class="text-center p-5 border-bottom border-black">Current Destination: {{ store.trip.name }}</h1>
  <div class="container">
    <div>

      <!-- <div class="col" v-for="stop in store.trip.stops">
        <CardComponent :stop="stop"></CardComponent>
      </div> -->
      <div class="row row-cols-2 my_wrap">
        <div class="col h-100" style="background-color: pink;">
          <CarouselComponent></CarouselComponent>
        </div>

        <div class="col">
          <Map />
        </div>
      </div>

      
    </div>
  </div>
</template>

<style scoped>
.my_wrap{
  border: red dashed 1px;
  height: 700px;
}

</style>
