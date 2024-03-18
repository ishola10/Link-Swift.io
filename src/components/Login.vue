<template>
  <div class="temp">
    <div class="login">
      <img class="logo" src="@/assets/images/logo.png" alt="" srcset="" />
      <h2>
        Welcome to <strong style="color: yellow">LinkSwift.io!!</strong> let's
        get started
      </h2>
      <h3>Login</h3>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input v-model="email" type="email" required />
        <label for="password">Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
      <br />
      <div>
        <router-link class="signup-link" to="/signup-page"
          >Don't have an account? Sign up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router/index";

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

const login = async () => {
  loading.value = true;
  errorMessage.value = "";
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("User logged in successfully");
    router.push("/home");
  } catch (error) {
    console.error("Error logging in:", error.message);
    errorMessage.value = "Invalid email or password";
  } finally {
    loading.value = false;
  }
};
</script>

<style>
.temp {
  background-image: url("../assets/images/link-swift.io-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
.login {
  width: 300px;
  margin: 0 auto;
  margin-top: 3%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}
.login .logo {
  width: 100px;
  display: block;
  margin: 0 auto;
}
.login h2 {
  margin-bottom: 20px;
  text-align: center;
  color: blue;
}
.login h3 {
  margin-bottom: 20px;
  /* text-align: center; */
  color: yellow;
}
.login form {
  display: flex;
  flex-direction: column;
}
.login label {
  text-align: left;
  display: block;
  color: blue;
}

.login input {
  width: 93%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
}
.login button:hover {
  background-color: darkblue;
}
.login .error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
.sign-up-text {
  text-align: center;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}
</style>
