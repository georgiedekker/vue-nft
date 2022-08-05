// store.js
import { reactive } from 'vue'

export const store = reactive({
  location,
  userWalletId,
  contracts,
  country: String,
  nearestCity,
  topCities,
});