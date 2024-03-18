<template>
  <div class="temp">
    <div class="sign-up">
      <img class="logo" src="@/assets/images/logo.png" alt="" srcset="" />
      <h2>
        Welcome to <strong style="color: yellow">LinkSwift.io!!</strong> let's
        get started
      </h2>
      <h3>Sign Up</h3>
      <form @submit.prevent="signup">
        <label for="name">Name:</label>
        <input v-model="name" type="text" required />
        <label for="email">Email:</label>
        <input v-model="email" type="email" required />
        <label for="password">Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit" :disabled="loading">
          {{ loading ? "Signing up..." : "Signup" }}
        </button>
      </form>
      <br />
      <div>
        <router-link class="login-link" to="/login"
          >Already have an account? Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import router from "@/router/index";

const name = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);

const signup = async () => {
  loading.value = true;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    await updateProfile(auth.currentUser, { displayName: name.value });

    const usersCollection = collection(db, "users");
    await addDoc(usersCollection, {
      email: email.value,
      displayName: name.value,
    });

    console.log("User signed up:", userCredential.user);
    router.push("/home");
  } catch (error) {
    console.error("Error signing up:", error.message);
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up {
  width: 300px;
  margin: 0 auto;
  margin-top: 2%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}
.sign-up .logo {
  width: 100px;
  margin: 0 auto;
  display: block;
}
.sign-up h2 {
  margin-bottom: 20px;
  text-align: center;
  color: blue;
}
.sign-up h3 {
  margin-bottom: 20px;
  /* text-align: center; */
  font-family: "Courier New", Courier, monospace;
  color: yellow;
}
.sign-up form {
  display: flex;
  flex-direction: column;
}
.sign-up label {
  text-align: left;
  display: block;
  color: blue;
}

.sign-up input {
  width: 93%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.sign-up button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
}
.sign-up button:hover {
  background-color: darkblue;
}
.sign-up button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
.login-link {
  text-align: center;
  margin-top: 10px;
  color: blue;
}
</style>
