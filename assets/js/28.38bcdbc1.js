(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,a,e){"use strict";e.r(a);var s=e(13),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-cookie-sessionstorage-localstorage-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cookie-sessionstorage-localstorage-区别"}},[t._v("#")]),t._v(" 1.cookie sessionStorage localStorage 区别")]),t._v(" "),a("p",[t._v("这三者都是存储在浏览器的本地\ncookie是服务端写入的 而L S是由前端写入的\n前端在发送请求给后端的时候会自动携带cookie中的数据  而L   S 不会"),a("br"),t._v("\ncookie大小4kb  sessionStorage localStorage大小5M\nL是写入后就一直存在于本地 而S是刷新页面就回丢失\ncookie一般用来存储token或者sessionID L是存储不易变动的数据 S一般用来检测用户是否刷新页面 用于音乐播放器恢复进度条等功能")]),t._v(" "),a("h3",{attrs:{id:"_2-js数据类型有哪些-区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-js数据类型有哪些-区别是什么"}},[t._v("#")]),t._v(" 2.JS数据类型有哪些 区别是什么")]),t._v(" "),a("p",[t._v("js分为基本数据类型 和 引用数据类型\n基本数据类型：number Boolean string null undefined  以及ES6新增 symbol biglnt\n引用数据类型：object 数组 math数学函数 正则\n基本数据类型 存储在栈中 占用空间较小 是会频繁用到的数据\n引用数据类型 存储在堆中 占用空间较大 引用数据类型在栈中存有指针 该指针指向堆中该实体的起始地址 当解释器寻找引用值的时候 会检索其在栈中的地址 取得地址后从堆中获得实体\nsymbol数据类型的特点是不会存在重复的数据\nbiglnt数据类型的特征是数据涵盖的范围大 能够解决超出普通数据类型报错的问题")]),t._v(" "),a("h3",{attrs:{id:"_3-对于闭包的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对于闭包的理解"}},[t._v("#")]),t._v(" 3.对于闭包的理解")]),t._v(" "),a("p",[t._v("闭包就是在函数中再定义一个函数 这样就形成了一个闭包 这个内部函数可以访问外部作用域的变量 如果这个外部函数不暴露这个内部函数的话 那么外界就不知道这个内部函数的存在 它只能在它的内部使用 并且这个内部函数可以作为一个返回值返回出去 这样外部函数就形成了一个高阶函数 也就是返回函数的一个函数 闭包的好处是可以给这个高阶函数的变量设置只读属性 这样外界只能访问它的值而不能修改它的值 起到了保护作用 缺点是闭包引用另外一个函数的活动对象 因此这个活动对象无法被销毁 所以闭包比一般的函数需要占用更多的内存消耗")]),t._v(" "),a("h3",{attrs:{id:"_4-promise是什么-与使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-promise是什么-与使用方法"}},[t._v("#")]),t._v(" 4.promise是什么 与使用方法？")]),t._v(" "),a("p",[t._v("promise是一个解决地狱回调问题的方法 他有三个状态 pending resolved rejected 也就是 等待 成功 失败 三种状态 都是从pending变为其他两个状态 并且状态发生改变之后就无法修改，promise接收2个参数一个resolve成功回调 一个reject失败回调 可以用.then方法接收成功的结果并运行成功后的函数 .catch运行失败后的函数")]),t._v(" "),a("h3",{attrs:{id:"_5-跨域是什么-如何解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-跨域是什么-如何解决跨域问题"}},[t._v("#")]),t._v(" 5.跨域是什么？如何解决跨域问题")]),t._v(" "),a("p",[t._v("跨域是指的浏览器的同源策略不允许运行其他网站上的脚本，协议、域名、端口 有一项不同就叫做跨域\n1.可以用jsonp解决 其原理是script标签不受同源策略影响 scr属性指向没有跨域限制 但是这会存在安全隐患 不适用于vue react框架\n2.后端可以设置cros\n3.前端可以在开发环境中配置代理中转请求，跨域是浏览器的保护机制 如果脱离浏览器发请求 那么就不会受到跨域保护的影响 可以配置proxy对/api路径代理转发给真实的后端服务路径，再根据需求对要转发的url进行改写\n4.node中间件和nginx反向代理都是发送请求给代理服务器，静态页面和代理服务器是同源的，再通过代理服务器发请求给后端服务器 服务器和服务器之间没有同源限制\n5.H5新增的API postmessage 通过发送和接受API实现跨域通信")]),t._v(" "),a("h3",{attrs:{id:"_6-说一说bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-说一说bfc"}},[t._v("#")]),t._v(" 6.说一说BFC")]),t._v(" "),a("p",[t._v("BFC是块级格式化上下文  他的特性有\n1.BFC是一个块级元素 在垂直方向上按顺序排列\n2.BFC是一个独立的容器 内部的元素布局不会影响到外部的元素\n3.同属一个BFC的盒子 相邻的地方会产生外边距重叠 取一个最大的外边距\nBFC的触发条件\nfloat值不为none  overflow-hidden display:inline-block displayflex position：absolute fixed 等\nBFC的应用：\n清浮动 添加overflow-hidden解决父元素高度塌陷"),a("br"),t._v("\n避免外边距重叠   解决两个div 都设置了magrin 但是相邻部分只有一个margin\n阻止元素被覆盖的问题 给被元素覆盖的触发BFC")]),t._v(" "),a("h3",{attrs:{id:"_7-vuex每个属性是干嘛的-如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vuex每个属性是干嘛的-如何使用"}},[t._v("#")]),t._v(" 7.Vuex每个属性是干嘛的 如何使用")]),t._v(" "),a("p",[t._v("5个属性\nstate：用于存储数据 以对象的方式直接添加属性\nmutations：定义修改state中的数据的方法  通过store.commit调用 只支持同步\naction: 支持异步操作 action 提交的是 mutations  通过store.dispatch使用\ngetters: 类似于vue的计算属性computed 有缓存  听过store.getters.调用\nmodule：将store分为模块 每个模块都有单独的以上的属性\n如果项目对vuex需求较大 可以在引入的时候用map调用多个方法，然后在方法中用...事件运算符展开 可以减少代码量 提高效率")]),t._v(" "),a("h3",{attrs:{id:"_8-js有哪些判断变量的类型的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-js有哪些判断变量的类型的方式"}},[t._v("#")]),t._v(" 8.js有哪些判断变量的类型的方式")]),t._v(" "),a("p",[t._v("1.typeof   用于判断基本属性类型 判断引用数据类型 function会返回function 其他的都返回object\n2.constructor  根据构造器判断\n3.instanceof 用于检测数据类型 返回值是ture和false  instanceof 会遍历左边变量的原型链 检测是否在右边变量的prototype上 找到返回ture 没找到返回false\n4.Object.prototype.toString.call()方法  call()方法可以改变this的指向Object.prototype.toString()方法指向不同的数据类型上面，返回不同的结果")]),t._v(" "),a("h3",{attrs:{id:"_9-说一说样式的优先级规则是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-说一说样式的优先级规则是什么"}},[t._v("#")]),t._v(" 9.说一说样式的优先级规则是什么？")]),t._v(" "),a("p",[t._v("可以分为五类\n1.！important  优先级最高\n2.行内样式>内部样式>外部样式\n3.id>class>后代>子代>通配符\n4.继承样式\n5.浏览器自带的样式\n最好不要使用 ！important 容易造成混乱 写样式的时候优先考虑选择器的优先级")]),t._v(" "),a("h3",{attrs:{id:"_10-说一说js实现异步的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-说一说js实现异步的方法"}},[t._v("#")]),t._v(" 10.说一说JS实现异步的方法？")]),t._v(" "),a("p",[t._v("定时器 promise async await 回调函数")]),t._v(" "),a("h3",{attrs:{id:"_11-说一说vue2-0-双向绑定-响应式-的原理与缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-说一说vue2-0-双向绑定-响应式-的原理与缺陷"}},[t._v("#")]),t._v(" 11.说一说Vue2.0 双向绑定(响应式)的原理与缺陷？")]),t._v(" "),a("p",[t._v("vue双向绑定时候通过数据劫持结合发布者订阅者模式来实现的 其核心是Object.defineProperty方法设置get和set函数来进行数据劫持 ，然后触发watcher通知更新，wathcer是发布者它收集了很多状态相关的依赖以及订阅者触发这些订阅者进行调用 这样组件就会更新了 双向数据绑定实际上就是数据和视图同步 数据改变 视图发生变化 视图变化 数据也随之改变 其缺陷就是无法监听到新创建和删除的属性 无法监听数组的变化")]),t._v(" "),a("h3",{attrs:{id:"_12-数据去重有哪些方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-数据去重有哪些方法"}},[t._v("#")]),t._v(" 12.数据去重有哪些方法")]),t._v(" "),a("p",[t._v("1.可以使用 for循环 indexOf"),a("br"),t._v("\n2.可以使用for循环 对象属性\n3.最简洁的方式是ES6新增的 new Set方法 其本身的特性就是不会包含重复的数据  有个缺点是经过new Set后数据回变成set结构 可以用 array.from再将set结构变为数组")]),t._v(" "),a("h3",{attrs:{id:"_13-null-和-undefined-的区别-如何让一个属性变为null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-null-和-undefined-的区别-如何让一个属性变为null"}},[t._v("#")]),t._v(" 13.null 和 undefined 的区别  如何让一个属性变为null")]),t._v(" "),a("p",[t._v("null是定义了并且赋值为空会占用内存空间"),a("br"),t._v("\nundefined是未定义 如果函数没有返回值的话返回结果拿到就是undefined")]),t._v(" "),a("h3",{attrs:{id:"_14-如何清浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-如何清浮动"}},[t._v("#")]),t._v(" 14.如何清浮动")]),t._v(" "),a("p",[t._v("1.使用::after添加伪元素\n2.给父元素直接添加高度\n3.给父元素添加overflow:hidden触发BFC\n4.添加一个clear:both属性的空白div")]),t._v(" "),a("h3",{attrs:{id:"_15-说一下es6中的箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-说一下es6中的箭头函数"}},[t._v("#")]),t._v(" 15.说一下ES6中的箭头函数？")]),t._v(" "),a("p",[t._v("箭头函数是ES6新特性 普通函数的一个简便写法 没有this 不能作为构造函数 this指向是父级作用域的 没有arguments  没有prototype属性 也就是没有原型")]),t._v(" "),a("h3",{attrs:{id:"_16-说一说call-apply-bind的作用和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-说一说call-apply-bind的作用和区别"}},[t._v("#")]),t._v(" 16.说一说call apply bind的作用和区别？")]),t._v(" "),a("p",[t._v("这三个都是用来修改this指向的方法  三个的第一个参数都是需要指向的目标  call和bind的第二个参数是参数列表   apply第二个参数是参数组成的数组   call和apply可以直接调用 bind是返回一个函数 需要手动调用")]),t._v(" "),a("h3",{attrs:{id:"_17-说一说-html语义化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-说一说-html语义化"}},[t._v("#")]),t._v(" 17.说一说 html语义化")]),t._v(" "),a("p",[t._v("H5新增了许多语义化标签 header  footer main nav article 等等  具体作用是让代码具有可读性 避免使用无意义的标签 利于页面结构化")]),t._v(" "),a("h3",{attrs:{id:"_18-说一说this指向-普通函数、箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-说一说this指向-普通函数、箭头函数"}},[t._v("#")]),t._v(" 18.说一说this指向（普通函数、箭头函数）？")]),t._v(" "),a("p",[t._v("普通函数  谁调用它 this就指向谁  箭头函数中没有this  如果硬写this的话 那么指向的是父级作用域")]),t._v(" "),a("h3",{attrs:{id:"_19-说一说css尺寸设置的单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-说一说css尺寸设置的单位"}},[t._v("#")]),t._v(" 19.说一说CSS尺寸设置的单位")]),t._v(" "),a("p",[t._v("rem  em px vw vh %百分比\npx是像素单位     em是相对于父元素的字体大小像素   rem是相对于根标签的字体大小设置的像素\nvw 是当前视口宽度   vh是当前视口高度")]),t._v(" "),a("h3",{attrs:{id:"_20-说几个未知宽高元素水平垂直居中方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-说几个未知宽高元素水平垂直居中方法"}},[t._v("#")]),t._v(" 20.说几个未知宽高元素水平垂直居中方法")]),t._v(" "),a("ol",[a("li",[t._v("弹性布局 flex  "),a("code",[t._v("justify-content")]),t._v("center  "),a("code",[t._v("align-items")]),t._v("  center")]),t._v(" "),a("li",[t._v("网格布局 grid")]),t._v(" "),a("li",[t._v("绝对定位 position:absolute top50% left50%  然后translate(自身宽高-50%)")])]),t._v(" "),a("h3",{attrs:{id:"_21-说一说js变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-说一说js变量提升"}},[t._v("#")]),t._v(" 21.说一说JS变量提升？")]),t._v(" "),a("p",[t._v("var有变量声明提升  赋值不会被提升\n函数有变量提升 可以先调用再声明\nes6 新增的 let const没有变量提升")]),t._v(" "),a("h3",{attrs:{id:"_22-hashrouter-和-historyrouter的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-hashrouter-和-historyrouter的区别"}},[t._v("#")]),t._v(" 22.hashrouter 和 historyrouter的区别")]),t._v(" "),a("p",[t._v("history和hash都是利用浏览器的两种特性实现前端路由\nhistory是利用浏览历史记录栈的API实现，hash是监听location对象hash值变化事件来实现\nhistory的url没有'#'号，hash是有#的\nhistory需要后端配合，如果后端不配合刷新新页面会出现404，hash不需要。\nHashRouter的原理：通过"),a("code",[t._v("window.onhashchange")]),t._v("方法获取新URL中hash值，再做进一步处理\nHistoryRouter的原理：通过"),a("code",[t._v("history.pushState")]),t._v("使用它做页面跳转不会触发页面刷新，使用"),a("code",[t._v("window.onpopstate")]),t._v(" 监听浏览器的前进和后退，再做其他处理\n需要兼容低版本的浏览器时，建议使用hash模式。 需要添加任意类型数据到记录时，可以使用history模式。")]),t._v(" "),a("h3",{attrs:{id:"_23-说一说map和foreach的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-说一说map和foreach的区别"}},[t._v("#")]),t._v(" 23.说一说map和forEach的区别")]),t._v(" "),a("p",[t._v("这两个都可以遍历数组  map有返回值 forEach没有它的返回值是undefined  map映射会返回一个新的数组\nforEach 可以修改原数组\nmap性能比forEach更高效一些")]),t._v(" "),a("h3",{attrs:{id:"_24-说一说-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-说一说-事件循环"}},[t._v("#")]),t._v(" 24. 说一说 事件循环")]),t._v(" "),a("p",[t._v("JS是单线程的  也就是说他同一时间只能做一件事"),a("br"),t._v("\n它本身有问题会阻塞代码 然后为了防止阻塞代码 就有了 同步和异步的概念\n同步任务：立即放入js主线程中执行 也就是执行栈中执行  并且原地等待结果\n异步任务：定时器（SetTimeout Setinterval）  ajax  事件绑定  promise里的then catch"),a("br"),t._v("\n异步代码 ：他们都是耗时的"),a("br"),t._v("\n1.先放入宿主环境执行 不必原地等待结果  并不阻塞主线程继续执行\n2.等待时机成熟后推送到任务队列当中去  比如2秒定时器时间到了  还有触发了绑定的事件\n待执行栈中的同步任务执行完成之后 会首先查看是否有微任务")]),t._v(" "),a("h3",{attrs:{id:"_25-宏任务-微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25-宏任务-微任务"}},[t._v("#")]),t._v(" 25.宏任务 微任务")]),t._v(" "),a("p",[t._v("js中异步任务分为宏任务 微任务\n宏任务是在宿主环境中执行的   script标签本身就是一个大型宏任务  定时器 ajax请求"),a("br"),t._v("\n微任务是js引擎发起的  比如promise里的.then .catch  await之后的任务\npromise本身是一个同步任务"),a("br"),t._v("\n执行顺序  执行栈>微任务>宏任务")]),t._v(" "),a("h3",{attrs:{id:"_26-说一说vue3-0-实现数据双向绑定的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-说一说vue3-0-实现数据双向绑定的方法"}},[t._v("#")]),t._v(" 26.说一说Vue3.0 实现数据双向绑定的方法 ？")]),t._v(" "),a("p",[t._v("是通过Proxy劫持整个对象，返回新对象 相比Vue2.0中的Object.defineProperty，vue3能够动态监听添加的属性，可以监听数组的inedx值和length属性")]),t._v(" "),a("h3",{attrs:{id:"_27-说一说三栏布局的实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-说一说三栏布局的实现方案"}},[t._v("#")]),t._v(" 27.说一说三栏布局的实现方案")]),t._v(" "),a("p",[t._v("1.左右盒子固定宽度 一个左浮动一个右浮动 中间盒子设置外边距左右各自是左右两个盒子的宽度即可\n2.左右盒子固定宽度 一个左浮动一个右浮动 中间盒子宽度设置calc函数(100%-左右盒子宽度的和)\n3.一个盒子包裹3个盒子 flex布局 左右盒子宽度固定 中间盒子flex1")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("ol",{attrs:{start:"28"}},[a("li",[t._v("vue 的 keep-alive ？\n这是vue内置的一个组件 其特性是被它包裹的元素会保留状态 避免被重新渲染")])]),t._v(" "),a("h3",{attrs:{id:"_29-csrf攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29-csrf攻击是什么"}},[t._v("#")]),t._v(" 29.CSRF攻击是什么")]),t._v(" "),a("p",[t._v("CSRF被称为跨站请求伪造。 黑客诱导用户进入第三方网站。 避免方式：添加验证码、加入token验证")]),t._v(" "),a("h3",{attrs:{id:"_30-xss攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_30-xss攻击是什么"}},[t._v("#")]),t._v(" 30.XSS攻击是什么？")]),t._v(" "),a("p",[t._v("XSS指跨站脚本攻击，是攻击者通过向被攻击网站注入恶意代码")]),t._v(" "),a("h3",{attrs:{id:"_31-说一说defer和async区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_31-说一说defer和async区别"}},[t._v("#")]),t._v(" 31.说一说defer和async区别？")]),t._v(" "),a("p",[t._v("defer和async都属于异步加载\ndefer是延迟执行（推迟解释，当前html页面解析完成后执行）js，async是当前js文件加载完成后执行js")]),t._v(" "),a("h3",{attrs:{id:"_32-浏览器输入url到页面渲染完毕的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_32-浏览器输入url到页面渲染完毕的过程"}},[t._v("#")]),t._v(" 32.浏览器输入URL到页面渲染完毕的过程")]),t._v(" "),a("p",[t._v("1首先浏览器在输入URL之后，会先解析URL，判断是否合法\n如果合法的话会判断是否有缓存 有缓存就会直接返回页面 没有缓存就发送网络请求\n先将url地址通过DNS解析为ip地址\n然后建立TCP链接进行三次握手\n1次握手：客户端发SYN包给服务端请求建立链接\n2次握手：服务端发SYN包和ACK表示同意建立链接\n3次握手：客户端发ACK包表示成功建立链接\n握手完成之后浏览器会给服务器发送HTTP请求报文\n请求报文：请求行、请求头、空行、请求体组成\n服务器收到HTTP请求报文以后服务器会处理请求报文并且做出响应\n响应报文：状态行、响应头、空行和响应数据组成\n浏览器接受了服务器的相应以后 也就是接收到解析的HTML CSS JS等文件 有了这些文件页面就会渲染出来了")]),t._v(" "),a("h3",{attrs:{id:"_33-说一说computed和watch的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_33-说一说computed和watch的区别"}},[t._v("#")]),t._v(" 33.说一说computed和watch的区别？")]),t._v(" "),a("p",[t._v("computer是计算属性 是有缓存的 当他所依赖的值发生改变的时候才会重新计算 不然就用缓存好的值  必须使用return  只支持同步 一般用于多条数据影响一条的时候使用  比如购物车总金额计算\nwatch是监听 监听数据的变化 一般用于一条数据影响多条的时候使用 比如搜索功能 没有缓存 支持同步和异步")]),t._v(" "),a("h3",{attrs:{id:"_34-说一说-vue-中-nexttick-作用与原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_34-说一说-vue-中-nexttick-作用与原理"}},[t._v("#")]),t._v(" 34.说一说 Vue 中 $nextTick 作用与原理？")]),t._v(" "),a("p",[t._v("Vue在更新DOM时异步执行，在修改完数据以后，视图不会立刻更新，而是等同一事件循环中所有的数据更新之后再去更新视图。所以修改完数据，立即在方法中获取dom，获取的仍然是未修改的DOM。$nixtTick的作用是:将回调延迟到下次 DOM 更新循环之后执行，以便于我们在回调函数中获取到的是最新的DOM，$nextTick的原理本质上是返回一个Promise，进行异步执行  它比updated执行的还要晚")]),t._v(" "),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),a("p",[t._v("35.说一说new会发生什么？\n1.创建一个空的JS对象\n2.为新创建的对象添加属性"),a("code",[t._v("__proto__")]),t._v("，将该属性链接至构造函数的原型对象；\n3.将新对象作为this指向的上下文\n 4.判断是否有返回值，如果有则返回此对象，如果没有则返回this\nnew的后面的构造函数不能是箭头函数")]),t._v(" "),a("h4",{attrs:{id:"_36-说一下token-能放在cookie中吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_36-说一下token-能放在cookie中吗"}},[t._v("#")]),t._v(" 36.说一下token 能放在cookie中吗？")]),t._v(" "),a("p",[t._v("可以，但最好不要放cookie里，容易产生csrf问题")]),t._v(" "),a("h3",{attrs:{id:"_37-说一说组件通信的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_37-说一说组件通信的方式"}},[t._v("#")]),t._v(" 37.说一说组件通信的方式？")]),t._v(" "),a("p",[t._v("子传父  通过props属性\n父传子 通过$emit方法\n还有refs\n兄弟组件通信常用中央事件总线Bus\nvuex状态公共管理")]),t._v(" "),a("h3",{attrs:{id:"_38-说一说-v-if-和-v-show区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_38-说一说-v-if-和-v-show区别"}},[t._v("#")]),t._v(" 38.说一说 v-if 和 v-show区别?")]),t._v(" "),a("p",[t._v("v-if 是销毁和创建 v-show是显示和隐藏  都是通过 ture和false来判断的\nv-show隐藏的实际上是给标签添加了一个display:none的属性\nv-if是dom的添加和删除 性能消耗比较大")]),t._v(" "),a("h3",{attrs:{id:"_39-说一说伪数组和数组的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_39-说一说伪数组和数组的区别"}},[t._v("#")]),t._v(" 39.说一说伪数组和数组的区别？")]),t._v(" "),a("p",[t._v("都是可以遍历的 但是伪数组不能够使用数组的各类方法 比如push pop shift onshift\n伪数组的类型是object  可以用array.from()转换为数组")]),t._v(" "),a("h3",{attrs:{id:"_40-说一说如何实现可过期的localstorage数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40-说一说如何实现可过期的localstorage数据"}},[t._v("#")]),t._v(" 40.说一说如何实现可过期的localstorage数据？")]),t._v(" "),a("p",[t._v("惰性删除和定期删除  没有太深入了解")]),t._v(" "),a("h3",{attrs:{id:"_41-说一说axios的拦截器原理及应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_41-说一说axios的拦截器原理及应用"}},[t._v("#")]),t._v(" 41.说一说axios的拦截器原理及应用？")]),t._v(" "),a("p",[t._v("axios分为\n请求拦截器request   在项目中后端文档要求除了登录和注册之外 每次请求都在请求头Authorization中携带token值的时候使用过  还有每次请求的时候添加一个loading加载动画 成功之后清除\n响应拦截器response 在项目中使用过 token值过期之后 有个401的状态捕捉到写个判断 然后为401的话清除vuex中的数据 然后被动退回到登录页面")]),t._v(" "),a("h3",{attrs:{id:"_42-说一说创建ajax原理和过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_42-说一说创建ajax原理和过程"}},[t._v("#")]),t._v(" 42.说一说创建ajax原理和过程？")]),t._v(" "),a("p",[t._v("原理实际上就是通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用js来操作DOM而更新页面\n1.创建一个XMLHttpRequst异步调用对象\n2.创建一个新的"),a("code",[t._v("HTTP")]),t._v("请求,并指定该"),a("code",[t._v("HTTP")]),t._v("请求的方法、"),a("code",[t._v("URL")]),t._v("及验证信息.\n3.设置响应"),a("code",[t._v("HTTP")]),t._v("请求状态变化的函数.\n4.发送"),a("code",[t._v("HTTP")]),t._v("请求")]),t._v(" "),a("h3",{attrs:{id:"_43-说一下fetch-请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_43-说一下fetch-请求方式"}},[t._v("#")]),t._v(" 43.说一下fetch 请求方式？")]),t._v(" "),a("p",[t._v("fetch是一种HTTP数据请求的方式，是XMLHTTPRequest的一种替代方案。Fetch函数是原生JS，没有使用XMLHTTPRequest对象。fetch方法返回一个Promise解析Response来自Request显示状态的方法")]),t._v(" "),a("h3",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),a("p",[t._v("44.说一下有什么方法可以保持前后端实时通信？\n轮询： 轮询就是不断的去查，定时去查   相当于，我每隔一会去看看你在干嘛"),a("br"),t._v("\nsocks：TCP协议的长链接"),a("br"),t._v("\n长轮询：就是解决轮询的bug的")]),t._v(" "),a("h3",{attrs:{id:"_45-柯力化-偏应用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_45-柯力化-偏应用函数"}},[t._v("#")]),t._v(" 45.柯力化 偏应用函数")]),t._v(" "),a("p",[t._v("柯力化：把一个接受多个参数的函数变成一系列接受一个参数的内部函数  这样他们的值就能够保留  作用主要是用来参数复用 提前确认 延迟计算\n偏应用函数：一个函数有多个参数，然后返回新参数，返回的函数接收剩余参数完成函数的应用")]),t._v(" "),a("h3",{attrs:{id:"_46-防抖和节流的原理和应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_46-防抖和节流的原理和应用场景"}},[t._v("#")]),t._v(" 46.防抖和节流的原理和应用场景")]),t._v(" "),a("p",[t._v("防抖和节流都是用来减少函数执行的频率，以达到优化项目性能或者实现特定功能的效果\n防抖 ：用户触发事件过于频繁 只要最后一次事件操作\n应用场景：")]),t._v(" "),a("ol",[a("li",[t._v("浏览器视口大小改变")]),t._v(" "),a("li",[t._v("搜索框请求数据")]),t._v(" "),a("li",[t._v("在线文档自动保存")])]),t._v(" "),a("p",[t._v("节流：控制高频事件执行次数\n应用场景：")]),t._v(" "),a("ol",[a("li",[t._v("按钮提交事件")]),t._v(" "),a("li",[t._v("计算鼠标移动距离")]),t._v(" "),a("li",[t._v("页面滚动事件的触发")])]),t._v(" "),a("h3",{attrs:{id:"_47-get-和-post请求有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_47-get-和-post请求有什么区别"}},[t._v("#")]),t._v(" 47.GET 和 POST请求有什么区别")]),t._v(" "),a("p",[t._v("get请求一般是去取获取数据   "),a("strong",[t._v("其实也可以提交，但常见的是获取数据")]),t._v("\npost请求一般是去提交数据。\nget因为参数会放在url中，所以隐私性，安全性较差，请求的数据长度是有限制的，\n不同的浏览器和服务器不同，一般限制在 2~8K 之间，更加常见的是 1k 以内；\npost请求是没有的长度限制，请求数据是放在body中；\nget在浏览器回退是无害的，post会再次提交请求\nget请求可以被缓存，post请求不会被缓存。\nget请求会被保存在浏览器历史记录当中，post不会。")]),t._v(" "),a("h3",{attrs:{id:"_48-说一说vue-router-实现懒加载的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_48-说一说vue-router-实现懒加载的方法"}},[t._v("#")]),t._v(" 48.说一说vue-router 实现懒加载的方法？")]),t._v(" "),a("ol",[a("li",[t._v("ES6的import方法  component:() => import")]),t._v(" "),a("li",[t._v("VUE中的异步组件进行懒加载方式  component: resolve=>require")])]),t._v(" "),a("p",[t._v("vue-router 实现懒加载的作用：性能优化，不用到该路由，不加载该组件。")]),t._v(" "),a("h3",{attrs:{id:"_50-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_50-性能优化"}},[t._v("#")]),t._v(" 50.性能优化")]),t._v(" "),a("p",[t._v("前端性能优化分为两类，一类是文件加载更快，另一类是文件渲染更快。\n让传输的数据包更小 图片压缩和文件压缩\n减少网络请求的次数 雪碧图/精灵图 节流防抖\n减少渲染的次数 HTTP缓存、本地缓存、Vue的keep-alive\n避免无用渲染 ssr服务器端渲染、懒加载、对dom查询进行缓存、将dom操作合并  减少重排")]),t._v(" "),a("h3",{attrs:{id:"_51-重绘、回流的区别-如何避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_51-重绘、回流的区别-如何避免"}},[t._v("#")]),t._v(" 51.重绘、回流的区别，如何避免？")]),t._v(" "),a("p",[t._v("回流必定会发生重绘,重绘不一定会引发回流\n"),a("strong",[t._v("一、 重绘：")]),t._v("\n当影响DOM元素可见性的属性发生变化时，就会重新计算属性，浏览器会重新描绘相应的元素，这个过程叫重绘。\n"),a("strong",[t._v("二、回流 (重排)")]),t._v("\n当渲染树中的一部分或者全部因为元素的尺寸、布局、隐藏等改变而需要重新构建的时候，这时候就会发生回流。\n如何避免？\n避免设置多重内联样式\n避免频繁操作样式\n避免使用CSS表达式（例如：calc()）\n如果需要设置动画效果，最好将元素脱离正常的文档流\n避免使用table布局\ndisplay none")]),t._v(" "),a("h3",{attrs:{id:"-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")])]),t._v(" "),a("p",[t._v("52.事件委托\n因为冒泡机制，点击子元素的时候，也会同步触发父元素的相同事件，所以我们就可以把子元素的事件委托给父元素来做\ntarget这个属性是事件对象里面的属性 表示你点击的目标\n当你触发点击事件的时候，你点击在哪个元素上，target就是哪个元素")]),t._v(" "),a("h3",{attrs:{id:"_53-深拷贝和浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_53-深拷贝和浅拷贝"}},[t._v("#")]),t._v(" 53.深拷贝和浅拷贝")]),t._v(" "),a("p",[t._v("浅拷贝：自己创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象\n深拷贝：将一个对象从内存中完整地拷贝出来一份给目标对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离\n"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_44295310/article/details/121024431",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);