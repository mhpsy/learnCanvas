<template>
  <div class="canvas01source">
    <h1>Canvas01source</h1>
  </div>
  id:{{ id }}
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const id = route.params.id;

</script>

<style scoped>

</style>