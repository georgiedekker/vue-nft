<template>
  <div v-if="contracts">
    <h3>Here are your contracts</h3>
    <li v-for="(contract, index) in contracts" :key="contract">
      {{ index + 1 }} - {{ contract }}
    </li>
  </div>
</template>

<script>
// import worldcities from "@/assets/worldcities.json";

export default {
  name: "Contracts",
  props: ["contracts", "userWalletId"],
  methods: {
    
  },
  //   computed(){contracts = this.getContracts()},
  data() {
    return {
      location: null,
      chat: null,
    };
  },
  created() {
},
}
</script>
