<script>

export default{
    props: {
        stop: Object,
    },
}
</script>

<template>

    
    <div class="h-100 d-flex flex-column justify-content-between">
        <h3 class="text-center">{{ stop.date.getDate() }}-{{ stop.date.getMonth() }}-{{ stop.date.getFullYear() }}</h3>
        <h2 class="text-center">{{ stop.name }}</h2>
        <p>{{ stop.description }}</p>
        <img :src="stop.img" alt="" class="h-50 object-fit-cover">
    </div>
    

</template>