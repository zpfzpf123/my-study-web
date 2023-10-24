export default [
    {
        name:'1',
        title:'Vuex',
        content:"## Vuex\n" +
            "\n" +
            "Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。\n" +
            "\n" +
            "调试工具：vue devtools\n" +
            "\n" +
            "> Vuex就像眼镜：您自会知道什么时候需要它。\n" +
            "\n" +
            "### 1、state\n" +
            "\n" +
            "在store中定义数据，在组件中直接使用：\n" +
            "\n" +
            "目录：`store/index.js`\n" +
            "\n" +
            "```js\n" +
            "export default new Vuex.Store({\n" +
            "    // state相当于组件中的data，专门用来存放全局的数据\n" +
            "    state: {\n" +
            "        num: 0\n" +
            "    },\n" +
            "    getters: {},\n" +
            "    mutations: {},\n" +
            "    actions: {},\n" +
            "    modules: {}\n" +
            "})\n" +
            "```\n" +
            "\n" +
            "目录：`Home.vue`\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "  <div class=\"home\">\n" +
            "    <h2>Home页面的数字：{{$store.state.num}}</h2>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "export default {\n" +
            "  \n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "或者写为：\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "  <div class=\"about\">\n" +
            "    <h2>About页面的数字：{{num}}</h2>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "export default {\n" +
            "  computed: {\n" +
            "    num(){\n" +
            "      return this.$store.state.num\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "### 2、getters\n" +
            "\n" +
            "将组件中统一使用的computed都放到getters里面来操作\n" +
            "\n" +
            "目录：`store/index.js`\n" +
            "\n" +
            "```js\n" +
            "export default new Vuex.Store({\n" +
            "    // state相当于组件中的data，专门用来存放全局的数据\n" +
            "    state: {\n" +
            "        num: 0\n" +
            "    },\n" +
            "    // getters相当于组件中的computed，getters是全局的，computed是组件内部使用的\n" +
            "    getters: {\n" +
            "        getNum(state) {\n" +
            "            return state.num\n" +
            "        }\n" +
            "    },\n" +
            "    mutations: {},\n" +
            "    actions: {},\n" +
            "    modules: {}\n" +
            "})\n" +
            "```\n" +
            "\n" +
            "目录：`Home.vue`\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "  <div class=\"home\">\n" +
            "    <h2>Home页面的数字：{{$store.getters.getNum}}</h2>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "export default {\n" +
            "  \n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "### 3、mutations\n" +
            "\n" +
            "更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。\n" +
            "\n" +
            "目录：`store/index.js`\n" +
            "\n" +
            "```js\n" +
            "export default new Vuex.Store({\n" +
            "    // state相当于组件中的data，专门用来存放全局的数据\n" +
            "    state: {\n" +
            "        num: 0\n" +
            "    },\n" +
            "    // getters相当于组件中的computed，getters是全局的，computed是组件内部使用的\n" +
            "    getters: {\n" +
            "        getNum(state) {\n" +
            "            return state.num\n" +
            "        }\n" +
            "    },\n" +
            "    // mutations相当于组件中的methods，但是它不能使用异步方法（定时器、axios）\n" +
            "    mutations: {\n" +
            "        // 让num累加\n" +
            "        // payload是一个形参，如果组件在commit时，有传这个参数过来，就存在，如果没有传过来，就是undefined\n" +
            "        increase(state, payload){\n" +
            "            state.num += payload ? payload : 1;\n" +
            "        }\n" +
            "    },\n" +
            "    actions: {},\n" +
            "    modules: {}\n" +
            "})\n" +
            "```\n" +
            "\n" +
            "目录：`Btn.vue`\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "    <div>\n" +
            "        <button @click=\"$store.commit('increase', 2)\">点击加1</button>\n" +
            "    </div>\n" +
            "</template>\n" +
            "<script>\n" +
            "export default {\n" +
            "   methods: {\n" +
            "       /* addFn(){\n" +
            "           // 调用store中的mutations里的increase方法\n" +
            "           // 传参的话，使用payload\n" +
            "           this.$store.commit('increase', 2)\n" +
            "       } */\n" +
            "   }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "### 4、actions\n" +
            "\n" +
            "actions是store中专门用来处理异步的，实际修改状态值的，还是mutations\n" +
            "\n" +
            "目录：`store/index.js`\n" +
            "\n" +
            "```js\n" +
            "// 在store(仓库)下的index.js这份文件，就是用来做状态管理\n" +
            "import Vue from 'vue'\n" +
            "import Vuex from 'vuex'\n" +
            "\n" +
            "Vue.use(Vuex)\n" +
            "\n" +
            "export default new Vuex.Store({\n" +
            "    // state相当于组件中的data，专门用来存放全局的数据\n" +
            "    state: {\n" +
            "        num: 0\n" +
            "    },\n" +
            "    // getters相当于组件中的computed，getters是全局的，computed是组件内部使用的\n" +
            "    getters: {\n" +
            "        getNum(state) {\n" +
            "            return state.num\n" +
            "        }\n" +
            "    },\n" +
            "    // mutations相当于组件中的methods，但是它不能使用异步方法（定时器、axios）\n" +
            "    mutations: {\n" +
            "        // 让num累加\n" +
            "        // payload是一个形参，如果组件在commit时，有传这个参数过来，就存在，如果没有传过来，就是undefined\n" +
            "        increase(state, payload){\n" +
            "            state.num += payload ? payload : 1;\n" +
            "        },\n" +
            "        // 让num累减\n" +
            "        decrease(state){\n" +
            "            state.num--;\n" +
            "        }\n" +
            "    },\n" +
            "    // actions专门用来处理异步，实际修改状态值的，依然是mutations\n" +
            "    actions: {\n" +
            "        // 点击了“减1”按钮后，放慢一秒再执行减法\n" +
            "        decreaseAsync(context){\n" +
            "            context.commit('decrease')\n" +
            "        }\n" +
            "    },\n" +
            "    modules: {}\n" +
            "})\n" +
            "\n" +
            "```\n" +
            "\n" +
            "目录：`Btn.vue`\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "    <div>\n" +
            "        <button @click=\"$store.commit('increase', 2)\">点击加1</button>\n" +
            "        <button @click=\"$store.dispatch('decreaseAsync')\">点击延迟减1</button>\n" +
            "    </div>\n" +
            "</template>\n" +
            "<script>\n" +
            "export default {\n" +
            "   methods: {\n" +
            "       /* addFn(){\n" +
            "           // 调用store中的mutations里的increase方法\n" +
            "           // 传参的话，使用payload\n" +
            "           this.$store.commit('increase', 2)\n" +
            "       }\n" +
            "       reduceFn(){\n" +
            "           this.$store.dispatch('decreaseAsync')\n" +
            "       } */\n" +
            "   }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "### 5、辅助函数\n" +
            "\n" +
            "mapState和mapGetters在组件中都是写在computed里面\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "\t<div>\n" +
            "        <h2>Home页面的数字：{{num}}</h2>\n" +
            "        <h2>About页面的数字：{{getNum}}</h2>\n" +
            "    </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "import { mapState, mapGetters } from 'vuex'\n" +
            "\n" +
            "export default {\n" +
            "  computed: {\n" +
            "    ...mapState(['num'])\n" +
            "    ...mapGetters(['getNum'])\n" +
            "  }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "mapMutations和mapActions在组件中都是写在methods里面\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "\t<div>\n" +
            "        <button @click=\"increase(2)\">点击加1</button>\n" +
            "        <button @click=\"decreaseAsync()\">点击延迟减1</button>\n" +
            "    </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "import { mapMutations, mapActions } from 'vuex'\n" +
            "\n" +
            "export default {\n" +
            "  methods: {\n" +
            "       ...mapMutations(['increase']),\n" +
            "       ...mapActions(['decreaseAsync'])\n" +
            "   }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "### 6、拆分写法\n" +
            "\n" +
            "store中的所有属性，都可以拆分成单独的js文件来书写\n" +
            "\n" +
            "### 7、modules\n" +
            "\n" +
            "![](.\\1111.png)我们的store可以认为是一个主模块，它下边可以分解为很多子模块，子模块都可以单独领出来写，写完再导入到主模块中。下面以 `users` 子模块举例：\n" +
            "\n" +
            "将mutations中所有的方法，归纳起来。\n" +
            "\n" +
            "目录：`mutations_type.js`\n" +
            "\n" +
            "```js\n" +
            "export const MUTATIONS_TYPE = {\n" +
            "    INCREASE: 'increase',\n" +
            "    DECREASE: 'decrease'\n" +
            "}\n" +
            "\n" +
            "export default {\n" +
            "    // 让num累加\n" +
            "    // payload是一个形参，如果组件在commit时，有传这个参数过来，就存在，如果没有传过来，就是undefined\n" +
            "    [MUTATIONS_TYPE.INCREASE](state, payload){\n" +
            "        state.num += payload ? payload : 1;\n" +
            "    },\n" +
            "    // 让num累减\n" +
            "    [MUTATIONS_TYPE.DECREASE](state){\n" +
            "        state.num--;\n" +
            "    }\n" +
            "}\n" +
            "```\n" +
            "\n" +
            "目录：`store/index.js`\n" +
            "\n" +
            "```js\n" +
            "import mutations from './mutaions_type'\n" +
            "\n" +
            "export default new Vuex.Store({\n" +
            "    ...\n" +
            "    mutations,\n" +
            "    ...\n" +
            "})\n" +
            "```\n" +
            "\n" +
            "组件中：\n" +
            "\n" +
            "```html\n" +
            "<template>\n" +
            "  <div class=\"about\">\n" +
            "    <h2>About页面的数字：{{getNum}}</h2>\n" +
            "    <button @click=\"increase()\">About的按钮，点击加1</button>\n" +
            "  </div>\n" +
            "</template>\n" +
            "<script>\n" +
            "import { mapGetters, mapMutations } from 'vuex'\n" +
            "import { MUTATIONS_TYPE } from '@/store/mutaions_type.js'\n" +
            "export default {\n" +
            "  computed: {\n" +
            "    ...mapGetters(['getNum'])\n" +
            "  },\n" +
            "  methods: {\n" +
            "    // 方法一：\n" +
            "    ...mapMutations([MUTATIONS_TYPE.INCREASE])\n" +
            "      \n" +
            "    // 方法二：\n" +
            "    /* increase(){\n" +
            "      this.$store.commit(MUTATIONS_TYPE.INCREASE)\n" +
            "    } */\n" +
            "  }\n" +
            "}\n" +
            "</script>\n" +
            "\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n"
    },
    {
        name:'2',
        title:'vue大屏动态配置组件数量、每个组件的占比和位置代码示例',
        content:"以下是使用Vue.js创建一个大屏组件，并且可以通过传递props来配置组件数量、每个组件的占比和位置的代码示例：\n" +
            "\n" +
            "```js\n" +
            "<template>\n" +
            "  <div class=\"big-screen\">\n" +
            "    <div v-for=\"(item, index) in screenList\" :key=\"index\" :style=\"getStyle(item)\">\n" +
            "      <slot :name=\"item.name\"></slot>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "export default {\n" +
            "  name: 'BigScreen',\n" +
            "  props: {\n" +
            "    screenList: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "      default: () => []\n" +
            "    }\n" +
            "  },\n" +
            "  methods: {\n" +
            "    getStyle(item) {\n" +
            "      return {\n" +
            "        position: 'absolute',\n" +
            "        left: `${item.left}%`,\n" +
            "        top: `${item.top}%`,\n" +
            "        width: `${item.width}%`,\n" +
            "        height: `${item.height}%`\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "</script>\n" +
            "\n" +
            "<style>\n" +
            ".big-screen {\n" +
            "  position: relative;\n" +
            "  width: 100%;\n" +
            "  height: 100%;\n" +
            "}\n" +
            "</style>\n" +
            "```\n" +
            "\n" +
            "在这个示例中，我们定义了一个名为`BigScreen`的组件，并且传递了一个名为`screenList`的props，它是一个数组，用来指定大屏组件的个数、占比和位置。\n" +
            "\n" +
            "在组件的模板中，我们使用了`v-for`来遍历`screenList`数组，并为每个大屏组件指定样式（位置和大小），然后使用插槽来插入具体的大屏组件内容。\n" +
            "\n" +
            "在组件的方法中，我们定义了一个名为`getStyle`的方法，它接受一个参数`item`，并返回一个包含位置和大小信息的样式对象，这个样式对象会被应用到每个大屏组件的容器元素上。\n" +
            "\n" +
            "现在让我们看一个如何使用这个`BigScreen`组件的示例：\n" +
            "\n" +
            "```js\n" +
            "<template>\n" +
            "  <div style=\"height:100%\">\n" +
            "    <big-screen :screen-list=\"screenList\">\n" +
            "      <template #screen1>\n" +
            "        <div>第一个大屏内容</div>\n" +
            "      </template>\n" +
            "      <template #screen2>\n" +
            "        <div>第二个大屏内容</div>\n" +
            "      </template>\n" +
            "    </big-screen>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "import BigScreen from './BigScreen.vue'\n" +
            "\n" +
            "export default {\n" +
            "  name: 'App',\n" +
            "  components: {\n" +
            "    BigScreen\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      screenList: [\n" +
            "        { name: 'screen1', left: 0, top: 0, width: 50, height: 100 },\n" +
            "        { name: 'screen2', left: 50, top: 0, width: 50, height: 100 }\n" +
            "      ]\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "在这个示例中，我们在父组件中使用了`BigScreen`组件，并且传递了一个名为`screenList`的props，它包含了两个元素，分别代表了两个大屏组件的位置、大小和内容名称。\n" +
            "\n" +
            "我们也定义了两个插槽（`#screen1`和`#screen2`），它们分别对应了`screenList`数组中的两个元素，表示在第一个大屏和第二个大屏"
    },
    {
        name:'3',
        title:'vue2+原生js实现上下无缝滚动，鼠标移入停止无缝滚动，可以鼠标滚轮控制滚动，鼠标移出可以继续上下无缝滚动',
        content:"```js\n" +
            "<template>\n" +
            "  <div class=\"scroll-container\" @mouseenter=\"stopScroll\" @mouseleave=\"startScroll\" @wheel=\"onWheel\">\n" +
            "    <div class=\"scroll-content\">\n" +
            "      <div class=\"scroll-item\" v-for=\"item in scrollData\" :key=\"item\">{{ item }}</div>\n" +
            "      <div class=\"scroll-item\" v-for=\"item in scrollData\" :key=\"item\">{{ item }}</div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "export default {\n" +
            "  name: 'SeamlessScroll',\n" +
            "  data() {\n" +
            "    return {\n" +
            "      scrollData: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],\n" +
            "      scrollInterval: null,\n" +
            "      scrollSpeed: 1,\n" +
            "    }\n" +
            "  },\n" +
            "  mounted() {\n" +
            "    this.startScroll();\n" +
            "  },\n" +
            "  beforeDestroy() {\n" +
            "    clearInterval(this.scrollInterval);\n" +
            "  },\n" +
            "  methods: {\n" +
            "    startScroll() {\n" +
            "      this.scrollInterval = setInterval(() => {\n" +
            "        if (this.$el.scrollTop >= this.$el.scrollHeight / 2) {\n" +
            "          this.$el.scrollTop = 0;\n" +
            "        } else {\n" +
            "          this.$el.scrollTop += this.scrollSpeed;\n" +
            "        }\n" +
            "      }, 10);\n" +
            "    },\n" +
            "    stopScroll() {\n" +
            "      clearInterval(this.scrollInterval);\n" +
            "    },\n" +
            "    onWheel(event) {\n" +
            "      event.preventDefault();\n" +
            "      this.$el.scrollTop += event.deltaY;\n" +
            "    },\n" +
            "  },\n" +
            "}\n" +
            "</script>\n" +
            "\n" +
            "<style scoped>\n" +
            ".scroll-container {\n" +
            "  height: 200px;\n" +
            "  overflow: hidden;\n" +
            "}\n" +
            ".scroll-content {\n" +
            "  display: flex;\n" +
            "  flex-direction: column;\n" +
            "}\n" +
            ".scroll-item {\n" +
            "  height: 50px;\n" +
            "}\n" +
            "</style>\n" +
            "```\n" +
            "\n"
    },
    {
        name:'4',
        title:'vue2+Datav实现表格上下无缝滚动',
        content:"1. 首先需要在vue引入DataV组件 \n" +
            "   ```js\n" +
            "   npm install @jiaminghi/data-view\n" +
            "   ```\n" +
            "\n" +
            "   \n" +
            "\n" +
            "2. 在main.js注册为全局组件\n" +
            "   ```js\n" +
            "   // 将自动注册所有组件为全局组件\n" +
            "   import dataV from '@jiaminghi/data-view'\n" +
            "   \n" +
            "   Vue.use(dataV)\n" +
            "   ```\n" +
            "\n" +
            "3. 使用vue文件代码如下\n" +
            "   ```vue\n" +
            "   <template>\n" +
            "     <div id=\"the-homework-table\">\n" +
            "       <dv-scroll-board\n" +
            "         :config=\"config\"\n" +
            "         style=\"width: 100%; height: 100%\"\n" +
            "       />\n" +
            "     </div>\n" +
            "   </template>\n" +
            "   \n" +
            "   <script>\n" +
            "   export default {\n" +
            "     data() {\n" +
            "       return {\n" +
            "         config: {\n" +
            "           header: [\n" +
            "             \"时间\",\n" +
            "           ],\n" +
            "           data: [\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "            [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "             [\n" +
            "               \"2022/11/3 07:45:30\",\n" +
            "             ],\n" +
            "           ],\n" +
            "           index: true,//增加序号显示\n" +
            "           rowNum: 10,//超过10行启动无缝滚动\n" +
            "         },\n" +
            "       };\n" +
            "     },\n" +
            "   };\n" +
            "   </script>\n" +
            "   \n" +
            "   <style lang=\"less\" scoped>\n" +
            "   #the-homework-table {\n" +
            "     width: 100%;\n" +
            "     height: 100%;\n" +
            "   }\n" +
            "   /deep/ .dv-scroll-board .header {\n" +
            "     font-size: 25px;\n" +
            "   }\n" +
            "   /deep/ .dv-scroll-board .rows .row-item {\n" +
            "     font-size: 24px;\n" +
            "   }\n" +
            "   /deep/ .dv-scroll-board .rows .ceil {\n" +
            "     text-align: center;\n" +
            "   }\n" +
            "   /deep/ .dv-scroll-board .header .header-item {\n" +
            "     text-align: center;\n" +
            "   }\n" +
            "   </style>\n" +
            "   ```\n" +
            "\n" +
            "   "
    },
    {
        name:'5',
        title:'vue2+echarts封装组件  饼图组件',
        content:"```js\n" +
            "<template>\n" +
            "  <div ref=\"chart\" :style=\"{ height: '100%', width: '100%' }\"></div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "import echarts from \"echarts\";\n" +
            "\n" +
            "export default {\n" +
            "  props: {\n" +
            "    // 接受数据作为 props\n" +
            "    data: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // 接受颜色作为 props\n" +
            "    colors: {\n" +
            "      type: Array,\n" +
            "      default() {\n" +
            "        return [\"#00BFFF\", \"#FF6B00\"];\n" +
            "      },\n" +
            "    },\n" +
            "    //标题\n" +
            "    chartTitle: {\n" +
            "      type: String,\n" +
            "      default:''\n" +
            "    },\n" +
            "    // 是否显示标签\n" +
            "    showLabel: {\n" +
            "      type: Boolean,\n" +
            "      default: true,\n" +
            "    },\n" +
            "    // 标签位置\n" +
            "    labelPosition: {\n" +
            "      type: String,\n" +
            "      default: \"inside\",\n" +
            "    },\n" +
            "    // 标签字体大小\n" +
            "    labelFontSize: {\n" +
            "      type: Number,\n" +
            "      default: 14,\n" +
            "    },\n" +
            "    // 是否自适应\n" +
            "    responsive: {\n" +
            "      type: Boolean,\n" +
            "      default: true,\n" +
            "    },\n" +
            "    // series 名称\n" +
            "    seriesName: {\n" +
            "      type: String,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // 是否显示图例\n" +
            "    showLegend: {\n" +
            "      type: Boolean,\n" +
            "      default: false,\n" +
            "    },\n" +
            "    // 图例位置\n" +
            "    legendPosition: {\n" +
            "      type: String,\n" +
            "      default: \"right\",\n" +
            "    },\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      // 设置初始高度\n" +
            "      chartHeight: \"300px\",\n" +
            "    };\n" +
            "  },\n" +
            "  mounted() {\n" +
            "    // 渲染图表\n" +
            "    this.renderChart();\n" +
            "    // 如果需要自适应，则监听窗口大小变化\n" +
            "    if (this.responsive) {\n" +
            "      window.addEventListener(\"resize\", this.renderChart);\n" +
            "    }\n" +
            "  },\n" +
            "  beforeDestroy() {\n" +
            "    // 如果需要自适应，则在组件销毁前移除监听器\n" +
            "    if (this.responsive) {\n" +
            "      window.removeEventListener(\"resize\", this.renderChart);\n" +
            "    }\n" +
            "  },\n" +
            "  methods: {\n" +
            "    renderChart() {\n" +
            "      // 初始化 echarts 实例\n" +
            "      const chart = echarts.init(this.$refs.chart);\n" +
            "      // 设置图表选项\n" +
            "      chart.setOption({\n" +
            "        title: {\n" +
            "          text: this.chartTitle,\n" +
            "          left: \"center\",\n" +
            "          textStyle: {\n" +
            "            fontSize: 20,\n" +
            "            color:'white'\n" +
            "          },\n" +
            "        },\n" +
            "        // 配置提示框\n" +
            "        tooltip: {\n" +
            "          trigger: \"item\",\n" +
            "          formatter: \"{a} <br/>{b}: {c} ({d}%)\",\n" +
            "        },\n" +
            "        // 配置图例\n" +
            "        legend: {\n" +
            "          show: this.showLegend,\n" +
            "          orient: this.legendPosition,\n" +
            "        },\n" +
            "        // 配置 series\n" +
            "        series: [\n" +
            "          {\n" +
            "            // 设置 series 名称\n" +
            "            name: this.seriesName,\n" +
            "            // 设置 series 类型为饼状图\n" +
            "            type: \"pie\",\n" +
            "            // 设置饼状图半径\n" +
            "            radius: [\"50%\", \"70%\"],\n" +
            "            // 避免标签重叠\n" +
            "            avoidLabelOverlap: false,\n" +
            "            // 配置标签\n" +
            "            label: {\n" +
            "              show: this.showLabel,\n" +
            "              position: this.labelPosition,\n" +
            "              fontSize: this.labelFontSize,\n" +
            "            },\n" +
            "            // 配置标签强调样式\n" +
            "            emphasis: {\n" +
            "              label: {\n" +
            "                show: true,\n" +
            "                fontSize: this.labelFontSize + 2,\n" +
            "                fontWeight: \"bold\",\n" +
            "              },\n" +
            "            },\n" +
            "            // 配置标签线\n" +
            "            labelLine: {\n" +
            "              show: false,\n" +
            "            },\n" +
            "            // 配置数据\n" +
            "            data: this.data.map((item, index) => ({\n" +
            "              value: item.val,\n" +
            "              name: item.name,\n" +
            "              itemStyle: {\n" +
            "                color: this.colors[index],\n" +
            "              },\n" +
            "            })),\n" +
            "          },\n" +
            "        ],\n" +
            "      });\n" +
            "      // 如果需要自适应，则在渲染后调整图表大小\n" +
            "      if (this.responsive) {\n" +
            "        chart.resize();\n" +
            "      }\n" +
            "    },\n" +
            "  },\n" +
            "};\n" +
            "</script>\n" +
            "\n" +
            "<style>\n" +
            "/* 可选的图表容器样式 */\n" +
            "</style>\n" +
            "```\n" +
            "\n" +
            "# 组件使用示例\n" +
            "\n" +
            "```js\n" +
            "<pie-chart\n" +
            "            :data=\"chartData\"\n" +
            "            :colors=\"chartColors\"\n" +
            "            :show-label=\"showLabel\"\n" +
            "            :label-position=\"labelPosition\"\n" +
            "            :label-font-size=\"labelFontSize\"\n" +
            "            :responsive=\"true\"\n" +
            "            series-name=\"作业统计\"\n" +
            "            chartTitle=\"作业统计\"\n" +
            "          />\n" +
            "  \n" +
            "data() {\n" +
            "    return {\n" +
            "      chartData: [\n" +
            "        {name:'已完成',val:10},\n" +
            "        {name:'未完成',val:20},\n" +
            "      ],\n" +
            "      chartColors: ['#00BFFF','#FF6B00'],\n" +
            "      showLabel: true,\n" +
            "      labelPosition: 'inside',\n" +
            "      labelFontSize: 25,\n" +
            "    }\n" +
            "  },\n" +
            "```\n" +
            "\n"
    },
    {
        name:'6',
        title:'vue2+echarts封装组件  柱状图组件',
        content:"```js\n" +
            "<template>\n" +
            "  <div ref=\"chart\" style=\"width: 100%; height: 100%\"></div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "import echarts from \"echarts\";\n" +
            "\n" +
            "export default {\n" +
            "  props: {\n" +
            "    //颜色\n" +
            "    colorList: {\n" +
            "      type: Array,\n" +
            "      default: () => {\n" +
            "        return [\"#00BFFF\", \"#FF6B00\"];\n" +
            "      },\n" +
            "    },\n" +
            "    // 图表标题\n" +
            "    title: {\n" +
            "      type: String,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // x 轴数据\n" +
            "    xAxisData: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // 数据系列\n" +
            "    seriesData: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // 图例数据\n" +
            "    legendData: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "    },\n" +
            "    // tooltip 的 crossStyle\n" +
            "    crossStyle: {\n" +
            "      type: Object,\n" +
            "      default: () => {\n" +
            "        return {\n" +
            "          color: \"white\",\n" +
            "        };\n" +
            "      },\n" +
            "    },\n" +
            "    /**\n" +
            "     * @description:  字体大小列表，依次为：\n" +
            "    0. 标题字体大小\n" +
            "     1. 图例字体大小\n" +
            "    2. x 轴标签字体大小\n" +
            "     3. y 轴标签字体大小\n" +
            "     4. 数据标签字体大小\n" +
            "     5. tooltip 字体大小\n" +
            "     * @return {*}\n" +
            "     */\n" +
            "    fontSizeList: {\n" +
            "      type: Array,\n" +
            "      required: true,\n" +
            "    },\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      chart: null,\n" +
            "    };\n" +
            "  },\n" +
            "  mounted() {\n" +
            "    // 初始化 echarts 实例\n" +
            "    this.chart = echarts.init(this.$refs.chart);\n" +
            "    // 设置图表配置项\n" +
            "    this.chart.setOption({\n" +
            "      color:this.colorList,\n" +
            "      // 图表标题\n" +
            "      title: {\n" +
            "        text: this.title,\n" +
            "        textStyle: {\n" +
            "          color: \"#fff\",\n" +
            "          fontSize: this.fontSizeList[0],\n" +
            "        },\n" +
            "      },\n" +
            "      // tooltip\n" +
            "      tooltip: {\n" +
            "        trigger: \"axis\",\n" +
            "        axisPointer: {\n" +
            "          type: \"cross\",\n" +
            "          crossStyle: this.crossStyle,\n" +
            "        },\n" +
            "        textStyle: {\n" +
            "          fontSize: this.fontSizeList[5],\n" +
            "        },\n" +
            "      },\n" +
            "      // 图例\n" +
            "      legend: {\n" +
            "        data: this.legendData,\n" +
            "        textStyle: {\n" +
            "          color: \"#fff\",\n" +
            "          fontSize: this.fontSizeList[1],\n" +
            "        },\n" +
            "      },\n" +
            "      // x 轴\n" +
            "      xAxis: [\n" +
            "        {\n" +
            "          type: \"category\",\n" +
            "          data: this.xAxisData,\n" +
            "          axisPointer: {\n" +
            "            type: \"shadow\",\n" +
            "          },\n" +
            "          axisLabel: {\n" +
            "            textStyle: {\n" +
            "              color: \"#fff\",\n" +
            "              fontSize: this.fontSizeList[2],\n" +
            "            },\n" +
            "          },\n" +
            "          // 去掉 x 轴的分割线\n" +
            "          splitLine: {\n" +
            "            show: false,\n" +
            "          },\n" +
            "        },\n" +
            "      ],\n" +
            "      // y 轴\n" +
            "      yAxis: [\n" +
            "        {\n" +
            "          type: \"value\",\n" +
            "          axisLabel: {\n" +
            "            textStyle: {\n" +
            "              color: \"#fff\",\n" +
            "              fontSize: this.fontSizeList[3],\n" +
            "            },\n" +
            "          },\n" +
            "          // 去掉 y 轴的分割线\n" +
            "          splitLine: {\n" +
            "            show: false,\n" +
            "          },\n" +
            "        },\n" +
            "      ],\n" +
            "      // 数据系列\n" +
            "      series: this.seriesData.map((item) => {\n" +
            "        return {\n" +
            "          name: item.name,\n" +
            "          type: \"bar\",\n" +
            "          data: item.data,\n" +
            "          label: {\n" +
            "            show: this.showLabel,\n" +
            "            position: this.labelPosition,\n" +
            "            fontSize: this.fontSizeList[4],\n" +
            "          },\n" +
            "        };\n" +
            "      }),\n" +
            "    });\n" +
            "    // 监听窗口大小变化，自适应图表大小\n" +
            "    window.addEventListener(\"resize\", () => {\n" +
            "      this.chart.resize();\n" +
            "    });\n" +
            "  },\n" +
            "};\n" +
            "</script>\n" +
            "```\n" +
            "\n" +
            "# 组件使用示例\n" +
            "\n" +
            "```js\n" +
            "<bar-chart\n" +
            "            :title=\"chartTitle\"\n" +
            "            :x-axis-data=\"xAxisData\"\n" +
            "            :series-data=\"seriesData\"\n" +
            "            :legend-data=\"legendData\"\n" +
            "            :cross-style=\"crossStyle\"\n" +
            "            :font-size-list=\"fontSizeList\"\n" +
            "          />\n" +
            "  \n" +
            "data() {\n" +
            "    return {\n" +
            "      title: \"人员管理\",\n" +
            "      chartTitle: \"人员统计\",\n" +
            "      xAxisData: [\"A\", \"B\", \"C\", \"D\", \"E\"],\n" +
            "      seriesData: [\n" +
            "        {\n" +
            "          name: \"员工数量\",\n" +
            "          data: [10, 20, 30, 40, 50],\n" +
            "        },\n" +
            "        {\n" +
            "          name: \"访客数量\",\n" +
            "          data: [20, 30, 40, 50, 60],\n" +
            "        },\n" +
            "      ],\n" +
            "      legendData: [\"员工数量\", \"访客数量\"],\n" +
            "      crossStyle: {\n" +
            "        color: \"white\",\n" +
            "      },\n" +
            "      fontSizeList: [18, 20, 20, 20, 20, 20],\n" +
            "    };\n" +
            "  },\n" +
            "```\n" +
            "\n"
    },
    {
        name:'7',
        title:'vue2播放flv视频流',
        content:"# 下载flv.js\n" +
            "\n" +
            "```js\n" +
            "npm install --save flv.js\n" +
            "```\n" +
            "\n" +
            "# 代码示例\n" +
            "\n" +
            "```js\n" +
            "<template>\n" +
            "  <div>\n" +
            "\t<video id=\"videoElement\" controls autoplay muted width=\"300px\" height=\"200px\">    \n" +
            "    </video>\n" +
            "\t<button @click=\"play\">播放</button>\n" +
            "  </div>\n" +
            "</template>\n" +
            "<script>\n" +
            "    import flvjs from 'flv.js'\n" +
            "export default {\n" +
            "  data () {\n" +
            "    return {\n" +
            "\t  flvPlayer:null\n" +
            "    }\n" +
            "  },\n" +
            "   mounted() {\n" +
            "      if (flvjs.isSupported()) {\n" +
            "        var videoElement = document.getElementById('videoElement');\n" +
            "        this.flvPlayer = flvjs.createPlayer({\n" +
            "          type: 'flv',\n" +
            "\t\t  isLive: true,\n" +
            "\t\t  hasAudio: false,\n" +
            "          url: 'http://1011.hlsplay.aodianyun.com/demo/game.flv'\n" +
            "        });\n" +
            "        this.flvPlayer.attachMediaElement(videoElement);\n" +
            "        this.flvPlayer.load();\n" +
            "\t\tthis.flvPlayer.play();\n" +
            "      }\n" +
            "    },\n" +
            "    methods:{\n" +
            "      play () {\n" +
            "        this.flvPlayer.play();\n" +
            "      }\n" +
            "    }\n" +
            "}\n" +
            "</script>\n" +
            "\n" +
            "```\n" +
            "\n"
    },
    {
        name:'8',
        title:'vue+nginx部署',
        content:"# vue\n" +
            "\n" +
            "vue.config.js配置如下\n" +
            "\n" +
            "```js\n" +
            "const {defineConfig} = require('@vue/cli-service')\n" +
            "module.exports = defineConfig({\n" +
            "    transpileDependencies: true,\n" +
            "    //打包\n" +
            "    publicPath: './',\n" +
            "    devServer: {\n" +
            "        host: '0.0.0.0',\n" +
            "        port: 8080,\n" +
            "        proxy: {\n" +
            "            '/captures': {\n" +
            "                target: 'http://192.168.1.150:18080', // 目标路径，别忘了加http和端口号 也就是接口的前面的ip地址端口号\n" +
            "                changeOrigin: true, // 是否跨域\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "})\n" +
            " \n" +
            "```\n" +
            "\n" +
            "# nginx\n" +
            "\n" +
            "nginx.conf配置如下\n" +
            "\n" +
            "```json\n" +
            "\n" +
            "user  root;\n" +
            "worker_processes  1;\n" +
            "\n" +
            "#error_log  logs/error.log;\n" +
            "#error_log  logs/error.log  notice;\n" +
            "#error_log  logs/error.log  info;\n" +
            "\n" +
            "#pid        logs/nginx.pid;\n" +
            "\n" +
            "\n" +
            "events {\n" +
            "    worker_connections  1024;\n" +
            "}\n" +
            "\n" +
            "\n" +
            "http {\n" +
            "    include       mime.types;\n" +
            "    default_type  application/octet-stream;\n" +
            "\n" +
            "    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n" +
            "    #                  '$status $body_bytes_sent \"$http_referer\" '\n" +
            "    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n" +
            "\n" +
            "    #access_log  logs/access.log  main;\n" +
            "\n" +
            "    sendfile        on;\n" +
            "    #tcp_nopush     on;\n" +
            "\n" +
            "    #keepalive_timeout  0;\n" +
            "    keepalive_timeout  65;\n" +
            "\n" +
            "    #gzip  on;\n" +
            "\n" +
            "    server {\n" +
            "    \t# 服务器端口号\n" +
            "        listen       80; \n" +
            "    \t# 服务器名称\n" +
            "        server_name  localhost;\n" +
            "\n" +
            "        #charset koi8-r;\n" +
            "\n" +
            "        #access_log  logs/host.access.log  main;\n" +
            "        location / {\n" +
            "            root    /zckx/nginx/html/dist; #项目文件位置\n" +
            "            index  index.html;\n" +
            "            try_files $uri $uri/ /index.html;\n" +
            "        }\n" +
            "\t\t# 配置跨域 比如接口以/captures开头的配置如下\n" +
            "        location /captures/ {\n" +
            "            # 允许http://192.168.1.150:18080跨域 http://192.168.1.150:18080为接口地址\n" +
            "            proxy_pass http://192.168.1.150:18080; \n" +
            "        }\n" +
            "\n" +
            "        location /live{\n" +
            "            add_header Access-Control-Allow-Origin *;\n" +
            "            types {\n" +
            "                application/vnd.apple.mpegurl m3u8;\n" +
            "                video/mp2t ts;\n" +
            "            }\n" +
            "            # HLS切片文件目录\n" +
            "            alias /tmp/hls;\n" +
            "            expires -1;\n" +
            "        }\n" +
            "\n" +
            "        #error_page  404              /404.html;\n" +
            "\n" +
            "        # redirect server error pages to the static page /50x.html\n" +
            "        #\n" +
            "        error_page   500 502 503 504  /50x.html;\n" +
            "        location = /50x.html {\n" +
            "            root   html;\n" +
            "        }\n" +
            "\n" +
            "        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n" +
            "        #\n" +
            "        #location ~ \\.php$ {\n" +
            "        #    proxy_pass   http://127.0.0.1;\n" +
            "        #}\n" +
            "\n" +
            "        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n" +
            "        #\n" +
            "        #location ~ \\.php$ {\n" +
            "        #    root           html;\n" +
            "        #    fastcgi_pass   127.0.0.1:9000;\n" +
            "        #    fastcgi_index  index.php;\n" +
            "        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n" +
            "        #    include        fastcgi_params;\n" +
            "        #}\n" +
            "\n" +
            "        # deny access to .htaccess files, if Apache's document root\n" +
            "        # concurs with nginx's one\n" +
            "        #\n" +
            "        #location ~ /\\.ht {\n" +
            "        #    deny  all;\n" +
            "        #}\n" +
            "    }\n" +
            "\n" +
            "\n" +
            "    # another virtual host using mix of IP-, name-, and port-based configuration\n" +
            "    #\n" +
            "    #server {\n" +
            "    #    listen       8000;\n" +
            "    #    listen       somename:8080;\n" +
            "    #    server_name  somename  alias  another.alias;\n" +
            "\n" +
            "    #    location / {\n" +
            "    #        root   html;\n" +
            "    #        index  index.html index.htm;\n" +
            "    #    }\n" +
            "    #}\n" +
            "\n" +
            "\n" +
            "    # HTTPS server\n" +
            "    #\n" +
            "    #server {\n" +
            "    #    listen       443 ssl;\n" +
            "    #    server_name  localhost;\n" +
            "\n" +
            "    #    ssl_certificate      cert.pem;\n" +
            "    #    ssl_certificate_key  cert.key;\n" +
            "\n" +
            "    #    ssl_session_cache    shared:SSL:1m;\n" +
            "    #    ssl_session_timeout  5m;\n" +
            "\n" +
            "    #    ssl_ciphers  HIGH:!aNULL:!MD5;\n" +
            "    #    ssl_prefer_server_ciphers  on;\n" +
            "\n" +
            "    #    location / {\n" +
            "    #        root   html;\n" +
            "    #        index  index.html index.htm;\n" +
            "    #    }\n" +
            "    #}\n" +
            "\n" +
            "}\n" +
            "\n" +
            "rtmp {\n" +
            "        server {\n" +
            "                listen 1935;\n" +
            "                chunk_size 4096;\n" +
            "                # vod path\n" +
            "                application live {\n" +
            "                        live on;\n" +
            "                        hls on;\n" +
            "                        ##HLS切片保存路径\n" +
            "                        hls_path /tmp/hls;\n" +
            "                        hls_fragment 4;\n" +
            "                        hls_playlist_length 30;\n" +
            "                        record off;\n" +
            "                }\n" +
            "        }\n" +
            "}\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "```\n" +
            "\n"
    },
    {
        name:'9',
        title:'vue二次封装axios',
        content:"在src创建request文件夹 新建axios.js\n" +
            "\n" +
            "```js\n" +
            "import axios from 'axios';\n" +
            "import {Message} from 'element-ui';\n" +
            "// 统一请求路径前缀\n" +
            "let baseApi = \"/\";\n" +
            "\n" +
            "// 超时设定\n" +
            "axios.defaults.timeout = 20000;\n" +
            "\n" +
            "axios.interceptors.request.use(config => {\n" +
            "    return config;\n" +
            "}, err => {\n" +
            "    Message.error('请求超时');\n" +
            "    return Promise.reject(err);\n" +
            "});\n" +
            "\n" +
            "// http response 拦截器\n" +
            "axios.interceptors.response.use(response => {\n" +
            "    return response.data;\n" +
            "}, (err) => {\n" +
            "    // 返回状态码不为200时候的错误处理\n" +
            "    Message.error(err.toString());\n" +
            "    return Promise.reject(err);\n" +
            "});\n" +
            "\n" +
            "export const getRequest = (url, params) => {\n" +
            "    return axios({\n" +
            "        method: 'get',\n" +
            "        url: `${baseApi}${url}`,\n" +
            "        params: params,\n" +
            "    });\n" +
            "};\n" +
            "\n" +
            "export const postRequest = (url, params) => {\n" +
            "    return axios({\n" +
            "        method: 'post',\n" +
            "        url: `${baseApi}${url}`,\n" +
            "        data: params,\n" +
            "    });\n" +
            "};\n" +
            "\n" +
            "export const putRequest = (url, params) => {\n" +
            "    return axios({\n" +
            "        method: 'put',\n" +
            "        url: `${baseApi}${url}`,\n" +
            "        data: params,\n" +
            "    });\n" +
            "};\n" +
            "```\n" +
            "\n"
    },
]