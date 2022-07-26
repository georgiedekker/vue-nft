<template>
  <div v-if="contracts">
    <button v-if="userWalletId" @click="checkChat()">Chat</button>
    <br />
    

    <h3>Here are your contracts</h3>
    <li v-for="(contract, index) in contracts" :key="contract">
      {{ index + 1 }} - {{ contract }}
    </li>
  </div>
  <!-- v-if="contracts" -->
</template>

<script>
// import worldcities from "@/assets/worldcities.json";

export default {
  name: "Contracts",
  props: ["contracts", "userWalletId"],
  methods: {
    checkChat() {
      if (this.userWalletId) {
        //       window.open(`https://chat.blockscan.com/index?a=${this.userWalletId.toString()}`,"_blank");
        window.open("https://chat.blockscan.com/connect-wallet", "_blank");
        console.log("userWalletId found");
      }
    },
  },
  //   computed(){contracts = this.getContracts()},
  data() {
    return {
      location: null,
      chat: null,
    };
  },
  created() {
},
}
</script>
