(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{305:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、vuex的概念和作用解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vuex的概念和作用解析"}},[t._v("#")]),t._v(" 一、Vuex的概念和作用解析")]),t._v(" "),a("h5",{attrs:{id:"_1】官方解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】官方解释"}},[t._v("#")]),t._v(" 1】官方解释：")]),t._v(" "),a("p",[t._v("Vuex是一个专为Vue.js应用程序开发的"),a("strong",[t._v("状态管理模式")])]),t._v(" "),a("ul",[a("li",[t._v("它采用"),a("strong",[t._v("集中式存储管理")]),t._v("应用我的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._v(" "),a("li",[t._v("Vuex也集成到Vue的官方调试工具 "),a("strong",[t._v("devtools extension")]),t._v("，提供了诸如零配置的 "),a("strong",[t._v("time-travel")]),t._v(" 调试、状态快照导入导出等高级调试功能。")])]),t._v(" "),a("h5",{attrs:{id:"_2】状态管理到底是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】状态管理到底是什么"}},[t._v("#")]),t._v(" 2】状态管理到底是什么")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("状态管理模式")]),t._v("、"),a("strong",[t._v("集中式存储管理")]),t._v("，听起来很复杂")]),t._v(" "),a("li",[t._v("其实，你可以简单的将其看成把需要多个组件共享的变量全部储存在一个对象里面。")]),t._v(" "),a("li",[t._v("然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。")]),t._v(" "),a("li",[t._v("那么，多个组件是不是就可以共享这个对象中的所有变量属性了呢？肯定不是")]),t._v(" "),a("li",[t._v("如果我们自己封装一个对象来管理不能保证它里面的所有的属性做到"),a("strong",[t._v("响应式")]),t._v("。")]),t._v(" "),a("li",[t._v("比如：类似于VUE实例中的data是响应式的，因为vue封装了数据双向绑定的set和get，同理这里状态管理也是如此")]),t._v(" "),a("li",[t._v("所有Vuex就是为了提供这样一个在多个组件间共享状态的插件。")])]),t._v(" "),a("h5",{attrs:{id:"_3】有什么状态是需要我们在多个组件间共享的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3】有什么状态是需要我们在多个组件间共享的"}},[t._v("#")]),t._v(" 3】有什么状态是需要我们在多个组件间共享的")]),t._v(" "),a("ul",[a("li",[t._v("比如用户的登录状态、用户名称、头像、地理位置信息等等")]),t._v(" "),a("li",[t._v("比如商城的收藏、购物车中的物品等等")]),t._v(" "),a("li",[t._v("这些状态信息，我们都可以放在统一的地方，对它进行保存和管理，而且它们还是响应式的")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926200628-cd18eb83-5f0e-4f3c-b527-b956ed2fed39.png#averageHue=%23fefdfb&clientId=u80750c15-dcde-4&from=paste&id=uf5f21217&originHeight=551&originWidth=701&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=67217&status=done&style=none&taskId=u5065158a-01c5-4c6d-9a65-e6374759b43&title=",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"二、vuex基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、vuex基本使用"}},[t._v("#")]),t._v(" 二、Vuex基本使用")]),t._v(" "),a("p",[t._v("单界面到多界面状态管理切换\n全局单例模式（"),a("strong",[t._v("大管家")]),t._v("）\n我们现在要做的就是将共享的状态抽取出来，交给我们的大管家，统一进行管理。之后你们每个视图，按照我规定好的规定，进行访问和修改等操作($store.state.xxx)。这就是Vuex背后的基本思想了。")]),t._v(" "),a("h5",{attrs:{id:"_1】安装vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】安装vuex"}},[t._v("#")]),t._v(" 1】安装vuex")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuex "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v("\n")])])]),a("h5",{attrs:{id:"_2】使用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】使用vuex"}},[t._v("#")]),t._v(" 2】使用vuex")]),t._v(" "),a("p",[t._v("在src文件夹下创建store文件夹（仓库）在新建index.js来"),a("strong",[t._v("配置Vuex")]),t._v("（类似VueRouter的使用步骤）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport Vuex from 'vuex'\n\n//1.安装插件\nVue.use(Vuex)\n\n//2.创建store对象\nconst store=new Vuex.Store({\n    state:{\n\t//状态\n    },\n    mutations:{\n\t//同步操作修改状态，使用devtools跟踪\n    },\n    actions:{\n\t//异步操作修改状态\n    },\n    getters:{\n\t\n    },\n    modules:{\n        \n    }\n\n})\n\n//3.导出store对象\nexport default store\n\n//4.在main.js中挂载store\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport App from './App'\nimport store from './store'\n\nVue.config.productionTip = false\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  store,//这里挂载,内部会执行Vue.prototype.$store=store\n  render: h => h(App)\n})\n")])])]),a("h2",{attrs:{id:"三、vuex-mutations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、vuex-mutations"}},[t._v("#")]),t._v(" 三、Vuex-mutations")]),t._v(" "),a("p",[a("strong",[t._v("VueComponents ----commit----\x3eMutations ----mutate----\x3estate")]),t._v("\n①在index.js中配置vuex的mutations")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store=new Vuex.Store({\n    state:{\n        counter:1000\n\t//状态\n    },\n    mutations:{\n\t//方法\n        increment(state){\n            state.counter++\n        },\n        decrement(state){\n            state.counter--\n        }\n        \n    },\n    actions:{\n\t//异步操作修改状态\n    },\n    getters:{\n\t\n    },\n    modules:{\n        \n    }\n\n})\n")])])]),a("p",[t._v("②$store.commit('mutations中的方法')")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<button @click=\"$store.commit('increment')\">+</button>\n   <button @click=\"$store.commit('decrement')\">-</button>\n\x3c!--在组件使用Vuex中的全局变量$store获取vuex配置的东西，在组件中使用大管家store中的mutations定义的方法--\x3e\n\x3c!--此时使用$store.commit('mutations中定义的方法名')来使用--\x3e\n")])])]),a("h2",{attrs:{id:"四、vuex单一状态树的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、vuex单一状态树的理解"}},[t._v("#")]),t._v(" 四、Vuex单一状态树的理解")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926200609-882ed0d0-ac19-4cb7-a5c7-a51b99b0e425.png#averageHue=%23f7edec&clientId=u80750c15-dcde-4&from=paste&id=uec5e9ab7&originHeight=500&originWidth=500&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=108947&status=done&style=none&taskId=u0d178a1c-b365-4f82-96cd-05578569eb0&title=",alt:"image.png"}})]),t._v(" "),a("h5",{attrs:{id:"_1】vuex提出单一状态树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】vuex提出单一状态树"}},[t._v("#")]),t._v(" 1】vuex提出单一状态树")]),t._v(" "),a("p",[t._v("Single Source of Truth（也可翻译成单一数据源）")]),t._v(" "),a("ul",[a("li",[t._v("如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难")]),t._v(" "),a("li",[t._v("所以Vuex也使用了"),a("strong",[t._v("单一状态树")]),t._v("来管理应用层级的"),a("strong",[t._v("全部状态")])]),t._v(" "),a("li",[t._v("单一状态树能够让我们最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护")]),t._v(" "),a("li",[a("strong",[t._v("所以只使用唯一store实例来管理")])])]),t._v(" "),a("h2",{attrs:{id:"五、getters的使用详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、getters的使用详解"}},[t._v("#")]),t._v(" 五、Getters的使用详解")]),t._v(" "),a("p",[t._v("有时候，我们需要从store中获取一些state变异后的状态（类似于VUE实例中的computed属性对data中的变量进行修改）\n①在index中的getters属性对state中的变量进行变异修改：\n"),a("strong",[t._v("getters属性中定义的方法的参数是被规定好了的：")]),t._v("\n方法名(参数一,参数二){return xxx} 其中**'参数一'是指state对象，'参数二'是指getters对象**（第二个参数非必选）\n（"),a("strong",[t._v("JavaScript中函数返回类型决定函数是什么类型的")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store=new Vuex.Store({\nstate:{\n        counter:1000,\n        students:[\n            {id:110,name:'lh',age:10},\n            {id:120,name:'zs',age:11},\n            {id:119,name:'ls',age:22},\n            {id:122,name:'ww',age:21}]\n    },\ngetters:{\n    powerCounter(state){\n        return state.counter * state.counter\n    },\n    more20stu(state){//1.正常基本使用getters\n        return state.students.filter(s => s.age >= 20)\n    },\n    more20stuNum(state,getters){//2.当getters作为参数使用也必须传入state\n        return getters.more20stu.lengt\n    },\n    moreAgeStu(state){//3.需要向getters中的方法传入参数时需要先return一个function\n        return function(age){\n            return state.students.filter(s => s.age >= age)\n        }\n    }\n}\n})\n")])])]),a("p",[t._v("②在组件中进行使用$store.getters.xxx获取状态信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<h2>{{$store.getters.powerCounter}}</h2>\n<h2>{{$store.getters.more20stu}}</h2>\n<h2>{{$store.getters.more20stuNum}}</h2>\n<h2>{{$store.getters.moreAgeStu(11)}}</h2>\n")])])]),a("h2",{attrs:{id:"六、vue-mutations的携带参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、vue-mutations的携带参数"}},[t._v("#")]),t._v(" 六、Vue-mutations的携带参数")]),t._v(" "),a("h5",{attrs:{id:"_1】mutation状态更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】mutation状态更新"}},[t._v("#")]),t._v(" 1】Mutation状态更新")]),t._v(" "),a("p",[t._v("Vuex的store状态的更新"),a("strong",[t._v("唯一")]),t._v("方式："),a("strong",[t._v("提交Mutation")])]),t._v(" "),a("h6",{attrs:{id:"mutation主要包括两部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation主要包括两部分"}},[t._v("#")]),t._v(" Mutation主要包括两部分：")]),t._v(" "),a("ul",[a("li",[t._v("字符串的"),a("strong",[t._v("事件类型（type）")])]),t._v(" "),a("li",[t._v("一个"),a("strong",[t._v("回调函数（handler）")]),t._v("，规定该回调函数的"),a("strong",[t._v("第一个参数就是state")])])]),t._v(" "),a("h6",{attrs:{id:"mutation的定义方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation的定义方式"}},[t._v("#")]),t._v(" Mutation的定义方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mutations:{\nincrement(state){\n    state.counter++\n}\n}\n")])])]),a("h6",{attrs:{id:"通过mutation更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过mutation更新"}},[t._v("#")]),t._v(" 通过Mutation更新：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("increment: function(){\n    this.$store.commit('increment')\n}\n")])])]),a("h5",{attrs:{id:"_2】mutation传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】mutation传递参数"}},[t._v("#")]),t._v(" 2】Mutation传递参数")]),t._v(" "),a("p",[t._v("在通过mutation更新数据的时候，有可能我们希望携带一些"),a("strong",[t._v("额外的参数")]),t._v("，参数被称为是mutation的"),a("strong",[t._v("载荷(payload)")]),t._v("\n如果我们需要很多参数需要传递，这时候我们会以对象的形式传递，也就是payload是一个对象，再从对象中取出相关的信息。")]),t._v(" "),a("h6",{attrs:{id:"mutation的定义方式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation的定义方式-2"}},[t._v("#")]),t._v(" Mutation的定义方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mutations:{\n        increment(state){\n            state.counter++\n        },\n        decrement(state){\n            state.counter--\n        },\n        incrementCount(state,count){\n            //count：payload载荷\n            state.counter=state.counter+count\n        },\n        addStudent(state,stu){//如果需要传递多个参数只需要把参数看作一个对象\n            state.students.push(stu)\n        }\n    }\n")])])]),a("h6",{attrs:{id:"通过mutation更新-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过mutation更新-2"}},[t._v("#")]),t._v(" 通过Mutation更新：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<button @click=\"$store.commit('increment')\">+</button>\n<button @click=\"$store.commit('decrement')\">-</button>\n<button @click=\"$store.commit('incrementCount',5)\">+5</button>\n<button @click=\"$store.commit('incrementCount',10)\">+10</button> \n<button @click=\"$store.commit('addStudent',{id:200,name:'james',age:30})\">添加学生</button>\n")])])]),a("h5",{attrs:{id:"_3】使用-mapmutations-辅助函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3】使用-mapmutations-辅助函数"}},[t._v("#")]),t._v(" 3】使用 mapMutations 辅助函数")]),t._v(" "),a("p",[t._v("你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapMutations } from 'vuex'\n\nexport default {\n  // ...\n  methods: {\n    ...mapMutations([\n      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`\n\n      // `mapMutations` 也支持载荷：\n      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`\n    ]),\n    ...mapMutations({\n      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`\n    })\n  }\n}\n")])])]),a("h2",{attrs:{id:"七、mutation提交风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、mutation提交风格"}},[t._v("#")]),t._v(" 七、Mutation提交风格")]),t._v(" "),a("p",[t._v("上面的通过commit进行提交时一种普通的方式：方面名后面只能再跟传递"),a("strong",[t._v("唯一")]),t._v("参数（这个参数可以是普通变量也可以是对象）\nVue还提供了另一种风格，它是一个"),a("strong",[t._v("包含type属性的对象")]),t._v("（这个对象中除开type，剩下的部分整体组成一个payload对象）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!--普通的提交风格--\x3e\n<button @click=\"$store.commit('incrementCount',5)\">+5</button>\n\x3c!--特殊的提交风格--\x3e\n<button @click=\"$store.commit({type:'incrementCount',age:10,name:xx,id:100)}\">+5</button>\n")])])]),a("p",[t._v("使用特殊的对象风格提交，相当于就是将整个对象提交了，然后vuex再去找到对象中的type去配置中匹配，对象中后面的所有参数就是一个payload对象传递到mutations中，然后再使用payload.age来使用。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//mutations中的处理方式\nchangeCount(state,payload){\n    state.count = payload.age + payload.name + payload.id\n}\n")])])]),a("h2",{attrs:{id:"八、vuex数据的响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、vuex数据的响应式原理"}},[t._v("#")]),t._v(" 八、Vuex数据的响应式原理")]),t._v(" "),a("h5",{attrs:{id:"_1】mutation响应规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】mutation响应规则"}},[t._v("#")]),t._v(" 1】Mutation响应规则")]),t._v(" "),a("ul",[a("li",[t._v("Vuex的store中的state是响应式的，当state中的数据发生改变时，Vue组件会"),a("strong",[t._v("自动更新")]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("store中的这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新。")])]),t._v(" "),a("ul",[a("li",[t._v("这就要求我们必须遵守一些Vuex对应的规则：①提前在store中初始化好所需的属性（直接使用属性进行添加未初始化的内容，不能正常被监听且加入响应式系统）state.info['address']='洛杉矶'（不能加入响应式系统）delete state.info.age（也做不到响应式）需要使用Vue.delete(state.info,'age')②当给state中打的对象添加新属性时，使用下面的方式：方式一：使用Vue.set(state.对象,'属性名','属性值')方式二：使用"),a("strong",[t._v("新对象给旧对象重新赋值")])])]),t._v(" "),a("h5",{attrs:{id:"_2】具体实现代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】具体实现代码"}},[t._v("#")]),t._v(" 2】具体实现代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store=new Vuex.Store({\n    state:{\n        info:{\n            name:'kobe',\n            age:40,\n            height:1.98\n        }\n    },\n    mutations:{\n        updateInfo(state){\n            state.info.name='leihao'//可以响应式，因为是初始化化的属性\n          \t//state.info['address']='成都'//不能响应式\n            Vue.set(state.info,'address','成都')//可以响应式\n            //delete state.info.age//不能响应式\n            Vue.delete(state.info,'age')//可以响应式\n        }\n    }\n})\n")])])]),a("p",[t._v("组件中的使用状态代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<h2>{{$store.state.info}}</h2>\n<button @click=\"$store.commit('updateInfo')\">修改info</button>\n")])])]),a("h2",{attrs:{id:"九、vuex-mutation的类型常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、vuex-mutation的类型常量"}},[t._v("#")]),t._v(" 九、Vuex-mutation的类型常量")]),t._v(" "),a("ul",[a("li",[t._v("在mutation中，我们定义了很多事件类型（也就是其中的方法名称）")]),t._v(" "),a("li",[t._v("当我们的项目增大时，Vuex管理的状态越来越多，需要更新状态的情况越来越多，那么意味着Mutation中的方法越来越多")]),t._v(" "),a("li",[t._v("方法越多，使用者需要花费大量的精力去记住这些方法，甚至多个文件间来回切换，查看方法名称，甚至如果不是复制的时候，可能还会出现写错的情况")])]),t._v(" "),a("p",[t._v("1】新建一个mutation-types.js文件进行管理事件类型")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export const INCREMENT = 'increment'\nexport const 公共事件名 = '事件名'\n")])])]),a("p",[t._v("2】在index.js和使用vuex管理的组件中都导入这些需要使用的常量")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import {INCREMENT} from './mutation-tpyes.js'\n...\n//需要时使用{}，因为这里并没有使用default的方式导出\nimport * as types from './mutation-tpyes.js'\n[types.INCREMENT](state){\n    \n}\n")])])]),a("h2",{attrs:{id:"十、vuex-actions的使用详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、vuex-actions的使用详解"}},[t._v("#")]),t._v(" 十、Vuex-actions的使用详解")]),t._v(" "),a("p",[a("strong",[t._v("VueComponents ----dispatch----\x3eActions ----commit----\x3eMutations ----mutate----\x3estate")])]),t._v(" "),a("h5",{attrs:{id:"_1】vuex-mutation同步函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】vuex-mutation同步函数"}},[t._v("#")]),t._v(" 1】Vuex-mutation同步函数")]),t._v(" "),a("p",[t._v("通常情况下，Vuex要求我们Mutation中的方法必须是同步方法")]),t._v(" "),a("ul",[a("li",[t._v("主要的原因是当我们使用devtools时，可以让devtools帮助我们捕捉mutation的快照")]),t._v(" "),a("li",[t._v("但是如果是异步操作，那么devtools将不能很好地追踪这个操作什么时候会被完成，在devtools工具中不能被记录下来")])]),t._v(" "),a("h5",{attrs:{id:"_2】action的基本定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】action的基本定义"}},[t._v("#")]),t._v(" 2】Action的基本定义")]),t._v(" "),a("p",[t._v("我们强调，不要在Mutation中进行异步操作")]),t._v(" "),a("ul",[a("li",[t._v("但是某些情况，我们确实希望在Vuex中进行一些异步操作，比如网络请求等操作")]),t._v(" "),a("li",[t._v("Action类似于Mutation，但是是用来代替Mutation进行异步操作的")])]),t._v(" "),a("h5",{attrs:{id:"_3】具体代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3】具体代码实现"}},[t._v("#")]),t._v(" 3】具体代码实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store=new Vuex.Store({\n    state:{\n        info:{\n            name:'kobe',\n            age:40,\n            height:1.98\n        }\n    },\n    mutations:{\n        updateInfo(state){\n            //如果直接在mutation中异步操作无法使用devtools工具\n            // setTimeout(()=>{\n            //     state.info.name='leihao'\n            // },1000)\n\n            state.info.name='hhhh'\n\n        }\n    },\n    actions:{\t  //context：上下文\n        aUpdateInfo(context,payload){\n           //也可以像Mutations一样携带参数payload\n            setTimeout(()=>{\n                context.commit('updateInfo')\n            },1000)\n            console.log(payload)\n        }\n    }\n})\n")])])]),a("p",[t._v("在vue组件中的用dispatch使用Action（也可以像mutation中的commit一样携带payload参数）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<h2>{{$store.state.info}}</h2>\n<button @click=\"$store.dispatch('aUpdateInfo',{returnInfo:'成功'})\">异步修改</button>\n")])])]),a("h5",{attrs:{id:"_4】使用-mapactions-辅助函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4】使用-mapactions-辅助函数"}},[t._v("#")]),t._v(" 4】使用 mapActions 辅助函数")]),t._v(" "),a("p",[t._v("你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapActions } from 'vuex'\n\nexport default {\n  // ...\n  methods: {\n    ...mapActions([\n      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`\n\n      // `mapActions` 也支持载荷：\n      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`\n    ]),\n    ...mapActions({\n      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`\n    })\n  }\n}\n")])])]),a("h2",{attrs:{id:"十一、vuex-modules的使用详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十一、vuex-modules的使用详解"}},[t._v("#")]),t._v(" 十一、Vuex-modules的使用详解")]),t._v(" "),a("h5",{attrs:{id:"_1】认识module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1】认识module"}},[t._v("#")]),t._v(" 1】认识module")]),t._v(" "),a("ul",[a("li",[t._v("Vuex使用单一状态树，那么也意味着很多状态都会交给Vuex来管理")]),t._v(" "),a("li",[t._v("当应用变得非常复杂时，store对象就有可能变得相当臃肿")]),t._v(" "),a("li",[t._v("为了解决这个问题，Vuex允许我们将store分割成模块(module)，而每个模块分别拥有自己的state、mutations、Actions、getters等")])]),t._v(" "),a("h5",{attrs:{id:"_2】具体实现代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2】具体实现代码-2"}},[t._v("#")]),t._v(" 2】具体实现代码")]),t._v(" "),a("p",[t._v("①")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("注意：需要在`vue`组件中使用模块中的`state`很特别，需要`{{$store.state.moduleA.name}}` 实质上是在`store`的`modules`中的各种模块，都被放在了根`state`中，可以直接在根`state`中使用各个模块的`state`\n")])])]),a("p",[t._v("②"),a("strong",[t._v("模块中的getters中的方法也多了第三个参数（这个参数是指向根state）")]),t._v("\n③Actions中的方法的唯一参数context，也"),a("strong",[t._v("和‘根store中’的不太一样")]),t._v("（通过console.log(context)可查看）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const moduleA={\n    state:{\n        name:'zhangsan'\n    },\n    mutations:{\n        updateName(state,payload){\n            state.name=payload\n        }\n    },    \n    getters:{\n        //getters中属性有三个参数可选：\n        //参数一是state(必选)，指向当前的模块中的state\n        //参数二是getters(可选)，指向当前getters\n        //参数三是rootState(可选)，指向根state\n        fullName(state){\n            return state.name+'11111'\n        },\n        fullName2(state,getters){\n            return getters.fullName+'222'\n        },\n        fullName3(state,getters,rootState){\n            return getters.fullName2+rootState.counter\n        }\n    },\n    actions:{\n        aUpdateName(context){\n            //只能commit当前的mutation中的同步方法\n            console.log(context)//可以获取当前模块和根的一些状态信息\n            setTimeout(()=>{\n                context.commit('updateName','wangwu')\n            },1000)\n        }\n    }\n\n}\n//2.创建tore对象\nconst store=new Vuex.Store({\n    state:{},\n    actions:{},\n    getters:{},\n    modules:{\n        moduleA//es6的同名语法\n    }\n})\n")])])]),a("p",[t._v("vue组件中使用的代码")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$store.state.moduleA.name}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$store.commit('updateName','lisi')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("模块修改name"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$store.getters.fullName}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$store.getters.fullName2}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$store.getters.fullName3}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$store.dispatch('aUpdateName')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("模块异步修改name"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"十二、vuex-store文件夹的目录组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十二、vuex-store文件夹的目录组织"}},[t._v("#")]),t._v(" 十二、Vuex-store文件夹的目录组织")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("store\t\t\t\t\n  |------index.js\t\t//这里面只保留state内容，其他的全部抽离，用es6语法导入\n  |------actions.js\t\t//根级别的action\n  |------mutations.js  \t//根级别的mutation\n  |------getters.js\n  |------modules\n  \t\t    |------cart.js\t\t//购物车模块\n  \t\t    |------product.js\t//产品模块\n  \t\t    \t\t .\n  \t\t    \t\t .\n  \t\t    \t\t .\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);