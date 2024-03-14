<template>
  <div class="container">
    <h1 class="header">
      Shorten Your Long <strong style="color: blue">URL</strong> Here
    </h1>
    <p class="header-p">
      Enter your long URL here to create a short link and generate QR code.
    </p>
    <p class="header-p">
      Example:
      http://www.linksift.io/generate-qr-code=and-customize-your-link-effortlessly
    </p>

    <form @submit.prevent="shortenURL" class="form">
      <div class="url-section">
        <input
          type="text"
          v-model="originalURL"
          placeholder="Enter your URL here"
          class="url-input"
        />
      </div>
      <button type="submit" class="shorten-button">Shorten Link</button>
    </form>

    <div v-if="shortenedURL">
      <div class="url-result">
        <p>
          Shortened URL:
          <a :href="shortenedURL" target="_blank">{{ shortenedURL }}</a>
        </p>
        <button @click="copyToClipboard" class="copy-button">
          {{ copyButtonText }}
        </button>
      </div>
      <div class="displaying-buttons">
        <button type="button" @click="toggleQRCode" class="customize-button">
          {{ displayQR ? "Hide QR Code" : "Display QR Code" }}
        </button>
        <button @click="toggleCustomize" class="customize-button">
          {{ displayCustomize ? "Hide Alias" : "Customize Alias" }}
        </button>
      </div>
    </div>

    <div v-if="displayCustomize" class="customize-section">
      <label for="customAlias">Customize Alias:</label>
      <input
        type="text"
        v-model="customAlias"
        id="customAlias"
        placeholder="Enter custom alias"
        class="custom-alias-input"
      />
      <button @click="customizeAlias" class="customize-button">
        Customize
      </button>
    </div>

    <div v-if="displayQR" class="qr-code-section">
      <qr-code :shortenedURL="shortenedURL" @downloadQRCode="downloadQRCode" />
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, defineProps } from "vue";
import QRCode from "../components/qr-code.vue";
import Footer from "./Footer.vue";

const props = defineProps(["someProp"]);

const originalURL = ref("");
const shortenedURL = ref("");
const errorMessage = ref("");
const copyButtonText = ref("Copy");
const customAlias = ref("");
const displayQR = ref(false);
const displayCustomize = ref(false);

const toggleQRCode = () => {
  displayQR.value = !displayQR.value;
};

const toggleCustomize = () => {
  displayCustomize.value = !displayCustomize.value;
};

const storedUrlHistory = localStorage.getItem("urlHistory");
const urlHistory = ref(
  storedUrlHistory ? JSON.parse(storedUrlHistory) : []
);

const shortenURL = async () => {
  try {
    const response = await axios.post(
      "https://api-ssl.bitly.com/v4/shorten",
      {
        long_url: originalURL.value,
        domain: "bit.ly",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer dc7e5411295788b69a48ff92395646a83f9fd143`,
        },
      }
    );

    shortenedURL.value = response.data.id;
  } catch (error) {
    console.error("Error shortening URL:", error);
  }

  const timestamp = new Date().toISOString();
  urlHistory.value.unshift({
    originalURL: originalURL.value,
    shortenedURL: shortenedURL.value,
    timestamp,
  });
  localStorage.setItem("urlHistory", JSON.stringify(urlHistory.value));
};

const customizeAlias = async () => {
  try {
    if (!shortenedURL.value || !customAlias.value) {
      console.error(
        "Cannot customize alias for an empty URL or without a custom alias."
      );
      return;
    }

    const response = await axios.patch(
      `https://api-ssl.bitly.com/v4/shorten/${shortenedURL.value}`,
      {
        custom_alias: customAlias.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer dc7e5411295788b69a48ff92395646a83f9fd143`,
        },
      }
    );

    shortenedURL.value = response.data.id;
  } catch (error) {
    console.error("Error customizing alias:", error);
  }
};

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(shortenedURL.value)
    .then(() => {
      copyButtonText.value = "Copied!";

      setTimeout(() => {
        copyButtonText.value = "Copy";
      }, 2000);
    })
    .catch((error) => {
      console.error("Copy failed:", error);
      errorMessage.value = "Copy failed. Please try again.";
    });
};

const downloadQRCode = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "qr_code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 866px;
  align-items: center;
  justify-content: center;
  margin: 0% auto;
  margin-top: 10%;
  margin-bottom: 5%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid blue;
  /* box-shadow: 3px 5px 2px black; */
  text-align: center;
}

.header {
  color: black;
  text-align: center;
  font-size: 60px;
}

.header-p {
  color: #151515;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
}

.url-section {
  display: flex;
  gap: 10px;
}

.url-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 16px;
  color: blue;
  width: 391px;
  height: 40px;
  flex-shrink: 0;
}

.shorten-button {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  height: 60px;
}

.url-result {
  margin: 2% 0 4% 25%;
  text-align: center;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-self: center;
}
.url-result p {
  margin: 10px 0;
  color: blue;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

.url-result a {
  color: yellow;
  text-decoration: none;
  font-weight: bold;
}

.error-message {
  color: #e74c3c;
}

.customize-section {
  margin-top: 10px;
}

.custom-alias-input {
  padding: 10px;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 16px;
  color: blue;
}

.customize-button {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}

.copy-button {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
}

/* mobile responsive max-width must be 450px */
@media (max-width: 450px) {
  .container {
    margin: 30% auto;
    margin-top: 50%;
    padding: 20px;
    max-width: fit-content;
  }
  .header {
    font-size: 1.5rem;
  }
  .header-p {
    display: none;
  }
  .form {
    flex-direction: column;
  }
  .url-section {
    width: 90%;
    margin-left: -10%;
  }
  .url-input {
    width: 100%;
  }

  .shorten-button {
    margin-top: 10px;
    width: 100%;
  }

  .url-result {
    margin: 2% 0 4% 0;
    flex-direction: column;
  }
}
</style>
