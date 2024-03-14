<template>
  <div class="analytics">
    <h2 class="analytics-header">~/Analytics/~</h2>
    <div class="analytics-content">
      <p>
        <img src="@/assets/images/icon.png" alt="Link Icon"/> <br> <br>
        Total Links Shortened: <br> <strong>{{ totalLinks }}</strong>
      </p>
      <p>
        <img src="@/assets/images/icon (1).png" alt="Link Icon"/> <br> <br>
        Links Shortened Today: <br> <strong> {{ linksToday }}</strong>
      </p>
    </div>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, nextTick } from "vue";
import Chart from "chart.js/auto";
import Footer from "@/views/Footer.vue";

interface UrlHistoryEntry {
  timestamp?: string;
  url: string;
  description: string;
}

const urlHistory = ref<UrlHistoryEntry[]>(
  JSON.parse(localStorage.getItem("urlHistory") ?? "[]").map(
    (entry: UrlHistoryEntry) => ({
      ...entry,
      timestamp: entry.timestamp || new Date().toISOString(),
    })
  ) || []
);

const totalLinks = ref<number>(urlHistory.value.length);
const linksToday = ref<number>(0);

const chartCanvas = ref<HTMLCanvasElement | null>(null);

const calculateLinksToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  linksToday.value = urlHistory.value.filter(
    (entry) => new Date(entry.timestamp!) >= today
  ).length;
};

const updateChart = async () => {
  const data = {
    labels: ["Total Links", "Links Today"],
    datasets: [
      {
        data: [totalLinks.value, linksToday.value],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
  };

  await nextTick();

  const ctx = chartCanvas.value?.getContext("2d");

  if (ctx) {
    new Chart(ctx, config);
  }
};

onMounted(() => {
  calculateLinksToday();
  updateChart();
});

watchEffect(() => {
  totalLinks.value = urlHistory.value.length;
  calculateLinksToday();
});
</script>

<style scoped>
.analytics {
  text-align: center;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10%;
}

.analytics-header {
  font-size: 3rem;
  color: blue;
  margin-bottom: 24px;
}

.analytics-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  gap: 16px;
}

.analytics-content p {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 200px;
  margin: 0;
  text-align: center;
  line-height: 1.5;
  transition: all 0.3s;
}

.analytics-content p:hover {
  background-color: #f5f5f5;
}

.analytics-content p strong {
  color: blue;
  font-size: 2rem;
}

.chart-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 450px) {
  
}
</style>
