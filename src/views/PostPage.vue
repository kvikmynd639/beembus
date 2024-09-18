<template>
  <div class="flex max-w-7xl mx-auto py-8 px-4 gap-8">
    <!-- Left Sidebar: Recommendations -->
    <aside class="w-1/4 hidden lg:block bg-white rounded-lg shadow-md p-4">
      <h2 class="text-2xl font-bold mb-4 text-primary">Recommended Profiles</h2>
      <ul class="space-y-4">
        <li class="flex items-center gap-4">
          <img src="https://via.placeholder.com/40" alt="Profile 1" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-semibold">SunnyGiraffe42</p>
            <!-- Element Plus Button for "Add Friend" -->
            <el-button type="primary" size="small" plain class="text-secondary hover:text-primary transition">Add Friend</el-button>
          </div>
        </li>
        <li class="flex items-center gap-4">
          <img src="https://via.placeholder.com/40" alt="Profile 2" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-semibold">RainyUnicorn99</p>
            <el-button type="primary" size="small" plain class="text-secondary hover:text-primary transition">Add Friend</el-button>
          </div>
        </li>
        <li class="flex items-center gap-4">
          <img src="https://via.placeholder.com/40" alt="Profile 3" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-semibold">ThunderCatRider</p>
            <el-button type="primary" size="small" plain class="text-secondary hover:text-primary transition">Add Friend</el-button>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Main Content: Posts List -->
    <main class="flex-1">
      <section>
        <h1 class="text-3xl font-bold mb-4 text-primary">Latest Posts</h1>
        <div class="space-y-6">
          <!-- Post Row 1 wrapped with Element Plus ElCard -->
          <el-card class="bg-white p-6 rounded-lg shadow-md flex gap-4" shadow="hover">
            <img src="https://via.placeholder.com/80" alt="Post Image" class="w-20 h-20 rounded-lg object-cover">
            <div class="flex-1">
              <h2 class="text-xl font-bold text-primary">Why Do Giraffes Love the Sunshine?</h2>
              <p class="text-gray-600 text-sm">Posted by SunnyGiraffe42 • 3 hours ago</p>
              <p class="text-gray-700 mt-2">Experts are baffled by these long-necked creatures’ obsession with sunbathing. Is it the vitamin D or just a dramatic flair?</p>
            </div>
          </el-card>

          <!-- Post Row 2 -->
          <el-card class="bg-white p-6 rounded-lg shadow-md flex gap-4" shadow="hover">
            <img src="https://via.placeholder.com/80" alt="Post Image" class="w-20 h-20 rounded-lg object-cover">
            <div class="flex-1">
              <h2 class="text-xl font-bold text-primary">Unicorns Spotted Dancing in the Rain!</h2>
              <p class="text-gray-600 text-sm">Posted by RainyUnicorn99 • 5 hours ago</p>
              <p class="text-gray-700 mt-2">A mysterious herd of unicorns was seen pirouetting in a torrential downpour. Local weather enthusiasts are bewildered...</p>
            </div>
          </el-card>

          <!-- Post Row 3 -->
          <el-card class="bg-white p-6 rounded-lg shadow-md flex gap-4" shadow="hover">
            <img src="https://via.placeholder.com/80" alt="Post Image" class="w-20 h-20 rounded-lg object-cover">
            <div class="flex-1">
              <h2 class="text-xl font-bold text-primary">The Thunder Cats of Tornado Alley</h2>
              <p class="text-gray-600 text-sm">Posted by ThunderCatRider • 1 day ago</p>
              <p class="text-gray-700 mt-2">Meet the bravest felines who thrive on storm-chasing! These daredevil cats don't hide; they ride the wind...</p>
            </div>
          </el-card>
        </div>
      </section>
    </main>
  </div>

  <!-- Footer using Element Plus ElFooter -->
  <el-footer class="bg-primary text-white py-8 mt-8">
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
  </el-footer>
</template>

<script setup>
// No additional script logic is needed for this static page.
</script>

<style scoped>
/* No custom CSS needed; using Tailwind CSS and Element Plus components */
</style>
