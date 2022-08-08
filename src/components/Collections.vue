<template>
  <div v-if="store.collections">
    <h3>Your Eth Balance: {{ store.balance }} Eth</h3>
    <h4>You did {{ store.transactionCount }} transactions</h4>
    <h3>Here are your collections</h3>
    <li v-for="(collection, index) in store.collections" :key="collection">

     <b> {{ index + 1 }} {{ collection.name }} </b> : <br/><img :src="collection.image_url" :height="50"/><br/>
    </li>
  </div>
</template>

<script>
import { store, updateLocalStorage } from '@/store.js';
export default {
  name: "Collections",
  methods: {
    onUpdated(){
      updateLocalStorage()
    }
  },
  data() {
    return {
      store
    };
  },
}
</script>
