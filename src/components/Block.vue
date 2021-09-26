<template>
  <h1>B7 (Second Lunch)</h1>
</template>

<script>
export default {
  name: 'Block',
  props: {
      class : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    vertical-align: 50%;
    font-size: 6vh; /* Max character length for 6vh: 25 characters one line, 3vh: 50 characters two lines*/
  }
</style>