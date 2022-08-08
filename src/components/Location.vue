<template>
  <div v-if="store.location.latitude">
    <p>
      latitude {{ store.location.latitude }} longitude
      {{ store.location.longitude }}
    </p>
    <p>
      heading {{ store.location.heading }} with
      {{ store.location.speed +"miles per hour" ? store.location.speed : "no speed" }}
    </p>
    <!-- <div v-if="topCities"> -->
    <h3>Closest Cities</h3>
    <h4>You are in {{ store.nearestCity.country }}</h4>
    <li v-for="(topCity, index) in store.topCities" :key="topCity">
      {{ index + 1 }} - {{ topCity.city_ascii }} {{ topCity.d }} miles away in
      {{ topCity.country }}
    </li>
  </div>
</template>

<script>
import worldCities from "@/assets/worldcities.json";
import { store, updateLocalStorage } from '@/store.js';
export default {
  name: "Location",
  props: [],
  data() {
    return {
      // nearestCity: store.nearestCity,
      // topcities: store.topCities,
      // gettingLocation: false,
      // errorStr: null,
      // location: store.location,
      // getLocation: store.getLocation(),
      store
      // watchID: null,
    };
  },
  methods: {
    // showLocation(pos) {
    //   this.location = {
    //         latitude: pos.coords.latitude,
    //         longitude: pos.coords.longitude,
    //         heading: pos.coords.heading,
    //         speed: pos.coords.speed,
    //       };
    // },
    // errorHandler(err) {
    //   console.log(err.code);
    // },
    
    
  created() {
    //do we support geolocation
  },
  mounted() {
    // if (navigator.geolocation) {
    //   let options = { timeOut: 60000 };
    //   this.geoLoc = navigator.geolocation;
    //   this.WatchId = this.geoLoc.watchPosition(
    //     this.showLocation,
    //     this.erroHandler,
    //     options
    //   );
    // }
    // this.$nextTick(function () {
    //   window.setInterval(() => {
    //     this.getLocation();
    //   }, 1000000);
    // });
  },
  beforeUnmount(){
    updateLocalStorage()
  }
}
}


export async function getLocation() {
  if(store.location){return store}
  store.gettingLocation = true;
  store.errorStr = null;
  store.location = {};
      if (!("geolocation" in navigator)) {
        store.errorStr = "Geolocation is not available.";
        return;
      }
      store.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          store.gettingLocation = false;
          store.location = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            heading: pos.coords.heading,
            speed: pos.coords.speed,
          };
          // store.location = store.location;
          // console.log(store.store)
          switch (store.location.heading) {
            case store.location.heading < 90:
              store.location.heading = "north";
              break;
            case store.location.heading >= 90 && store.location.heading < 180:
              store.location.heading = "east";
              break;
            case store.location.heading >= 180 && store.location.heading < 270:
              store.location.heading = "south";
              break;
            case store.location.heading >= 270:
              store.location.heading = "west";
              break;
            default:
              store.location.heading = "nowhere";
              break;
          }
          getNearbyCity(pos);
          // updateLocalStorage()
          // return store
        },
        (err) => {
          store.gettingLocation = false;
          store.errorStr = err.message;
        }
      );
      updateLocalStorage()
    // return 
    //   store
    ;
    
}

export async function getNearbyCity(pos) {
      if(store.nearestCity!=null){return store}
              let R = 3958.8;
              let query = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              };
              let cities = [];
              let topCities = [];
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
                  cities[0].d = d.toFixed(2);
                  topCities.push(cities[0]);
                }
              }
              // console.log(this.topCities.length);
              topCities = topCities
                .sort(sortDistance)
                .sort(sortDistance);
              topCities = topCities.slice(0, 7);
              store.topCities = topCities;
              store.nearestCity = topCities[0];
              store.country = topCities[0].country;
              updateLocalStorage()
              updateLocalStorage()
              // localStorage.setItem('topCities',JSON.stringify(store.topCities))
              // return store
            }
            export function sortDistance(a, b) {
              if (parseInt(a.d) < parseInt(b.d)) {
                return -1;
              }
              if (parseInt(a.d) > parseInt(b.d)) {
                return 1;
              }
              return 0;
            }

</script>
