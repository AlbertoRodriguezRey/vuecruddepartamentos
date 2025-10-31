<template>
    <div>
        <h1>Details</h1>
        <ul class="list-group">
            <li class="list-group-item">ID: {{ $route.params.id }}</li>
            <li class="list-group-item">Nombre: {{ $route.params.nombre }}</li>
            <li class="list-group-item">Localidad: {{ $route.params.localidad }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DetailsDepartamento'
}
</script>

<style scoped>

</style>