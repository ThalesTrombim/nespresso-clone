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
      <div class="user-options-gift">
        <mini-modal></mini-modal>
      </div>
    </square-button>
    <square-button>
      <span class="glyphicon glyphicon-shopping-cart"></span>
      Seu carrinho (0)

    </square-button>
  </div>
</template>

<script>
import LoginDropdown from './LoginDropdown.vue';

export default {
  name: 'user-options',
  components: {
    LoginDropdown
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
}
</style>