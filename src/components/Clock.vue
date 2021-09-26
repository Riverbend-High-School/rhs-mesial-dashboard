
<template>
  <div class="clock_container">
    <h1 class="clock_time">{{ current_time }}</h1>
    <h2 class="clock_date">{{ current_day_of_week }} <br> {{ current_date }}</h2>

  </div>

</template>

<script>
  import dayjs from 'dayjs';
  var count_interval = null;
  export default {
    name: 'Clock',
    data () {
      return {
        current_time: "",
        current_day_of_week: "",
        current_date: "",
      }
    },
    methods: {
      get_time() { 
        count_interval = setInterval(() => {
          this.current_time = dayjs().format("h:mm A");
          this.current_day_of_week = dayjs().format("dddd");
          this.current_date = dayjs().format("MMMM DD");
        }, 1000);
      }
    },
    mounted () {
      this.get_time()
    },
    unmount () {
      clearInterval(count_interval);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clock_container {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 15vh;
  }

  .clock_time {
    font-size: 7em;
    padding-left: 0.25em;
  }

  .clock_date {
    font-size: 2em;
    padding-left: 0.25em;
  }
</style>
