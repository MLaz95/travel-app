<script>

export default{
    props: {
        stop: Object,
    },
}
</script>

<template>

    
    <div class="h-100 d-flex flex-column justify-content-center px-3 text-white">
        <h2 class="">{{ stop.date.getDate() }}-{{ stop.date.getMonth() }}-{{ stop.date.getFullYear() }}</h2>
        <h1 class="text-uppercase">{{ stop.name }}</h1>
        <p>{{ stop.description }}</p>
        
    </div>
    

</template>