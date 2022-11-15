<template>
  <div class="banner-component--container">
    <a :href="content.link">
      <img :src="getImageUrl(content.image, 'jpg')" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'the-banner',
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
.banner-component {
  &--container {
    padding: 10px;

    img {
      width: 238px;
      height: 228px;
    }
  }
}
</style>