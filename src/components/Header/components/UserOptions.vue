<template>
  <div class="user-options-container">
    <square-button>
      <span class="glyphicon glyphicon-user"></span>
      Acesse ou crie sua conta
    </square-button>
    <square-button>
      <span class="glyphicon glyphicon-gift"></span>
    </square-button>
    <square-button>
      <span class="glyphicon glyphicon-shopping-cart"></span>
      Seu carrinho (0)

    </square-button>
  </div>
</template>

<script>
import SquareButton from '@/components/ui/SquareButton.vue';

export default {
  name: 'user-options',
  components: {
    SquareButton
  }
}
</script>

<style scoped>
.user-options-container {
  display: flex;
  gap: 12px;
  color: #FFF;
}
</style>