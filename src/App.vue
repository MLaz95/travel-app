<script>

import CardComponent from "./components/CardComponent.vue";
import { store } from "./components/store"
import Map from "./components/MapComponent.vue"
import CarouselComponent from "./components/CarouselComponent.vue"


export default{
  data(){
    return{
      store,
      offCanvasIndex: 0,
    }
  },

  components:{
    CardComponent,
    Map,
    CarouselComponent,
  },

  mounted(){
    const exampleOffCanvas = document.getElementById('offcanvasExample');
    console.log(exampleOffCanvas)
    if(exampleOffCanvas){
      exampleOffCanvas.addEventListener('show.bs.offcanvas', event => {
        // retrieve slide index from the button that opened the offcanvas
        this.offCanvasIndex = event.relatedTarget.getAttribute('data-bs-index')
      })
    }
  },

}

</script>

<template>
  <!-- background image -->
  <img :src="store.trip.stops[store.trip.currentSlide].img" alt="" class="position-absolute w-100 h-100 object-fit-cover z-n1">
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

  <!-- Offcanvas triggered from CardComponent-->
  <div class="offcanvas offcanvas-start w-50" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">{{ store.trip.stops[offCanvasIndex].name }}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
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
