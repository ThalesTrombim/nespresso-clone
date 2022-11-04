<template>
    <div class="nav-dropdown--container">
      <component
        :is="contentType"
        :content="items[0]"
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
    z-index: 10;
  }
}
</style>