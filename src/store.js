// store.js
import { reactive } from 'vue'

export const store = reactive({
  location: {},
  userWalletId: String,
  contracts: [],
  country: String,
  nearestCity: {},
  topCities: [],
});