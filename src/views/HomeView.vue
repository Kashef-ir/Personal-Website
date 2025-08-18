<template>
  <div class="vanta-container">
    <VantaBackground />
    <div class="content relative text-white">
      <Navbar />
      <Transition appear @enter="animateIn">
        <div
          class="my-12 2xl:mx-80 xl:mx-80 lg:mx-24 md:mx-24 sm:mx-10 mx-12 text-gray-300"
        >
          <h1 class="font-bold text-3xl my-8">Mohammad Hashemi</h1>
          <p class="text-md">
            Hey! I’m Mohammad Hashemi (also known as Kashef), a passionate
            open-source contributor, Front-End Developer and with a strong
            interest in web security.
          </p>
          <br />
          <p class="text-md">
            Dreaming up cool ideas and making them come true is where my passion
            lies. I am enthusiastic about building tools that help myself and
            others become more productive and enjoy the process of building. You
            can find my
            <a class="text-white p-0.5 rounded bg-[#222222]" href="/projects"
              >full projects list here</a
            >.
          </p>
          <br />
          <p class="text-md">
            Outside of programming, I enjoy doing video games and reading and
            electronics. I also love content creating and journalism.
          </p>
          <br />
          <p class="text-md">
            I am based in <span class="font-semibold">Qom</span> and sometimes
            <span class="font-semibold">Tehran</span>. If you are around, please
            reach out and let’s have some coffee or work together.
          </p>
          <br />
          <hr class="h-px border-0 bg-gray-500" />
          <br />
          <p class="text-md">
            Find me on: <br />
            <span class="my-1 block">
              <a
                href="https://github.com/kashef-ir"
                class="text-white p-0.5 rounded bg-[#222222]"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'github']" />Github</a
              >
              |
              <a
                href="https://x.com/kashefsaltane"
                class="text-white p-0.5 rounded bg-[#222222]"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'x-twitter']" />Twitter</a
              >
              |
              <a
                href="https://www.linkedin.com/in/mohamad-hashemi-22962a227/"
                class="text-white p-0.5 rounded bg-[#222222]"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'linkedin']" />Linkedin</a
              >
              |
              <a
                href="https://instagram.com/muhamadhashemi"
                class="text-white p-0.5 rounded bg-[#222222]"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'instagram']" />Instagram</a
              >
              |
              <a
                href="https://instagram.com/muhamadhashemi"
                class="text-white p-0.5 rounded bg-[#222222]"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'mastodon']" />Mastodon</a
              >
            </span>
            Or mail me at
            <span class="font-semibold text-white p-0.5 rounded bg-[#222222]">
              <a href="mailto://muhamadhashemi142@gmail.com">
                muhamadhashemi142@gmail.com
              </a>
            </span>
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import VantaBackground from "@/components/Background.vue";
import Navbar from "@/components/Navbar.vue";
import { slideInBottom } from "animate4vue";
import { Transition } from "vue";

const animateIn = (el, done) => {
  el.style.visibility = "hidden";
  setTimeout(() => {
    el.style.visibility = "visible";
    slideInBottom(el, done, {
      duration: 1,
    });
  }, 1200);
};
</script>

<style scoped>
.vanta-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
