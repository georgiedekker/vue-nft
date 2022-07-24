<template>
  <div v-if="contracts">
    <div v-if="location">
      <p>
        latitude {{ location.latitude }} longtitude {{ location.longtitude }}
      </p>
      <p>
        heading {{ location.heading ? location.heading : "nowhere" }} with speed
        {{ location.speed ? location.speed : "no speed" }}
      </p>
    </div>
    <!-- <button v-if="userWalletId" @click="checkChat()" :href="chat" target="_blank">Chat</button> -->
    <button v-if="userWalletId" @click="checkChat()">Chat</button>

    <h3>Here are your contracts</h3>
    <li v-for="(contract, index) in contracts" :key="contract">
      {{ index + 1 }} - {{ contract }}
    </li>
  </div>
  <!-- v-if="contracts" -->
</template>

<script>
export default {
  name: "Contracts",
  props: ["contracts", "userWalletId"],
  methods: {
    checkChat() {
      if (this.userWalletId) {
        //       window.open(`https://chat.blockscan.com/index?a=${this.userWalletId.toString()}`,'_blank');
        window.open("https://chat.blockscan.com/connect-wallet", "_blank");
        console.log('userWalletId found')
      }
    },
  },
  //   computed(){contracts = this.getContracts()},
  data() {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null,
      chat: null,
      //       contractsUrl: this.contracts,
    };
  },
  created() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = {
          latitude: pos.coords.latitude,
          longtitude: pos.coords.longitude,
          heading: pos.coords.heading,
          speed: pos.coords.speed,
        };
        console.log(pos);
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
};
</script>
