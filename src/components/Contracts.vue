<template>
  <div v-if="contracts">
    <div v-if="location">
      <p>
        latitude {{ location.latitude }} longtitude {{ location.longtitude }}
      </p>
      <p>
        heading {{ location.heading }} with speed
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
import worldcities from "@/assets/worldcities.json";
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
    getNearbyCity() {
      let R = 3958.8;
      let query = {
        lat: this.location.latitude,
        lng: this.location.longtitude,
      };
      let cities = [{worldcity: 'somewhere',d:R}];
      let topCities = [];
      let nearestCity = {};
      for (let i = 0; i < worldcities.length; i++) {
        let difflat =
          (worldcities[i].lat * (Math.PI / 180)) - (query.lat * (Math.PI / 180));
        let difflon = (query.lng - worldcities[i].lng) * (Math.PI / 180);
        let d =
          2 * R * Math.asin( Math.sqrt(
              Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                Math.cos(query.lat) *
                  Math.cos(worldcities[i].lat) *
                  Math.sin(difflon / 2) *
                  Math.sin(difflon / 2)
            )
          );
        if (!isNaN(d)) {
          if(d<R){
          if(Math.floor(d) < Math.floor(cities[0].d)){
            cities = [{worldcity: worldcities[i],d:d}]
            // cities.push({worldcity: worldcities[i],d:d})
            console.log(cities[0].worldcity.city_ascii+" "+d)
            topCities.push({worldcity:cities[0].worldcity, d:d})
          }}
        }
      }

      console.log(cities.length)
      console.log(topCities)
      nearestCity = cities[0]
      console.log(nearestCity.worldcity.city_ascii)
    }
  },
  //   computed(){contracts = this.getContracts()},
  data() {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null,
      chat: null,
      cities: null,
      worldCities: null,
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
        switch (this.location.heading) {
          case this.location.heading < 90:
            this.location.heading = "north";
            break;
          case this.location.heading >= 90 && this.location.heading < 180:
            this.location.heading = "east";
            break;
          case this.location.heading >= 180 && this.location.heading < 270:
            this.location.heading = "south";
            break;
          case this.location.heading >= 270:
            this.location.heading = "west";
            break;
          default:
            this.location.heading = "nowhere";
            break;
          // heading: pos.coords.heading},
        }
        this.getNearbyCity(pos);
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
};
</script>
