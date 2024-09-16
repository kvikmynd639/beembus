<template>
  <nav class="flex justify-between items-center bg-primary p-4 text-white shadow-md pb-4 relative">
    <!-- Logo Section -->
    <div class="text-2xl font-semibold tracking-wide">BeemBus</div>

    <!-- Hamburger Icon for Mobile -->
    <button @click="toggleMenu" class="block md:hidden focus:outline-none">
      <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-3xl"></i>
    </button>

    <!-- Navigation Links (Desktop) -->
    <ul class="hidden md:flex space-x-8 text-lg">
      <li>
        <router-link to="/" class="relative group">
          Home
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/posts" class="relative group">
          Posts
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="relative group">
          Profile
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/chats" class="relative group">
          Chats
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </li>
    </ul>

    <!-- Dropdown Menu (Mobile) -->
    <div v-if="menuOpen" class="absolute top-full left-0 w-full bg-primary p-4 md:hidden">
      <ul class="flex flex-col space-y-4 text-lg">
        <li>
          <router-link to="/" class="relative group" @click="toggleMenu">
            Home
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/posts" class="relative group" @click="toggleMenu">
            Posts
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile" class="relative group" @click="toggleMenu">
            Profile
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/chats" class="relative group" @click="toggleMenu">
            Chats
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Menu state
const menuOpen = ref(false);

// Toggle menu function
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
/* No custom CSS needed; using Tailwind CSS only */
</style>
