<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a id="titulo">Dojo Reviews</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link v-bind:to="{ name:'Landing' }">Inicio</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

#titulo{
    font-family: 'Fredoka One', cursive;
    margin-right: 1200px;
    font-size: 30px;
}

li{
  font-family: 'Fredoka One', cursive;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
