<template>
  <el-menu
      class="el-menu-aside"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
  >
    <template v-for="route in router.options.routes">
      <el-menu-item v-if="!route.children" :index="route.path" :key="route.path">{{ route.name }}</el-menu-item>
      <el-submenu v-else :index="route.path" :key="route.path">
        <template v-slot:title>{{ route.name }}</template>
        <template v-for="child in route.children">
          <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: String, keyPath: String[]) => {
  console.log(key, keyPath)
}

const router = useRouter();
console.log(router.options.routes);

import {useAsideCollapseStore} from "@/stores/isAsideCollapse";
import {storeToRefs} from "pinia";
//如果不使用storeToRefs，那么isCollapse就不是响应式的
const isCollapse = storeToRefs(useAsideCollapseStore()).isAsideCollapse;


</script>

<style scoped>
.el-menu-aside {
  height: 100vh;
}
</style>