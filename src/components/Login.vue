<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input v-model="email" type="email" required />
      <label for="password">Password:</label>
      <input v-model="password" type="password" required />
      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>
    </form>
    <div>
      <router-link class="signup-link" to="/signup">Don't have an account? Sign up</router-link>
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

const login = async () => {
  loading.value = true;
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("User logged in successfully");
    router.push("/home");
  } catch (error) {
    console.error("Error logging in:", error.message);
  } finally {
    loading.value = false;
  }
};
</script>


<style>
.login {
  max-width: 350px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login h2 {
  margin-bottom: 20px;
  text-align: center;
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
.sign-up-text {
  text-align: center;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}
</style>
