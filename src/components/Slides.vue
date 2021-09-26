<template>
    <div name='fade' class="slides_container" v-if="loading == false" >
      <img class="slides_img" :src="currentSlide.path" />
      <h1 class="slides_text">{{ currentSlide.message }}</h1>
    </div>
</template>

<script>
  import axiosInstance from "../helpers/axiosInstance.ts"
  export default {
    name: 'Slider',
    data() {
      return {
        json: [],
        currentIndex: 0,
        count_interval: null,
        loading: true,
      }
    },
    mounted: function() {
      axiosInstance
        .get('/dashboard/activeslides')
        .then(response => {this.json = response.data; this.loading=false;})
        .catch(error => console.log(error))
      this.getSlides();
    },
    methods: {
      getSlides() {
        this.count_interval = setInterval(() => {
          this.currentIndex += 1
        }, 5000);
      },
    },
    computed: {
      currentSlide: function() {
        return {
          "message": this.json[Math.abs(this.currentIndex) % this.json.length].message,
          "path": "http://localhost:8000" + this.json[Math.abs(this.currentIndex) % this.json.length].path,
        }
      }
    }
  }
</script>

<style>
  .slides_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
  }

  .slides_img {
      height: 70%;
      border-radius: 45px;
    } 
  
  .slides_text {
    font-size: 6vh;
  }
</style>