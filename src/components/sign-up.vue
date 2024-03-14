<template>
  <div class="App">
    <div v-if="currentSection === 'signup'" class="auth-section">
      <h3>~/Signup/~</h3>
      <p>to continue to LinkSwift</p>

      <!-- <label for="name"> Name: </label>
      <br />
      <input v-model="registerName" placeholder="Name..." class="auth-input" /> -->
      <br><br>
      <label for="email"> Email: </label>
      <br />
      <input
        v-model="registerEmail"
        placeholder="Email..."
        class="auth-input"
      />
      <br><br>
      <label for="password"> Password: </label>
      <br />
      <input
        v-model="registerPassword"
        placeholder="Password..."
        type="password"
        class="auth-input"
      />
      <button @click="register" class="auth-button">Signup</button>
      <br />
      <button @click="currentSection = 'login'" class="auth-toggle">
        Already have an account? Login
      </button>
    </div>

    <div v-else-if="currentSection === 'login'" class="auth-section">
      <h3>~/Login/~</h3>
      <p>to continue to LinkSwift</p>
      <label for="email"> Email or Name: </label>
      <br />
      <input
        v-model="loginEmail"
        placeholder="Email or Name"
        class="auth-input"
      />
      <br><br>
      <label for="password"> Password: </label>
      <br />
      <input
        v-model="loginPassword"
        placeholder="Password..."
        type="password"
        class="auth-input"
      />
      <button @click="login" class="auth-button">Login</button>
      <button @click="currentSection = 'signup'" class="auth-toggle">
        Don't have an account? Signup
      </button>
    </div>

    <div v-else class="auth-section">
      <h4>User Logged In:</h4>
      {{ (user as any)?.email }}
      <button @click="logout" class="auth-button">Sign Out</button>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase-config";
import { User } from "firebase/auth";
import Footer from "@/views/Footer.vue";


export default defineComponent({
  name: "Authentication",
  data() {
    return {
      // registerName: "",
      registerEmail: "",
      registerPassword: "",
      loginEmail: "",
      loginPassword: "",
      user: null,
      currentSection: "signup",
    };
  },
  mounted() {
    onAuthStateChanged(auth, (currentUser) => {
      this.user = currentUser as User | null;
      if (currentUser) {
        this.currentSection = "profile";
      } else {
        this.currentSection = "login";
      }
    });
  },
  methods: {
    async register() {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          // this.registerName,
          this.registerEmail,
          this.registerPassword
        );
        // await user.updateProfile({
        //   displayName: this.registerName,
        // });
        console.log(user);
      } catch (error) {
        console.log((error as any).message);
      }
    },
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.loginEmail,
          this.loginPassword
        );
        this.user = userCredential.user;
        this.currentSection = "profile";
      } catch (error) {
        console.log((error as any).message);
      }
    },
    async logout() {
      await signOut(auth);
    },
  },
});
</script>

<style scoped>
.App {
  text-align: center;
  margin-top: 10%;
}

.auth-section {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.auth-section h3 {
  color: blue;
  font-size: 3rem;
  margin: 0%;
}

.auth-section p {
  margin-bottom: 15%;
}

.auth-section label {
  text-align: left;
  display: block;
  color: blue;
}

.auth-input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.auth-button {
  background-color: #3498db;
  color: #fff;
  width: 100%;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.auth-toggle {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
}

.auth-toggle:hover {
  text-decoration: underline;
}
</style>
