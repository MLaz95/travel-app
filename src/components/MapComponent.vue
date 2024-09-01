<script>
import { store } from './store';
import tt from '@tomtom-international/web-sdk-maps'


    export default {
        data(){
            return {
                map: null,
                markers: [],
                store,
            }
        },

        mounted(){
            this.initializeMap()
            console.log(store.trip)
        },

        watch:{
            // updates map center when scrolling through slides
            'store.trip.currentSlide'(){
                this.updateMapCenter()
            },

            // updates marker icon when new active stop is set
            'store.trip.active'(newValue, oldValue){
                this.updateMarkers(newValue, oldValue)
            }
        },

        methods: {
            // creates the map
            initializeMap(){
                const map = tt.map({
                    key: config.TOMTOM_KEY,
                    container: this.$refs.mapRef,
                    center: this.store.trip.stops[this.store.trip.currentSlide].coordinates,
                    zoom: 8,
                })

                // sets a marker on the map for each stop
                store.trip.stops.forEach((stop, index) => {
                    // maps are saved in markers array so they can be modified later
                    if(store.trip.active == index){
                        let element = document.createElement('div')
                        element.id = "active_marker"
                        this.markers.push(element)
                        new tt.Marker({element: element}).setLngLat(stop.coordinates).addTo(map)
                    }else{
                        let element = document.createElement('div')
                        element.className += " marker"
                        this.markers.push(element)
                        new tt.Marker({element: element}).setLngLat(stop.coordinates).addTo(map)
                    }
                });
                this.map = map;
            },

            // changes center location of the map based on currentSlide value
            updateMapCenter(){
                this.map.flyTo({
                    "center": this.store.trip.stops[this.store.trip.currentSlide].coordinates,
                    "zoom": 9,
                })
            },

            // reassigns the marker class and active_marker id to match current active stop value
            updateMarkers(newValue, oldValue){
                this.markers[oldValue].id = ""
                this.markers[oldValue].className += " marker"

                this.markers[newValue].classList.remove('marker')
                this.markers[newValue].id = "active_marker"
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

.marker{
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