<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to BeemBus!</h1>
        <p class="hero-subtitle">Where weather small talk gets hilarious!</p>
        <button class="cta-button" @click="handleGetStarted">Get Started</button>
      </div>
    </section>

    <!-- Description Section -->
    <section class="description">
      <h2>Talk Weather, Make Friends</h2>
      <p>
        Ever been caught in an awkward small talk? We got you covered with weather talk! Share the funniest weather updates, make witty comments, and enjoy the chat!
      </p>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Talk About the Weather?</h2>
      <button class="cta-button" @click="handleGetStarted">Join the Conversation</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    handleGetStarted() {
      // Navigation or sign-up logic here
      console.log('Get Started button clicked');
    },
  },
};
</script>

<style scoped>
/* General Styles */
.landing-page {
  font-family: 'Arial, sans-serif';
  color: #333;
  padding: 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #FFFAE6, #FF9F66);
  text-align: center;
  padding: 60px 20px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  color: #FF5F00;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin: 20px 0;
}

.cta-button {
  background-color: #002379;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #379777;
}

/* Description Section */
.description {
  text-align: center;
  margin: 40px 0;
}

.description h2 {
  font-size: 2rem;
  color: #FF5F00;
}

.description p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px auto;
}

/* CTA Section */
.cta-section {
  background: #FFFAE6;
  text-align: center;
  padding: 40px 20px;
}

.cta-section h2 {
  font-size: 2rem;
  color: #002379;
}
</style>
