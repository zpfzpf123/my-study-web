<template>
  <div class="js-note">
    <el-backtop target=".js-note" style="position: absolute;z-index: 9999;"></el-backtop>
    <el-input placeholder="请输入你要查询的标题" v-model="listName"></el-input>
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="item in newNotes" :key="item.name" :title="item.title" :name="item.name">
        <v-md-editor left-toolbar="fullscreen" right-toolbar="" :include-level="[1,2,3,4]"
                     v-model="item.content"
                     height="600px"></v-md-editor>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import JsNotes from "@/components/note/jsNotes";
import CssNotes from "@/components/note/cssNotes";
import VueNotes from "@/components/note/vueNotes";
import ZujianNotes from "@/components/note/zujianNotes";

export default {
  name: "Note",
  props: {
    info: {
      type: String,
      default: 'Js'
    }
  },
  data() {
    return {
      Notes: JsNotes,
      activeName: '',
      listName: '',
    }
  },
  computed: {
    newNotes() {
      return this.Notes.filter(i => i.title.toLowerCase().includes(this.listName.toLowerCase()))
    }
  },
  watch: {
    info(val) {
      if (val === 'a-js') {
        this.Notes = JsNotes
      } else if (val === 'a-Vue') {
        this.Notes = VueNotes
      } else if (val === 'a-css') {
        this.Notes = CssNotes
      } else if (val === 'a-常用组件') {
        this.Notes = ZujianNotes
      }
      if (val.startsWith('a-')) {
        this.$notify({
          title: '提示',
          message: `该页面共有${this.Notes.length}条数据`,
          type: 'success',
          showClose: false,
          duration: 2000
        });
        this.listName = ''
        this.activeName = ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.js-note {
  height: 93vh;
  overflow-x: hidden;
  overflow-y: auto;
}

/deep/ .v-note-wrapper {
  padding: 0;
  margin: 0;
  max-width: none;
}

/deep/ .v-md-textarea-editor {
  display: none;
}

/deep/ .v-md-editor__editor-wrapper {
  display: none;
}

/deep/ .v-md-editor__preview-wrapper {
  flex: none;
  width: 100%;
}

/deep/ .v-md-editor__left-area {
  width: 200px !important;
}
</style>