
<template>
  <div style="width: 100%; height: 100%;">
    <img src="../assets/logo.jpg" alt="Riverbend Bearclaw">
    <div class="logo_text">
      <h1>Riverbend</h1>
      <h1>Bears</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
      class : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 100%;
  float: left;
}

.logo_text {
  text-align: center;
}

</style>
