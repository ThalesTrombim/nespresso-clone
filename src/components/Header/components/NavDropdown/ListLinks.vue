<template>
  <div class="list-link--container">
    <a href="#">
      <span :class="{isSmall: content.smallTitle}">{{ content.title }}</span>
      <img :src="getImageUrl(content.image)" alt="">
    </a>
    <ul>
      <li v-for="link in content.links" :key="link.label">
        <a :href="link.link">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-links',
  props: {
    content: {
      type: Object,
      require: true
    }
  },
  methods: {
    getImageUrl(pet) {
      return require('../../../../assets/navbar/'+pet+'.jpg')
    },  
  }
}
</script>

<style lang="scss" scoped>
.list-link {
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

      span {
        font-size: 16px;
        color: #474747;
        font-weight: 400;
        text-align: center;
      }
      img {
        width: 100px;
      }
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #b8b8b8;
      }
    }
    a {
      color: rgb(65, 130, 0);
      font-weight: 700;
      text-decoration: none;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 7px;
    }
  }
}
</style>