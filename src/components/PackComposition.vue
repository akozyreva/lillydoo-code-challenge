<template lang="html">
  <section>
    <div class="row">
      <h2 class="text-center">Dein Testpaket enthält</h2>
    </div>
    <div class="row">
      <div class="wrapper-pack-compose">
        <div class="wraper-pack-compose-box" v-for="item in composes">
          <div class="wraper-pack-compose-box-img" v-if="item.id ==='napkins' && position < 4">
                <img :src="getImage(item.imgName1)" alt="">
          </div>
          <div class="wraper-pack-compose-box-img" v-else-if="item.id ==='napkins' && position >= 4">
                <img :src="getImage(item.imgName2)" alt="">
          </div>
          <div class="wraper-pack-compose-box-img" v-else-if="item.id ==='diapers'">
                <img :src="getImage(item.imgName)" alt="">
          </div>
          <div class="wrapper-pack-compose-box-text">
            <h4>{{ item.title }}</h4>
            <ul>
              <li
              v-for="point in item.list"
              >
                {{ point }}</li>
            </ul>
          </div>

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
          list: ['0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz', 'Extra weich und mit idealer Passform'],
          imgName: 'lillydoo-little-blowballs-design-preview-tp.jpg'
        },
        {
          id: 'napkins',
          title: '15 SENSITIVE FEUCHTTÜCHER',
          list: ['0 % Parfüme & PEGs, 100 % biologisch abbaubar', 'Extra dickes und kompostierbares Tuch'],
          imgName1: 'water-wipes-15-small.jpg',
          imgName2: 'sensitive-wipes-15-small.jpg'
        }
      ],
      position: 1
    }
  },
  mounted () {
    this.$eventHub.$on('emittedEvent',  data => {
             this.position = data;
         });
   },
  methods: {
    getImage(imgName) {
      return require(`@/assets/img/${imgName}`)
   }
 }
}
</script>

<style lang="scss" scoped>
  .wraper-pack-compose-box-img {
    width: 13rem;

    img {
      display: inline-block;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .wrapper-pack-compose {
    @include screen-md-min {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  .wrapper-pack-compose, .wraper-pack-compose-box {
    position: relative;
    overflow: hidden;
    display: flex;
  }

  .wraper-pack-compose-box, .wrapper-pack-compose-box-text {
    margin-left: 2rem;
  }

  .wraper-pack-compose-box {
    @include screen-md-min {
      margin-left: 0;
    }
  }
  .wraper-pack-compose-box-text {
    @include screen-md-min {
      margin-left: 1rem;
      padding: 1rem;
    }
  }


</style>
