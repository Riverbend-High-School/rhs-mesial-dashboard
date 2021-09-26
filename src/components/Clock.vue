
<template>
  <h1>Clock</h1>
</template>

<script>
  export default {
    name: 'Clock',
    props: {
        class : String
    }
  }

  import moment from 'moment';
  moment().format();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
