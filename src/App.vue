<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app-layout">
    <nav class="nav-bar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/color-mixer" class="nav-link">Color Mixer</RouterLink>
      <RouterLink to="/showcase" class="nav-link">Showcase</RouterLink>
    </nav>

    <main class="content-window">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Global resets for the whole application */
body {
  margin: 0;
  background-color: #111;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav-bar {
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: #222;
  padding: 20px;
  border-bottom: 2px solid #333;
}

.nav-link {
  color: #aaa;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

/* Highlights active tab in Vue Green */
.router-link-active {
  color: #42b883 !important;
}

.nav-link:hover {
  color: white;
}

.content-window {
  flex: 1;
  width: 100%;
}
</style>