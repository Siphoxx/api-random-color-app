<script setup>
import { ref, computed, onMounted } from "vue";
import Button from "./components/Button.vue";

const activeColor = ref("#00CED1");

const colorName = ref("Dark Turquoise");

const isLoading = ref(false);

const historyLog = ref([]);

// 2. Create the computed property
const textColor = computed(() => {
  // If we are currently loading, keep the text black
  if (isLoading.value) return "black";

  // Grab our clean hex code string and strip off the '#' symbol if it exists
  const hex = activeColor.value.replace("#", "");
  
  // Convert the hex string into raw Red, Green, and Blue numbers
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // A standard industry formula to calculate perceived brightness/luminance
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // If brightness is greater than 128, it's a light color -> return black text.
  // Otherwise, it's a dark color -> return white text!
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
body {
  background-color: blue;
  height: 100dvh;
}
.container {
  display: flex;
  flex-direction: column; /* 4. Added to stack the blob, circles, and button vertically */
  gap: 30px;              /* 5. Gives breathing room between components */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: black;
}

.history-section {
  min-height: 45px; /* Keeps layout stable even when empty */
  max-width: 500px;
}

.history-list {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap; /* Wraps circles to a new line if you click a lot! */
}

.history-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  transition: transform 0.2s ease;
}

.history-circle:hover {
  transform: scale(1.2); /* Pops out slightly when you hover over it */
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
  /* color: black;  <-- REMOVE OR COMMENT THIS OUT */
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}
</style>
