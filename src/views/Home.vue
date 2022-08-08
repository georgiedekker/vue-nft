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
          <RegForm v-if="store.collections" />
          <br />
          <button v-if="store.userWalletId" @click="submit()">Submit</button>
          <br />
        </div>
      </div>

      <div class="home-item" v-if="store.collections">
        <Collections />
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import Collections from "@/components/Collections.vue";
// import Login from "@/components/Login.vue";
import RegForm from "@/components/RegForm.vue";
import { store } from '@/store.js';
import { getLocation } from "@/components/Location.vue";
export default {
  name: "Home",
  components: {
    Collections,
    RegForm,
    // Login,
  },
  // props:["userWalletId", "contracts"],
  data() {
    return {
      store,
      getLocation
    };
  },
  // watch:{
  //   store: {
  //     handler(newValue, oldValue) {
  //     console.log('oldValue: '+JSON.stringify(oldValue))
  //     // if(newValue!=oldValue){
  //     let item = {};
  //     
  //     console.log('store mutation: '+item.name+' '+item.value)
  //       localStorage.setItem(item.name, JSON.stringify(item.value))
  //     }
  //     localStorage.setItem('store', JSON.stringify(newValue))
  //   }
  // },
  //     deep: true,
  // },
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
  // onBeforeMount(){
  //   if(localStorage.getItem('buttonMessage')=="Sign out of MetaMask"){store.buttonMessage = "Sign out of MetaMask";}
  // },
  // updated(){
  // updateLocalStorage()
  // },
};
</script>

<style>
</style>
