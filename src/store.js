// store.js
import { reactive } from 'vue'
// let storeInit = {buttonMessage:"Login with MetaMask"}
// localStorage.setItem('store',JSON.stringify(storeInit))
// export const storeupdate = reactive({})
// if(localStorage.getItem('store')){
// initStore.buttonMessage = JSON.parse(localStorage.getItem('store')).buttonMessage?JSON.parse(localStorage.getItem('store')).buttonMessage:"Login with MetaMask";
// initStore.location = 
// initStore.userWalletId = ;
// initStore.contracts =  ;
// initStore.country = ;
// initStore.nearestCity = ;
// initStore.topCities = ;
// }
// else{
//   initStore.buttonMessage = "Login with MetaMask"
// }
export const store = reactive(
{
  buttonMessage: localStorage.getItem('buttonMessage')?JSON.parse(localStorage.getItem('buttonMessage')):"Login with MetaMask",
  location: localStorage.getItem('location')?JSON.parse(localStorage.getItem('location')):null,
  userWalletId: localStorage.getItem('userWalletId')?JSON.parse(localStorage.getItem('userWalletId')):null,
  contracts: localStorage.getItem('contracts')?JSON.parse(localStorage.getItem('contracts')):null,
  country: localStorage.getItem('country')?JSON.parse(localStorage.getItem('country')):null,
  nearestCity: localStorage.getItem('nearestCity')?JSON.parse(localStorage.getItem('nearestCity')):null,
  topCities: localStorage.getItem('topCities')?JSON.parse(localStorage.getItem('topCities')):null,
}
);
export function updateLocalStorage(){
if(!localStorage.getItem('userWalletId') && store.userWalletId!=null || !localStorage.getItem('nearestCity') && store.nearestCity!=null){
  for(let i=0;i<Object.keys(store).length;i++){
    if(Object.values(store)[i]!=null){
      localStorage.setItem(Object.keys(store)[i], JSON.stringify(Object.values(store)[i]))
    }
  }
  }
}