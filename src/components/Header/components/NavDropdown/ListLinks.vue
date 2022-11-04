<template>
  <div class="list-link--container">
    <h3>{{ content.title }}</h3>
    <img src="" alt="">
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
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  &--container {
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