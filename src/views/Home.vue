<template>
  <main>
    <section class="welcome-section">
      <h1>Shorten URLs with LinkSwift for effortless sharing</h1>
      <p>
        LinkSwift is the fastest and easiest way to shorten URLs. Customize your
        links and track their performance
      </p>
      <div class="welcome-buttons">
        <router-link to="/shorten-url">Get Started</router-link>
        <router-link to="/about">Learn More <strong style="color: yellow;">>></strong></router-link>
      </div>
    </section>

    <section class="marquee">
      <marquee class="marquee-content" behavior="" direction=""
        >let's shorten your link with ease (No domain required)</marquee
      >
    </section>

    <section class="user-satisfied-section">
      <img class="img" src="../assets/images/bg.png" alt="Shorten URLs" />
      <div class="users-satisfied">
        <div>10 Million Satisfied Users</div>
        <img
          class="user-satisfied-img"
          src="../assets/images/Frame 5.png"
          alt="Arrow"
        />
      </div>
    </section>

    <section class="features-section">
      <div class="feature-header">
        <h1>Why choose <strong style="color: blue">LinkSwift</strong></h1>
        <p>
          LinkSwift is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>
      <div class="features">
        <div>
          <img src="../assets/images/Group 6.png" alt="Shorten URLs" />
          <h2>URL SHORTENING</h2>
          <p>
            LinkSwift allows you to shorten URLs of your business, events.
            Shorten your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <img src="../assets/images/Group 6 (1).png" alt="Shorten URLs" />
          <h2>CUSTOM URLs</h2>
          <p>
            With LinkSwift, you can create custom URLs, with the length you
            want! A solution for socials and businesses.
          </p>
        </div>
        <div>
          <img src="../assets/images/Group 6 (2).png" alt="Shorten URLs" />
          <h2>QR CODES</h2>
          <p>
            Generate QR codes to your business, events. Bring your audience and
            customers to your doorstep with this scan and go solution.
          </p>
        </div>
        <div>
          <img src="../assets/images/Group 6 (3).png" alt="Shorten URLs" />
          <h2>ANALYTICS</h2>
          <p>
            Receive data on the usage of either your shortened URL, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </section>

    <section class="pricing-feature">
      <h1>Pricing Plan</h1>
      <p>
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing
      </p>
      <div class="pricing">
        <div class="pricing-card">
          <h2>Free</h2>
          <p>For individuals</p>
          <p>Unlimited Public Links</p>
          <p>Basic Analytics</p>
          <p>Free</p>
          <button>Get Started</button>
        </div>
        <div class="pricing-card">
          <h2>Pro</h2>
          <p>For individuals and teams</p>
          <p>Unlimited Public Links</p>
          <p>Advanced Analytics</p>
          <p>Custom Branding</p>
          <button>Get Started</button>
        </div>
        <div class="pricing-card">
          <h2>Business</h2>
          <p>For large teams and organizations</p>
          <p>Unlimited Public Links</p>
          <p>Advanced Analytics</p>
          <p>Custom Branding</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>

    <!-- <SlideShow /> -->

    <Faqs />

    <section class="discover-feature">
      <h1>
        Discover the power of <strong style="color: blue">LinkSwift</strong>
      </h1>
      <p>
        LinkSwift is the hub of everything that has to do with your link
        management. We shorten your URLs, allow you creating custom ones for
        your personal, business, event usage. Our swift QR code creation,
        management and usage tracking with advance analytics for all of these is
        second to none.
      </p>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import SlideShow from "@/components/SlideShow.vue";
import Faqs from "@/components/Faqs.vue";
import Footer from "@/views/Footer.vue";
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}

main {
  margin: 0 auto;
  align-items: center;
  margin-top: 10%;
}

.welcome-section {
  text-align: center;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 80%;
  margin: 0 auto;
  height: 50vh;
}
.welcome-section h1 {
  font-size: 3rem !important;
  color: black;
  width: 65% !important;
  margin: 0 auto;
}
.welcome-section p {
  font-size: 1rem;
  color: #7f8c8d;
  width: 50%;
  margin: 0 auto;
}
.welcome-buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.welcome-buttons a {
  padding: 10px 20px;
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}

/* running gif */
.running-gif {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.running-gif img {
  width: 50%;
  height: auto;
}

/* marquee */
.marquee {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  background-color: yellow;
}
.marquee-content {
  font-size: 6rem;
  color: blue;
  width: 100%;
  margin: 0 auto;
}

/* user satisfied */
.user-satisfied-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-satisfied-section .img {
  width: 100%;
  height: auto;
}

.users-satisfied {
  display: flex;
  background-color: yellow;
  align-items: center;
  padding: 40px 0;
  width: 100%;
}

.users-satisfied div {
  font-size: 2rem;
  color: black;
  margin-right: 20px;
}

.users-satisfied img {
  height: 50px;
}

.users-satisfied {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* features */
.features-section {
  display: flex;
  margin: 80px;
  gap: 50px;
}

.features-section p {
  font-size: 1rem;
  color: #7f8c8d;
}
.feature-header {
  margin-top: 20px;
  width: 100%;
}

.feature-header h1 {
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
}
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.features div {
  margin: 0;
}

.features h2 {
  font-size: 1.5rem;
  color: black;
  margin: 10px 0;
}

/* pricing */

.pricing-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
}

.pricing-feature h1 {
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
}

.pricing-feature p {
  font-size: 1rem;
  color: #7f8c8d;
  width: 40%;
  text-align: center;
}

.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pricing-card {
  padding: 20px;
  border: 1px solid #7f8c8d;
  border-radius: 5px;
  text-align: center;
}

.pricing-card h2 {
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
}

.pricing-card p {
  font-size: 1rem;
  color: #7f8c8d;
  margin: 10px 0;
  width: 100%;
}

.pricing-card button {
  padding: 10px 20px;
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

/* discover */

.discover-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
}

.discover-feature h1 {
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
}

.discover-feature p {
  font-size: 1rem;
  color: #7f8c8d;
  width: 40%;
  text-align: center;
}

/* tab responsive */
@media (max-width: 1166px) {
  main {
    margin-top: 20%;
  }
  .welcome-section h1 {
    font-size: 1.5rem !important;
    width: 100% !important;
  }
  .welcome-section p {
    font-size: 0.8rem;
    width: 80%;
  }

  .marquee {
    height: 10vh;
  }
  .marquee-content {
    font-size: 2rem;
  }

  .features-section {
    flex-direction: column;
    margin: 20px;
  }
  .features {
    grid-template-columns: repeat(1, 1fr);
  }
  .features div {
    margin: 0;
  }
  .features h2 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  .pricing-feature p {
    font-size: 1rem;
    width: 80%;
  }
  .pricing {
    grid-template-columns: repeat(1, 1fr);
  }
  .pricing-card {
    padding: 20px;
    margin-bottom: 20px;
  }
  .pricing-card h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .pricing-card p {
    font-size: 1rem;
    margin: 10px 0;
    width: 100%;
  }
  .pricing-card button {
    padding: 10px 20px;
    font-size: 1rem;
  }
  .discover-feature p {
    font-size: 1rem;
    width: 80%;
  }
}
</style>
