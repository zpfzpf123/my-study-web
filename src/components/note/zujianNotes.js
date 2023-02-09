export default [
    {
        title:'组件',
        name:'1',
        content:'# 1.前端实用组件\n' +
            '\n' +
            '## 1.1 [vue无缝滚动组件 vue2 ](https://chenxuan0000.github.io/vue-seamless-scroll/)  [vue3](https://doc.wssio.com/opensource/vue3-seamless-scroll/#%E5%BC%80%E5%A7%8B)\n'  +
            '\n' +
            '要想让他实现无缝滚动，首先看你页面的滚动内容高度是多少，比如是500px,在不滚动的时候看多少行数据占满这个高度，假设需要10行数据显示在页面上，那么每行的高度需要设置为大于500/10=50px,这样才可以实现无缝滚动，一般就设置为50px,通过v-if判断少于10行就不展示，多余10行就滚动\n'+'```vue\n' +
            '<template>\n' +
            '  <div id="jobStatistics">\n' +
            '    <el-row :gutter="10" type="flex" align="middle" style="height: 75%">\n' +
            '      <el-col :span="18" style="height: 100%;border:1px solid black">\n' +
            '        <table>\n' +
            '          <!-- 设置列宽 -->\n' +
            '          <colgroup>\n' +
            '            <col v-for="item of 2" width="10%">\n' +
            '            <col width="18%">\n' +
            '            <col width="10%">\n' +
            '            <col width="12%">\n' +
            '            <col v-for="item of 4" width="10%">\n' +
            '          </colgroup>\n' +
            '          <thead>\n' +
            '          <th v-for="item in tableName">{{item}}</th>\n' +
            '          </thead>\n' +
            '        </table>\n' +
            '        <vue-seamless-scroll :data="testArray" :class-option="testArray.length>10?optionHover:{autoPlay:false}" class="seamless-warp">\n' +
            '          <ul>\n' +
            '            <li v-for="(item,index) in testArray" class="liStyle" :class="{ bg: index%2===0 }">\n' +
            '              <span :title="index+1" class="title1 text_align">{{ index + 1 }}</span>\n' +
            '              <span :title="item.name" class="title1 text_align">{{ item.name }}</span>\n' +
            '              <span :title="item.age" class="title2 text_align">{{ item.age }}</span>\n' +
            '              <span :title="item.phone" class="title1 text_align">{{ item.phone }}</span>\n' +
            '              <span :title="item.phone" class="title3 text_align">{{ item.phone }}</span>\n' +
            '              <span :title="item.phone" class="title1 text_align">{{ item.phone }}</span>\n' +
            '              <span :title="item.phone" class="title1 text_align">{{ item.phone }}</span>\n' +
            '              <span :title="item.phone" class="title1 text_align">{{ item.phone }}</span>\n' +
            '              <span :title="item.phone" class="title1 text_align">{{ item.phone }}</span>\n' +
            '            </li>\n' +
            '          </ul>\n' +
            '        </vue-seamless-scroll>\n' +
            '      </el-col>\n' +
            '    </el-row>\n' +
            '  </div>\n' +
            '</template>\n' +
            '<script>\n' +
            'export default {\n' +
            '  name: "jobStatistics",\n' +
            '  data() {\n' +
            '    return {\n' +
            '      //表格表头名称\n' +
            '      tableName:[\'序号\',\'作业区域\',\'作业内容\',\'就业人员\',\'现场负责人\',\'部门\',\'进入时间\',\'离开时间\',\'现场图像\'],\n' +
            '      testArray: [\n' +
            '        {name: \'刘明明\', age: 14, phone: \'15876512321\'},\n' +
            '        {name: \'王五五\', age: 15, phone: \'15876512321\'},\n' +
            '        {name: \'张萌萌\', age: 23, phone: \'15876512321\'},\n' +
            '        {name: \'刘浩\', age: 20, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'15876512321\'},\n' +
            '        {name: \'刘佳\', age: 21, phone: \'1587651232313121\'},\n' +
            '      ],\n' +
            '    };\n' +
            '  },\n' +
            '  computed: {\n' +
            '    //滚动表格的配置项\n' +
            '    optionHover() {\n' +
            '      return {\n' +
            '        hoverStop: true, // 是否开启鼠标悬停stop\n' +
            '        direction: 1, // 0向下 1向上 2向左 3向右\n' +
            '        step: .5,// 数值越大速度滚动越快\n' +
            '        openWatch: true, // 开启数据实时监控刷新dom\n' +
            '      }\n' +
            '    }\n' +
            '  },\n' +
            '};\n' +
            '</script>\n' +
            '<style lang="less">\n' +
            '#jobStatistics{\n' +
            '  height:100%;\n' +
            '}\n' +
            '* {\n' +
            '  margin: 0;\n' +
            '  padding: 0;\n' +
            '}\n' +
            '\n' +
            'ul {\n' +
            '  list-style: none;\n' +
            '}\n' +
            '\n' +
            'table {\n' +
            '  width: 100%;\n' +
            '  text-align: center;\n' +
            '}\n' +
            '\n' +
            'th {\n' +
            '  height: 260%;\n' +
            '  line-height: 260%;\n' +
            '  font-size: 16px;\n' +
            '  background-color: rgba(180, 181, 198, 0.1);\n' +
            '}\n' +
            '\n' +
            '.seamless-warp {\n' +
            '  height: 90%;\n' +
            '  overflow: hidden;\n' +
            '\n' +
            '  .liStyle {\n' +
            '    height: 45.5px;\n' +
            '    line-height: 45.5px;\n' +
            '    width: 100%;\n' +
            '    display: flex;\n' +
            '    overflow: hidden;\n' +
            '\n' +
            '    .title1 {\n' +
            '      width: 10%;\n' +
            '    }\n' +
            '\n' +
            '    .title2 {\n' +
            '      width: 18%;\n' +
            '    }\n' +
            '\n' +
            '    .title3 {\n' +
            '      width: 12%;\n' +
            '    }\n' +
            '\n' +
            '    .text_align {\n' +
            '      text-align: center;\n' +
            '      overflow: hidden;\n' +
            '      white-space: nowrap;\n' +
            '      text-overflow: ellipsis;\n' +
            '    }\n' +
            '\n' +
            '  }\n' +
            '}\n' +
            '.bg{\n' +
            '  background: gainsboro;\n' +
            '}\n' +
            '</style>\n' +
            '```'+'\n'+
            "\n" +
            '## 1.2 [vue-cropper裁剪图片插件](https://github.com/xyxiao001/vue-cropper)\n' +
            '## 1.3 [自定义表格](https://vxetable.cn/#/table/start/install)\n' +
            '## 1.4 [Vue 字符串实现JSON格式显示 ](https://github.com/chenfengjw163/vue-json-viewer/blob/master/README_CN.md)\n' +
            '## 1.5 [移动端vue手势库](https://github.com/gggso/vue-finger)\n' +
            '## 1.6 [搭建虚拟服务器调用接口](https://github.com/typicode/json-server)\n' +
            '## 1.7 [vue大屏自适应组件](https://github.com/Alfred-Skyblue/v-scale-screen)\n' +
            '## 1.8 [下载文件组件](https://github.com/kennethjiang/js-file-download)\n' +
            '## 1.9 [vue编辑预览md组件](https://code-farmer-i.github.io/vue-markdown-editor/zh/)'
    }
]