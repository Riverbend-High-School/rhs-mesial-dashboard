<template>
  <div v-if="loading == false">
    <agile
      :navButtons="false"
      :dots="false"
      :autoplay="true"
      :autoplaySpeed="30000"
      :unagile="slides.length <= 1"
    >
      <div class="slides_container" v-for="slide in slides" :key="slide.id">
        <img class="slides_img" :src="url + slide.path" />
        <h1 class="slides_text">{{ slide.message }}</h1>
      </div>
    </agile>
  </div>
</template>

<script>
import axiosInstance from "../helpers/axiosInstance.ts";
import { VueAgile } from "vue-agile";

export default {
  name: "Slider",
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      slides: [],
      loading: true,
      url: process.env.VUE_APP_APIHOST,
    };
  },
  mounted: function() {
    axiosInstance
      .get("/dashboard/activeslides/")
      .then((response) => {
        this.slides = response.data;
        this.loading = false;
      })
      .catch((error) => console.log(error));
  },
};
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
