<template>
  <div>
    <el-input v-model="searchList" placeholder="请输入菜单标题"></el-input>
    <el-menu class="el-menu-vertical-demo" @select="selectList" style="border: none" :default-active="index"
             :default-openeds="activeIndex">
      <el-submenu v-for="(item,index) in currentList" :key="index" :index="item.index">
        <template slot="title">
          <img style="width: 24px;height: 24px" :src="require(`../../assets/icon/${item.name}.png`)" alt="">
          <span style="margin-left: 5px">{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="(list,ind) in item.childrenList" :key="ind">
          <template slot="title" v-if="list.name">
            <span style="font-size: 20px;color: #0AAEB3">{{ list.name }}</span>
          </template>
          <el-menu-item v-for="(data,key) in list.childrenList" :key="key" :index="data.index">{{ data.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menuList from "@/components/menu/menulist";

export default {
  name: "left-menu",
  data() {
    return {
      list: menuList,
      searchList: '',
      index: '',
      activeIndex: ['1']
    }
  },
  mounted() {
    setTimeout(()=>{
      this.index='1-1'
    },1000)
  },
  computed: {
    currentList() {
      let list = this.list.filter(list => {
        if (list.name.toLowerCase().includes(this.searchList.toLowerCase())) {
          return true
        }
      })
      if (list.length) {
        this.activeIndex = []
        this.index = ''
        return list
      } else {
        let vals = []
        this.activeIndex = []
        this.list.find(item => {
          return item.childrenList.find(val => {
            if (val.name) {
              if (val.name.toLowerCase().includes(this.searchList.toLowerCase())) {
                vals.push(item)
                this.activeIndex.push(item.index)
                this.index = val.childrenList[0].index
                return true
              }
            } else if (val.childrenList.length) {
              return val.childrenList.find(value => {
                if (value.name.toLowerCase().includes(this.searchList.toLowerCase())) {
                  vals.push(item)
                  this.activeIndex.push(item.index)
                  this.index = value.index
                  return true
                }
              })!==undefined
            }
          })!==undefined
        })
        return vals
      }
    }
  },
  methods: {
    selectList(index) {
      this.list.find(i => {
        i.childrenList.find(item => {
          item.childrenList.find(ite => {
            if (ite.index === index) {
              this.$emit('sendUrl', ite.url)
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
/deep/ .el-submenu__icon-arrow {
  top: 59%;
}
</style>