<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-primary bg-center bg-cover py-32 px-4 text-white">
        <div class="flex justify-between items-center h-full gap-6">
          <!-- Left Side: Text and Weather Icons -->
          <div class="w-1/2">
            <h1 class="text-5xl font-bold mb-6">Welcome to BeemBus!</h1>
            <p class="text-2xl mb-8">Where the weather is ALWAYS a hot topic... or freezing... or rainy... you get it.</p>
            <div class="flex space-x-4">
              <!-- Weather Icons -->
              <i class="fas fa-cloud-showers-heavy text-4xl text-accent"></i>
              <i class="fas fa-sun text-4xl text-secondary"></i>
              <i class="fas fa-cloud text-4xl text-background"></i>
            </div>
          </div>
  
          <!-- Right Side: Glass Transparent Div for Weather Info -->
          <div class="w-1/2 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md">
            <h2 class="text-3xl font-bold mb-4">Current Weather</h2>
            <p class="text-lg mb-2">Location: Sunnyville</p>
            <p class="text-lg mb-2">Temperature: 25°C</p>
            <p class="text-lg mb-2">Condition: Clear Skies</p>
            <p class="text-lg">Humidity: 40%</p>
          </div>
        </div>
      </section>
  
      <!-- What’s the Buzz Section -->
      <section class="py-16 bg-background">
        <h2 class="text-3xl font-bold text-center text-primary mb-8">Why Jump on the BeemBus?</h2>
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-secondary transition">
            <i class="fas fa-cloud-showers-heavy text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Rant About Weather</h3>
            <p>Too sunny? Too rainy? Too… Tuesday? Unleash your inner weather maniac!</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-secondary transition">
            <i class="fas fa-umbrella-beach text-4xl text-accent mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Show Off Your Weather Wits</h3>
            <p>It’s not just small talk; it’s an ART. We appreciate your drizzle jokes and sunshine puns.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-secondary transition">
            <i class="fas fa-wind text-4xl text-secondary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Blow Away the Boredom</h3>
            <p>Feeling windswept? Jump into the buzz and blow off some steam.</p>
          </div>
        </div>
      </section>
  
      <!-- Testimonial Section -->
      <section class="py-16 bg-white">
        <h2 class="text-3xl font-bold text-center text-primary mb-8">The Forecast? Pure Banter.</h2>
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div class="bg-background p-6 rounded-lg shadow-lg hover:bg-secondary transition">
            <p class="italic">"BeemBus got me talking about the weather like a professional drama queen. 10/10!"</p>
            <h4 class="mt-4 font-bold text-right">- Weather Wiz Jane</h4>
          </div>
          <div class="bg-background p-6 rounded-lg shadow-lg hover:bg-secondary transition">
            <p class="italic">"Now I can finally show off my thunderstorm jokes. BeemBus, you complete me!"</p>
            <h4 class="mt-4 font-bold text-right">- Rainy Day Rick</h4>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="bg-secondary text-center py-16">
        <h2 class="text-4xl font-extrabold text-primary">Ready to Be Blown Away?</h2>
        <button @click="handleGetStarted" class="mt-6 bg-accent text-black py-3 px-8 rounded-full text-lg hover:bg-primary transition-transform transform hover:rotate-12">
          Join the BeemBus Party!
        </button>
      </section>
  
      <!-- Footer -->
      <footer class="bg-primary text-white py-8">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2024 BeemBus. We're not responsible for any weather-related drama.</p>
          <div class="mt-4 md:mt-0">
            <a href="#" class="text-white mx-2 hover:underline">Fine Print</a>
            <a href="#" class="text-white mx-2 hover:underline">Fancy Terms</a>
          </div>
          <div class="mt-4 md:mt-0">
            <a href="#" class="text-white mx-2"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white mx-2"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  function handleGetStarted() {
    console.log('Get Started button clicked – time to stir up some weather chaos!');
  }
  </script>
  
  <style scoped>
  /* No custom CSS needed; using Tailwind CSS only */
  </style>
  
  