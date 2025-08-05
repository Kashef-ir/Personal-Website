<!-- src/components/VantaBackground.vue -->
<template>
  <div class="vanta-background">
    <v-vanta :effect="effect" :options="options" />
  </div>
</template>

<script setup>
import VVanta from "vue-vanta-revamp";
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
.vanta-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -99;
}

.vanta-background canvas {
  width: 100%;
  height: 100%;
}
</style>
