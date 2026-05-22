<script setup>
import { ref, computed, onMounted } from "vue";

import Button from "../components/Button.vue"; 

const activeColor = ref("#00CED1");
const colorName = ref("Dark Turquoise");
const isLoading = ref(false);
const historyLog = ref([]);

const textColor = computed(() => {
  if (isLoading.value) return "black";
  const hex = activeColor.value.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
});

const updateBackground = async () => {
  const randomHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  isLoading.value = true;

  try {
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${randomHex}`,
    );
    const data = await response.json();

    activeColor.value = data.hex.value;
    colorName.value = data.name.value;

    historyLog.value.unshift({
      hex: data.hex.value,
      name: data.name.value
    });
  } catch (error) {
    console.error("Oops, color fetch failed:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  updateBackground();
});
</script>

<template>
  <div class="container">
    <div class="colorcontainer" :style="{ backgroundColor: activeColor }">
      <h2 v-if="isLoading" class="info-text" :style="{ color: textColor }">Mixing paint...🎨</h2>
      <h2 v-else class="info-text" :style="{ color: textColor }">{{ colorName }}</h2>
    </div>

    <div class="history-section">
      <div class="history-list">
        <div 
          v-for="(color, index) in historyLog" 
          :key="index"
          class="history-circle"
          :style="{ backgroundColor: color.hex }"
          :title="color.name"
        ></div>
      </div>
    </div>

    <Button
      buttonText="Click Me!"
      :currentHex="activeColor"
      @changeColor="updateBackground"
    />
  </div>
</template>

<style scoped>
/* All your main container, layout, and swatch CSS goes here */
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: black;
}
.colorcontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: solid 5px blue;
  background-color: aqua;
  border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%;
}
.info-text {
  font-family: sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}
.history-section {
  min-height: 45px;
  max-width: 500px;
}
.history-list {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.history-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  transition: transform 0.2s ease;
}
.history-circle:hover {
  transform: scale(1.2);
}
</style>