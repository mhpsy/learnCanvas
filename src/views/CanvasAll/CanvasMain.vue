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

const route = useRoute();
const id = route.params.id;


const componentName = computed(() => {
  //根据id返回不同的组件
  switch (id) {
    case "1":
      return Canvas01;
    case "2":
      return Canvas02;
    default:
      return Canvas01;
  }
})


</script>

<style scoped>


</style>