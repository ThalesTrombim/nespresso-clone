<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <ul class="navbar-list-container">
        <li v-for="item in navbarList" :key="item.label" class="navbar-list-items">
          <a href="#" :class="[moduleName == item.module.name ? 'navbar-list--dropdown--hover' : '']">
            <span 
              :style="{ 'background-image': 'url(' + getImageUrl(item.icon) + ')' }"
            ></span>
            <p>
              {{ item.label }}
            </p>
          </a>
          <div class="navbar-list--dropdown">
            <nav-dropdown
              :items="item.module.items"
              :component-hover="item.module.name"
              @component='handleHoverComponent'
            >
            </nav-dropdown>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavDropdown from './NavDropdown';

export default {
  name: 'nav-bar',
  components: {
    NavDropdown
  },
  data() {
    return {
      moduleName: ''
    }
  },
  computed: {
    ...mapState('navbar', ['navbarList'])
  },
  methods: {
    getImageUrl(image) {
      return require("../../../assets/icons/" + image + ".png");
    },
    handleHoverComponent(item) {
      this.moduleName = item;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-list--dropdown {
  display: none;
}

.navbar-list--dropdown--hover {
  background-color: #FFF;
  p {
    color: #000!important;
  }
  span{
    background-position: 0 -20px;
  }
}

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
      font-size: 12px;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 14px;
      gap: 6px;

      span {
        width: 30px;
        height: 20px;
        background-size: 30px 40px;
      }
      &:hover {
        background-color: #FFF;
        p {
          color: #000;
        }
      }
      &:hover span{
        background-position: 0 -20px;
      }
    }

    width: 11%;
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
    &:hover::before{
      border-left-color: #fff;

      .navbar-list-items {
        a {
          background-color: #FFF;
          p {
            color: #000;
          }
        }
      }
    }
    
    &:hover {
      .navbar-list--dropdown {
        display: flex;
      }
    }
  }
}

</style>