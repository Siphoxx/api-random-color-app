<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const projectId = computed(() => parseInt(route.params.id));

// Extended project data containing the full case study text
const caseStudies = ref([
  {
    id: 1,
    title: "Direct Response Copywriting Spec Ad",
    category: "Copywriting",
    badgeColor: "#ff4757",
    challenge: "The client needed to increase sign-ups for a premium digital service, but their existing landing page was bogged down with passive technical descriptions that failed to convert casual traffic.",
    solution: "I restructured the entire sales flow using a direct-response architecture. This included crafting an emotional 'hook' headline, mapping out consumer pain points, utilizing urgent bullet-point benefits, and closing with an irresistible, low-friction Call to Action (CTA).",
    takeaway: "Clear, benefit-driven messaging beats clever design every single time. By focusing on consumer psychology over features, the messaging drives active conversion frames."
  },
  {
    id: 2,
    title: "Verbose vs. Skinny Code Philosophy",
    category: "Content Strategy",
    badgeColor: "#2ed573",
    challenge: "Technical audiences have an incredibly high filter for generic marketing fluff. The challenge was writing a compelling content asset that demonstrated deep engineering empathy while remaining scannable and practical.",
    solution: "I authored a deep-dive comparison piece analyzing the maintenance overhead of 'skinny/clever' one-liners versus 'verbose/readable' expressive code blocks. Used clean markdown code specimens and structured the narrative using direct formatting principles.",
    takeaway: "Effective content marketing for developers requires treating technical concepts with respect. Speaking the audience's language naturally establishes domain authority."
  },
  {
    id: 3,
    title: "Kasi Shine Brand Identity Concept",
    category: "Brand Design",
    badgeColor: "#1e90ff",
    challenge: "Establishing a premium, trustworthy brand identity for a localized automotive styling service without alienating the neighborhood demographic.",
    solution: "Developed a comprehensive visual strategy centered around a bold 'Shield Badge' vector design to communicate security and high-quality craftsmanship. Integrated clean vehicle silhouettes and premium color tones suitable for diverse marketing materials.",
    takeaway: "Local branding doesn't mean low quality. Aligning localized familiarity with world-class design structures creates an incredibly powerful consumer trust signal."
  }
]);

// Compute the specific project matching the current URL ID
const project = computed(() => {
  return caseStudies.value.find(p => p.id === projectId.value);
});
</script>

<template>
  <div class="case-study-container">
    <RouterLink to="/showcase" class="back-link">← Back to Showcase</RouterLink>

    <div v-if="project" class="study-content">
      <span class="category-badge" :style="{ backgroundColor: project.badgeColor }">
        {{ project.category }}
      </span>
      
      <h1>{{ project.title }}</h1>
      <hr class="divider" />

      <section class="study-section">
        <h2>The Challenge 🎯</h2>
        <p>{{ project.challenge }}</p>
      </section>

      <section class="study-section">
        <h2>The Solution 🛠️</h2>
        <p>{{ project.solution }}</p>
      </section>

      <section class="study-section">
        <h2>Key Takeaway 💡</h2>
        <p class="takeaway-box">{{ project.takeaway }}</p>
      </section>
    </div>

    <div v-else class="error-content">
      <h2>Case Study Not Found</h2>
      <p>The project asset you are trying to inspect does not exist.</p>
    </div>
  </div>
</template>

<style scoped>
.case-study-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
  color: #fff;
}

.back-link {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
  transition: transform 0.2s;
}

.back-link:hover {
  transform: translateX(-5px);
}

.category-badge {
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 15px;
}

h1 {
  font-size: 2.5rem;
  margin: 0 0 20px 0;
}

.divider {
  border: 0;
  height: 1px;
  background: #333;
  margin-bottom: 40px;
}

.study-section {
  margin-bottom: 40px;
}

.study-section h2 {
  color: #42b883;
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.study-section p {
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.7;
}

.takeaway-box {
  background-color: #1e1e1e;
  border-left: 4px solid #42b883;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  font-style: italic;
}

.error-content {
  text-align: center;
  padding: 50px 0;
}
</style>