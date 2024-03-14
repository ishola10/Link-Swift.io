<template>
  <header v-if="showNavbar" class="header">
    <router-link to="/home">
      <img class="img" src="../assets/images/logo.png" alt="LinkSwift Logo" />
    </router-link>
    <div class="header-links">
      <router-link to="/home">LinkSwift</router-link>
      <router-link to="/shorten-url">Shorten Url</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/analytics">Analytics</router-link>
    </div>
    
    <div v-if="user">
      <div v-if="user">
        <router-link to="/profile" class="header-links2">
          <div class="profile-pic-container">
            <img
              :src="user.photoURL || '../assets/default-profile-picture.png'"
              :alt="abbreviateName(user.displayName)"
              class="profile-picture"
              style="width: 60px; height: 60px;"
            />
          </div>
          <span class="user-name">{{ user.displayName }}</span>
          <button class="aa" @click="signout">Logout</button>
        </router-link>
      </div>
      <router-link v-else to="/profile" class="header-links2">
        <button class="aa">Profile</button>
      </router-link>
    </div>
    <div v-else="loading">
      <p>Loading...</p>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { auth } from "@/firebase-config";
import router from "@/router/index";

const route = useRoute();
const loading = ref(true);
const user = ref(null);
const showNavbar = ref(false);

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((newUser) => {
    user.value = newUser;
    updateNavbarVisibility();
    loading.value = false;
  });

  return unsubscribe;
});

const updateNavbarVisibility = () => {
  showNavbar.value = !!user.value && route.name !== "signup" && route.name !== "login";
};

router.afterEach(() => {
  updateNavbarVisibility();
});

const signout = async () => {
  try {
    await auth.signOut();
    console.log("User signed out");
    router.push("/login");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

const abbreviateName = (name) => {
  return name.substring(0, 2).toUpperCase();
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  background-color: white;
  display: flex;
  padding: 10px;
  margin-bottom: 3%;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.header-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.header-links a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 10px 15px;
}
.header-links a:hover {
  color: yellow;
}
.header-links a:focus {
  color: yellow;
  padding: 10px 15px;
  border-bottom: 1px solid yellow;
}
.img {
  width: 100px;
  height: 100px;
}
.header-links2 {
  display: flex;
  /* gap: 0.5rem; */
  align-items: center;
  /* height: 4vh; */
}
.bg {
  text-decoration: none;
}
.header-links2 a {
  text-decoration: none;
  color: blue;
  font-size: 1rem;
}
.header-links2 .a {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid blue;
}
.header-links2 .a:hover {
  background-color: blue;
  color: white;
}
.header-links2 .b {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: blue;
  color: white;
}
.header-links2 .b:hover {
  background-color: white;
  color: blue;
}
.header-links2 a {
  text-decoration: none;
}
.user-name {
  font-size: 1rem;
  color: black;
  /* margin-left: 3px; */
  text-decoration: none;
  font-weight: bold;
  border: 1px solid black;
  padding: 10px;
}
.profile-pic-container {
  /* width: 25%;
  height: 5vh !important; */
  display: flex;
  margin-top: -15%;
}

.profile-picture {
  /* width: 30%;
  height: 10vh; */
  border-radius: 50%;
  border: 1px solid black;
  text-decoration: none;
  display: block;
  margin-top: 45%;
}
.aa {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 10px;
}
.aa:hover {
  background-color: white;
  color: blue;
}
</style>
