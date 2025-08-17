<template>
  <div class="vanta-container">
    <VantaBackground />
    <div class="content relative text-white">
      <Navbar />
      <Transition appear @enter="animateIn">
        <div
          class="my-12 2xl:mx-80 xl:mx-80 lg:mx-80 md:mx-24 sm:mx-10 mx-12 text-gray-300"
        >
          <div v-if="post">
            <h1 class="text-3xl font-bold mb-4">{{ post.fields.title }}</h1>

            <div>
              <RichTextRenderer :document="post.fields.body" />
            </div>

            <div v-if="post.fields.images" class="mt-6 space-y-4">
              <img
                v-for="img in post.fields.images"
                :key="img.sys.id"
                :src="`https:${img.fields.file.url}`"
                :alt="img.fields.title"
                class="rounded shadow max-w-lg"
              />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import * as contentful from "contentful";
import VantaBackground from "@/components/Background.vue";
import Navbar from "@/components/Navbar.vue";
import { slideInBottom } from "animate4vue";
import RichTextRenderer from "contentful-rich-text-vue-renderer";

const route = useRoute();
const post = ref(null);

const animateIn = (el, done) => {
  el.style.visibility = "hidden";
  setTimeout(() => {
    el.style.visibility = "visible";
    slideInBottom(el, done, {
      duration: 1,
    });
  }, 1200);
};

const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

onMounted(async () => {
  const entry = await client.getEntry(route.params.id);
  post.value = entry;
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
