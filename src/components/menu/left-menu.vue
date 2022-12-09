<template>
  <div>
    <el-menu class="el-menu-vertical-demo" @select="selectList" style="border: none" default-active="1-1">
      <el-submenu v-for="(item,index) in list" :key="index" :index="item.index">
        <template slot="title">
          <img style="width: 24px;height: 24px" :src="require(`../../assets/icon/${item.name}.png`)" alt="">
          <span style="margin-left: 5px">{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(list,ind) in item.childrenList" :key="ind">
          <template slot="title" v-if="list.name">
            <span style="font-size: 20px;color: #0AAEB3">{{list.name}}</span>
          </template>
          <el-menu-item v-for="(data,key) in list.childrenList" :key="key" :index="data.index">{{data.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menuList from "@/components/menu/menulist";
export default {
  name: "left-menu",
  data(){
    return {
      list:menuList
    }
  },
  methods:{
    selectList(index){
      this.list.find(i=>{
        i.childrenList.find(item=>{
          item.childrenList.find(ite=> {
            if(ite.index === index){
              this.$emit('sendUrl',ite.url)
              return true
            }
          })
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .el-submenu__icon-arrow{
  top: 59%;
}
</style>