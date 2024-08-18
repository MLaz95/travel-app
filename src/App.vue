<script>

import CardComponent from "./components/CardComponent.vue";
import { store } from "./components/store"


export default{
  data(){
    return{
      store,
    }
  },

  components:{
    CardComponent,
  },

  mounted(){
    console.log(store.trip)

  }
}

</script>

<template>
  <h1 class="text-center p-5 border-bottom border-black">Current Destination: {{ store.trip.name }}</h1>
  <div class="container">
    <div class="row row-cols-5">

      <div class="col" v-for="stop in store.trip.stops">
        <CardComponent :stop="stop"></CardComponent>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>
