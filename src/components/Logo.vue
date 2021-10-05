
<template>
  <div class="logo_container">
    <img class="logo_img" src="../assets/logo.png"/>
    <div class="logo_text">
      <h1 class="logo_text">RHS Bears <br/>
                            Mesial Dashboard</h1>
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

.logo_container {
  display: flex;
  align-items: center;
  height: 15vh;
}

.logo_text {
  /* font-size: 1.85em; */
  font-size: 50px;
  text-align: left;
  line-height: 90%;
}

.logo_img {
    height: 100%;
    float: left;
}

</style>
