<template>
  <div class="mini-modal--container">
    <div class="mini-modal--title">
      <p>EXPERIÊNCIAS</p>
      <p class="mini-modal--title_colered">PERSONALIZADAS</p>
    </div>
    <span>Faça login para descobrir seus benefícios.</span>
    <button>LOGIN</button>
  </div>
</template>

<script>
export default {
  name: 'mini-modal',

}
</script>

<style lang="scss" scoped>
.mini-modal {
  &--container {
    background: #FFF;
    position: absolute;
    top: 66px;
    left: calc(50% + 155px);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      text-transform: none;
    }
  }

  &--title {
    font-size: 20px;
    font-weight: 400;
    
    p {
      margin: 0;
    }
    
    &_colered {
      color: #D8AE00;
    }
  }
}
</style>