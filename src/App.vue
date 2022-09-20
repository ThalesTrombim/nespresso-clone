<template>
  <div id="app">
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from './components/Header/index.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #161616;
  font-family: 'Tahoma', sans-serif;
}
input,
label {
  padding: 0;
  margin: 0;
}
/* #app {
  display: flex;
  flex-direction: column;
} */
</style>
