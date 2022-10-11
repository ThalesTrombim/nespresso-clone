<template>
  <header class="header-container">
    <main-header></main-header>
    <nav-bar></nav-bar>
  </header>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'the-header',
  components: {
    MainHeader,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>