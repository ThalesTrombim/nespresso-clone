<template>
  <div class="list-link--container">
    <span>{{ content.title }}</span>
    <img :src="getImageUrl(content.image)" alt="">
    <ul>
      <li v-for="link in content.links" :key="link.label">
        <a href="#">{{ link.label }}</a>
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
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    gap: 10px;

    span {
      font-size: 16px;
      color: #474747;
    }
    img {
      width: 100px;
    }
    li {
      list-style: none;
    }
    a {
      color: rgb(65, 130, 0);
      font-weight: 700;
      text-decoration: none;

      &:hover {
        background: #b8b8b8;
        /* color: #fff;
        text-shadow: none; */
      }
    }
  }
}
</style>