<template>
<button class="home-item-button" @click="toggleButton">
            {{ buttonMessage }}
          </button>

          </template>
<script>
export default {
  name: "Login",
data() {
    return {
      buttonMessage: "Login with MetaMask",
      userWalletId: this.userWalletId,
      contracts: this.contracts,
    };
  },
  // props:["userWalletId"],
  methods: {
    async toggleButton() {
      if (this.userWalletId == "" || this.userWalletId == undefined) {
        this.loginWithMetaMask();
      } else {
        this.signOutOfMetaMask();
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
        })
      );
    },
    signOutOfMetaMask() {
      this.userWalletId = "";
      this.buttonMessage = "Login with MetaMask";
      this.contracts = null;
    },
  },
};

</script>