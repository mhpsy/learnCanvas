<template>
  <div class="box">
    <div class="card">
      Magic Card
    </div>
  </div>
</template>

<script>
export default {
  name: "iconShowList"
}
</script>

<style lang="less" scoped>
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

.box {
  --card-h: 50vh;
  --card-w: calc(var(--card-h) / 1.5);
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .card {
    background: #191c29;
    width: var(--card-w);
    height: var(--card-h);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
  }

  .card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
  }

  .card:hover:before, .card:hover:after {
    animation: none;
    opacity: 0;
  }

  .card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  .card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-h) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-h) / 6));
    background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }



}

</style>