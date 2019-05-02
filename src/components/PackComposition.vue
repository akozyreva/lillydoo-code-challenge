<template lang="html">
  <section>
    <div class="row">
      <h2 class="text-center">Dein Testpaket enthält</h2>
    </div>
    <div class="row">
      <div class="wrapper-pack-compose">
        <div class="wraper-pack-compose-box" v-for="item in composes">
          <div class="" v-if="item.id ==='napkins'">
                <img :src="getImage(item.imgName1)" alt="">
          </div>
          <div class="" v-else-if="item.id ==='diapers'">
                <img :src="getImage(item.imgName)" alt="">
          </div>
          <h4>{{ item.title }}</h4>
          <ul v-for="point in item.list">
            <li>{{ point }}</li>
          </ul>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      composes: [
        {
          id: 'diapers',
          title: '10 LILLYDOO WINDELN',
          list: ['0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz', '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz'],
          imgName: 'lillydoo-little-blowballs-design-preview-tp.jpg'
        },
        {
          id: 'napkins',
          title: '15 SENSITIVE FEUCHTTÜCHER',
          list: ['0 % Parfüme & PEGs, 100 % biologisch abbaubar', 'Extra dickes und kompostierbares Tuch'],
          imgName1: 'water-wipes-15-small.jpg',
          imgName2: 'sensitive-wipes-15-small.jpg'
        }
      ]
    }
  },
  methods: {
    getImage(imgName) {
      return require(`@/assets/img/${imgName}`)
   }
 }
}
</script>

<style lang="scss" scoped>
</style>
