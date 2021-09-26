<template>
  <div class="block_container">
    <h1 class="block_text">B7 (Second Lunch)</h1>
  </div>
</template>

<script>

  export default {
    name: 'Block',
    props: {
        class : String
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .block_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;

  }

  .block_text {
    font-size: 6vh;
  } 

</style>