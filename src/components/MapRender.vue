<template>
<div>
<p v-if="store.nearestCity">The location is {{ store.nearestCity.city_ascii }}</p>

</div>
        
</template>
<script>

import { store } from '@/store.js';
export default {
  name: "Map",
  // props: ["location"],
  data() {
    return {
      store
    };
  },
//   methods: {
//     initMap() {
//       let key = '';
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