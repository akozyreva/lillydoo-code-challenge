<template lang="html">
    <div class="left-wrapper">
      <img alt="Oeko-Tex Certificate" src="@/assets/img/oekotex_de.png" class="oekotex-logo">
      <div class="wrapper-slider">
        <div class="slider">
          <img :src="getImage(position)" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ImgDiaper',
  data () {
  return {
      position: 1
  }
  },
  methods: {
    getImage(index) {
      return require(`@/assets/img/lillydoo-testpaket-${index}0.jpg`)
   }
 },
 mounted () {
   this.$eventHub.$on('emittedEvent',  data => {
            this.position = data;
        });
  }
}
</script>

<style lang="scss" scoped>
.left-wrapper{
  position: relative;
  overflow: hidden;
  width: 50%;
  float: left;
  margin-left: 2rem;

  @include screen-md-min {
    margin: 0 auto;
    width: 100%;
  }
}

  img.oekotex-logo {
    position: absolute;
    top: 10%;
    left: 6%;
    z-index: 10;
    width: 27%;
    max-width: 100%;
    display: inline-block;
    height: auto;
  }

  .slider {
    display: block;
    position: relative;
    z-index: -2;
    float: left;

    img {
      max-width: 93%
    }
  }
</style>
