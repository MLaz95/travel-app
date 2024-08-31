<script>
import { store } from './store';


export default{
    props: {
        stop: Object,
    },

    data(){
        return{
            store
        }
    },

    methods:{
        setActive(stop){
            this.store.trip.active = stop.id;
            localStorage.setItem('active', this.store.trip.active);
        }
    },
}
</script>

<template>

    
    <div class="h-100 d-flex flex-column justify-content-center px-3 text-white">
        <div class="d-flex justify-content-between align-items-center mb-1">
            <h2 class="title-font m-1">{{ stop.date.getDate() }}-{{ stop.date.getMonth() }}-{{ stop.date.getFullYear() }}</h2>

            <!-- select current stop button -->
            <button @click="setActive(stop)" class="btn btn-outline-light pin_btn" :class="{active: store.trip.active == stop.id}">
                <i class="fa-solid fa-map-location-dot"></i>
            </button>
        </div>

        <!-- link triggers offcanvas -->
        <a class="text-decoration-none text-white my_link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" :data-bs-index="stop.id" aria-controls="offcanvasExample" href="">
            <h1 class="text-uppercase title-font">{{ stop.name }}</h1>
            <p>{{ stop.description }}</p>    
        </a>


    </div>
    
    

</template>

<style lang="scss">

h1.title-font{
    font-size: 100px;
}

h2{
    font-size: 50px
}

.pin_btn{
    width: 45px;
    height: 45px;
}

.my_link{
    transition: background-color 0.3s;

    &:hover{
        background-color: rgba($color: white, $alpha: 0.3);
    }
}

</style>