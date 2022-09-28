<template>
  <div class="shopcart-container">
    <div class="shopcart-header">
      <p>CARRINHO</p>
      <div class="shopcart-header--closeButton">
        X
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-cart'
}
</script>

<style lang="scss" scoped>
.shopcart {
  &-container {
    /* display: none; */
    position: absolute;
    z-index: 1000;
    background: #FFF;
    height: 100vh;
    right: 0;
    padding: 20px;
  }
}
</style>