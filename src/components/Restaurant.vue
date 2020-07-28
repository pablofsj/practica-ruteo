<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h1>{{ nombre }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col m4 s4">
        <router-link v-bind:to="{ name:'AcercaDe' }">Acerca de</router-link>
      </div>
      <div class="col m4 s4">
        <router-link v-bind:to="{ name:'Revisiones' }">Reviews</router-link>
      </div>
      <div class="col m4 s4">
        <router-link v-bind:to="{ name:'Imagenes' }">Photos</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Restaurant',
  props: {
    nombre:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p{
  text-align: justify;
}

span{
  font-weight: bold;
  font-size: 30px;
}
</style>
