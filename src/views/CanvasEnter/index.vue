<template>
  <div class="box">
    <div v-for="item in CanvasNumArr" class="card">
      <router-link :to="'/canvas/' + item">
        <div class="title">
          <h3>Canvas{{ item }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

const CanvasNumArr = []
for (let i = 1; i <= 100; i++) {
  CanvasNumArr.push(i)
}


</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .card {
    width: calc(100% / 6 - 25px);
    height: 200px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}

</style>