<template>
  <a :href="link" class="green-button--container">
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'green-button',
  props: ['link', 'label']
}
</script>

<style lang="scss" scoped>
.green-button {
  &--container {
    background: #3d8705;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 24px;
    font-size: 15px;
  }
}
</style>

