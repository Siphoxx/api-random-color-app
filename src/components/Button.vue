<script setup>
const emit = defineEmits(["changeColor"]);
defineProps(["buttonText", "currentHex"]);
</script>
<template>
  <button @click="emit('changeColor')">
    {{ buttonText }} (Currently: {{ currentHex }})
  </button>
</template>
<style scoped>
button {
  width: 220px;
  height: 100px;
  background-color: rgb(8, 45, 228);
  color: #f4f811;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: border-radius 0.5s ease;
  border-radius: 70% 20% 40% 70% / 60% 30% 40% 50%;
}

button:hover {
  border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%;
  background-color: rgb(228, 45, 8);
}
</style>
