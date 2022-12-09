<template>
  <div id="js-note">
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="item in Notes" :key="item.name" :title="item.title" :name="item.name">
        <div>
          <mavon-editor defaultOpen="preview" :subfield="false" v-model="item.content"/>
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
  props:{
    info:{
      type:String,
      default:'Js'
    }
  },
  data(){
    return {
      Notes:JsNotes,
      activeName:'',
    }
  },
  watch:{
    info(val){
      if(val === 'Js'){
        this.Notes=JsNotes
      }else if(val === 'Vue'){
        this.Notes=VueNotes
      }else if(val === 'Css'){
        this.Notes=CssNotes
      }else if(val === '常用组件'){
        this.Notes=ZujianNotes
      }
    }
  }
}
</script>

<style scoped lang="less">
  #js-note{
    width: 100%;
    height: 100%;
  }
</style>