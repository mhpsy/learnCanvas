<template>
  <div class="header">
    <div class="collapse">
      <el-icon :size="30">
        <component
            class="el-expand-collapse"
            :is="iconName"
            @click="clickCollapseIcon"
        ></component>
      </el-icon>
    </div>

  </div>
</template>

<script setup>
import {useAsideCollapseStore} from "@/stores/isAsideCollapse";
import {computed} from "vue";

const isAsideCollapse = useAsideCollapseStore()
console.log(isAsideCollapse.isAsideCollapse);

const clickCollapseIcon = () => {
  console.log('clickCollapseIcon');
  isAsideCollapse.toggleAsideCollapse();
}

const iconName = computed(() => {
  return isAsideCollapse.isAsideCollapse ? 'Expand' : 'Fold'
})

</script>

<style lang="less" scoped>
.header {
  display: flex;
  background-color: ghostwhite;

  .collapse {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
}


</style>