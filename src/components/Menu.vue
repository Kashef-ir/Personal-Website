<template>
  <div class="menu">
    <ul
      class="flex justify-start items-center m-2 font-bold text-gray-400 transition-all ease-in-out text-2xl"
    >
      <li class="p-2 mx-1 hover:text-white duration-500">
        <a href="/blog">About</a>
      </li>
      <li class="p-2 mx-1 hover:text-white duration-500">
        <a href="/about">Blog</a>
      </li>
      <li class="p-2 mx-1 hover:text-white duration-500">
        <a href="/projects">Projects</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
