<template>
    <div class="nav-dropdown--container">
      <component
        :is="contentType(items[0].type)"
        :content="items[0]"
        class="nav-dropdown--content"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[1].type)"
        :content="items[1]"
        class="nav-dropdown--content"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[2].type)"
        :content="items[2]"
        class="nav-dropdown--content"
      />
      <div class="nav-dropdown--divider">
        <div></div>
      </div>
      <component
        :is="contentType(items[3].type)"
        :content="items[3]"
        class="nav-dropdown--content"
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
    right: 0;
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

  &--content {
    max-width: 25%;
  }
}
</style>