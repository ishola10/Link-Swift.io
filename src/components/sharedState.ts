import { ref } from "vue";

export const urlHistory = ref(
  JSON.parse(localStorage.getItem("urlHistory") ?? "") || []
);
