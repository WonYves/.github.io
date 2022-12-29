(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{296:function(a,e,r){"use strict";r.r(e);var t=r(13),_=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("面试题\n"),e("a",{attrs:{name:"1d4371f2"}})]),a._v(" "),e("h3",{attrs:{id:"_1、什么是webpack-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是webpack-必会"}},[a._v("#")]),a._v(" 1、什么是webpack（必会）")]),a._v(" "),e("ol",[e("li",[a._v("webpack是一个javascript的静态模块打包工具")]),a._v(" "),e("li",[a._v("webpack里一切文件皆模块，通过loader转换文件，通过plugin注入钩子")]),a._v(" "),e("li",[a._v("最后输出由多个模块组合成的文件，webpack专注构建模块化项目\n"),e("a",{attrs:{name:"2ea11c5b"}})])]),a._v(" "),e("h3",{attrs:{id:"_2、webpack的优点是什么-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、webpack的优点是什么-必会"}},[a._v("#")]),a._v(" 2、webpack的优点是什么？（必会）")]),a._v(" "),e("ol",[e("li",[a._v("专注于处理模块化的项目，能做到开箱即用，一步到位")]),a._v(" "),e("li",[a._v("通过plugin扩展，完整好用又不失灵活")]),a._v(" "),e("li",[a._v("通过loaders扩展, 可以让webpack把所有类型的文件都解析打包")]),a._v(" "),e("li",[a._v("区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展\n"),e("a",{attrs:{name:"35ee0bf8"}})])]),a._v(" "),e("h3",{attrs:{id:"_3、webpack的构建流程是什么-从读取配置到输出文件这个过程尽量说全-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、webpack的构建流程是什么-从读取配置到输出文件这个过程尽量说全-必会"}},[a._v("#")]),a._v(" 3、webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全（必会）")]),a._v(" "),e("p",[a._v("webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),a._v(" "),e("ol",[e("li",[a._v("初始化参数：从配置文件读取与合并参数，得出最终的参数")]),a._v(" "),e("li",[a._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，开始执行编译")]),a._v(" "),e("li",[a._v("确定入口：根据配置中的 entry 找出所有的入口文件")]),a._v(" "),e("li",[a._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),a._v(" "),e("li",[a._v("完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),a._v(" "),e("li",[a._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),a._v(" "),e("li",[a._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),a._v(" "),e("p",[a._v("在以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 webpack 提供的 API 改变 webpack 的运行结果\n"),e("a",{attrs:{name:"035d014a"}})]),a._v(" "),e("h3",{attrs:{id:"_4、说一下-webpack-的热更新原理-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、说一下-webpack-的热更新原理-必会"}},[a._v("#")]),a._v(" 4、说一下 webpack 的热更新原理(必会)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。<br />    \tHMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS(webpack-dev-server) 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。<br />    后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。\n")])])]),e("p",[e("a",{attrs:{name:"c5232c5c"}})]),a._v(" "),e("h3",{attrs:{id:"_5、webpack与grunt、gulp的不同-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、webpack与grunt、gulp的不同-必会"}},[a._v("#")]),a._v(" 5、webpack与grunt、gulp的不同？（必会）")]),a._v(" "),e("p",[e("strong",[a._v("1)")]),a._v(" "),e("strong",[a._v("三者之间的区别")]),e("br"),a._v("       三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。"),e("br"),a._v("       grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。"),e("br"),a._v("       webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。"),e("br"),a._v(" "),e("strong",[a._v("2)")]),a._v(" "),e("strong",[a._v("从构建思路来说")]),e("br"),a._v("       gulp和grunt需要开发者将整个前端构建过程拆分成多个"),e("code",[a._v("Task")]),a._v("，并合理控制所有"),e("code",[a._v("Task")]),a._v("的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工"),e("br"),a._v(" "),e("strong",[a._v("3)")]),a._v(" "),e("strong",[a._v("对于知识背景来说")]),e("br"),a._v("       gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路\n"),e("a",{attrs:{name:"b0741900"}})]),a._v(" "),e("h3",{attrs:{id:"_6、有哪些常见loader-他们是解决什么问题的-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、有哪些常见loader-他们是解决什么问题的-必会"}},[a._v("#")]),a._v(" 6、有哪些常见Loader？他们是解决什么问题的？（必会）")]),a._v(" "),e("p",[a._v("1、  file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件"),e("br"),a._v("2、  url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去"),e("br"),a._v("3、  source-map-loader：加载额外的 Source Map 文件，以方便断点调试"),e("br"),a._v("4、  image-loader：加载并且压缩图片文件"),e("br"),a._v("5、  babel-loader：把 ES6 转换成 ES5"),e("br"),a._v("6、  css-loader：加载 CSS，支持模块化、压缩、文件导入等特性"),e("br"),a._v("7、  style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。"),e("br"),a._v("8、  eslint-loader：通过 ESLint 检查 JavaScript 代码\n"),e("a",{attrs:{name:"d3648ab0"}})]),a._v(" "),e("h3",{attrs:{id:"_7、loader和plugin的不同-必会"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、loader和plugin的不同-必会"}},[a._v("#")]),a._v(" 7、Loader和Plugin的不同？（必会）")]),a._v(" "),e("p",[e("strong",[a._v("1)")]),a._v(" "),e("strong",[a._v("不同的作用")]),e("br"),a._v('       loader直译为"加载器"。webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。 所以loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。'),e("br"),a._v('    Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。'),e("br"),e("strong",[a._v("2)")]),a._v(" "),e("strong",[a._v("不同的用法")]),e("br"),a._v("    Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）"),e("br"),a._v("    Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。")])])}),[],!1,null,null,null);e.default=_.exports}}]);