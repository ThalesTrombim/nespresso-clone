<template>
  <div class="double-component--container">
    <ul>
      <li v-for="item in content.items" :key="item.label">
        <img :src="getImageUrl(item.image, 'png')" alt="">
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'the-double',
  props: {
    content: {
      type: Object,
      require: true
    }
  },
  methods: {
    getImageUrl(image, ext) {
      return require("../../../../assets/navbar/" + image + "." + ext);
    },
  }
}
</script>

<style lang="scss" scoped>
.double-component {
  &--container {
    ul {
      list-style: none;
      padding: 10px;
    }
  }
}
</style>