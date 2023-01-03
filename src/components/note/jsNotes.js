export default [
    {
        title:'闭包',
        name:'1',
        content:'闭包 让私有变量变成全局变量 一般写法都是a函数里面return一个b函数 从而让a函数里面的变量变为全局变量 也就是每次调用a函数 里面的变量就不会初始化 而是继续保留上次的值 原理是一个函数只要在调用 那么它所在的环境不会被销毁 闭包正是因为返回一个b函数 当这个函数被调用 那么它所在的a函数里面的环境就不会被销毁 从而得就让私有变量变成全局变量'
    },
    {
        title:'this',
        name:'2',
        content:'一般函数中，this指向当前函数调用的对象，箭头函数指向外层作用域，也就是箭头函数的上下文。'
    },
    {
        title:'js同步和异步执行机制',
        name:'3',
        content:'首先判断js代码是同步还是异步,同步就进入主进程,异步就进入event table\n' +
            '异步任务在event table中注册函数,当满足触发条件后,被推入event queue\n' +
            '同步任务进入主线程后一直执行,直到主线程空闲时,才会去event queue中查看是否有可执行的异步任务,如果有就推入主进程中\n' +
            '以上三步循环执行,这就是event loop\n' +
            '\n' +
            '既然js是单线程，那就像只有一个窗口的食堂，学生需要排队一个一个打饭，同理js任务也要一个一个顺序执行。这种模式执行简单，但随着日后的需求，事务，请求增多，这种单线程模式执行效率必定低下。只要有一个任务执行消耗了很长时间，在这个时间里后面的任务无法执行。\n' +
            '\n' +
            '常见的有新闻包含的超清图片加载很慢，难道我们的网页要一直卡着直到图片完全显示出来？为了解决这个问题，**JavaScript语言将任务执行模式分成同步和异步：**\n' +
            '\n' +
            '- **同步模式：** 就是上面所说的一种执行模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的。\n' +
            '- **异步模式：** 就是每一个任务有一个或多个回调函数（`callback`），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。\n' +
            '\n' +
            'https://img.jbzj.com/file_images/article/202109/2021924162932253.png?2021824162952\n' +
            '\n' +
            '**导图要表达的内容用文字来表述的话：**\n' +
            '\n' +
            '- \n' +
            '\n' +
            '- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入`Event Table`并注册函数。\n' +
            '- 当指定的事情完成时，`Event Table`会将这个函数移入`Event Queue`。\n' +
            '- 主线程内的任务执行完毕为空，会去`Event Queue`读取对应的函数，进入主线程执行。\n' +
            '- 上述过程会不断重复，也就是常说的`Event Loop`(事件循环)。\n' +
            '\n' +
            ' **再配上代码表达：**\n' +
            '```javascriptlet data = [];\n' +
            '$.ajax({\n' +
            '    url:blog.csdn.net,\n' +
            '    data:data,\n' +
            '    success:() => {\n' +
            '        console.log(\'发送成功!\');\n' +
            '    }\n' +
            '})\n' +
            'console.log(\'代码执行结束\');\n' +
            '```\n' +
            '**上面是一段简易的ajax请求代码：**\n' +
            '\n' +
            '- `ajax`进入`Event Table`，注册回调函数`success`。\n' +
            '- 执行`console.log`(\'代码执行结束\')。\n' +
            '- ajax事件完成，回调函数`success`进入`Event Queue`。\n' +
            '- 主线程从`Event Queue`读取回调函数`success`并执行。\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '```javascript\n' +
            'setTimeout(()=>{\n' +
            '\n' +
            '  console.log(111);\n' +
            '\n' +
            '  },0)\n' +
            '\n' +
            '  new Promise((*resolve*, *reject*) => {\n' +
            '\n' +
            '  console.log(222);\n' +
            '\n' +
            '  setTimeout(() => {\n' +
            '\n' +
            '    console.log(333);\n' +
            '\n' +
            '  }, 0);\n' +
            '\n' +
            '  resolve(444);\n' +
            '\n' +
            '  }).then(*res*=>{\n' +
            '\n' +
            '  console.log(res);\n' +
            '\n' +
            '  })\n' +
            '\n' +
            '  console.log(555);\n' +
            '```\n' +
            '\n' +
            '  /* js执行顺序是同步>微任务队列>宏任务队列，首先同步任务先执行222和555，\n' +
            '\n' +
            '  然后promise是微任务队列,这个时候js主线程任务已经执行完毕,开始把微任务队列中的\n' +
            '\n' +
            '  任务添加到主线程继续执行，所以输出555，最后定时器是宏任务队列，所以\n' +
            '\n' +
            '  最后执行111和333\n' +
            '\n' +
            '  js运行，代码刚开始就是定时器，我们首先把定时器加入event table中，注册好里面的回调函数，同时被推入入event queue(任务队列)，等待主线程执行完后，此时，就回去任务队列查找是否有可执行的异步任务，有就推到主线程执行，这个过程的循环执行，就是event loop[事件循环\n' +
            '\n' +
            '  */'
    },
    {
        title: 'js原型和原型链',
        name:4,
        content:'所有对象和函数数组等都有__proto__属性，他指向了其构造函数的protoType对象属性,如对象的构造函数就是new Object(),一般我们会把公共方法存入原型之中，这样方便在实例化对象使用方法时指向同一个内存地址，不要要每实例化一个对象就新开辟一个内存空间用来存放方法，同时__proto__和protoType都有constructor属性，他就是指向构造函数本身，故而，点开constructor属性，里面也会有protoType属性和__proto__等。注意，Object已经是最高层级的构造函数了，原型链也在这为起点。'
    },
    {
        title: 'js代码运行过程以及函数运行过程以及闭包',
        name:5,
        content:'全局代码执行顺序\n' +
            '\n' +
            '想要弄懂函数的执行过程，就必须知道全局代码是怎么执行的\n' +
            '\n' +
            '函数的执行过程与全局代码执行过程非常相似，这也是设计的js不同于其他语言地方之一\n' +
            '\n' +
            '代码执行之前\n' +
            '\n' +
            '当全局代码执行之前，v8引擎会在堆内存中开辟一块空间叫GO（看补充），GO中有很多默认的属性(环境属性)，比如Date、String、window等等，还有我们声明的函数和用var定义的变量，那么他们默认是什么值呢？这划分为简单数据类型和复杂数据类型：\n' +
            '\n' +
            '简单数据类型默认值是undefined\n' +
            '\n' +
            '复杂数据类型默认值是一块地址：如果发现是复杂数据类型，v8就会在堆中另开辟一块空间，GO中的相应变量指向该空间（所以复杂数据类型存在深浅拷贝问题）\n' +
            '\n' +
            '函数也会创建一块空间，暂且叫它函数空间\n' +
            '\n' +
            '2. v8又会帮我们在栈中创建一个GEC(看补充)，GEC又包含两部分：\n' +
            '\n' +
            'GEC部分一：VO(看补充)，VO是一个虚拟对象并且指向GO，VO中也包含很多属性(环境属性)，比如this、父级作用域等等\n' +
            '\n' +
            'GEC部分二：代码执行体，就是一行行的代码\n' +
            '\n' +
            '注意：这些都是在代码具体执行之前就完成的，就是说这些东西在执行之前就会被确定\n' +
            '\n' +
            '全局代码执行\n' +
            '\n' +
            '执行一行行代码，当执行到为变量初始化或赋值时，就对应将GO中属性的值覆盖掉......\n' +
            '\n' +
            '补充：执行用到的变量都是通过VO往GO里找并操作\n' +
            '\n' +
            '函数执行过程\n' +
            '\n' +
            '在全局代码执行过程中遇到函数加小括号调用，会发生什么呢？\n' +
            '\n' +
            '会分为函数的具体代码执行之前和代码具体执行和执行完毕三部分\n' +
            '\n' +
            '函数代码执行之前\n' +
            '\n' +
            '当执行到‘函数()’的时候，前面说过会在GO找到对应的属性，发现属性值是一块空间(函数空间)，v8就会在堆中另外开辟一块独属于本次引用的空间AO(看补充)，此AO与GO作用相似，也会在执行代码之前做本作用域中的预解析（为简单数据类型和复杂数据类型分别做不同初始化），另外在执行栈中创建FEC(看补充)，同样的 FEC和GEC作用也相似，也分为两部分：\n' +
            '\n' +
            'FEC部分一：VO，虚拟对象指向AO，包含父级作用域等等\n' +
            '\n' +
            'FEC部分二：代码执行体\n' +
            '\n' +
            '函数代码执行\n' +
            '\n' +
            '执行一行行代码，当执行到为变量初始化或赋值时，就对应将AO中属性的值覆盖掉......\n' +
            '\n' +
            'Q：但是，如果发现一个属性在AO中找不到怎么办？\n' +
            '\n' +
            'A：在上面说过，VO中包含父级作用域，父级作用域在代码执行之前就会被确定，所以自然而然往父级作用域里找，父级作用域指向的是父级的VO，这样一层一层直到GO，如果还是找不到，返回undefined\n' +
            '\n' +
            '函数执行完毕\n' +
            '\n' +
            '函数执行完毕会把本函数的FEC弹出执行栈\n' +
            '\n' +
            '如果发现没有变量再指向函数空间，也会在堆中销毁该函数空间\n' +
            '\n' +
            '闭包原理\n' +
            '\n' +
            '// 示例代码 /* 1 */ var function foo() { /* 2 */ var num = 10 /* 3 */ return function bar() { /* 4 */ console.log(num) // 10 /* 5 */ } /* 6 */ } /* 7 */ /* 8 */ var fn = foo() /* 9 */ fn() /*10 */ \n' +
            '\n' +
            '全局预解析（看全局代码执行顺序）......\n' +
            '\n' +
            '第8行，调用foo（看函数执行过程）......\n' +
            '\n' +
            '第5行，通过VO将foo的AO的num改成10\n' +
            '\n' +
            '第3行，返回一个函数bar，函数不能被‘直接返回’，返回的是foo的AO的属性bar存的地址\n' +
            '\n' +
            '第8行，给fn初始化，值是一块地址，此时GO里的fn指向的就是bar的函数地址\n' +
            '\n' +
            '第9行，调用fn，从GO里面找到fn，发现是一块函数地址，进行创建VO和AO等操作......\n' +
            '\n' +
            '第4行，打印num，发现num并不存在当前AO中，通过父级作用域找foo的AO，返回num\n' +
            '\n' +
            '原因原理：因为全局的fn指向bar，bar的父级作用域又指向foo的AO，所以不管fn、foo、bar都不会被销毁，尽管fn、foo、bar都执行完毕，这样就会造成内存泄漏\n' +
            '\n' +
            '补充\n' +
            '\n' +
            'GEC：Global Execution Context 全局执行上下文\n' +
            '\n' +
            '存在并一直存在执行栈中，直到script代码执行完毕，包含执行前和执行两部分：\n' +
            '\n' +
            '执行前，创建VO指向GO\n' +
            '\n' +
            '执行一行行代码\n' +
            '\n' +
            'FEC：Function Execution Content 函数执行上下文\n' +
            '\n' +
            '在函数被调用代码执行之前被创建，包含执行前和执行两部分：\n' +
            '\n' +
            '执行前，创建VO指向AO\n' +
            '\n' +
            '执行一行行代码\n' +
            '\n' +
            'GO：Globel Object 全局对象\n' +
            '\n' +
            '存在于最根层，由V8引擎在代码执行之前创建在堆空间中，默认存在一些属性：Date、Math等等，还包含个特殊属性window指向GO本身，默认属性还包含我们定义的函数和var声明的变量\n' +
            '\n' +
            '在创建的时候会根据数据类型决定默认值，并且为复杂类型开辟内存\n' +
            '\n' +
            'AO：Activation Object\n' +
            '\n' +
            '在函数调用代码执行之前被创建，里面默认存在一些属性：传递来的参数、var声明的变量、定义的函数\n' +
            '\n' +
            '创建的时候也会根据数据类型不同决定默认值，并且为复杂类型开辟内存\n' +
            '\n' +
            'VO：Variable Object\n' +
            '\n' +
            '像是AO或GO的傀儡，也是代码执行之前被创建在执行上下文中并指向创建它的那一块空间，或许是AO或许是GO。包含this，包含scoped chain(作用域链): scoped(当前作用域)、scoped parent(父级作用域)等等\n' +
            '\n' +
            '补充：\n' +
            '\n' +
            '看到好多的文章都把VO省略掉了，但其实在代码执行过程中不能直接访问AO或GO，只能通过VO间接访问，可以理解为VO==AO或VO==GO，但VO是切实存在的\n' +
            '\n' +
            '每个函数都有属于自己的AO、VO、FEC\n' +
            '\n' +
            'A回答：\n' +
            '\n' +
            '在全局代码执行之前，V8会创建GO，并会判断你声明的变量的数据类型，为其添加默认值或为其在内存中开辟空间，发现定义一个函数就会开辟一块空间。这块空间是在代码执行之前创建的，所以当执行函数时，就会从GO或AO里面找到那一块空间\n' +
            '\n' +
            'JS内存垃圾回收(GC)的机制是从根开始找，某块空间没有再被指向的时会被销毁。上段代码为例，GO的fn指向bar(函数空间)，bar的父级作用域指向GO的foo的AO\n' +
            '\n' +
            '引申：那怎么解决闭包引起的内存泄露呢？手动更改fn的值或直接指向null'
    },
    {
        name:'6',
        title:'Set和Map',
        content:'# 1、什么是Set()\n' +
            '\n' +
            'Set是[es6](https://so.csdn.net/so/search?q=es6&spm=1001.2101.3001.7020)新增的数据结构，**似于数组**，但它的一大特性就是**所有元素都是唯一的**，没有重复的值，我们一般称为集合。\n' +
            '\n' +
            'Set本身是一个构造函数，用来生成 Set 数据结构\n' +
            '\n' +
            '# 2、增删改查方法\n' +
            '\n' +
            '###### 2.1 添加元素`add`\n' +
            '\n' +
            '添加某个值，返回 Set 结构本身，当添加实例中已经存在的元素，set不会进行处理添加\n' +
            '\n' +
            '```cpp\n' +
            'let list=new Set();\n' +
            'list.add(1)\n' +
            'list.add(2).add(3).add(3)   // 2只被添加了一次\n' +
            '123\n' +
            '```\n' +
            '\n' +
            '###### 2.2 删除元素 `delete`\n' +
            '\n' +
            '删除某个值，返回一个布尔值，表示删除是否成功\n' +
            '\n' +
            '```\n' +
            'let list=new Set([1,20,30,40])\n' +
            'list.delete(30)      //删除值为30的元素，这里的30并非下标\n' +
            '12\n' +
            '```\n' +
            '\n' +
            '###### 2.3 判断某元素是否存在`has`\n' +
            '\n' +
            '返回一个布尔值，判断该值是否为Set的成员\n' +
            '\n' +
            '```\n' +
            'let list=new Set([1,2,3,4])\n' +
            'list.has(2)//true\n' +
            '12\n' +
            '```\n' +
            '\n' +
            '###### 2.4 清除所有元素`clear`\n' +
            '\n' +
            '清除所有成员，没有返回值\n' +
            '\n' +
            '```\n' +
            'let list=new Set([1,2,3,4])\n' +
            'list.clear()\n' +
            '12\n' +
            '```\n' +
            '\n' +
            '# 3、遍历方法\n' +
            '\n' +
            '###### 3.1 遍历 `keys()`\n' +
            '\n' +
            '返回键名的遍历器，相等于返回键值遍历器values()\n' +
            '\n' +
            '```\n' +
            'let list2=new Set([\'a\',\'b\',\'c\'])\n' +
            'for(let key of list2.keys()){\n' +
            '   console.log(key)//a,b,c\n' +
            '}\n' +
            '1234\n' +
            '```\n' +
            '\n' +
            '###### 3.2 遍历 `values()`\n' +
            '\n' +
            '返回键值的遍历器\n' +
            '\n' +
            '```\n' +
            'let list=new Set([\'a\',\'b\',\'c\'])\n' +
            'for(let value of list.values()){\n' +
            'console.log(value)//a,b,c\n' +
            '}\n' +
            '1234\n' +
            '```\n' +
            '\n' +
            '###### 3.3 遍历 `entries()`\n' +
            '\n' +
            '返回键值对的遍历器\n' +
            '\n' +
            '```\n' +
            'let list=new Set([\'4\',\'5\',\'hello\'])\n' +
            'for (let item of list.entries()) {\n' +
            '  console.log(item);\n' +
            '}\n' +
            '// [\'4\',\'4\']   [\'5\',\'5\']   [\'hello\',\'hello\'] \n' +
            '12345\n' +
            '```\n' +
            '\n' +
            '###### 3.4 遍历 `forEach()`\n' +
            '\n' +
            '使用回调函数遍历每个成员\n' +
            '\n' +
            '```\n' +
            'let list=new Set([\'4\',\'5\',\'hello\'])\n' +
            'list.forEach((value, key) => console.log(key + \' : \' + value))\n' +
            '// 4:4    5:5   hello:hello\n' +
            '123\n' +
            '```\n' +
            '\n' +
            '# 4、使用情形\n' +
            '\n' +
            '###### 4.1 用于[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)去重\n' +
            '\n' +
            '```cpp\n' +
            'let arr = [3, 5, 2, 2, 5, 5];\n' +
            'let setArr = new Set(arr)     // 返回set数据结构  Set(3) {3, 5, 2}\n' +
            '\n' +
            '//方法一   es6的...解构\n' +
            'let unique1 =  [...setArr ];      //去重转数组后  [3,5,2]\n' +
            '\n' +
            '//方法二  Array.from()解析类数组为数组\n' +
            'let unique2 = Array.from(setArr )   //去重转数组后  [3,5,2]\n' +
            '12345678\n' +
            '```\n' +
            '\n' +
            '###### 4.2 用于字符串去重\n' +
            '\n' +
            '```cpp\n' +
            'let str = "352255";\n' +
            'let unique = [...new Set(str)].join("");     // 352 \n' +
            '12\n' +
            '```\n' +
            '\n' +
            '###### 4.3 实现并集、交集、和差集\n' +
            '\n' +
            '```cpp\n' +
            'let a = new Set([1, 2, 3]);\n' +
            'let b = new Set([4, 3, 2]);\n' +
            '\n' +
            '// 并集\n' +
            'let union = new Set([...a, ...b]);\n' +
            '// Set {1, 2, 3, 4}\n' +
            '\n' +
            '// 交集\n' +
            'let intersect = new Set([...a].filter(x => b.has(x)));\n' +
            '// set {2, 3}\n' +
            '\n' +
            '// （a 相对于 b 的）差集\n' +
            'let difference = new Set([...a].filter(x => !b.has(x)));\n' +
            '// Set {1}\n' +
            '```\n' +
            '\n' +
            '# 1、Map是什么\n' +
            '\n' +
            'Map类型是**键值对的有序列表**，而`键和值都可以是任意类型`\n' +
            '\n' +
            '#### Map与Set的区别\n' +
            '\n' +
            '- Set是一种叫做[集合](https://so.csdn.net/so/search?q=集合&spm=1001.2101.3001.7020)的数据结构，Map是一种叫做字典的数据结构\n' +
            '\n' +
            '  > 集合-----是由一堆无序的、相关联的，且不重复的[内存](https://so.csdn.net/so/search?q=内存&spm=1001.2101.3001.7020)结构【数学中称为元素】组成的组合\n' +
            '  > 字典-----是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同\n' +
            '\n' +
            '- Set集合是以[值，值]的形式存储元素，\n' +
            '  Map字典是以[键，值]的形式存储\n' +
            '\n' +
            '# 2、增删改查\n' +
            '\n' +
            '###### 2.1 `size`\n' +
            '\n' +
            'size属性返回 Map 结构的成员总数。\n' +
            '\n' +
            '```cpp\n' +
            'const map = new Map();\n' +
            'map.set(\'foo\', true);\n' +
            'map.set(\'bar\', false);\n' +
            '\n' +
            'map.size // 2\n' +
            '12345\n' +
            '```\n' +
            '\n' +
            '###### 2.2 `set()`\n' +
            '\n' +
            '设置键名key对应的键值为value，然后返回整个 Map 结构\n' +
            '\n' +
            '如果key已经有值，则键值会被更新，否则就新生成该键\n' +
            '\n' +
            '同时返回的是当前Map对象，可采用链式写法\n' +
            '\n' +
            '```cpp\n' +
            'const m = new Map();\n' +
            'let fn = function(){}\n' +
            '\n' +
            'm.set(\'edition\', 6)        // 键是字符串\n' +
            'm.set(fn, \'standard\')     // 键是函数\n' +
            'm.set(undefined, \'nah\')    // 键是 undefined\n' +
            'm.set(1, \'a\').set(2, \'b\').set(3, \'c\') // 链式操作\n' +
            '1234567\n' +
            '```\n' +
            '\n' +
            '###### 2.3 `get()`\n' +
            '\n' +
            'get方法读取key对应的键值，如果找不到key，返回undefined\n' +
            '\n' +
            '```cpp\n' +
            'const m = new Map();\n' +
            '\n' +
            'const hello = function() {console.log(\'hello\');};\n' +
            'm.set(hello, \'Hello ES6!\') // 键是函数\n' +
            '\n' +
            'm.get(hello)  // Hello ES6!\n' +
            '123456\n' +
            '```\n' +
            '\n' +
            '###### 2.4 `has()`\n' +
            '\n' +
            'has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中\n' +
            '\n' +
            '```cpp\n' +
            'const m = new Map();\n' +
            '\n' +
            'm.set(\'edition\', 6);\n' +
            'm.set(262, \'standard\');\n' +
            'm.set(undefined, \'nah\');\n' +
            '\n' +
            'm.has(\'edition\')     // true\n' +
            'm.has(\'years\')       // false\n' +
            'm.has(undefined)     // true\n' +
            '123456789\n' +
            '```\n' +
            '\n' +
            '###### 2.4 `delete()`\n' +
            '\n' +
            'delete方法删除某个键，返回true。如果删除失败，返回false\n' +
            '\n' +
            '```cpp\n' +
            'const m = new Map();\n' +
            'm.set(undefined, \'nah\');\n' +
            'm.has(undefined)     // true\n' +
            '\n' +
            'm.delete(undefined)\n' +
            'm.has(undefined)       // false\n' +
            '123456\n' +
            '```\n' +
            '\n' +
            '###### 2.5 `clear()`\n' +
            '\n' +
            'clear方法清除所有成员，没有返回值\n' +
            '\n' +
            '```cpp\n' +
            'let map = new Map();\n' +
            'map.set(\'foo\', true);\n' +
            'map.set(\'bar\', false);\n' +
            '\n' +
            'map.size // 2\n' +
            'map.clear()\n' +
            'map.size // 0\n' +
            '1234567\n' +
            '```\n' +
            '\n' +
            '# 3、遍历\n' +
            '\n' +
            '- keys()：返回键名的遍历器\n' +
            '- values()：返回键值的遍历器\n' +
            '- entries()：返回所有成员的遍历器\n' +
            '- forEach()：遍历 Map 的所有成员\n' +
            '\n' +
            '```cpp\n' +
            'const map = new Map([\n' +
            '  [\'F\', \'no\'],\n' +
            '  [\'T\',  \'yes\'],\n' +
            ']);\n' +
            '\n' +
            '//keys()\n' +
            'for (let key of map.keys()) {\n' +
            '  console.log(key);       // "F"  "T"\n' +
            '}\n' +
            '\n' +
            '//values()\n' +
            'for (let value of map.values()) {\n' +
            '  console.log(value);    // "no"  "yes"\n' +
            '}\n' +
            '\n' +
            '// entries()\n' +
            'for (let item of map.entries()) {\n' +
            '  console.log(item[0], item[1]);\n' +
            '}\n' +
            '// "F" "no"  、"T" "yes"\n' +
            '\n' +
            '// 或者\n' +
            'for (let [key, value] of map.entries()) {\n' +
            '  console.log(key, value);\n' +
            '}\n' +
            '// "F" "no" 、"T" "yes"\n' +
            '\n' +
            '// 等同于使用map.entries()\n' +
            'for (let [key, value] of map) {\n' +
            '  console.log(key, value);\n' +
            '}\n' +
            '// "F" "no"  、 "T" "yes"\n' +
            '\n' +
            'map.forEach(function(value, key, map) {\n' +
            '  console.log(key, value);    // "F" "no"  、 "T" "yes"\n' +
            '});\n' +
            '```'
    },
    {
        name:'7',
        title: '两个数组求交集，并集和差集',
        content:'```js\n' +
            '//数组普通值\n' +
            'let a = [1, 2, 3, 4, 5, 10]\n' +
            'let b = [2, 3, 4, 5]\n' +
            '//求交集\n' +
            'let c = [...new Set(a.filter(item => new Set(b).has(item)))]\n' +
            '// console.log(c);\n' +
            '//求并集\n' +
            'let d = [...new Set([].concat(a).concat(b))]\n' +
            '//求差集\n' +
            'let e = [...new Set(a.filter(item => !new Set(b).has(item)))]\n' +
            'console.log(e);\n' +
            '\n' +
            '//数组对象值\n' +
            '// 形如如下数组\n' +
            'let arr1 = [], arr2 = [];\n' +
            'arr1 = [\n' +
            '  {\n' +
            '    ID: 1,\n' +
            '    Name: 1,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 2,\n' +
            '    Name: 2,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 3,\n' +
            '    Name: 3,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 4,\n' +
            '    Name: 4,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 5,\n' +
            '    Name: 5,\n' +
            '    desc: \'Number\'\n' +
            '  }\n' +
            ']\n' +
            'arr2 = [\n' +
            '  {\n' +
            '    ID: 5,\n' +
            '    Name: 5,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 6,\n' +
            '    Name: 6,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 7,\n' +
            '    Name: 7,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 8,\n' +
            '    Name: 8,\n' +
            '    desc: \'Number\'\n' +
            '  },\n' +
            '  {\n' +
            '    ID: 9,\n' +
            '    Name: 9,\n' +
            '    desc: \'Number\'\n' +
            '  }\n' +
            ']\n' +
            '\n' +
            '// 交集\n' +
            'let intersection = []\n' +
            'for (let i = 0, len = arr1.length; i < len; i++) {\n' +
            '  for (let j = 0, length = arr2.length; j < length; j++) {\n' +
            '    if (arr1[i].ID === arr2[j].ID) {\n' +
            '      intersection.push(arr1[i])\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            'console.log(\'交集\', intersection)\n' +
            '\n' +
            '// 并集\n' +
            'let union = [...arr1, ...arr2]\n' +
            'for (let i = 0, len = arr1.length; i < len; i++) {\n' +
            '  for (let j = 0, length = arr2.length; j < length; j++) {\n' +
            '    if (arr1[i].ID === arr2[j].ID) {\n' +
            '      union.splice(union.findIndex(item => item.ID === arr1[i].ID), 1)\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            'console.log(\'并集\', union)\n' +
            '\n' +
            '// 补集\n' +
            'let complement = [...arr1, ...arr2]\n' +
            'for (let i = 0, len = arr1.length; i < len; i++) {\n' +
            '  for (let j = 0, length = arr2.length; j < length; j++) {\n' +
            '    if (arr1[i].ID === arr2[j].ID) {\n' +
            '      complement.splice(complement.findIndex(item => item.ID === arr1[i].ID), 1)\n' +
            '      complement.splice(complement.findIndex(item => item.ID === arr2[j].ID), 1)\n' +
            '    }\n' +
            '  }\n' +
            '}\n' +
            'console.log(\'补集\', complement)\n' +
            '\n' +
            '// 差集\n' +
            'let diff = [...arr1]\n' +
            'for (let i = 0, len = arr1.length; i < len; i++) {\n' +
            '  let flag = false\n' +
            '  for (let j = 0, length = arr2.length; j < length; j++) {\n' +
            '    if (arr1[i].ID === arr2[j].ID) {\n' +
            '      flag = true\n' +
            '    }\n' +
            '  }\n' +
            '  if (flag) {\n' +
            '    diff.splice(diff.findIndex(item => item.ID === arr1[i].ID), 1)\n' +
            '  }\n' +
            '}\n' +
            'console.log(\'差集\', diff)\n' +
            '```'
    },
    {
        name:'8',
        title:'数组去重',
        content:'```js\n' +
            '//数组对象去重\n' +
            'let a = [{ id: 1, name: \'a\' }, { id: 2, name: \'b\' }, { id: 3, name: \'c\' }, { id: 4, name: \'d\' }, { id: 1, name: \'a\' }]\n' +
            'let map = new Map();\n' +
            'for (let item of a) {\n' +
            '  map.set(item.id + item.name, item);\n' +
            '}\n' +
            '// console.log(map);\n' +
            'a = [...map.values()];\n' +
            'console.log(a)\n' +
            '//数组普通值去重\n' +
            'let e = [1, 1, 1, 2, 2]\n' +
            'let f = [...new Set(e)]\n' +
            'console.log(f);\n' +
            '```'
    },
    {
        name:'9',
        title:'部分数组方法',
        content:"# 1 forEach遍历\n" +
            "\n" +
            "forEach(function(value,index,array))\n" +
            "\n" +
            "value:数组中的每一个值\n" +
            "\n" +
            "index:数组中的每一个索引号\n" +
            "\n" +
            "array:数组本身\n" +
            "\n" +
            "```js\n" +
            "    var arr = [1, 2, 3, 4, 5]\n" +
            "    arr.forEach((value, index, array) => {\n" +
            "      console.log(`数组中的每个值${value},对应的索引号${index},整个数组为${array}`);\n" +
            "    })\n" +
            "```\n" +
            "\n" +
            "\n" +
            "# 2 filter 过滤筛选数组\n" +
            "\n" +
            "filter(function(value,index,array))返回一个新数组\n" +
            "\n" +
            "```js\n" +
            "    var arr = [1, 2, 3, 4, 5]\n" +
            "    var newArr = arr.filter((value) => {\n" +
            "      return value > 2\n" +
            "    })\n" +
            "    console.log(newArr);\n" +
            "```\n" +
            "\n" +
            "\n" +
            "# 3 some 有满足条件的元素返回true\n" +
            "\n" +
            "some(function(value,index,array))返回值为布尔值，找到满足条件的就为true，(找到第一个满足条件的就终止循环)\n" +
            "\n" +
            "```js\n" +
            "    var arr = [1, 2, 3, 4, 5]\n" +
            "    var newArr = arr.some((value) => {\n" +
            "      return value == 2\n" +
            "    })\n" +
            "    console.log(newArr);// true\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "# 4 every 所有元素满足条件返回true\n" +
            "\n" +
            "every(function(value,index,array))返回值为布尔值，所有元素满足条件的就为true\n" +
            "\n" +
            "```js\n" +
            "    var arr = [1, 2, 3, 4, 5]\n" +
            "    var flag = arr.every((value) => {\n" +
            "      return value > 0\n" +
            "    })\n" +
            "    var flags = arr.every((value) => {\n" +
            "      return value > 1\n" +
            "    })\n" +
            "    console.log(flag);// true\n" +
            "    console.log(flags);// false\n" +
            "```\n" +
            "\n" +
            "# 5 map 返回一个新数组\n" +
            "\n" +
            "map(function(value,index,array))返回值为新数组，数组中的元素为原始数组元素调用函数处理后的值\n" +
            "\n" +
            "```js\n" +
            "    var arr = [1, 2, 3, 4, 5]\n" +
            "    var newArr = arr.map((value) => {\n" +
            "      return value * 2\n" +
            "    })\n" +
            "    console.log(newArr);//[2,4,6,8,10]\n" +
            "```\n" +
            "\n" +
            "# 6 find 找出第一个符合条件的数组成员\n" +
            "\n" +
            "find(function(value,index,array))返回值为满足条件的数组成员\n" +
            "\n" +
            "```js\n" +
            "    const arr = [{\n" +
            "      id: 1,\n" +
            "      name: 'zpf'\n" +
            "    }, {\n" +
            "      id: 2,\n" +
            "      name: 'zzz'\n" +
            "    }]\n" +
            "    const a = arr.find(value => value.id)\n" +
            "    const b = arr.find(value => value.id == 11)\n" +
            "    console.log(a);// {id:1,name:'zpf'}\n" +
            "    console.log(b);// undefined\n" +
            "```\n" +
            "\n" +
            "# 7 findIndex 找到第一个符合条件的数组成员的索引值\n" +
            "\n" +
            "findIndex(function(value,index,array))返回值为满足条件的数组成员的索引值 找不到为-1\n" +
            "\n" +
            "```js\n" +
            "    const arr = [{\n" +
            "      id: 1,\n" +
            "      name: 'zpf'\n" +
            "    }, {\n" +
            "      id: 2,\n" +
            "      name: 'zzz'\n" +
            "    }]\n" +
            "    const a = arr.findIndex(value => value.id)\n" +
            "    const b = arr.findIndex(value => value.id == 11)\n" +
            "    console.log(a);// 0\n" +
            "    console.log(b);// -1\n" +
            "```\n" +
            "\n" +
            "# 8 includes() 数组中是否包含给定的值 包含返回true 不包含false\n" +
            "\n" +
            "```js\n" +
            "    console.log([1, 2, 3].includes(3, -1));// 搜索值3 起始位置倒数第一个-1 true\n" +
            "    console.log([1, 2, 3].includes(4));// false\n" +
            "    console.log([1, 2, 3].includes(1, 2, 3, 4));//false\n" +
            "    console.log([1, 2, 3].includes(1, 2, 4));//false\n" +
            "```"
    },
    {
        name:'10',
        title:'时间戳转化为年月日时分秒',
        content:"```js\n" +
            "timestampToTime(time) {\n" +
            "      if (!time) {\n" +
            "        return\n" +
            "      }\n" +
            "      let date = new Date(time)\n" +
            "      let len = time.toString().length;\n" +
            "      if (len < 13) {\n" +
            "        let sub = 13 - len;\n" +
            "        sub = Math.pow(10, sub);\n" +
            "        date = new Date(time * sub);\n" +
            "      }\n" +
            "      let y = date.getFullYear() + '-';\n" +
            "      let M = date.getMonth() + 1;\n" +
            "      M = (M < 10 ? '0' + M : M) + '-';\n" +
            "      let d = date.getDate();\n" +
            "      d = (d < 10 ? '0' + d : d) + ' ';\n" +
            "      return y + M + d;\n" +
            "    },\n" +
            "```\n" +
            "\n",
    },
    {
        name:'11',
        title:'标准时间转化为年月日时分秒',
        content:"```js\n" +
            "formatTime(time, fmt) {\n" +
            "  if (!time) return '';\n" +
            "  else {\n" +
            "    const date = new Date(time);\n" +
            "    const o = {\n" +
            "      'M+': date.getMonth() + 1,\n" +
            "      'd+': date.getDate(),\n" +
            "      'H+': date.getHours(),\n" +
            "      'm+': date.getMinutes(),\n" +
            "      's+': date.getSeconds(),\n" +
            "      'q+': Math.floor((date.getMonth() + 3) / 3),\n" +
            "      S: date.getMilliseconds(),\n" +
            "    };\n" +
            "    if (/(y+)/.test(fmt))\n" +
            "      fmt = fmt.replace(\n" +
            "        RegExp.$1,\n" +
            "        (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n" +
            "      );\n" +
            "    for (const k in o) {\n" +
            "      if (new RegExp('(' + k + ')').test(fmt)) {\n" +
            "        fmt = fmt.replace(\n" +
            "          RegExp.$1,\n" +
            "          RegExp.$1.length === 1\n" +
            "            ? o[k]\n" +
            "            : ('00' + o[k]).substr(('' + o[k]).length)\n" +
            "        );\n" +
            "      }\n" +
            "    }\n" +
            "    return fmt;\n" +
            "  }\n" +
            "}\n" +
            "//formatTime(new Date(), \"yyyyMMddHHmmss\")\n" +
            "```",
    },
    {
        name:'12',
        title:'函数的节流与防抖',
        content:"## 防抖函数：将多次触发变成最后一次触发；\n" +
            "\n" +
            "```js\n" +
            "\n" +
            "\n" +
            "\n" +
            "function debounce(fn,wait){\n" +
            "  let timer = null;\n" +
            "  return function (){\n" +
            "    let arg = arguments;\n" +
            "    if(timer){\n" +
            "      clearTimeout(timer);\n" +
            "      timer = null;\n" +
            "    }\n" +
            "    timer = setTimeout(()=>{\n" +
            "       fn.apply(this,arg)\n" +
            "    },wait)\n" +
            "  }\n" +
            "}\n" +
            "function clg(){\n" +
            "  console.log('clg')\n" +
            "}\n" +
            "window.addEventListener('resize',debounce(clg,1000))\n" +
            "```\n" +
            "\n" +
            " ## 节流函数：将多次执行变成每隔一个时间节点去执行的函数\n" +
            "\n" +
            "```js\n" +
            "function throttle(fn,time){\n" +
            "  let lastTime = null;\n" +
            "  return function(){\n" +
            "    let nowTime = Date.now();\n" +
            "    if(nowTime - lastTime > time || !lastTime){\n" +
            "      fn();\n" +
            "      last = nowTime\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "function sayHi(){\n" +
            "  console.log('hi')\n" +
            "}\n" +
            "setInterval(throttle(sayHi,1000),500)\n" +
            "```",
    },
]