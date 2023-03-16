<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse">
    <template v-for="route in routes">
      <el-menu-item v-if="!route.children" :index="route.path" :key="route.path">{{ route.name }}</el-menu-item>
      <el-submenu v-else :index="route.path" :key="route.path">
        <template v-slot:title>{{ route.name }}</template>
        <template v-for="child in route.children">
          <el-menu-item :index="child.path" :key="child.path">{{ child.name }}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>