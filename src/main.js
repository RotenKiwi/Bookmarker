import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Wu4PSwjXuPVAuRyfR6nOTXn5jpYfJT8",
  authDomain: "bookmarker-84791.firebaseapp.com",
  projectId: "bookmarker-84791",
  storageBucket: "bookmarker-84791.appspot.com",
  messagingSenderId: "955924992966",
  appId: "1:955924992966:web:cd8a79ed6bab68a3d2d8c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
