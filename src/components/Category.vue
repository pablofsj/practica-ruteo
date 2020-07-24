<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h1>Lista de Restaurantes de comida {{ $route.params.nombre }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <ul class="collection">
          <li class="collection-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quo odit</li>
          <li class="collection-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quo odit</li>
          <li class="collection-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quo odit</li>
          <li class="collection-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quo odit</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Category'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
