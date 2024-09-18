<template>
    <div class="max-w-5xl mx-auto py-8 px-4">
      <!-- Profile Header Section -->
      <section class="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-8">
        <el-avatar size="150px" class="mb-4">
          <img src="https://via.placeholder.com/150" alt="Profile Picture" />
        </el-avatar>
        <h1 class="text-3xl font-bold mb-2">SunnyGiraffe42</h1>
        <p class="text-gray-600 mb-4">"Chasing sunshine one day at a time!"</p>
        <el-button type="primary" round>Edit Profile</el-button>
      </section>
  
      <!-- About Me Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold text-primary mb-4">About Me</h2>
        <el-card class="bg-gray-100 p-6 rounded-lg shadow-md">
          <p class="text-lg">
            Hey there! I'm SunnyGiraffe42, your local weather enthusiast. I thrive on sunshine, love a good sunbeam, and think giraffes are nature's best mood-lifters! When I'm not talking about the weather, you'll find me enjoying a cozy spot by the window with a cup of hot cocoa. 🌞
          </p>
        </el-card>
      </section>
  
      <!-- Weather Preferences Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold text-primary mb-4">Weather Preferences</h2>
        <el-card class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex flex-wrap gap-4">
            <el-tag type="success" effect="dark">Sunny Days</el-tag>
            <el-tag type="info" effect="dark">Gentle Breeze</el-tag>
            <el-tag type="warning" effect="dark">Rainbow Afternoons</el-tag>
            <el-tag type="primary" effect="dark">Warm Showers</el-tag>
          </div>
        </el-card>
      </section>
  
      <!-- Recent Activity Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold text-primary mb-4">Recent Activity</h2>
        <div class="space-y-4">
          <!-- Activity 1 -->
          <el-card class="bg-white p-4 rounded-lg shadow-md">
            <p class="text-gray-600">
              <strong>SunnyGiraffe42</strong> commented on <strong>Unicorns Spotted Dancing in the Rain!</strong>: "This is the best weather news I've heard all week!"
            </p>
          </el-card>
          <!-- Activity 2 -->
          <el-card class="bg-white p-4 rounded-lg shadow-md">
            <p class="text-gray-600">
              <strong>SunnyGiraffe42</strong> liked the post <strong>The Thunder Cats of Tornado Alley</strong>.
            </p>
          </el-card>
          <!-- Activity 3 -->
          <el-card class="bg-white p-4 rounded-lg shadow-md">
            <p class="text-gray-600">
              <strong>SunnyGiraffe42</strong> started a new chat with <strong>RainyUnicorn99</strong>.
            </p>
          </el-card>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-primary text-white py-8 mt-8">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2024 BeemBus. We love sunshine and weather banter!</p>
          <div class="mt-4 md:mt-0">
            <a href="#" class="text-white mx-2 hover:underline">Privacy Policy</a>
            <a href="#" class="text-white mx-2 hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  // No additional script logic is needed for this static profile page.
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  