<template>
    <div id="app">
        <NavBar class="navBar w-100" />
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import firebase from "firebase";
import "firebase/firestore";

import store from "./store";

Vue.use(BootstrapVue);

import NavBar from "@/components/Nav-Bar";
export default {
    name: "app",
    components: {
        NavBar,
    },
};
/*
var config = {
    apiKey: "AIzaSyAt4JfsbELagSUETbDL_cDQCKE1YozWRoU",
    authDomain: "stuy-hacks-jan2020.firebaseapp.com",
    databaseURL: "https://stuy-hacks-jan2020.firebaseio.com",
    projectId: "stuy-hacks-jan2020",
    storageBucket: "stuy-hacks-jan2020.appspot.com",
    messagingSenderId: "93645627147",
    appId: "1:93645627147:web:c8228242e98bb3f7e10c0e"
  };

firebase.initializeApp(config)
*/
var firebaseConfig = {
    apiKey: "AIzaSyCEg8PpXtqZXS2RpiYoEQFQV46ALE4WIIY",
    authDomain: "rate-twitter.firebaseapp.com",
    databaseURL: "https://rate-twitter.firebaseio.com",
    projectId: "rate-twitter",
    storageBucket: "rate-twitter.appspot.com",
    messagingSenderId: "457071178974",
    appId: "1:457071178974:web:5714eecf5f1487662b3e4f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch("fetchUser", user);
});

// firebase utils
</script>

<style>
.navBar {
    top: 0;
    z-index: 10;
    position: fixed;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
