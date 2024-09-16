<template>
  <div class="font-sans text-gray-900">
    <!-- Navbar Component -->
    <NavbarComponent />

    <!-- Landing Page Component -->
    <LandingPage />
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import LandingPage from './components/LandingPage.vue';
</script>

<style scoped>
/* No custom CSS needed; using Tailwind CSS only */
</style>
