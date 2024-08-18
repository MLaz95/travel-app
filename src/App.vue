<script>

import { store } from "./components/store"

export default{
  data(){
    return{
      store,
    }
  },

  mounted(){
    console.log(store.trip)

  }
}

</script>

<template>
  
</template>

<style scoped>

</style>
