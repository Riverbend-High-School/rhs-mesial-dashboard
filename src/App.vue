<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">

  <div class="container-fluid text-white" style="min-height:100%; font-family: 'Ubuntu', serif; overflow: hidden;">
    <div class="row">
      <!-- Left Column -->
      <div class="col-4" style="background:#235234;"> 
          <div class="top_row">
            <Logo></Logo>
          </div>
          <div class="middle_row">
            <Events></Events>
          </div>
          <div class="bottom_row">
            <Block></Block>
          </div>
      </div>

      <!-- Right Column -->
      <div class="col-8" style="background:#103779;">
          <div class="top_row">
            <Clock></Clock>
          </div>
          <div class="middle_row">
            <Slides></Slides>
          </div>
          <div class="bottom_row">
            <Notice></Notice>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Clock from './components/Clock.vue'
import Events from './components/Events.vue'
import Slides from './components/Slides.vue'
import Block from './components/Block.vue'
import Notice from './components/Notice.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Clock,
    Events,
    Slides,
    Block,
    Notice,
  },
  methods: {
    throwError() {
      throw new Error('Sentry Error');
    }
  }
}
</script>

<style scoped>
  div {
    margin: 0px 0px 0px 0px;
    padding: 0px;
  }

  h1 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px;
  }

  .top_row {
    background:rgba(0, 0, 0, 0.55); 
    height:15vh;
  }

  .middle_row {
    height:75vh;
  }

  .bottom_row {
    background:rgba(0, 0, 0, 0.55); 
    height:10vh;
  }
</style>