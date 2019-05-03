<template lang="html">
  <section class="trialbox-teaser">
  <img class="oekotex-logo" alt="Oeko-Tex Certificate" src="@/assets/img/oekotex_de.png">
    <div class="row wrapper-teaser-button">
      <h1>Entdecke unsere Hautfreundlichkeit</h1>
      <div class="wrapper-button">
        <a href="#" class="button">Jetzt Deine Größe wählen</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
img.oekotex-logo {
  @include quality-sign(3rem, none, 4rem, 13%);

  @include screen-md-min {
    @include quality-sign(21rem, none, 1rem, 20%);
  }

}

.trialbox-teaser {
  //display: flex;
  //justify-content: center;
  //flex-direction: column;
  background-size: 100%;
  max-width: 100%;
  max-height: 37vw;
  height: 100%;
  min-height: 350px;
  max-height: 550px;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/lillydoo-testpaket-header-large.jpg);

  @include screen-md-min {
    background: url(~@/assets/img/lillydoo-testpaket-header-medium.jpg) no-repeat center center;
    justify-content: initial;
    //background-size: 122% 35rem;
    background-size: cover;
    height: 35rem;
    //background-position-x: -5rem;
  }

  @include screen-sm-min {
    background: url(~@/assets/img/lillydoo-testpaket-header-small.jpg) no-repeat center center;
    background-size: cover;
    height: 35rem;
  }

}

.wrapper-teaser-button {
  float: left;
  position: relative;
  max-width: 22rem;
  background-repeat: no-repeat;
  margin-left: 7rem;

  @include screen-md-min {
    max-width: 100%;
    margin-left: 0;
    margin-top: 6rem;
  }

  h1 {
    @include screen-md-min {
      font-size: 2.188rem;
    }
  }

  .wrapper-button a {
    @include screen-md-min {
      display: inline-block;
      margin: 0 auto;
      width: 85%;
      height: 33%;
      padding-top: 1rem;
    }
  }
}
</style>
