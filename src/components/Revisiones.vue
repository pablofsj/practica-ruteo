<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h1>{{ $route.params.nombre }}</h1>
        <h4>Reviews</h4>
      </div>
    </div>
    <div class="row">
      <div class="col m6 s6">
        <img src="https://ubisoft-avatars.akamaized.net/a3c1a636-db47-4751-941b-1acc538932de/default_256_256.png" alt="">
      </div>
      <div class="col m6 s6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod? Natus consequatur voluptas veritatis deleniti perferendis doloribus commodi, aut qui ea earum ab illo tempora nam excepturi delectus saepe iste.</p>
      </div>
    </div>
    <div class="row">
      <div class="col m6 s6">
        <img src="https://ubisoft-avatars.akamaized.net/a3c1a636-db47-4751-941b-1acc538932de/default_256_256.png" alt="">
      </div>
      <div class="col m6 s6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod? Natus consequatur voluptas veritatis deleniti perferendis doloribus commodi, aut qui ea earum ab illo tempora nam excepturi delectus saepe iste.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Revisiones'
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
</style>
