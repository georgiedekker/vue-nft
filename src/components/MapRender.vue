<template>
<div>
<p>The location is {{location}}</p>

</div>
        
</template>
<script>

// import {Loader} from "@googlemaps/js-api-loader"
export default {
  name: "Map",
  props: ["location"],
  data() {
    return {
      // key: "AIzaSyBdf_c6O6u0Bu-6WffKoLXYTywdvdgVS_w",
      
    };
  },
//   methods: {
//     initMap() {
//       let key = process.env.APIKEY;
//       let url = `https://maps.googleapis.com/maps/api/js?key=${this.key}&callback=initMap`;
//       let loader = new Loader({apiKey: key})
//     },
//     async displayMap() {},
//   },
//   onMounted(async () => {
//     await loader.load()
//     new google.maps.Map(mapDiv.value, {
//       center: currPos.value,
//       zoom: 7,

//     })
//   })
//   return { currPos, mapDiv }
};
</script>