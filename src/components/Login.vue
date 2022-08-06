<template>
<button class="home-item-button" @click="toggleButton">
            {{ store.buttonMessage }}
          </button>

          </template>
<script>
  import { store, initStore } from '@/store.js';
  import { getLocation } from '@/components/Location.vue';
export default {
  name: "Login",
data() {
    return {
      buttonMessage: store.buttonMessage?store.buttonMessage:"Login with MetaMask",
      userWalletId: store.userWalletId?store.userWalletId:this.userWalletId,
      contracts: store.contracts?store.contracts:this.contracts,
      store
    };
  },
  // props:["userWalletId"],
  methods: {
    async toggleButton() {
      if (store.userWalletId == "" || store.userWalletId == undefined) {
        getLocation()
        this.loginWithMetaMask();
        // this.$router.push('/map');
      } else {
        store.buttonMessage = "Sign out of MetaMask";
        this.signOutOfMetaMask();
        // this.$router.push('/');
      }
    },
    async loginWithMetaMask() {
      const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch((e) => {
          console.error(e.message);
          return;
        });
      if (!accounts) {
        return;
      }
      store.buttonMessage = "Sign out of MetaMask";
      store.userWalletId = accounts[0];
      console.log(JSON.stringify(accounts))
      let dataList = [];
//       this.userWalletId = "0xBe8994684D2a570a84c3AC28459bC83E7d80e3b9";
      fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${store.userWalletId}&offset=0&limit=300`
      ).then((response) =>
        response.json().then((data) => {
          for (let i = 0; i < data.length; i++) {
            dataList.push(data[i].name);
          }
          store.contracts = dataList;
        })
      );
      for(let i=0;i<Object.keys(store).length;i++){
        if(Object.values(store)[i]!=null){
          localStorage.setItem(Object.keys(store)[i], Object.values(store)[i])
        }
      }
    },
    signOutOfMetaMask() {
      localStorage.clear()
      store.userWalletId = null;
      store.buttonMessage = "Login with MetaMask";
      store.contracts = null;
      store.location = null;
      initStore.buttonMessage = "Login with MetaMask";
      initStore.location = null;
      initStore.contracts = null;
      initStore.userWalletId = null;
    },
  },
};

</script>