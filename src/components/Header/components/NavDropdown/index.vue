<template>
    <div class="nav-dropdown--container">
      <component
        :is="contentType"
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