<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />

    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: {
    
  },
  views:{
    Home
  },
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#app.img {
  transform: rotate(360deg);
  transition: transform 0.5s ease-in-out;
}
</style>
