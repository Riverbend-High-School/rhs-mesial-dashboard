<template>
  <div class="block_container">
    <h1 class="block_text">{{ json.block }}</h1>
  </div>
</template>

<script>
  import axiosInstance from "../helpers/axiosInstance.ts"
  export default {
    name: 'Block',
    data() {
      return {
        events: [],
        count_interval: null,
        loading: true,
      };
    },
    mounted: function() {
      this.loading = true;
      this.getBlock();
      this.count_interval = setInterval(() => {
        this.getEvents();
      }, 60000);
    },
    methods: {
      getEvents() {
        axiosInstance
          .get("/schedule/")
          .then((response) => {
            this.events = response.data;
            this.loading = false;
          })
          .catch((error) => console.error(error));
      },
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