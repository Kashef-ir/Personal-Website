<template>
  <div class="vanta-container">
    <v-vanta :effect="effect" :options="options"></v-vanta>
    <div class="content relative text-white">
    </div>
  </div>
</template>

<script>
import VVanta from 'vue-vanta-revamp';
export default {
  components: {
    VVanta
  },
  data() {
    return {
      effect: 'waves',
      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 1500.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x000000, 
        waveHeight: 20, 
        shininess: 50, 
      }
    };
  },
};
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