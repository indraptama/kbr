<template lang="pug">
  #app
    <MainHeader />
    <Home />
</template>

<script>

import MainHeader from "./Components/MainHeader.vue";
import Home from './Views/Home.vue';

export default {
  name: 'app',
  components: {
    MainHeader,
    Home
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appss!'
    }
  }
}
</script>

