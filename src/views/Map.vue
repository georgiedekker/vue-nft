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

      <div class="home-item" v-if="contracts">
        <Location v-if="userWalletId" />
      </div>
      <div class="map">
        <MapRender :contracts="contracts" :userWalletId="userWalletId" />
      </div>
    </div>

    <br />
  </div>
  <MapRender :location="location" />
</template>

<script>
import MapRender from "@/components/MapRender.vue";
import Location from "@/components/Location.vue";
export default {
  name: "Map",
  props:["userWalletId", "contracts", "location"],
  components: {
    MapRender,
    Location,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
</style>