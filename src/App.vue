<template>
  <div class="container-fluid text-white" style="min-height:100%;">
    <div class="row">
      <!-- Left Column -->
      <div class="col-4" style="background:#235234;"> 
          <div style="background:rgba(0, 0, 0, 0.55); height:15vh;">
            <Logo></Logo>
          </div>
          <div style="height:75vh;">
            <Events></Events>
          </div>
          <div style="background:rgba(0, 0, 0, 0.55); height:10vh;">
            <Block></Block>
          </div>
      </div>

      <!-- Right Column -->
      <div class="col-8" style="background:#103779;">
          <div style="background:rgba(0, 0, 0, 0.55); height: 15vh;">
            <Clock></Clock>
          </div>
          <div style="height: 75vh;">
            <Slides></Slides>
          </div>
          <div style="background:rgba(0, 0, 0, 0.55); height: 10vh; display: flex; justify-content: center;">
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
</style>