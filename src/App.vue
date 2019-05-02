<template>
  <div id="app">
    <Teaser/>
    <section>
      <div class="row">
          <ImgDiaper></ImgDiaper>
          <ChoosePack/>
      </div>
    </section>
    <InfoFunction/>
    <PackComposition/>
  </div>
</template>

<script>

import ImgDiaper from './components/ImgDiaper.vue'
import ChoosePack from './components/ChoosePack.vue'
import Teaser from './components/Teaser.vue'
import InfoFunction from './components/InfoFunction.vue'
import PackComposition from './components/PackComposition.vue'
import { consoleMessage } from "./shared"

export default {
  name: 'app',
  components: {
    ImgDiaper,
    ChoosePack,
    Teaser,
    InfoFunction,
    PackComposition
  },
   created() { consoleMessage() }
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
    margin-left: 2rem;
  }

  .right-wrapper,{
    width: 41%;
    float: right;
    margin-right: 1rem;
  }

}
</style>
