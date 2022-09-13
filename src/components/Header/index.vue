<template>
  <header class="header-container">
    <main-header></main-header>
  </header>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'the-header',
  components: {
    MainHeader
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>