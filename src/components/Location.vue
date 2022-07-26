<template>
  <div v-if="location">
    <p>latitude {{ location.latitude }} longitude {{ location.longitude }}</p>
    <p>
      heading {{ location.heading }} with speed
      {{ location.speed ? location.speed : "no speed" }}
    </p>
    <!-- <div v-if="topCities"> -->
    <h3>Closest Cities</h3>
    <h4>You are in {{ nearestCity.country }}</h4>
    <li v-for="(topCity, index) in topCities" :key="topCity">
      {{ index + 1 }} - {{ topCity.city_ascii }} {{ topCity.d }} miles away in
      {{ topCity.country }}
    </li>
    <!-- </div> -->
  </div>
  <!-- <button v-if="userWalletId" @click="checkChat()" :href="chat" target="_blank">Chat</button> -->

  <!-- v-if="contracts" -->
</template>

<script>
import worldCities from "@/assets/worldcities.json";
export default {
  name: "Location",
  props: [],
  methods: {
    getLocation() {
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
            longitude: pos.coords.longitude,
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
          }
          this.getNearbyCity(pos);
        },
        (err) => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    },
    getNearbyCity(pos) {
      let R = 3958.8;
      let query = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      let cities = [];
      this.topCities = [];
      this.nearestCity = {};
      for (let i = 0; i < worldCities.length; i++) {
        let difflat = Math.abs(
          worldCities[i].lat * (Math.PI / 180) - query.lat * (Math.PI / 180)
        );
        let difflon =
          Math.abs(query.lng - worldCities[i].lng) * (Math.PI / 180);
        let d =
          2 *
          R *
          Math.asin(
            Math.sqrt(
              Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                Math.cos(query.lat) *
                  Math.cos(worldCities[i].lat) *
                  Math.sin(difflon / 2) *
                  Math.sin(difflon / 2)
            )
          );
        if (!isNaN(d)) {
          cities = [worldCities[i]];
          cities[0].d = d.toFixed(2)
          this.topCities.push(cities[0]);
        }
      }
      console.log(this.topCities.length)
      this.topCities = this.topCities
        .sort(this.sortDistance)
        .sort(this.sortDistance);
      this.topCities = this.topCities.slice(0, 15);
      //       this.topCities = this.topCities.sort(function(x,y){x.d - y.d; console.log(x.d+" "+y.d)})
      //       console.log(cities.length);
      //       console.log(this.topCities);
      this.nearestCity = this.topCities[0];
      //       console.log(this.nearestCity.worldCity.city_ascii);
    },
    sortDistance(a, b) {
      if (parseInt(a.d) < parseInt(b.d)) {
        return -1;
      }
      if (parseInt(a.d) > parseInt(b.d)) {
        return 1;
      }
      return 0;
    },
  },
  data() {
    return {
      //       cities: [],
      nearestCity: null,
      //       countryCities: [],
      topcities: [],
      gettingLocation: false,
      errorStr: null,
      location: null,
    };
  },
  created() {
    //do we support geolocation
  },
  mounted: function () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.getLocation();
      }, 1000);
    });
  },
};
</script>
