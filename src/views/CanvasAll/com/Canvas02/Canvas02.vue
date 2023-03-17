<template>
  <div class="canvas01">
    <h1>Canvas02</h1>
  </div>
  id:{{ id }}
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
const route = useRoute();
const id = route.params.id;


</script>

<style scoped>

</style>