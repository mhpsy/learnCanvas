<template>
  <div class="canvas01">
    <h1>canvas01:{{ id }}</h1>
    <canvas ref="root" width="500" height="500"></canvas>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const id = route.params.id;

const root = ref(null);

const canvasInit = () => {
  const context = root.value.getContext("2d");
  context.fillStyle = "red";
  context.fillRect(0, 0, 100, 100);
  for (let i = 0; i < 100; i++) {
    context.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    context.fillRect(Math.random() * 500, Math.random() * 500, 100, 100);
  }
}

onMounted(() => {
  canvasInit();
})


</script>

<style scoped>
.canvas01 {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

canvas {
  border: 1px solid black;
}

</style>