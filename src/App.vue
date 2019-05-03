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
body {
  padding: 0;
  margin: 0;
  font-size: .938rem;
}

#app {
  font-family: "Cera-Regular",Arial,sans-serif;
  margin: 0;
.row {
  @include screen-md-min {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
}
</style>
