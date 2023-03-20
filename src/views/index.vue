<template>
  <div id="main">
    <el-container class="contain">
      <split v-model="offset" min="0">
        <div style="height: 100%" slot="left">
          <el-aside width="auto">
            <left-menu @sendInfo="sendInfo"></left-menu>
          </el-aside>
        </div>
        <div slot="right" style="height: 100%;padding: 0">
          <el-main v-if="info.startsWith('http')" style="padding: 0;height: 100%;overflow: hidden">
            <iframe id="iframe" :src="info" width="100%" height="100%" frameborder="0"></iframe>
          </el-main>
          <el-main v-show="info.startsWith('a-')" style="padding: 0;height: 100%;overflow: auto">
            <div style="padding: 20px">
              <note :info="info"></note>
            </div>
          </el-main>
          <el-main v-show="info==='b-vue代码'" style="padding: 0;height: 100%;overflow: auto">
            <vue-code-view></vue-code-view>
          </el-main>
          <el-main v-show="info==='b-html代码'" style="padding: 0;height: 100%;overflow: auto">
            <html-code-view></html-code-view>
          </el-main>
          <el-main v-show="info==='chatgpt'" style="padding: 0;height: 100%;overflow: auto">
            <chatgpt></chatgpt>
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
import VueCodeView from "@/components/codeView/vue-code-view";
import HtmlCodeView from "@/components/codeView/html-code-view";
import Chatgpt from "@/components/chatgpt/chatgpt";

export default {
  name: "index",
  data() {
    return {
      info: 'https://v2.cn.vuejs.org/v2/guide/',
      offset: .18,
    }
  },
  components: {
    Chatgpt,
    HtmlCodeView,
    VueCodeView,
    Note,
    LeftMenu,
  },
  methods: {
    sendInfo(info) {
      if (NoIframe.includes(info)) {
        window.open(info)
      } else {
        this.info = info
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

    /deep/ .el-main {
      overflow: auto;
    }

    /deep/ .el-aside {
      height: 100%;
    }
  }
}
</style>