<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-primary bg-cover py-20 md:py-32 px-4 text-white" style="background-image: url('/path/to/your/background.jpg');">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-900 opacity-70"></div>
      <div class="relative flex flex-col md:flex-row justify-between items-center h-full gap-6">
        <!-- Left Side: Text and Weather Icons -->
        <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6">Welcome to BeemBus!</h1>
          <p class="text-lg md:text-2xl mb-4 md:mb-8">Where weather talks get wild! Sunshine, storms, or snow – we're here for it.</p>
          <div class="flex justify-center md:justify-start space-x-4 animate-bounce">
            <!-- Weather Icons with Animations -->
            <i class="fas fa-cloud-showers-heavy text-3xl md:text-4xl text-accent hover:scale-125 transform transition-transform"></i>
            <i class="fas fa-sun text-3xl md:text-4xl text-yellow-400 hover:rotate-12 transform transition-transform"></i>
            <i class="fas fa-cloud text-3xl md:text-4xl text-gray-300 hover:scale-110 transform transition-transform"></i>
          </div>
          <el-button @click="handleGetStarted" size="large" type="primary" class="mt-6 md:mt-8 rounded-full hover:bg-primary transition-transform transform hover:rotate-6">
            Join the Weather Fun!
          </el-button>
        </div>

        <!-- Right Side: Glass Transparent Div for Weather Info -->
        <div class="w-full md:w-1/2 bg-white bg-opacity-30 p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-md">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Current Weather</h2>
          <p class="text-base md:text-lg mb-2">Location: Sunnyville</p>
          <p class="text-base md:text-lg mb-2">Temperature: 25°C</p>
          <p class="text-base md:text-lg mb-2">Condition: Clear Skies</p>
          <p class="text-base md:text-lg">Humidity: 40%</p>
        </div>
      </div>
    </section>

    <!-- Weather Superpowers Section -->
    <section class="py-12 md:py-16 bg-gray-100 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">Discover Your Weather Superpowers</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
        <el-card shadow="hover" class="bg-white p-4 md:p-6 rounded-lg transition transform hover:scale-105">
          <i class="fas fa-bolt text-3xl md:text-4xl text-primary mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Lightning Charmer</h3>
          <p>Wield the power of the storm. Thunder and lightning bend to your will!</p>
        </el-card>
        <el-card shadow="hover" class="bg-white p-4 md:p-6 rounded-lg transition transform hover:scale-105">
          <i class="fas fa-snowflake text-3xl md:text-4xl text-accent mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Frost Whisperer</h3>
          <p>Command the cold! When you speak, snowflakes fall in silence.</p>
        </el-card>
        <el-card shadow="hover" class="bg-white p-4 md:p-6 rounded-lg transition transform hover:scale-105">
          <i class="fas fa-tornado text-3xl md:text-4xl text-secondary mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Twister Master</h3>
          <p>Summon whirlwinds and make everything spin – literally!</p>
        </el-card>
        <el-card shadow="hover" class="bg-white p-4 md:p-6 rounded-lg transition transform hover:scale-105">
          <i class="fas fa-water text-3xl md:text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-lg md:text-xl font-bold mb-2">Rain Dancer</h3>
          <p>Make it rain – anywhere, anytime. Your moves bring the downpour.</p>
        </el-card>
      </div>
    </section>

    <!-- Global Weather Gallery Section -->
    <section class="py-12 md:py-16 bg-primary text-white">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Global Weather Gallery</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
        <el-image src="/path/to/sunny.jpg" alt="Sunny" class="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover" fit="cover"></el-image>
        <el-image src="/path/to/rainy.jpg" alt="Rainy" class="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover" fit="cover"></el-image>
        <el-image src="/path/to/snowy.jpg" alt="Snowy" class="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover" fit="cover"></el-image>
      </div>
    </section>

    <!-- Forecast Frenzy Section -->
    <section class="py-12 md:py-16 bg-white text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">Forecast Frenzy</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-4">
        <el-card shadow="hover" class="bg-background p-4 md:p-6 rounded-lg transition transform hover:rotate-6">
          <p class="text-lg md:text-xl font-bold">"Tomorrow's Forecast: A heavy shower of...</p>
          <p class="italic hover:text-white">dancing pineapples!"</p>
        </el-card>
        <el-card shadow="hover" class="bg-background p-4 md:p-6 rounded-lg transition transform hover:rotate-6">
          <p class="text-lg md:text-xl font-bold">"Expect a wave of...</p>
          <p class="italic hover:text-white">laughing llamas!"</p>
        </el-card>
      </div>
    </section>

    <!-- Weather Wizardry Quiz Section -->
    <section class="py-12 md:py-16 bg-gray-100 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">Weather Wizardry</h2>
      <p class="text-base md:text-lg mb-4">Think you can outsmart Mother Nature? Take our weather quiz!</p>
      <el-button size="large" type="primary" class="rounded-full hover:bg-primary transition-transform transform hover:scale-110">
        Take the Quiz
      </el-button>
    </section>
  </div>
</template>

<script setup>
function handleGetStarted() {
  console.log('Get Started button clicked – time to stir up some weather chaos!');
}
</script>

<style scoped>
/* No custom CSS needed; using Tailwind CSS and Element Plus components */
</style>
