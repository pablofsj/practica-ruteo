<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a id="titulo">Dojo Reviews</a>
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
    margin-right: 900px;
    font-size: 30px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
