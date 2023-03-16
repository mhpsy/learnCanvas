<template>
  <div class="canvas01">
    <h1>Canvas01</h1>
  </div>
  id:{{ id }}
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const id = route.params.id;

const router = useRouter();
const showSource = () => {
  router.push({path: `/canvas/${id}/source`})
}

</script>

<style scoped>

</style>