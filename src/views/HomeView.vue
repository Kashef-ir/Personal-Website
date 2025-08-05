<template>
  <div class="vanta-container">
    <v-vanta :effect="effect" :options="options"></v-vanta>
    <div class="content relative text-white">
      <Navbar />
    </div>
  </div>
</template>

<script setup>
import VVanta from "vue-vanta-revamp";
import Navbar from "@/components/Navbar.vue";
import { ref } from "vue";

const effect = ref("topology");
const options = ref({
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 1500.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x343434,
  backgroundColor: 0xc0c0c,
});
</script>

<style scoped>
.vanta-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.vanta-container > canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
}
</style>
