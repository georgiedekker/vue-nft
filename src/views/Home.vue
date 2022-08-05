<template>
  <div>
    <div class="homeGroup">
      <div class="home-item">
        <div class="first">
          <img id="logo" alt="Vue logo" src="@/assets/logo.png" />
          <br />
          <br />
          <!-- <login /> -->
          <br />
          <button v-if="store.userWalletId" @click="checkChat()">Chat</button>
          <br />
          <RegForm v-if="store.contracts" />
          <br />
          <button v-if="store.userWalletId" @click="submit()">Submit</button>
          <br />
        </div>
      </div>

      <div class="home-item" v-if="store.contracts">
        <Contracts />
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import Contracts from "@/components/Contracts.vue";
// import Login from "@/components/Login.vue";
import RegForm from "@/components/RegForm.vue";
import { store } from '@/store.js';
export default {
  name: "Home",
  components: {
    Contracts,
    RegForm,
    // Login,
  },
  // props:["userWalletId", "contracts"],
  data() {
    return {
      store
    };
  },
  methods: {
    checkChat() {
      if (this.userWalletId) {
        //       window.open(`https://chat.blockscan.com/index?a=${this.store.userWalletId.toString()}`,"_blank");
        window.open("https://chat.blockscan.com/connect-wallet", "_blank");
        console.log("userWalletId found");
      }
    },
    submit() {
      alert("submitted");
    },
  },
};
</script>

<style>
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
}
.first {
  clear: both;
  display: flex;
  flex-flow: column wrap;
  float: left;
  margin: 0px;
}
img#logo {
  float: left;
  display: block;
  width: 100%;
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
