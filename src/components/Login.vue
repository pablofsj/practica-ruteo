<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h1>Login Dojo Reviews</h1>
      </div>
    </div>
    <div class="row">
      <form class="col m12 s12">
        <div class="row">
          <div class="input-field col m12 s12">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <button class="waves-effect waves-light btn-large">Entrar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
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
