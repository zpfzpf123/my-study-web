<template>
  <div id="js-note">
    <el-input placeholder="请输入你要查询的标题" v-model="listName" style="position: fixed;width:78vw"></el-input>
    <el-collapse style="padding-top: 6vh;" v-model="activeName">
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
  methods: {
    addUrl() {
      this.$nextTick(function () {
        let _aList = document.querySelectorAll(".v-note-navigation-content a");
        for (let i = 0; i < _aList.length; i++) {
          let _aParent = _aList[i].parentNode;
          let _a = _aParent.firstChild;
          if (!_a.id) continue; // 把不属于导航中的a标签去掉，否则会报错
          let _text = _aParent.lastChild;
          let text = _text.textContent;
          _a.href = "#" + _a.id;
          _a.innerText = text;
          _aParent.removeChild(_text);
        }
      });
    },


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