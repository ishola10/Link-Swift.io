<template>
  <div class="not-found">
    <div class="container">
      <h1 class="title">404</h1>
      <p class="subtitle">Page not found</p>
      <router-link to="/" class="home-link">Go back to home >> </router-link>
      <div class="animation-container">
        <div class="circle blue"></div>
        <div class="circle yellow"></div>
        <div class="circle white"></div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "./Footer.vue";
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: #fff;
  font-family: "Arial", sans-serif;
  overflow: hidden;
}

.container {
  text-align: center;
}

.title {
  font-size: 8rem;
  margin: 0;
  color: blue;
}

.subtitle {
  font-size: 1.5em;
  color: yellow;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: blue;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid blue;
  font-weight: bold;
}

.animation-container {
  position: relative;
  margin-top: 20px;
}

.circle {
  position: absolute;
  border-radius: 50%;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.blue {
  background-color: blue;
  width: 100px;
  height: 100px;
  animation-name: bounceBlue;
}

.yellow {
  background-color: yellow;
  width: 70px;
  height: 70px;
  animation-name: bounceYellow;
}

.white {
  background-color: #fff;
  width: 40px;
  height: 40px;
  animation-name: bounceWhite;
}

@keyframes bounceBlue {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@keyframes bounceYellow {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes bounceWhite {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
