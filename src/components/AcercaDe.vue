<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h4>Acerca de</h4>
      </div>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita exercitationem officia temporibus natus voluptas ratione facere nobis necessitatibus tempore! Eligendi eveniet libero ullam veritatis similique unde quidem quae incidunt. Delectus!</p>
      </div>
      <div class="col m12 s12">
        <p>El Restaurant <span>{{ $route.params.nombre }}</span> agradece tu interés!</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Restaurant'
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
