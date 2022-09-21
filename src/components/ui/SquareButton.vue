<template>
  <button class="square-button--container" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'square-button',
  props: {
    mode: {
      type: String,
      require: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.square-button {

  &--container {
    display: flex;
    background: #000;
    color: #FFF;
    font-size: 13px;
    border: 1px solid #FFF;
    border-radius: 4px;
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 200ms linear;
    gap: 8px;

    &:hover {
      background: #FFF;
      color: #000;

      .glyphicon{
        color: #000;
      }
    }
  }
}

.inverted {
  border: 1px solid #000;
  justify-content: center;
  background: #FFF;
  color: #000;

  &:hover {
    background: #000;
    color: #FFF;
  }
}
.glyphicon {
  color: #FFF;
  font-size: 16px;
  transition: 200ms linear;
}

</style>