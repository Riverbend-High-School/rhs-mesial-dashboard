<template>
  <div class="notice_container">
    <h1 class="notice_text">{{ json.message }}</h1>
  </div>
</template>

<script>
  import axiosInstance from "../helpers/axiosInstance.ts"
  export default {
    name: 'Notice',
    data () {
      return {
        json: {},
      }
    },
    mounted () {
      axiosInstance
        .get('/dashboard/msgnotice/')
        .then(response => (this.json = response.data))
        .catch(error => console.log(error))
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
