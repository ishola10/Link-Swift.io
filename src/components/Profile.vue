<template>
  <div class="profile">
    <h2>Profile</h2>
    <div v-if="user">
      <div class="user-info">
        <div class="profile-picture">
          <img
            :src="user.photoURL || '../assets/default-profile-picture.png'"
            :alt="user.displayName"
          />
          <input type="file" accept="image/*" @change="uploadProfilePicture" />
        </div>
        <div class="user-details">
          <div v-if="editing">
            <label for="newName">New Name:</label>
            <input v-model="newName" type="text" required />
            <button @click="saveName">Save</button>
            <button @click="cancelEdit">Cancel</button>
          </div>
          <div v-else>
            <p><strong>Name:</strong> {{ user.displayName }}</p>
            <button @click="startEdit">Edit Name</button>
          </div>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <button @click="signout">Sign out</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>User not logged in</p>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, storage } from "../firebase-config";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import router from "@/router/index";

const user = ref(null);
const editing = ref(false);
const newName = ref("");

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((newUser) => {
    user.value = newUser;
  });

  return () => {
    unsubscribe(); 
  };
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

const startEdit = () => {
  editing.value = true;
  newName.value = user.value.displayName;
};

const cancelEdit = () => {
  editing.value = false;
};

const saveName = async () => {
  try {
    await updateProfile(auth.currentUser, { displayName: newName.value });
    user.value.displayName = newName.value;
    editing.value = false;
  } catch (error) {
    console.error("Error saving name:", error.message);
  }
};

const uploadProfilePicture = async (event) => {
  const file = event.target.files[0];
  const storageReference = storageRef(
    storage,
    `profilePictures/${auth.currentUser.uid}/${file.name}`
  );

  try {
    const snapshot = await uploadBytes(storageReference, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    user.value.photoURL = downloadURL;

    await updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });

    console.log("Profile picture uploaded successfully.");
  } catch (error) {
    console.error("Error uploading profile picture:", error.message);
  }
};
</script>
<style>
.profile {
  max-width: 300px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-right: 20px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.default-picture {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  color: #fff;
  font-size: 32px;
}

.default-picture span {
  font-size: 48px;
}

.user-details {
  flex: 1;
}

.user-details p {
  margin-bottom: 10px;
}

.user-details button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

.user-details button:hover {
  background-color: #0056b3;
}

input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
