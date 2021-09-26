
<template>
  <div class="events_container">
    <h1>👷‍♂️🚧</h1>
    <h2>This section is currently under construction!</h2>
  </div>
</template>

<script>
export default {
  name: 'Events',
  props: {
      class : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .events_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 75vh;
  }
  h1 {
    font-size: 12em;
  }
  h2 {
    font-size: 5em;
  }


</style>
