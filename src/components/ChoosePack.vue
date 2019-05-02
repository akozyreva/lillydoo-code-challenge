<template lang="html">
  <div class="">
    <h2>Unser gratis Testpaket</h2>
    <div class="pack-container">
      <p class="subtitle">Wähle Deine Größe</p>
      <ul class="trial-pack-wrapper">
        <li v-for="(pack, index) in trialPacks" :key="index"
         @click="ActivePack(index)"
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
      <button type="button" name="button" class="button">
        <span>In den Warenkorb legen</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
   return {
     isActive: undefined,
     trialPacks: ['(2-3 KG)', '(3-4 KG)', '(4-7 KG)', '(7-10 KG)', '(10-12 KG)']
   }
 },
 methods: {
   ActivePack(index) {
     this.isActive = index
     this.$eventHub.$emit('emittedEvent', index + 1);
   }
 }
}
</script>

<style lang="scss" scoped>
%active-pack {
  background-color: $turquoise;
  color: #fff;
  border-color: $turquoise;
}

.pack-container {
  margin-bottom: 30px;
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
  margin-bottom: 2rem;

  .turquoise-color {
    color: $turquoise;
  }
}

</style>
