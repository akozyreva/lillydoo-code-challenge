<template>
  <div id="app">
    <div class="left-wrapper">
      <img alt="Oeko-Tex Certificate" src="./assets/img/oekotex_de.png" class="oekotex-logo">
      <div class="wrapper-slider">
        <ul class="slides">
          <li class="slide" style="opacity: 1" v-for="index in 5">
            <img :src="getImage(index)" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="right-wrapper">
      <h2>Unser gratis Testpaket</h2>
      <div class="pack-container">
        <p class="subtitle">Wähle Deine Größe</p>
        <ul class="trial-pack-wrapper">
          <li v-for="(pack, index) in trialPacks" :key="index"
           @click="isActive=index"
           v-bind:class="{ active: isActive === index }"
          >
            <p>{{ index + 1}}</p>
            <span>  {{ pack }}</span>
          </li>
        </ul>
      </div>
      <p>Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.</p>
      <ul class="product-list">
        <li class="turquoise-color">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</li>
        <li>Preise inkl. MwSt., ggf. zzgl.
          <a href="#" class="turquoise-color">Versandkosten</a>
          </li>
      </ul>
      <div class="wrapper-button">
        <button type="button" name="button">
          <span>In den Warenkorb legen</span>
        </button>
      </div>
    </div>
<!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function () {
   return {
     isActive: undefined,
     trialPacks: ['(2-3 KG)', '(3-4 KG)', '(4-7 KG)', '(7-10 KG)', '(10-12 KG)']
   }
 },
 methods: {
   getImage(index) {
  return require(`./assets/img/lillydoo-testpaket-${index}0.jpg`)
  }
 }
}
</script>

<style  lang="scss">

%active-pack {
  background-color: $turquoise;
  color: #fff;
  border-color: $turquoise;
}


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
  }

  .right-wrapper,{
    width: 41%;
    float: right;

    .pack-container {
      margin-bottom: 30px;
    }
  }

  .subtitle {
    text-transform: uppercase;
    line-height: 1.4;
    font-weight: 400;
    font-size: .938rem;
  }

  ul.trial-pack-wrapper {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    line-height: 1.4;

    > li:hover {
      @extend %active-pack;
      cursor: pointer;
    }

    li {
      color: $grey;
      border: 1px solid $grey;
      text-align: center;
      width: 30%;
      padding: 7px 5px 2px 5px;
      margin-right: 10px;
      position: relative;

      p {
        font-size: 1.3rem;
        line-height: 1;
        margin: 0;
      }

      span {
        font-size: .8rem;
      }
    }
    li.active {
      @extend %active-pack;
    }
  }

  .product-list {
    margin-left: 1.1rem;
    line-height: 1.4;
    font-size: .938rem;

    .turquoise-color {
      color: $turquoise;
    }
  }

  .wrapper-button {
    margin: 20px 0;

     :hover {
      cursor: pointer;
      background-color: #99dfdd;
    }

    button {
      width: 100%;
      padding: 0 20px;
      height: 45px;
      min-width: 16rem;
      text-transform: uppercase;
      background-color: $turquoise;


      span {
        font-size: 1.063rem;
        color: #fff;
      }
    }
  }
}
</style>
