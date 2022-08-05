<template>
  <div v-if="store.contracts">
    <h3>Here are your contracts</h3>
    <li v-for="(contract, index) in store.contracts" :key="contract">
      {{ index + 1 }} - {{ contract }}
    </li>
  </div>
</template>

<script>
// import worldcities from "@/assets/worldcities.json";
import { store } from '@/store.js';
export default {
  name: "Contracts",
  // props: ["contracts", "userWalletId"],
  methods: {
    
  },
  //   computed(){contracts = this.getContracts()},
  data() {
    return {
      store
    };
  },
  created() {
},
}
</script>
