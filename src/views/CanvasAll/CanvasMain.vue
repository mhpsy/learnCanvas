<template>
  <div class="canvas">
    <h5>id:{{ id }}</h5>
    <component :is="componentName"></component>
  </div>

</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

import Canvas01 from "@/views/CanvasAll/com/Canvas01/Canvas01.vue";
import Canvas02 from "@/views/CanvasAll/com/Canvas02/Canvas02.vue";
import Canvas03 from "@/views/CanvasAll/com/Canvas03/Canvas03.vue";
import Canvas04 from "@/views/CanvasAll/com/Canvas04/Canvas04.vue";

const route = useRoute();
const id = route.params.id;


const componentName = computed(() => {
  //根据id返回不同的组件
  switch (id) {
    case "1":
      return Canvas01;
    case "2":
      return Canvas02;
    case "3":
      return Canvas03;
    case "4":
      return Canvas04;
    default:
      return Canvas03;
  }
})


</script>

<style scoped>


</style>