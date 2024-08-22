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
        },

        methods: {
            initializeMap(){
                const map = tt.map({
                    key: 'NE8Tzmv4CU0XVlD9o90M6K7ysBeHNLBp',
                    container: this.$refs.mapRef,
                    
                    center: [9.26725, 49.70452],
                    zoom: 8,
                })

                store.trip.stops.forEach(stop => {
                    new tt.Marker().setLngLat(stop.coordinates).addTo(map)
                });
                this.map = Object.freeze(map)
            },
        },
    }
</script>

<template>
    <h1>Map Demo</h1>
    <div id="map" ref="mapRef"></div>
</template>

<style>
#map {
    height: 50vh;
    width: 50vw;
}
</style>