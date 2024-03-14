<!-- views/History.vue -->

<template>
  <div class="history">
    <h2 class="history-header"> ~/URL History/~ </h2>
    <ul class="history-list">
      <li
        v-for="(entry, index) in urlHistory"
        :key="index"
        class="history-item"
      >
        <p>
          Original URL: <a :href="entry.originalURL" target="_blank" class="original-url">{{ entry.originalURL }}</a><br /> <br />
          Shortened URL:
          <a :href="entry.shortenedURL" target="_blank" class="shortened-url">{{
            entry.shortenedURL
          }}</a>
        </p>

        <button
          @click="copyToClipboard(entry.shortenedURL)"
          class="copy-button"
        >
          {{ copyButtonText }}
        </button>

        <span v-if="showSuccessMessage" class="success-message"
          >Copied successfully!</span
        >

        <button @click="editLink(index)" class="edit-button">Edit</button>
        <button @click="deleteLink(index)" class="delete-button">Delete</button>
      </li>
    </ul>

    <button class="clear-history-button" @click="clearHistory">
      Clear History
    </button>
    
  </div>
  <Footer />
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Footer from "@/views/Footer.vue";



const copyButtonText = ref("Copy");

const urlHistory = ref(JSON.parse(localStorage.getItem("urlHistory")) || []);




const clearHistory = () => {
  urlHistory.value = [];
  localStorage.removeItem("urlHistory");
};

const deleteLink = (index) => {
  urlHistory.value.splice(index, 1);
  localStorage.setItem("urlHistory", JSON.stringify(urlHistory.value));
};

const editLink = (index) => {
  const updatedURL = prompt(
    "Enter the updated URL:",
    urlHistory.value[index].originalURL
  );
  if (updatedURL) {
    urlHistory.value[index].originalURL = updatedURL;
    localStorage.setItem("urlHistory", JSON.stringify(urlHistory.value));
  }
}; 

const showSuccessMessage = ref(false);

const copyToClipboard = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => {
      copyButtonText.value = "Copied";
      console.log("URL copied to clipboard:", url);
      showSuccessMessage.value = true;

      setTimeout(() => {
        showSuccessMessage.value = false;
        copyButtonText.value = "Copy"; // Reset the copyButtonText
      }, 3000);
    })
    .catch((error) => {
      console.error("Copy failed:", error);
    });
};

watchEffect(() => {
  showSuccessMessage.value = false;
});
</script>

<style scoped>
.history {
  margin: 0 auto;
  margin-top: 7%;
  max-width: 600px;
  padding: 20px;
}

.history-header {
  color: blue;
  text-align: center;
  font-size: 2rem;
}

.history-list {
  list-style: none;
  padding: 0;
}

.history-item {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 3px 5px 2px black;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}




.original-url {
  color: blue;
  font-weight: bold;
  cursor: pointer;
}

.shortened-url {
  color: green;
  font-weight: bold;
}

.copy-button {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 10px;
}

.edit-button, .delete-button {
  background-color: #ccc;
  color: #000;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.clear-history-button {
  background-color: red;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-top: 20px;
}

.success-message {
  color: green;
  margin-left: 10px;
}

@media (max-width: 600px) {
  .history-item {
    padding: 10px;
  }
}

</style>
