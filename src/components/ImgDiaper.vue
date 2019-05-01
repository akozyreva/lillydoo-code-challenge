<template lang="html">
    <div>
      <img alt="Oeko-Tex Certificate" src="@/assets/img/oekotex_de.png" class="oekotex-logo">
      <div class="wrapper-slider">
        <div class="slider">
          <img :src="getImage(index)" alt="">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ImgDiaper',
  props: {
    index: {
      type: Number
   }
  },
  methods: {
    getImage(index) {
      if (isNaN(index)){
        index = 1
      }
      return require(`@/assets/img/lillydoo-testpaket-${index}0.jpg`)
   }
  }
}
</script>

<style lang="scss" scoped>
  img.oekotex-logo {
    position: absolute;
    top: 10%;
    left: 9%;
    z-index: 10%;
    width: 27%;
    max-width: 100%;
    display: inline-block;
    height: auto;
  }

  .slide {
    display: block;
    position: relative;
    margin-top: -8%;
    z-index: -2;
    float: left;

    img {
      max-width: 100%
    }
  }
</style>
