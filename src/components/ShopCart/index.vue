<template>
  <div class="shopcart-container" v-if="shopcartIsOpen">
    <div class="shopcart-header">
      <p>CARRINHO</p>
      <p>teste {{ shopcartIsOpen }}</p>
      <div class="shopcart-header--closeButton">
        X
      </div>
    </div>
    <div class="shopcart-client-month">
      <img src="../../assets/general/flash-sales.jpg" alt="Mês do cliente">
      <span>Aproveite <strong>FRETE GRATIS</strong> no seu pedido.</span>
    </div>
    <div class="shopcart-items-area">
      <span>Seu carrinho está vazio</span>
      <button class="shopcart-shop-button">Iniciar compra</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'shop-cart',
  computed: {
    ...mapState("cart", ['shopcartIsOpen'])
  },
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
    width: 415px;
    right: 0;
  }

  &-header {
    display: flex;
    padding: 20px;

    p {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: .1em;
      margin: 0;
    }
  }

  &-client-month {
    display: flex;
    padding: 20px 0;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    background: #F9F9F9;

    img {
      max-width: 300px;
    }
    span {
      font-size: 12px
    }
  }

  &-items-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  &-shop-button {
    min-width: 335px;
    padding: 12px 0;
    border-radius: 3px;
    border: none;
    font-size: 13px;
    font-family: 'Tahoma', sans-serif;
    letter-spacing: .1em;
    background: #3D8705;
    color: #FFF;
  }
}
</style>