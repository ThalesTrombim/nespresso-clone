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
    gap: 10px;

    span {
      text-transform: none;
    }

    button {
      max-width: 100px;
      padding: 5px 25px;
      margin: auto;
      margin-top: 10px;
      border-radius: 50px;
      border: 1px solid #000;

      &:hover {
        background: #000;
        color: #FFF;
      }
    }
  }

  &--title {
    font-size: 20px;
    font-weight: 500;
    
    p {
      margin: 0;
    }
    
    &_colered {
      color: #D8AE00;
    }
  }

}
</style>