<template>
  <div id="main">
    <el-container class="contain">
      <split v-model="offset" min="0">
        <div style="height: 100%" slot="left">
          <el-aside width="auto">
            <left-menu @sendUrl="sendUrl"></left-menu>
          </el-aside>
        </div>
        <div slot="right" style="height: 100%;padding: 0">
          <el-main v-show="url.startsWith('http')" style="padding: 0;height: 100%;overflow: hidden">
            <iframe  id="iframe" :src="url" width="100%" height="100%" frameborder="0"></iframe>
          </el-main>
          <el-main v-show="!url.startsWith('http')" style="padding: 0;height: 100%;overflow: auto">
            <div style="padding: 20px">
              <note :info="noteInfo"></note>
            </div>
          </el-main>
        </div>
      </split>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "@/components/menu/left-menu";
import NoIframe from "@/components/menu/noIframe";
import Note from "@/components/note/Note";
export default {
  name: "index",
  data() {
    return {
      url: 'https://v2.cn.vuejs.org/v2/guide/',
      offset:.18,
      noteInfo:''
    }
  },
  components: {
    Note,
    LeftMenu,
  },
  methods: {
    sendUrl(url) {
      if(NoIframe.includes(url)){
        window.open(url)
      }else {
          this.url = url
          switch (url) {
            case 'js':
              this.noteInfo='Js';
              break;
            case 'Vue':
              this.noteInfo='Vue';
              break;
            case 'css':
              this.noteInfo='Css';
              break;
            case '常用组件':
              this.noteInfo='常用组件'
          }
      }
    }
  }
}
</script>

<style scoped lang="less">
#main {
  width: 100%;
  height: 100%;

  .contain {
    width: 100%;
    height: 100%;
    /deep/ .el-main{
      overflow: auto;
    }
    /deep/ .el-aside{
      height: 100%;
    }
  }
}
</style>