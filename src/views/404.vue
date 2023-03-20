<template>
  <div class="page-not-found">
    <p class="title">404</p>
    <p class="subtitle">抱歉，你访问的页面{{ pageName }}不存在。</p>
    <el-button class="button" @click="$router.go(-1)">
      <span class="button-text" style="font-size: 30px;">返回</span>
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

.title {
  font-size: 40px;
  line-height: 40px;
  color: #333;
}

.subtitle {
  font-size: 40px;
  line-height: 40px;
  color: #333;
}

.button {
  font-size: 40px;
  line-height: 40px;
  margin-top: 20px;
  background-color: #409EFF;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-image: linear-gradient(to right, #409EFF, #3a8ee6);
  animation: gradient 5s ease-in-out infinite alternate;
}

.button:hover {
  background-color: #3a8ee6;
}

.button:active {
  transform: scale(0.95);
}

.button-text {
  margin-left: 10px;
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
