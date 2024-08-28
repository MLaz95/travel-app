<script>
import { store } from './store';
import tt from '@tomtom-international/web-sdk-maps'


    export default {
        data(){
            return {
                map: null,
                store,
            }
        },

        mounted(){
            this.initializeMap()
            console.log(store.trip)
        },

        watch:{
            'store.trip.currentSlide'(newValue){
                this.initializeMap()
            },

            'store.trip.active'(newValue){
                this.initializeMap()
            }
        },

        methods: {
            initializeMap(){
                const map = tt.map({
                    key: 'NE8Tzmv4CU0XVlD9o90M6K7ysBeHNLBp',
                    container: this.$refs.mapRef,
                    center: this.store.trip.stops[this.store.trip.currentSlide].coordinates,
                    zoom: 8,
                })

                store.trip.stops.forEach((stop, index) => {
                    // sets appropriate marker on map
                    if(store.trip.active == index){
                        let element = document.createElement('div')
                        element.id = "active_marker"
                        new tt.Marker({element: element}).setLngLat(stop.coordinates).addTo(map)
                    }else{
                        let element = document.createElement('div')
                        element.id = "marker"
                        new tt.Marker({element: element}).setLngLat(stop.coordinates).addTo(map)
                    }
                });
                this.map = map;
                console.log(this.map)
            },
        },
    }
</script>

<template>
    <div id="map" ref="mapRef"></div>
</template>

<style>
#map {
    height: 100%;
    width: 100%;
}

#marker{
    background-image: url('/src/assets/img/map-pin-solid.svg');
    background-size: cover;
    width: 25px;
    height: 35px;
}

#active_marker{
    background-image: url('/src/assets/img/location-dot-solid.svg');
    background-size: cover;
    width: 30px;
    height: 40px;
}
</style>