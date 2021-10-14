<template>
  <div id="app">
    <Books/>
  </div>
</template>

<script>
import Books from './components/Books.vue'

export default {
  name: 'App',
  components: {
    Books
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
