<template>
  <div class="the-hero--section">
    <div class="the-hero--header">
      <h1>
        CÁPSULAS E MÁQUINAS DE CAFÉ PARA SEU ESPRESSO PERFEITO
      </h1>
    </div>
    <div class="the-hero--container" 
      :style="{ 'background-image': 'url(' + getImageUrl(background) + ')' }"
    >
      <div class="the-hero--content">
        <span>
          <strong>
            AS OFERTAS MAIS ESPERADAS <br>
            DO ANO JÁ COMEÇARAM
          </strong>
        </span>
  
        <green-button 
          link="#"
          label="CONFIRA AS OFERTAS"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-hero',
  methods: {
    getImageUrl(image) {
      return require("../../assets/hero/" + image + ".jpg");
    },
  },
  props: ['background']

}
</script>

<style lang="scss" scoped>
.the-hero {
  &--header {
    display: flex;
    justify-content: center;
    h1 {
      font-size: 19px;
      letter-spacing: 3px;
      margin: 20px;
    }
  }
  &--container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 472px;
    background-size: cover;
    background-position: center center;
  }
  &--content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 32px;

    span strong {
      color: #FFF;
      font-size: 18px;
    }
  }
}
</style>