<template>
  <div>
    <div class="homeGroup">
      <div class="home-item">
        <div class="first">
          <img id="logo" alt="Vue logo" src="@/assets/logo.png" />
          <br />
          <br />
        </div>
      </div>

      <div class="home-item" v-if="store.contracts">
        <Location v-if="store.userWalletId" />
      </div>
      <div class="map">
        
      </div>
    </div>

    <br />
  </div>
  <MapRender />
</template>

<script>
import MapRender from "@/components/MapRender.vue";
import Location from "@/components/Location.vue";
import { store } from '@/store.js';
export default {
  name: "Map",
  // props:["userWalletId", "contracts", "location"],
  components: {
    MapRender,
    Location,
  },
  data() {
    return {
      store
    };
  },
  methods: {
  },
};
</script>

<style>
</style>