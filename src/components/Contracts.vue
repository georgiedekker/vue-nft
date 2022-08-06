<template>
  <div v-if="store.contracts">
    <h3>Here are your contracts</h3>
    <li v-for="(contract, index) in store.contracts" :key="contract">
      {{ index + 1 }} - {{ contract }}
    </li>
  </div>
</template>

<script>
import { store } from '@/store.js';
export default {
  name: "Contracts",
  methods: {
    
  },
  data() {
    return {
      store
    };
  },
  created() {
},
}
</script>
