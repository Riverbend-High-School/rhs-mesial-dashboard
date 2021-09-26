<template>
  <div class="notice_container">
    <h1 class="notice_text">1234567890123456789012345</h1>
  </div>
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
  .notice_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;

  }

  .notice_text {
    font-size: 8vh; /* Max character length for 8vh: 25 characters one line, 4vh: 50 characters two lines*/
  } 
</style>
