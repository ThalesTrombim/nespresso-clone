<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <ul class="navbar-list-container">
        <li v-for="item in navbarList" :key="item.label">
          <a href="#">
            <span>imagem</span>
            <p>
              {{ item.label }}
            </p>
          </a>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'nav-bar',
  computed: {
    ...mapState('navbar', ['navbarList'])
  },
  mounted() {
    return console.log(this.navbarList)
  }
}
</script>

<style scoped lang="scss">
.navbar {
  &-container {
    background: #1B1B1B;
    color: #FFF;
  }
  &-list-container {
    display: flex;
    justify-content: space-around;
    max-width: 996px;
    margin: auto;

    li {
      p {
        color: #FFF;
      }
    }

  }
}
</style>