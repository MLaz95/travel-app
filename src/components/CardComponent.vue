<script>

export default{
    props: {
        stop: Object,
    },
}
</script>

<template>

    
    <div class="p-3 border">
        <h3 class="text-center">{{ stop.date.getDate() }}-{{ stop.date.getMonth() }}-{{ stop.date.getFullYear() }}</h3>
        <h2 class="text-center">{{ stop.name }}</h2>
        <p>{{ stop.description }}</p>
    </div>
    

</template>