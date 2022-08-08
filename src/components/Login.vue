<template>
<button class="home-item-button" @click="toggleButton">
            {{ store.buttonMessage }}
          </button>

          </template>
<script>
  import { store, updateLocalStorage } from '@/store.js';
  import { getLocation } from '@/components/Location.vue';
  import { ethers } from "ethers";
export default {
  name: "Login",
data() {
    return {
      // buttonMessage: store.buttonMessage?store.buttonMessage:"Login with MetaMask",
      // userWalletId: store.userWalletId?store.userWalletId:this.userWalletId,
      // contracts: store.contracts?store.contracts:this.contracts,
      store
    };
  },
  // props:["userWalletId"],
  methods: {
    async toggleButton() {
      if (store.userWalletId == "" || store.userWalletId == undefined) {
        getLocation()
        this.loginWithMetaMask();
        // return store;
        // this.$router.push('/map');
      } else {
        store.buttonMessage = "Sign out of MetaMask";
        this.signOutOfMetaMask();
        return store;
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
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let balance = await provider.getBalance(accounts[0])
    store.balance = parseFloat(ethers.utils.formatEther(balance)).toPrecision(6)
    store.transactionCount = await provider.getTransactionCount(accounts[0])
    // console.log(store.balance)
      store.buttonMessage = "Sign out of MetaMask";
      store.userWalletId = accounts[0];
      // console.log(JSON.stringify(accounts))
      // let dataList = [];
      // store.userWalletId = "0xBe8994684D2a570a84c3AC28459bC83E7d80e3b9";
      fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${store.userWalletId}&offset=0&limit=300`
      ).then((response) =>
        response.json().then((data) => {
          // for (let i = 0; i < data.length; i++) {
          //   dataList.push(data[i].name);
          // }
          store.collections = data;
      updateLocalStorage();
        }));
      fetch(
      `https://testnets-api.opensea.io/api/v1/assets`).then((response) =>
        response.json().then((data) => {
        console.log(data.assets[0]);
      }));
      return store;
    },
    signOutOfMetaMask() {
      localStorage.clear()
      for(let i=0;i<Object.keys(store).length;i++){
      store[Object.keys(store)[i]] = null
      }
      store.buttonMessage = "Login with MetaMask";
      store.gettingLocation = true;
      // updateLocalStorage()
      return store;
    },
  },
};

</script>