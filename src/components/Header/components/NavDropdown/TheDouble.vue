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
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      padding: 10px;

      li {
        padding: 10px 20px;
        position: relative;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 10px;
        }

        &:not(:nth-child(2))::before {
          content: "";
          position: absolute;
          height: 0;
          bottom: 0;
          left: 20px;
          right: 21px;
          border-bottom: 1px solid #d5d5d5;
        }
      }

      img {
        width: 80px;
      }
    }
  }
}
</style>