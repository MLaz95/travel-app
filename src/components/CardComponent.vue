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
        <h2 class="title-font">{{ stop.date.getDate() }}-{{ stop.date.getMonth() }}-{{ stop.date.getFullYear() }}</h2>
        <h1 class="text-uppercase title-font">{{ stop.name }}</h1>
        <p>{{ stop.description }}</p>
        <button @click="setActive(stop)" class="btn btn-outline-light" >I'm Here!</button>
        
    </div>
    

</template>