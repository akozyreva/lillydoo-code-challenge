<template>
  <div id="app">
    <section class="trialbox-teaser">
      <div class="row wrapper-teaser-button">
        <h1>Entdecke unsere Hautfreundlichkeit</h1>
        <div class="wrapper-button">
          <a href="#" class="button">Jetzt Deine Größe wählen</a>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="left-wrapper">
        <ImgDiaper :index=isActive+1></ImgDiaper>
      </div>
      <div class="right-wrapper">
        <ChoosePack></ChoosePack>
      </div>
    </div>

<!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

import ImgDiaper from './components/ImgDiaper.vue'
import ChoosePack from './components/ChoosePack.vue'

export default {
  name: 'app',
  components: {
    ImgDiaper,
    ChoosePack
  }
}
</script>

<style  lang="scss">


#app {
  font-family: "Cera-Regular",Arial,sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem 0 2rem 0;
  max-width: 80rem;
  width: 100%;

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

  .trialbox-teaser {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-size: 100%;
    max-width: 100%;
    height: 37vw;
    min-height: 300px;
    max-height: 550px;
    background-repeat: no-repeat;
    background-image: url(./assets/img/lillydoo-testpaket-header-large.jpg);
  }

  .wrapper-teaser-button {
    float: left;
    position: relative;
    max-width: 22rem;
    margin-left: 8rem;
    background-repeat: no-repeat;
  }
}
</style>
