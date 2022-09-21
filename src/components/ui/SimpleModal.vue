<template>
  <div class="simple-modal--backdrop">
    <div class="simple-modal-container">
      conteudo
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-modal',
}
</script>

<style lang="scss" scoped>
.simple-modal--backdrop {
  background: rgba(0, 0, 0, .3);
  right: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>