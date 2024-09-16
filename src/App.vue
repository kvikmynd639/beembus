<template>
  <div class="font-sans text-gray-900">
    <!-- Navbar Component -->
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<style scoped>
/* No custom CSS needed; using Tailwind CSS only */
</style>
