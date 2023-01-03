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
    }
]