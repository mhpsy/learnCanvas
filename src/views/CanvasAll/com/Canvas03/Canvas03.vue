<template>
  <canvas width="500" height="500" ref="canvasRef" @mousedown="startDrawing" @mousemove="draw"
          @mouseup="stopDrawing"></canvas>
</template>

<script setup>
import {defineComponent, onMounted, ref} from 'vue';


const canvasRef = ref(null);
const isDrawing = ref(false);
let lastX = 0;
let lastY = 0;
let canvas = null
let context = null


onMounted(() => {
      canvas = canvasRef.value;
      context = canvas.getContext('2d');
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = '#000';
    }
)


function startDrawing(event) {
  isDrawing.value = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

function draw(event) {
  if (!isDrawing.value) return;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

function stopDrawing() {
  isDrawing.value = false;
}


</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
