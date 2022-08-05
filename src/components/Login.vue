<template>
<button class="home-item-button" @click="toggleButton">
            {{ buttonMessage }}
          </button>

          </template>
<script>
  import { store } from '@/store.js';
  import { getLocation } from '@/components/Location.vue';
export default {
  name: "Login",
data() {
    return {
      buttonMessage: "Login with MetaMask",
      userWalletId: this.userWalletId,
      contracts: this.contracts,
      store
    };
  },
  // props:["userWalletId"],
  methods: {
    async toggleButton() {
      if (this.userWalletId == "" || this.userWalletId == undefined) {
        this.loginWithMetaMask();
        getLocation()
        // this.$router.push('/map');
      } else {
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
      this.buttonMessage = "Sign out of MetaMask";
      this.userWalletId = accounts[0];
      this.store.userWalletId = this.userWalletId;
      let dataList = [];
//       this.userWalletId = "0xBe8994684D2a570a84c3AC28459bC83E7d80e3b9";
      fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${this.userWalletId}&offset=0&limit=300`
      ).then((response) =>
        response.json().then((data) => {
          for (let i = 0; i < data.length; i++) {
            dataList.push(data[i].name);
          }
          this.contracts = dataList;
          this.store.contracts = this.contracts;
        })
      );
    },
    signOutOfMetaMask() {
      this.userWalletId = "";
      this.buttonMessage = "Login with MetaMask";
      this.contracts = null;
      this.store.userWalletId = this.userWalletId;
      this.store.contracts = this.contracts;
    },
  },
};

</script>