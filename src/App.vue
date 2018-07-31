<template lang="pug">
  #app
    <MainHeader />
    h1.fira {{msg}}
</template>

<script>

import MainHeader from "./Components/MainHeader.vue";

export default {
  name: 'app',
  components: {
    MainHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appss!'
    }
  }
}
</script>

