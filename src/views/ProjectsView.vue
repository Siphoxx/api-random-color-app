<script setup>
import { ref } from 'vue';

// Mock data representing your professional marketing assets, copywriting pieces, or spec ads
const creativeProjects = ref([
  {
    id: 1,
    title: "Direct Response Copywriting Spec Ad",
    category: "Copywriting",
    description: "A high-conversion sales page framework focused on hooks, consumer psychology, and strong calls-to-action.",
    badgeColor: "#ff4757"
  },
  {
    id: 2,
    title: "Verbose vs. Skinny Code Philosophy",
    category: "Content Strategy",
    description: "A deep-dive technical blog post written for developers, exploring clarity versus brevity in modern programming architectures.",
    badgeColor: "#2ed573"
  },
  {
    id: 3,
    title: "Kasi Shine Brand Identity Concept",
    category: "Brand Design",
    description: "A comprehensive localized visual branding layout featuring a tailored shield badge and custom vehicle vectors.",
    badgeColor: "#1e90ff"
  }
]);
</script>

<template>
  <div class="portfolio-container">
    <header class="portfolio-header">
      <h1>Creative & Strategy Showcase 📊</h1>
      <p>A collection of tactical digital marketing frameworks, copywriting specimens, and functional designs.</p>
    </header>

    <div class="projects-grid">
      <div 
        v-for="project in creativeProjects" 
        :key="project.id" 
        class="project-card"
      >
        <span class="category-badge" :style="{ backgroundColor: project.badgeColor }">
          {{ project.category }}
        </span>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <RouterLink 
  :to="'/showcase/' + project.id" 
  class="view-project-btn"
>
  Inspect Asset →
</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
  color: #fff;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-header h1 {
  font-size: 2.5rem;
  color: #42b883; /* Custom Vue Green */
  margin-bottom: 10px;
}

.portfolio-header p {
  color: #aaa;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #42b883;
}

.category-badge {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  color: #fff;
  margin-bottom: 15px;
}

.project-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #fff;
}

.project-card p {
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 20px 0;
  flex-grow: 1; /* Pushes the button to the absolute bottom of the card */
}

.view-project-btn {
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.view-project-btn:hover {
  background: #42b883;
  color: #111;
}
</style>