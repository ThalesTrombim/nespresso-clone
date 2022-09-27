<template>
  <div id="app">
    <shop-cart></shop-cart>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from './components/Header/index.vue';
import ShopCart from './components/ShopCart';

export default {
  name: 'App',
  components: {
    TheHeader,
    ShopCart
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
