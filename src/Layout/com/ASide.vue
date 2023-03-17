<template>
  <el-menu
      class="el-menu-aside"
      :collapse="isCollapse"
  >
    <template v-for="route in router.options.routes">
      <el-menu-item v-if="!route.children && !route.meta?.hideAside" :index="route.path" :key="route.path"
                    @click="clickNoPrent(route)">
        {{ route.name }}
      </el-menu-item>
      <el-sub-menu v-else-if="route.children && !route.meta?.hideAside" :index="route.path" :key="route.path">
        <el-icon><House /></el-icon>
        <template #title>
          <span>{{ route.name }}</span>
        </template>
        <template v-for="child in route.children">
          <el-menu-item :index="child.path" @click="clickHavePrent(route,child)">{{ child.name }}</el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter();
console.log(router.options.routes);

/**
 * 点击没有子菜单的菜单项
 * @param route
 */
const clickNoPrent = (route: any) => {
  console.log(route)
  router.push({path: route.path})
}

/**
 * 点击有子菜单的菜单项
 * @param route 父菜单
 * @param child 子菜单
 */
const clickHavePrent = (route: any, child: any) => {
  //拼接路径
  const path = route.path + '/' + child.path;
  router.push({path: path})
}


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