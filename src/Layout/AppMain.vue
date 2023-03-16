<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="width: auto;">
        <!--这里的width: auto;是为了让el-aside自适应宽度去掉默认的300px-->
        <ASide/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0;">
          <AHeader/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import ASide from "@/Layout/com/ASide.vue";
import AHeader from "@/Layout/com/AHeader.vue";


</script>

<style scoped>

</style>