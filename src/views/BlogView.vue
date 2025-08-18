<template>
  <div class="vanta-container">
    <VantaBackground />
    <div class="content relative text-white">
      <Navbar />
      <Transition appear @enter="animateIn">
        <div
          class="my-12 2xl:mx-80 xl:mx-80 lg:mx-24 md:mx-24 sm:mx-10 mx-12 text-gray-300"
        >
          <h1 class="text-3xl font-bold mb-4">Blogs</h1>
          <ul class="space-y-2" v-if="posts.length > 0">
            <li v-for="post in posts" :key="post.sys.id" class="list-disc">
              <router-link
                :to="`/blog/${post.sys.id}`"
                class="text-gray-300 text-xl p-1 rounded bg-[#222222] hover:underline"
              >
                {{ post.fields.title }}
              </router-link>
            </li>
          </ul>
          <span v-else>Nothing is here yet :)</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { client } from "@/contentful.js";
import VantaBackground from "@/components/Background.vue";
import Navbar from "@/components/Navbar.vue";
import { slideInBottom } from "animate4vue";

const posts = ref([]);

const animateIn = (el, done) => {
  el.style.visibility = "hidden";
  setTimeout(() => {
    el.style.visibility = "visible";
    slideInBottom(el, done, {
      duration: 1,
    });
  }, 1200);
};

onMounted(async () => {
  const response = await client.getEntries({ content_type: "blogPage" });
  posts.value = response.items;
});
</script>

<style scoped>
.vanta-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
