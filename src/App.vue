<template>
  <div id="app">
    <Teaser/>
    <section>
      <div class="row">
        <div class="left-wrapper">
          <ImgDiaper :index=isActive+1></ImgDiaper>
        </div>
        <div class="right-wrapper">
          <ChoosePack></ChoosePack>
        </div>
      </div>
    </section>
    <InfoFunction/>
  </div>
</template>

<script>

import ImgDiaper from './components/ImgDiaper.vue'
import ChoosePack from './components/ChoosePack.vue'
import Teaser from './components/Teaser.vue'
import InfoFunction from './components/InfoFunction.vue'

export default {
  name: 'app',
  components: {
    ImgDiaper,
    ChoosePack,
    Teaser,
    InfoFunction
  }
}
</script>

<style  lang="scss">


#app {
  font-family: "Cera-Regular",Arial,sans-serif;


  .left-wrapper{
    position: relative;
    overflow: hidden;
    width: 50%;
    float: left;
  }

  .right-wrapper,{
    width: 41%;
    float: right;

  }

}
</style>
