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
  <div class="text-danger">test</div>
</template>

<style scoped>

</style>
