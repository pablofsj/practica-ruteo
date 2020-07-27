<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h1>{{ $route.params.nombre }}</h1>
        <h4>Photos</h4>
      </div>
    </div>
    <div class="row">
      <div class="col m4 s12">  
        <div class="card">
          <div class="card-image">
           <img src="https://lh3.googleusercontent.com/proxy/9pM-Ngts34xwf9srJhGMZ2Nz1xpl91TW2ZDBWdBoB_zZvjIweR0yNVSr86LxL6PFsjqkPPqHjgZZb9dBki3uptuIxEp4UiGqNb7Q3LN2RichlO5G9ddbu2P4u5fcsWU7">
          </div>
        </div>
      </div>
      <div class="col m4 s12">  
        <div class="card">
          <div class="card-image">
           <img src="https://lh3.googleusercontent.com/proxy/9pM-Ngts34xwf9srJhGMZ2Nz1xpl91TW2ZDBWdBoB_zZvjIweR0yNVSr86LxL6PFsjqkPPqHjgZZb9dBki3uptuIxEp4UiGqNb7Q3LN2RichlO5G9ddbu2P4u5fcsWU7">
          </div>
        </div>
      </div>
      <div class="col m4 s12">  
        <div class="card">
          <div class="card-image">
           <img src="https://lh3.googleusercontent.com/proxy/9pM-Ngts34xwf9srJhGMZ2Nz1xpl91TW2ZDBWdBoB_zZvjIweR0yNVSr86LxL6PFsjqkPPqHjgZZb9dBki3uptuIxEp4UiGqNb7Q3LN2RichlO5G9ddbu2P4u5fcsWU7">
          </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Imagenes'
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
