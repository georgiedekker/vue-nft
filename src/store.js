// store.js
import { reactive } from 'vue'

export const initStore = reactive({})
if(localStorage.getItem('store')){
initStore.buttonMessage = JSON.parse(localStorage.getItem('store')).buttonMessage?JSON.parse(localStorage.getItem('store')).buttonMessage:"Login with MetaMask";
initStore.location = JSON.parse(localStorage.getItem('store')).location?JSON.parse(localStorage.getItem('store')).location:null;
initStore.userWalletId = JSON.parse(localStorage.getItem('store')).userWalletId?JSON.parse(localStorage.getItem('store')).userWalletId:null;
initStore.contracts =  JSON.parse(localStorage.getItem('store')).contracts?JSON.parse(localStorage.getItem('store')).contracts:null;
initStore.country = JSON.parse(localStorage.getItem('store')).country?JSON.parse(localStorage.getItem('store')).country:null;
initStore.nearestCity = JSON.parse(localStorage.getItem('store')).nearestCity?JSON.parse(localStorage.getItem('store')).nearestCity:null;
initStore.topCities = JSON.parse(localStorage.getItem('store')).topCities?JSON.parse(localStorage.getItem('store')).topCities:null;
}
else{
  initStore.buttonMessage = "Login with MetaMask"
}
export const store = reactive(
{
  buttonMessage: initStore.buttonMessage,
  location: initStore.location,
  userWalletId: initStore.userWalletId,
  contracts: initStore.contracts,
  country: initStore.country,
  nearestCity: initStore.nearestCity,
  topCities: initStore.topCities,
}
);


// export function storeLocal(){
// for(var item in store){
//   console.log(item)
// }
// }
// export function removeLocal(){
// }