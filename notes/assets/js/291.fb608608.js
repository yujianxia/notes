(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{651:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("在上一节实现了一个极简的"),s("code",[e._v("useState")]),e._v("，了解了"),s("code",[e._v("Hooks")]),e._v("的运行原理。")]),e._v(" "),s("p",[e._v("本节讲解"),s("code",[e._v("Hooks")]),e._v("的数据结构，为后面介绍具体的"),s("code",[e._v("hook")]),e._v("打下基础。")]),e._v(" "),s("h2",{attrs:{id:"dispatcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher"}},[e._v("#")]),e._v(" dispatcher")]),e._v(" "),s("p",[e._v("在上一节的极简"),s("code",[e._v("useState")]),e._v("实现中，使用"),s("code",[e._v("isMount")]),e._v("变量区分"),s("code",[e._v("mount")]),e._v("与"),s("code",[e._v("update")]),e._v("。")]),e._v(" "),s("p",[e._v("在真实的"),s("code",[e._v("Hooks")]),e._v("中，组件"),s("code",[e._v("mount")]),e._v("时的"),s("code",[e._v("hook")]),e._v("与"),s("code",[e._v("update")]),e._v("时的"),s("code",[e._v("hook")]),e._v("来源于不同的对象，这类对象在源码中被称为"),s("code",[e._v("dispatcher")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// mount时的Dispatcher")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" HooksDispatcherOnMount"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Dispatcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  useCallback"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" readContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useImperativeHandle"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountImperativeHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useLayoutEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountLayoutEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useMemo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountMemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useReducer"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountReducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mountState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...省略")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// update时的Dispatcher")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" HooksDispatcherOnUpdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Dispatcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  useCallback"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" readContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useImperativeHandle"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateImperativeHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useLayoutEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateLayoutEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useMemo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateMemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useReducer"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateReducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" updateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...省略")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br")])]),s("p",[e._v("可见，"),s("code",[e._v("mount")]),e._v("时调用的"),s("code",[e._v("hook")]),e._v("和"),s("code",[e._v("update")]),e._v("时调用的"),s("code",[e._v("hook")]),e._v("其实是两个不同的函数。")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("FunctionComponent")]),e._v(" "),s("code",[e._v("render")]),e._v("前，会根据"),s("code",[e._v("FunctionComponent")]),e._v("对应"),s("code",[e._v("fiber")]),e._v("的以下条件区分"),s("code",[e._v("mount")]),e._v("与"),s("code",[e._v("update")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedState "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("并将不同情况对应的"),s("code",[e._v("dispatcher")]),e._v("赋值给全局变量"),s("code",[e._v("ReactCurrentDispatcher")]),e._v("的"),s("code",[e._v("current")]),e._v("属性。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("ReactCurrentDispatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n      current "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedState "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" HooksDispatcherOnMount\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" HooksDispatcherOnUpdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),e._v(" "),s("blockquote",[s("p",[e._v("你可以在"),s("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L409",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到这行代码")])]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("FunctionComponent")]),e._v(" "),s("code",[e._v("render")]),e._v("时，会从"),s("code",[e._v("ReactCurrentDispatcher.current")]),e._v("（即当前"),s("code",[e._v("dispatcher")]),e._v("）中寻找需要的"),s("code",[e._v("hook")]),e._v("。")]),e._v(" "),s("p",[e._v("换言之，不同的调用栈上下文为"),s("code",[e._v("ReactCurrentDispatcher.current")]),e._v("赋值不同的"),s("code",[e._v("dispatcher")]),e._v("，则"),s("code",[e._v("FunctionComponent")]),e._v(" "),s("code",[e._v("render")]),e._v("时调用的"),s("code",[e._v("hook")]),e._v("也是不同的函数。")]),e._v(" "),s("blockquote",[s("p",[e._v("除了这两个"),s("code",[e._v("dispatcher")]),e._v("，你可以在"),s("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1775",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到其他"),s("code",[e._v("dispatcher")]),e._v("定义")])]),e._v(" "),s("h2",{attrs:{id:"一个dispatcher使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个dispatcher使用场景"}},[e._v("#")]),e._v(" 一个dispatcher使用场景")]),e._v(" "),s("p",[e._v("当错误的书写了嵌套形式的"),s("code",[e._v("hook")]),e._v("，如：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("此时"),s("code",[e._v("ReactCurrentDispatcher.current")]),e._v("已经指向"),s("code",[e._v("ContextOnlyDispatcher")]),e._v("，所以调用"),s("code",[e._v("useState")]),e._v("实际会调用"),s("code",[e._v("throwInvalidHookError")]),e._v("，直接抛出异常。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" ContextOnlyDispatcher"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Dispatcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  useCallback"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" throwInvalidHookError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" throwInvalidHookError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" throwInvalidHookError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useImperativeHandle"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" throwInvalidHookError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  useLayoutEffect"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" throwInvalidHookError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...省略")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("blockquote",[s("p",[e._v("你可以在"),s("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L458",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到这段逻辑")])]),e._v(" "),s("h2",{attrs:{id:"hook的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook的数据结构"}},[e._v("#")]),e._v(" Hook的数据结构")]),e._v(" "),s("p",[e._v("接下来学习"),s("code",[e._v("hook")]),e._v("的数据结构。")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" hook"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Hook "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  memoizedState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  baseState"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  baseQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  queue"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  next"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("blockquote",[s("p",[e._v("你可以在"),s("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L546",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到创建"),s("code",[e._v("hook")]),e._v("的逻辑")])]),e._v(" "),s("p",[e._v("其中除"),s("code",[e._v("memoizedState")]),e._v("以外字段的意义与上一章介绍的"),s("RouterLink",{attrs:{to:"/react/state/update.html#updatequeue"}},[e._v("updateQueue")]),e._v("类似。")],1),e._v(" "),s("h2",{attrs:{id:"memoizedstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memoizedstate"}},[e._v("#")]),e._v(" memoizedState")]),e._v(" "),s("p",[e._v("warning 注意\n"),s("code",[e._v("hook")]),e._v("与"),s("code",[e._v("FunctionComponent fiber")]),e._v("都存在"),s("code",[e._v("memoizedState")]),e._v("属性，不要混淆他们的概念。")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("fiber.memoizedState")]),e._v("："),s("code",[e._v("FunctionComponent")]),e._v("对应"),s("code",[e._v("fiber")]),e._v("保存的"),s("code",[e._v("Hooks")]),e._v("链表。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("hook.memoizedState")]),e._v("："),s("code",[e._v("Hooks")]),e._v("链表中保存的单一"),s("code",[e._v("hook")]),e._v("对应的数据。")])])]),e._v(" "),s("p",[e._v("不同类型"),s("code",[e._v("hook")]),e._v("的"),s("code",[e._v("memoizedState")]),e._v("保存不同类型数据，具体如下：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("useState：对于"),s("code",[e._v("const [state, updateState] = useState(initialState)")]),e._v("，"),s("code",[e._v("memoizedState")]),e._v("保存"),s("code",[e._v("state")]),e._v("的值")])]),e._v(" "),s("li",[s("p",[e._v("useReducer：对于"),s("code",[e._v("const [state, dispatch] = useReducer(reducer, {});")]),e._v("，"),s("code",[e._v("memoizedState")]),e._v("保存"),s("code",[e._v("state")]),e._v("的值")])]),e._v(" "),s("li",[s("p",[e._v("useEffect："),s("code",[e._v("memoizedState")]),e._v("保存包含"),s("code",[e._v("useEffect回调函数")]),e._v("、"),s("code",[e._v("依赖项")]),e._v("等的链表数据结构"),s("code",[e._v("effect")]),e._v("，你可以在"),s("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1181",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("看到"),s("code",[e._v("effect")]),e._v("的创建过程。"),s("code",[e._v("effect")]),e._v("链表同时会保存在"),s("code",[e._v("fiber.updateQueue")]),e._v("中")])]),e._v(" "),s("li",[s("p",[e._v("useRef：对于"),s("code",[e._v("useRef(1)")]),e._v("，"),s("code",[e._v("memoizedState")]),e._v("保存"),s("code",[e._v("{current: 1}")])])]),e._v(" "),s("li",[s("p",[e._v("useMemo：对于"),s("code",[e._v("useMemo(callback, [depA])")]),e._v("，"),s("code",[e._v("memoizedState")]),e._v("保存"),s("code",[e._v("[callback(), depA]")])])]),e._v(" "),s("li",[s("p",[e._v("useCallback：对于"),s("code",[e._v("useCallback(callback, [depA])")]),e._v("，"),s("code",[e._v("memoizedState")]),e._v("保存"),s("code",[e._v("[callback, depA]")]),e._v("。与"),s("code",[e._v("useMemo")]),e._v("的区别是，"),s("code",[e._v("useCallback")]),e._v("保存的是"),s("code",[e._v("callback")]),e._v("函数本身，而"),s("code",[e._v("useMemo")]),e._v("保存的是"),s("code",[e._v("callback")]),e._v("函数的执行结果")])])]),e._v(" "),s("p",[e._v("有些"),s("code",[e._v("hook")]),e._v("是没有"),s("code",[e._v("memoizedState")]),e._v("的，比如：")]),e._v(" "),s("ul",[s("li",[e._v("useContext")])])])}),[],!1,null,null,null);t.default=n.exports}}]);