<template lang="html">
  <section class="dark">
    <div class="row">
      <h2 class="text-center">Wie es functioniert</h2>
    </div>
    <div class="wrapper-func">
      <div class="wrapper-func-box" v-for="item in infos">
        <img v-bind:src="imgUrl(item.imgName)" alt="">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="row, text-center">
      <a href="#" class="turquoise-color">Erfahre hier mehr über das <br />
LILLYDOO Windel-Abo.</a>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      infos: [
        {
          title: 'DEIN TESTPAKET',
          description: 'Wir schenken Dir die Produkte, Du übernimmst nur das Porto.',
          imgName: 'lillydoo-your-trialbox-icon'
        },
        {
          title: 'DEINE FLEXIBILITÄT',
          description: 'Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen.',
          imgName: 'lillydoo-your-flexibility-icon'
        },
        {
          title: 'DEINE MONATSBOX',
          description: 'Jederzeit Designs oder Lieferintervalle anpassen oder die Windelgröße ändern.',
          imgName: 'lillydoo-your-subscription-icon'
        }
      ]
    }
  },
  methods: {
    imgUrl(path) {
      return require(`@/assets/img/${path}.svg`)
   }
 }
}
</script>

<style lang="scss" scoped>
.wrapper-func {
  position: relative;
  overflow: hidden;
  display: flex;
  text-align: center;

  .wrapper-func-box {
    width: 33%;
    padding: 1.5rem 0;
    margin: 0 5rem
  }
}
</style>
