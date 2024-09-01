<script>

import CardComponent from "./components/CardComponent.vue";
import { store } from "./components/store"
import Map from "./components/MapComponent.vue"
import CarouselComponent from "./components/CarouselComponent.vue"


export default {
  data() {
    return {
      store,
      offCanvasIndex: 0,
    }
  },

  components: {
    CardComponent,
    Map,
    CarouselComponent,
  },

  mounted() {
    // when the offcanvas is opened it retrieves the index of the stop that opened it
    // so that it can be used to set the content within the offcanvas
    const exampleOffCanvas = document.getElementById('offcanvasExample');
    console.log(exampleOffCanvas)
    if (exampleOffCanvas) {
      exampleOffCanvas.addEventListener('show.bs.offcanvas', event => {
        // retrieve slide index from the button that opened the offcanvas
        this.offCanvasIndex = event.relatedTarget.getAttribute('data-bs-index')
      })
    }

    // retrieves notes from localStorage as page loads
    this.getNotes()
  },

  methods:{
    // saves current notes to localStorage
    setNotes(){
      localStorage.setItem("notes" + this.offCanvasIndex, this.store.trip.stops[this.offCanvasIndex].notes)
    },

    // retrieves notes from localStorage
    getNotes(){
      this.store.trip.stops.forEach((stop, index) =>
      stop.notes = localStorage.getItem("notes" + index)
      ) 
    }
  }

}

</script>

<template>
  <!-- background image -->
  <img :src="store.trip.stops[store.trip.currentSlide].img[0]" alt=""
    class="position-absolute w-100 h-100 object-fit-cover z-n1">
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
  <div class="offcanvas offcanvas-start w-50 p-5" data-bs-theme="dark" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

    <div class="offcanvas-header">
      <h1 class="text-uppercase title-font">{{ store.trip.stops[offCanvasIndex].name }}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <!-- general info -->
      <div class="fs-5">{{ store.trip.stops[offCanvasIndex].paragraph }}</div>

      <!-- personal comments -->
      <div class="mt-2">
        <label for="notes" class="title-font m-0 fs-3">Notes</label>
        <div class="input-group mt-2">
          <textarea
          id="notes"
          v-model="store.trip.stops[offCanvasIndex].notes"
          placeholder="No notes yet..."
          class="form-control"
          aria-label="With textarea"></textarea>
          <button @click="setNotes()" class="btn btn-outline-success">Save</button>
        </div>
      </div>

      <!-- gallery -->
      <h3 class="title-font mt-3">Gallery</h3>
      <div class="row row-cols-2 row-gap-3">
        <div v-for="img in store.trip.stops[offCanvasIndex].img" class="">
          <a :href="img">
            <img :src="img" alt="" class="w-100 h-100 object-fit-cover">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my_gradient {
  background-image: linear-gradient(black, transparent);
}

.my_wrap {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  /* border: red dashed 1px; */
  height: 700px;
  /* test */
}

#notes{
  min-height: 100px;
}

</style>
