<template>
  <div class="vanta-container">
    <VantaBackground />
    <div class="content relative text-white">
      <Navbar />
      <div class="my-6 mx-14">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script setup>
import VantaBackground from "@/components/Background.vue";
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";
</script>

<style scoped>
.vanta-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
