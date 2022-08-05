<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> | 
      <!-- :userWalletId="userWalletId" :contracts="contracts" -->
      <router-link to="/map">Map</router-link> | 
            <login />
    </nav>
    <router-view />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Map from "@/views/Map.vue";
import Login from "@/components/Login.vue";
import { store } from '@/store.js';
export default {
  name: "App",
  components: {
  Login
  },
  views: {
    Home,Map
  },
  data() {
    return {
      store
      // userwalletId: this.userWalletId,
      // contracts: this.contracts
      };
  },
  // props:["location", "userWalletId", "contracts"],
  methods: {},
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
</style>
