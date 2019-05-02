<template lang="html">
  <section class="trialbox-teaser">
    <img alt="Oeko-Tex Certificate" src="@/assets/img/oekotex_de.png">
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
img {
  position: absolute;
  width: 13%;
  top: 3rem;
  right: 4rem;
}

.trialbox-teaser {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: 100%;
  max-width: 100%;
  max-height: 37vw;
  height: 100%;
  min-height: 350px;
  max-height: 550px;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/lillydoo-testpaket-header-large.jpg);
}

.wrapper-teaser-button {
  float: left;
  position: relative;
  max-width: 22rem;
  margin-left: 8rem;
  background-repeat: no-repeat;
}
</style>
