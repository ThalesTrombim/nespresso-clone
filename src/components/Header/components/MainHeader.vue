<template>
  <div class="main-header--container">
    <div class="main-header--content">
      <div class="main-header--logo">
        <img src="../../../assets/logo-white.svg" alt="Nespresso">
      </div>
      <div class="main-header--userArea">
        <user-options></user-options>
      </div>
    </div>
  </div>
</template>

<script>
import UserOptions from './UserOptions.vue';

export default {
  name: 'main-header',
  components: {
    UserOptions
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  &--container {
    background: #000;
  }

  &--content {
    max-width: 996px;
    margin: auto;
    color: #FFF;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  &--userArea {
    color: #FFF;
  }

  &--logo img{
    width: 157px;
  }
}
</style>