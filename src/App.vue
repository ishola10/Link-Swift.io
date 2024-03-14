<template>
  <div>
    <NavBar :showNavbar="showNavbar" :user="user" />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/firebase-config";

const router = useRouter();
const showNavbar = ref(false); // Initialize to false
const user = ref(null);

auth.onAuthStateChanged((newUser) => {
  user.value = newUser;
  // Show navbar on all pages except signup and login
  showNavbar.value = !["signup", "login"].includes(router.currentRoute.value.name);
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
