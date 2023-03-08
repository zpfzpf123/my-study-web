<template>
  <div class="page-not-found">
    <p style="font-size: 40px;line-height: 40px">404</p>
    <p style="font-size: 40px;line-height: 40px">抱歉，你访问的页面{{ pageName }}不存在。</p>
    <el-button style="font-size: 40px;line-height: 40px;margin-top: 20px" @click="$router.go(-1)">
      返回
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  props: ['pageName']
}
</script>

<style scoped lang="less">
@keyframes gradient {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}

.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
}

.page-not-found::before {
  content: "";
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: -1;

  background: linear-gradient(45deg, #000, #fff, #000);
  background-size: 400%;

  animation: gradient infinite alternate linear;
  animation-duration: 15s;
}
</style>