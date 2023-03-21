<template>
  <div class="canvas01">
    <h1>一个画板</h1>
    <canvas
        class="canvas-map"
        ref="canvas"
        @mousedown="mousedownCanvas"
        @mousemove="mousemoveCanvas"
        @mouseup="mouseupCanvas"
    ></canvas>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";


const canvas = ref(null);
let context = null
let canvasRect = null
let isMouseDown = false;//鼠标是否按下
const startCoordinate = reactive({
  x: undefined,
  y: undefined,
})

const canvasInit = () => {
  context = canvas.value.getContext("2d");
  canvasRect = canvas.value.getBoundingClientRect();
}

const mousedownCanvas = (e) => {
  //鼠标按下
  isMouseDown = true;
  const mouseCoordinate = getMouseCoordinate(e);
  startCoordinate.x = mouseCoordinate.x;
  startCoordinate.y = mouseCoordinate.y;
}

const mousemoveCanvas = (e) => {
  //鼠标移动
  if (isMouseDown) {
    const mouseCoordinate = getMouseCoordinate(e);
    const newCoordinate = {
      x: mouseCoordinate.x,
      y: mouseCoordinate.y,
    }
    drawLine(startCoordinate, newCoordinate);
    //更新开始的坐标
    startCoordinate.x = newCoordinate.x;
    startCoordinate.y = newCoordinate.y;
  }
}

const mouseupCanvas = (e) => {
  //鼠标抬起
  isMouseDown = false;
}

const drawLine = (startCoordinate, endCoordinate) => {
  context.beginPath();
  context.moveTo(startCoordinate.x, startCoordinate.y);
  context.lineTo(endCoordinate.x, endCoordinate.y);
  context.stroke();
  context.closePath();//关闭路径
}

//获取鼠标在canvas中的坐标
// const getMouseCoordinate = (e) => {
//   const x = e.clientX - canvasRect.left;
//   const y = e.clientY - canvasRect.top;
//   // console.log(x, y)
//   return {x, y}
// }

const getMouseCoordinate = (e) => {
  const canvasRect = canvas.value.getBoundingClientRect();
  // const x = (e.clientX - canvasRect.left)/2;
  // const y = (e.clientY - canvasRect.top)/4;
  const x = (e.clientX - canvasRect.left) / 2;
  const y = (e.clientY - canvasRect.top) / 4;
  return {x, y}
}

onMounted(() => {
  canvasInit();
})


</script>

<style scoped>
.canvas-map {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

</style>