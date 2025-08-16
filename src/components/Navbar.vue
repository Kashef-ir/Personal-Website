<template>
  <Transition appear @enter="animateIn">
    <nav class="navbar">
    <div
      class="flex justify-between items-center py-8 px-5 text-gray-400 font-bold"
    >
      <h1 class="logo">
        <a href="#">
          <img src="../assets/darklogo.gif" alt="logo" class="w-24" />
        </a>
      </h1>
      <div class="navbar-items flex justify-center items-center list-none">
        <li class="xl:hidden 2xl:hidden lg:hidden">
          <a
            href="#"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fas', 'house']" />
          </a>
        </li>
        <li class="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
          <a
            href="about"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
            >About</a
          >
        </li>
        <li class="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
          <a
            href="blog"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
            >Blog</a
          >
        </li>
        <li class="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
          <a
            href="/projects"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="https://x.com/kashefsaltane"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kashef-ir"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100094394326567"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/muhamadhashemi/"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohamad-hashemi-22962a227/"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a
            href="https://mastodon.social/@thekashef"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fab', 'mastodon']" />
          </a>
        </li>
        <li>
          <a
            href="mailto:muhamadhashemi142@gmail.com"
            target="_blank"
            class="px-1 mx-1 transition-all duration-500 ease-in-out hover:text-white"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </li>
      </div>
    </div>
  </nav>
  </Transition>
</template>

<script setup>
import { slideInTop } from 'animate4vue';
import { Transition } from 'vue';

const animateIn = (el, done) => {
  el.style.visibility = 'hidden';
  setTimeout(() => {
    el.style.visibility = 'visible';
    slideInTop(el, done, {
      duration: 1
    });
  }, 1200);
}
</script>
