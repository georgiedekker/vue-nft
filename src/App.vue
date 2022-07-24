<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />

    <button @click="toggleButton">{{ buttonMessage }}</button>
    <br />

    <Contracts :contracts="contracts" :userWalletId="userWalletId" />
  </div>
</template>

<script>
import Contracts from "@/components/Contracts.vue";
export default {
  name: "App",
  components: {
    Contracts,
  },
  data() {
    return {
      buttonMessage: "Login with MetaMask",
      userWalletId: this.userWalletId,
      contracts: this.contracts,
    };
  },
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
      this.userWalletId = "0xBe8994684D2a570a84c3AC28459bC83E7d80e3b9";
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
