<template>
  <div class="vanta-container">
    <VantaBackground />
    <div class="content relative text-white">
      <Navbar />
      <Transition appear @enter="animateIn">
        <div
          class="my-12 2xl:mx-80 xl:mx-80 lg:mx-80 md:mx-24 sm:mx-10 mx-12 text-gray-300"
        >
          <ul class="space-y-2 list-disc">
            <li v-for="project in projects" class="space-y-2">
              <h1 class="text-2xl mb-2 font-bold">
                {{ project.fields.title }}
              </h1>
              <p>
                {{ project.fields.description.content[0].content[0].value }}
              </p>
              <div>
                <ul class="space-x-1">
                  Technologies:
                  <span
                    v-for="technology in project.fields.technologiesUsed"
                    class="p-0.5 rounded bg-[#222222]"
                  >
                    {{ technology }}
                  </span>
                </ul>
              </div>
              <div
                v-if="
                  project.fields.githubOrGitlabLink || project.fields.demoLink
                "
                class="space-x-1"
              >
                <a
                  v-if="project.fields.githubOrGitlabLink"
                  :href="project.fields.githubOrGitlabLink"
                  class="p-0.5 rounded bg-[#222222]"
                  ><font-awesome-icon :icon="['fas', 'code']" /> Source</a
                >
                <a
                  v-if="project.fields.demoLink"
                  :href="project.fields.demoLink"
                  class="p-0.5 rounded bg-[#222222]"
                  ><font-awesome-icon :icon="['fas', 'globe']" /> Demo</a
                >
              </div>
              <hr class="h-px border-0 bg-gray-500" />
            </li>
          </ul>
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

const animateIn = (el, done) => {
  el.style.visibility = "hidden";
  setTimeout(() => {
    el.style.visibility = "visible";
    slideInBottom(el, done, {
      duration: 1,
    });
  }, 1200);
};

const projects = ref([]);

onMounted(async () => {
  const response = await client.getEntries({
    content_type: "projectPresentation",
  });
  projects.value = response.items;
  console.log(projects.value);
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
