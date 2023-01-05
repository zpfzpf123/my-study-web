<template>
  <div id="js-note">
    <el-input placeholder="请输入你要查询的标题" v-model="listName"></el-input>
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="item in newNotes" :key="item.name" :title="item.title" :name="item.name">
        <div>
          <mavon-editor style="overflow:auto;" code-style="atom-one-dark"
                        defaultOpen="preview" :subfield="false" v-model="item.content"/>
        </div>
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
      listName: ''
    }
  },
  computed: {
    newNotes() {
      return this.Notes.filter(i => i.title.toLowerCase().includes(this.listName.toLowerCase()))
    }
  },
  watch: {
    info(val) {
      if (val === 'Js') {
        this.Notes = JsNotes
      } else if (val === 'Vue') {
        this.Notes = VueNotes
      } else if (val === 'Css') {
        this.Notes = CssNotes
      } else if (val === '常用组件') {
        this.Notes = ZujianNotes
      }
      this.listName = ''
    }
  }
}
</script>

<style scoped lang="less">
#js-note {
  width: 100%;
  height: 100%;
}
</style>