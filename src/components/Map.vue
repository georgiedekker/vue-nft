<template>
<div></div>
</template>
<script>
export default {
  name: "Map",
  props: [],
  methods: {
    initMap() {
    },
    async displayMap() {},
  },
  data() {
    return {
      key: "AIzaSyBdf_c6O6u0Bu-6WffKoLXYTywdvdgVS_w",
      url: `https://maps.googleapis.com/maps/api/js?key=${this.key}&callback=initMap`,
    };
  },
};
</script>