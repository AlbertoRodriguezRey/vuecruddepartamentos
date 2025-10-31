<template>
  <Menucomponent/>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DepartamentosComponent from './components/DepartamentosComponent.vue'
import Menucomponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    Menucomponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
