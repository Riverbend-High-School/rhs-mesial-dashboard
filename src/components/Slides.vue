<template>
  <div class="slides_container">
    <img class ="slides_img" src="../assets/bear.png" />
    <h1 class="slides_text"> {{ org_name }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Slides',
    props: {
        org_name: {
          type: String,
          default: "Riverbend Computer Science",
        }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slides_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
  }

  .slides_img {
      font-size: 6vh;
      height: 70%;
      border-radius: 45px;
    } 
  
  .slides_text {
    font-size: 6vh;
  }
  


</style>