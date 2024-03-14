<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="@/assets/images/footer-logo.png" alt="logo" />
      </div>
      <div class="footer-texts">
        <ul>
          <li>Shorten Url</li>
          <li>Customize Url</li>
          <li>Generate QR code</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div class="footer-socials">
        <img src="../assets/images/Group 19.png" alt="socials" />
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        © 2021 LinkSwift. All rights reserved Terms of Service Cookies Setings
      </p>
    </div>
  </div>
</template>

<script ></script>

<style scoped>
.footer {
  background-color: yellow;
  padding: 20px 0;
  color: black;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo img {
  height: 100px;
}

.footer-texts ul {
  display: flex;
  gap: 20px;
}

.footer-texts ul li {
  list-style: none;
  font-weight: bolder;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid black;
  max-width: 1200px;
  margin: 0 auto;
}

/* mobile responsive max-width should be 450px */
@media (max-width: 450px) {
  .footer-content {
    flex-direction: column;
    gap: 20px;
  }

  .footer-texts ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
