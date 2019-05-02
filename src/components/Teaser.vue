<template lang="html">
  <section class="trialbox-teaser">
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
