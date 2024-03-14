<template>
  <div class="learn-more">
    <h1 class="learn-more-header">Learn More</h1>
    <p class="learn-more-intro">
      Welcome to our amazing URL shortening service! Here, we make your URLs
      shorter and your life easier. But that's not all! Read on to discover the
      fantastic features and benefits we offer.
    </p>

    <section class="feature">
      <h2>Feature 1: Customizable Short URLs</h2>
      <p>
        With our service, you can customize your short URLs to make them
        personal and memorable. Choose a custom alias for your links and share
        them with style.
      </p>
    </section>

    <section class="feature">
      <h2>Feature 2: QR Code Generation</h2>
      <p>
        Every shortened URL comes with a QR code! Easily share your links by
        displaying or downloading the QR code. It's a quick and convenient way
        to share information.
      </p>
    </section>

    <section class="feature">
      <h2>Feature 3: URL History</h2>
      <p>
        Keep track of all your shortened URLs with our URL history feature.
        Access your history, edit links, and even delete entries. It's like
        having a personal URL management system.
      </p>
    </section>

    <section class="feature">
      <h2>Feature 4: ANALYTICS</h2>
      <p>
        Get insights into your shortened URLs with our analytics feature. Track
        the number of clicks, referrers, and locations. Use the data to optimize
        your marketing campaigns and understand your audience better.
      </p>
    </section>

    <section class="feature">
      <h2>Feature 5: Fast and Reliable Service</h2>
      <p>
        Our URL shortening service is fast, reliable, and secure. Shorten your
        URLs with confidence, knowing that your links are in good hands. Say
        goodbye to long, cumbersome URLs!
      </p>
    </section>

    <section class="feature">
      <h2>Feature 6: Learn and Grow</h2>
      <p>
        We believe in learning and growing together. Stay tuned for updates, new
        features, and exciting announcements. Join our community and be part of
        the URL shortening revolution!
      </p>
    </section>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/views/Footer.vue";
</script>

<style scoped>
.learn-more {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 20px;
}

.learn-more-header {
  color: #3498db;
  text-align: center;
}

.learn-more-intro {
  text-align: justify;
  margin-bottom: 20px;
}

.feature {
  margin-bottom: 40px;
}

.feature h2 {
  color: #3498db;
}

@media (max-width: 450px) {
  .learn-more {
    padding: 10px;
    margin-top: 30%;
  }
  .feature h2{
    font-size: 1rem;
    font-weight: bolder;
  }
}
</style>
