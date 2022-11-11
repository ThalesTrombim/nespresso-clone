<template>
  <div class="double-component--container">
    <ul>
      <li v-for="item in content.items" :key="item.label">
        <a :href="item.link">
          <img :src="getImageUrl(item.image, 'png')" alt="">
          <span>{{ item.label }}</span>
        </a>
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
    max-width: 270px;

    ul {
      list-style: none;
      padding: 10px;

      li {
        padding: 10px 20px;
      
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 10px;
        }
      }

      img {
        width: 80px;
      }
    }
  }
}
</style>