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
    </div>
</template>

<script>
import ListLinks from './ListLinks.vue';
import TheDouble from './TheDouble.vue';

export default {
  name: 'nav-dropdown', 
  components: {
    ListLinks,
    TheDouble
  },
  data(){
    return {
      type: 'LIST-LINKS'
    }
  },
  methods: {
    contentType(componentType) {
      switch(componentType) {
        case 'LIST-LINKS': return ListLinks;
        case 'DOUBLE': return TheDouble;
        default: return null;
      }
    }
  },
  mounted(){
    console.log('teste',this.items[0].type)
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
    padding: 3% 0;
    width: 1px;

    div {
      width: 1px;
      height: 100%;
      background-color: #D5D5D5;
    }
  }
}
</style>