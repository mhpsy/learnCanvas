<template>
  <canvas ref="canvas"></canvas>
  <div style="width: 200px;">
    wave.amplitude:
    <el-slider v-model="wave.amplitude" :min="0" :max="200"></el-slider>
    wave.frequency:
    <el-slider v-model="wave.frequency" :min="0.01" :max="0.05" :step="0.01"></el-slider>
    wave.add:
    <el-slider v-model="wave.add" :min="0" :max="0.5" :step="0.1"></el-slider>
  </div>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue";

const canvas = ref(null);

let context = null;
let height = 1000;
let width = 1000;

onMounted(() => {
  context = canvas.value.getContext("2d");
  init();//初始化
  drawCircle();//画圆
  animate();
})

const init = () => {
  canvas.value.width = width;
  canvas.value.height = height;
  context.lineWidth = 2;
  context.lineCap = 'round';
  context.strokeStyle = '#000';
}

const wave = reactive({
  y: height / 2,//波浪的y坐标
  amplitude: 100,//振幅
  frequency: 0.01,//频率
  speed: 0.1,//速度
  add: 0.1,//增量
  color: '#000',
  lineWidth: 1,
})

const drawWave = () => {
  context.restore();//还原之前保存的画布状态
  context.beginPath();
  context.moveTo(0, wave.y);//也就是移动到波浪的起始点 canvas高度的一半
  for (let x = 0; x < width; x++) {
    const y = wave.y + Math.sin(x * wave.frequency + wave.speed) * wave.amplitude;
    context.lineTo(x, y);
  }

  // // 第二个波浪
  // context.moveTo(30, wave.y);//也就是移动到波浪的起始点 canvas高度的一半
  // for (let x = 30; x < width; x++) {
  //   const y = wave.y + Math.sin(x * wave.frequency + wave.speed) * wave.amplitude;
  //   context.lineTo(x + 30, y);
  // }

  context.stroke();
}

const animate = () => {
  context.clearRect(0, 0, width, height);
  drawWave();
  wave.speed += wave.add;
  requestAnimationFrame(animate);
}

// const drawCircle = () => {
//   // console.log('drawCircle')
//   context.beginPath();
//   context.arc(100, 100, 50, 0, Math.PI * 2, true);
//   //arc(x,y,r,sAngle,eAngle,counterclockwise)
//   //x,y:圆心坐标
//   //r:半径
//   //sAngle,eAngle:起始角度和结束角度
//   //counterclockwise:是否逆时针
//   context.stroke();
//   context.save();//保存画布状态
// }
const drawCircle = () => {
  context.save();  // 保存画布状态
  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, true);
  context.stroke();
  context.restore();  // 恢复画布状态
}


</script>

<style>
canvas {
  height: 1000px;
  width: 1000px;
}
</style>
