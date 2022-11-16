<template>
  <div class="the-single--container">
    <a :href="content.link">
      <span :class="{isSmall: content.smallTitle}">{{ content.title }}</span>
      <img :src="getImageUrl(content.image, content.ext)" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'the-single',
  props: {
    content: {
      type: Object,
      require: true
    }
  },
  methods: {
    getImageUrl(pet, ext='.jpg') {
      return require('../../../../assets/navbar/'+pet+ext)
    },  
  }
}
</script>

<style lang="scss" scoped>
.the-single {
  &--container {
    padding: 10px;
    padding-bottom: 0;
    .isSmall {
      font-size: 14px;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-decoration: none;

      span {
        font-size: 16px;
        color: #474747;
        font-weight: 400;
        text-align: center;
      }
      img {
        width: 120px;
        margin-top: 20px;
      }
    }

  }
}
</style>