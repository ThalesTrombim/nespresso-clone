<template>
    <div class="nav-dropdown--container">
      <component
        :is="contentType(items[0].type)"
        :content="items[0]"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[1].type)"
        :content="items[1]"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[2].type)"
        :content="items[2]"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[3].type)"
        :content="items[3]"
      />
    </div>
</template>

<script>
import ListLinks from './ListLinks.vue';
import TheDouble from './TheDouble.vue';
import TheBanner from './TheBanner.vue';

export default {
  name: 'nav-dropdown', 
  components: {
    ListLinks,
    TheDouble
  },
  methods: {
    contentType(componentType) {
      switch(componentType) {
        case 'LIST-LINKS': return ListLinks;
        case 'DOUBLE': return TheDouble;
        case 'BANNER': return TheBanner;
        default: return null;
      }
    }
  },
  props: {
    items: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.nav-dropdown {
  &--container {
    background: #FFF;
    position: absolute;
    display: flex;
    z-index: 10;
  }
  &--divider {
    padding: 1% 0 2% 0;
    width: 1px;

    div {
      width: 1px;
      height: 100%;
      background-color: #D5D5D5;
    }
  }
}
</style>