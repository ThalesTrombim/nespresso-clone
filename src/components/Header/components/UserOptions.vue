<template>
  <div class="user-options--container">
    <square-button class="user-options--login">
      <span class="glyphicon glyphicon-user"></span>
      Acesse ou crie sua conta
      <div class="user-options--dropdown">
        <login-dropdown></login-dropdown>
      </div>
    </square-button>
    <square-button>
      <span class="glyphicon glyphicon-gift"></span>
      <!-- <div class="user-options--gift"></div> -->
      <mini-modal></mini-modal>
    </square-button>
    <square-button :action="setShopcart">
      <span class="glyphicon glyphicon-shopping-cart"></span>
      Seu carrinho (0)

    </square-button>
  </div>
</template>

<script>
import LoginDropdown from './LoginDropdown.vue';
import { mapActions } from 'vuex';

export default {
  name: 'user-options',
  components: {
    LoginDropdown
  },
  methods: {
    ...mapActions('cart', ['setShopcart']),
    // teste() {
    //   console.log('testando click')
    // }
  }
}
</script>

<style lang="scss" scoped>
.user-options {
  &--container {
    display: flex;
    gap: 12px;
    color: #FFF;
  }

  &--dropdown {
    position: absolute;
    /* display: none; */
    color: red;
    margin-top: 27px;
  }

  &--login {
    &:hover {
      .user-options-dropdown{
        display: flex;
      }
    }
  }

  &--gift {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #171717BF;
  }
}
</style>