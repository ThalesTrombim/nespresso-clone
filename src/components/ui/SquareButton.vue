<template>
  <div class="square-button-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'square-button',
}
</script>

<style scoped>
.square-button-container {
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
}
.square-button-container:hover {
  background: #FFF;
  color: #000;
}

.square-button-container:hover .glyphicon{
  color: #000;
}

.glyphicon {
  color: #FFF;
  font-size: 16px;
  transition: 200ms linear;
}

</style>