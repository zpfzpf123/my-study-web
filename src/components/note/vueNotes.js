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
    }
]