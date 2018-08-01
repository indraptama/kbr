import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Routes
import Home from './Views/Home.vue';
import News from './Views/News.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#App',
  router,
  render: h => h(App)

});