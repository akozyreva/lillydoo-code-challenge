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
  props: {
    index: {
      type: Number
   }
  },
  data () {
  return {
      position: this.index
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
  },
  created: function () {
   this.position = 1
 }
}
</script>

<style lang="scss" scoped>
  img.oekotex-logo {
    position: absolute;
    top: 10%;
    left: 9%;
    z-index: 10;
    width: 27%;
    max-width: 100%;
    display: inline-block;
    height: auto;
  }

  .slider {
    display: block;
    position: relative;
    margin-top: -4%;
    z-index: -2;
    float: left;

    img {
      max-width: 100%
    }
  }
</style>
