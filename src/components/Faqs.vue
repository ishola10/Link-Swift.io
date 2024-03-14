<template>
  <div class="faq-container">
    <h1>FAQs</h1>
    <p>Find answers to common questions about our service.</p>
    <ul>
      <li v-for="(qa, index) in faqs" :key="index" class="faq-item">
        <div class="faq-header" @click="toggleDropdown(index)">
          <h3>{{ qa.question }}</h3>
          <span v-if="qa.open">▲</span>
          <span v-else>▼</span>
        </div>
        <div v-show="qa.open" class="faq-dropdown">
          <p>{{ qa.answer }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const faqs = ref([
  {
    question: "How does it work?",
    answer:
      "LinkSwift allows users to shorten long URLs by pasting them into our platform. We automatically generate a shorter URL making it easy to share on social media or other channels. ",
    open: false,
  },
  {
    question: "Can I customize URLs?",
    answer:
      "Yes, LinkSwift also allows users to customize their shortened URLs. You can choose a custom domain name and personalize the URL to reflect your  brand or content.",
    open: false,
  },
  {
    question: "How do I generate QR codes?",
    answer:
      "With LinkSwift, you can easily generate QR codes for your shortened URLs. Simply download the QR code image and use it in your promotional materials or on your website.",
    open: false,
  },
  {
    question: "Does LinkSwift provide analytics?",
    answer:
      "Yes, LinkSwift provides basic analytics to track the performance of your shortened URLs. You can see how many clicks your URL has received and where they are coming from.",
    open: false,
  },
  {
    question: "Still have any question?",
    answer:
      "If you have any more questions or concerns, feel free to reach out to us. We are here to help!",
    open: false,
  },
]);

const toggleDropdown = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

li {
  list-style: none;
}
.faq-item {
  margin-bottom: 20px;
}

.faq-header {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ddd;
}

.faq-dropdown {
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
}

.faq-dropdown p {
 text-align: left;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 30px;
}


/* mobile responsive max-width should be 450px */
@media (max-width: 450px) {
  .faq-header {
    /* flex-direction: column; */
    gap: 10px;
  }
}
</style>
