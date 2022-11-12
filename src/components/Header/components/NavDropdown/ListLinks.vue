<template>
  <div class="list-link--container">
    <a href="#">
      <span>{{ content.title }}</span>
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
    padding: 20px;
    
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      span {
        font-size: 16px;
        color: #474747;
        font-weight: 400;
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
      margin-bottom: 10px;

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
      /* &:hover {
        background: #b8b8b8;
      } */
    }
  }
}
</style>