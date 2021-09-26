<template>
  <h1>1234567890123456789012345</h1>
</template>

<script>
export default {
  name: 'Notice',
  props: {
      class : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    font-size: 8vh; /* Max character length for 8vh: 25 characters one line, 4vh: 50 characters two lines*/
  }
</style>
