<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="to Your Wongsapat App"/>
  <HelloWorld msg="Hi Puriwat"/>
  <Puriwat first_name="Puriwat" last_name="Udompittayasit"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Puriwat from './components/Puriwat.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Puriwat
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
  margin-top: 60px;
}
</style>
