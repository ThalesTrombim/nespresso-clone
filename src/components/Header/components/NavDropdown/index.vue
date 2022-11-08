<template>
    <div class="nav-dropdown--container">
      <component
        :is="contentType"
        :content="items[0]"
      />
      <component
        :is="contentType"
        :content="items[1]"
      />
    </div>
</template>

<script>
import ListLinks from './ListLinks.vue';

export default {
  name: 'nav-dropdown', 
  components: {
    ListLinks
  },
  data(){
    return {
      type: 'LIST-LINKS'
    }
  },
  computed: {
    contentType() {
      switch(this.type) {
        case 'LIST-LINKS': return ListLinks;
        case 'DOUBLE': return ListLinks;
        default: return null;
      }
    }
  },
  mounted() {
    console.log('items', this.items)
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
}
</style>