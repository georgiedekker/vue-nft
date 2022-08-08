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
import { store, updateLocalStorage } from '@/store.js';
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
  methods: {
  onBeforeMount(){
    if(localStorage.getItem('buttonMessage')=="Sign out of MetaMask"){store.buttonMessage = "Sign out of MetaMask";}
  }
  },
  onUpdated(){
  updateLocalStorage()
  },
  onBeforeUnmount(){
  updateLocalStorage()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
nav{
text-align: center;
font-size:1.3em;
}
.homeGroup {
  display: flex;
  flex-flow: row;
  flex-basis: 33.3333%;
  justify-content: space-evenly;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
.home-item {
  width: 33.333%;
  max-width: 20em;
}
.home-item-button {
  display: inline-block;
  text-align: center;
  font-size:0.9em;
  background-color:#2c3e50;
  color:#fff;
}
.home-item-button:hover {
  background-color: #fff;
  color: #2c3e50;
}
.first {
  clear: both;
  display: flex;
  flex-flow: column wrap;
  box-align: left;
  min-width:10em;
  margin: 0px;
}
img#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  filter: hue-rotate(45deg);
  transition: all 6.5s;
  transform: rotate(180deg);
}
img#logo:hover {
  text-align: left;
  filter: hue-rotate(180deg);
  transition: all 6.5s;
  transform: rotate(0deg);
}
</style>
