<template>
  <div class="box">
    <el-button size="small" type="primary" @click="showSource">{{ buttonName }}</el-button>
    <router-view/>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";

const route = useRoute();
const id = route.params.id;

const router = useRouter();
const showSource = () => {
  if (buttonName.value === 'Show Source') {
    router.push({path: `/canvas/${id}/source`})
  } else {
    router.push({path: `/canvas/${id}`})
  }
}

const buttonName = computed(() => {
  //判断url地址是不是source结尾
  if (route.path.endsWith('source')) {
    return 'Show Canvas'
  } else {
    return 'Show Source'
  }
})

</script>

<style scoped>

</style>