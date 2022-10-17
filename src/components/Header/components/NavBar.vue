<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <ul class="navbar-list-container">
        <li v-for="item in navbarList" :key="item.label" class="navbar-list-items">
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
}
</script>

<style lang="scss">
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
    position: relative;
    
  }

  &-list-items {
    a,span, p {
      color: #FFF;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    width: 10%;
    list-style: none;

    &:not(:first-child)::before {
      content: "";
      position: absolute;
      top: 7px;
      bottom: 7px;
      width: 0;
      border-left: 1px solid #313131;
      transition: border-color .4s;
    }
    
  }
}

/* .navbar-list-items:not(:first-child)::before {
      content: "";
      position: absolute;
      top: 7px;
      bottom: 7px;
      width: 0;
      border-left: 1px solid #313131;
      transition: border-color .4s;
    } */
</style>