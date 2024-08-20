<script>
import { onMounted, ref } from 'vue';
import tt from '@tomtom-international/web-sdk-maps'


    export default {
        data(){
            return {
                map: null,
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
                    
                    center: [-120.72217631449985, 42.73919549715691],
                    zoom: 10,
                })

                new tt.Marker().setLngLat([-120.72217631449985, 42.73919549715691]).addTo(map)
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