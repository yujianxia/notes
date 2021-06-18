(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{733:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在"),a("a",{attrs:{href:"/process/reconciler"}},[t._v("流程概览一节")]),t._v("了解组件在"),a("code",[t._v("render阶段")]),t._v("会经历"),a("code",[t._v("beginWork")]),t._v("与"),a("code",[t._v("completeWork")]),t._v("。")]),t._v(" "),a("p",[t._v("上一节讲解了组件执行"),a("code",[t._v("beginWork")]),t._v("后会创建"),a("code",[t._v("子Fiber节点")]),t._v("，节点上可能存在"),a("code",[t._v("effectTag")]),t._v("。")]),t._v(" "),a("p",[t._v("这一节让看看"),a("code",[t._v("completeWork")]),t._v("会做什么工作。")]),t._v(" "),a("p",[t._v("你可以从"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L673",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("completeWork")]),t._v("方法定义。")]),t._v(" "),a("h2",{attrs:{id:"流程概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程概览"}},[t._v("#")]),t._v(" 流程概览")]),t._v(" "),a("p",[t._v("类似"),a("code",[t._v("beginWork")]),t._v("，"),a("code",[t._v("completeWork")]),t._v("也是针对不同"),a("code",[t._v("fiber.tag")]),t._v("调用不同的处理逻辑。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("completeWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  workInProgress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  renderLanes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Lanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" IndeterminateComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LazyComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SimpleMemoComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" FunctionComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ForwardRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Fragment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Profiler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ContextConsumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" MemoComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ClassComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostRoot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHostContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("p",[t._v("重点关注页面渲染所必须的"),a("code",[t._v("HostComponent")]),t._v("（即原生"),a("code",[t._v("DOM组件")]),t._v("对应的"),a("code",[t._v("Fiber节点")]),t._v("），其他类型"),a("code",[t._v("Fiber")]),t._v("的处理留在具体功能实现时讲解。")]),t._v(" "),a("h2",{attrs:{id:"处理hostcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理hostcomponent"}},[t._v("#")]),t._v(" 处理HostComponent")]),t._v(" "),a("p",[t._v("和"),a("code",[t._v("beginWork")]),t._v("一样，根据"),a("code",[t._v("current === null ?")]),t._v("判断是"),a("code",[t._v("mount")]),t._v("还是"),a("code",[t._v("update")]),t._v("。")]),t._v(" "),a("p",[t._v("同时针对"),a("code",[t._v("HostComponent")]),t._v("，判断"),a("code",[t._v("update")]),t._v("时还需要考虑"),a("code",[t._v("workInProgress.stateNode != null ?")]),t._v("（即该"),a("code",[t._v("Fiber节点")]),t._v("是否存在对应的"),a("code",[t._v("DOM节点")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("popHostContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootContainerInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRootHostContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update的情况")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount的情况")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"update时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[t._v("#")]),t._v(" update时")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("update")]),t._v("时，"),a("code",[t._v("Fiber节点")]),t._v("已经存在对应"),a("code",[t._v("DOM节点")]),t._v("，所以不需要生成"),a("code",[t._v("DOM节点")]),t._v("。需要做的主要是处理"),a("code",[t._v("props")]),t._v("，比如：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("onClick")]),t._v("、"),a("code",[t._v("onChange")]),t._v("等回调函数的注册")]),t._v(" "),a("li",[t._v("处理"),a("code",[t._v("style prop")])]),t._v(" "),a("li",[t._v("处理"),a("code",[t._v("DANGEROUSLY_SET_INNER_HTML prop")])]),t._v(" "),a("li",[t._v("处理"),a("code",[t._v("children prop")])])]),t._v(" "),a("p",[t._v("去掉一些当前不需要关注的功能（比如"),a("code",[t._v("ref")]),t._v("）。可以看到最主要的逻辑是调用"),a("code",[t._v("updateHostComponent")]),t._v("方法。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update的情况")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHostComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("你可以从"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L225",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("updateHostComponent")]),t._v("方法定义。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("updateHostComponent")]),t._v("内部，被处理完的"),a("code",[t._v("props")]),t._v("会被赋值给"),a("code",[t._v("workInProgress.updateQueue")]),t._v("，并最终会在"),a("code",[t._v("commit阶段")]),t._v("被渲染在页面上。")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updatePayload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中"),a("code",[t._v("updatePayload")]),t._v("为数组形式，他的偶数索引的值为变化的"),a("code",[t._v("prop key")]),t._v("，奇数索引的值为变化的"),a("code",[t._v("prop value")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("具体渲染过程见"),a("RouterLink",{attrs:{to:"/react/renderer/mutation.html#hostcomponent-mutation"}},[t._v("mutation阶段一节")])],1)]),t._v(" "),a("p",[t._v("details updatePayload属性 Demo")]),t._v(" "),a("p",[a("code",[t._v("updateHostComponent")]),t._v("方法内打印了"),a("code",[t._v("Fiber节点")]),t._v("对应的"),a("code",[t._v("type")]),t._v("与"),a("code",[t._v("updatePayload")]),t._v("。")]),t._v(" "),a("p",[t._v("你可以直观的感受"),a("code",[t._v("updatePayload")]),t._v("的数据结构")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/updatepayload-forked-0f5g4",target:"_blank",rel:"noopener noreferrer"}},[t._v("updatePayload 更新流程"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"mount时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[t._v("#")]),t._v(" mount时")]),t._v(" "),a("p",[t._v("同样，省略了不相关的逻辑。可以看到，"),a("code",[t._v("mount")]),t._v("时的主要逻辑包括三个：")]),t._v(" "),a("ul",[a("li",[t._v("为"),a("code",[t._v("Fiber节点")]),t._v("生成对应的"),a("code",[t._v("DOM节点")])]),t._v(" "),a("li",[t._v("将子孙"),a("code",[t._v("DOM节点")]),t._v("插入刚生成的"),a("code",[t._v("DOM节点")]),t._v("中")]),t._v(" "),a("li",[t._v("与"),a("code",[t._v("update")]),t._v("逻辑中的"),a("code",[t._v("updateHostComponent")]),t._v("类似的处理"),a("code",[t._v("props")]),t._v("的过程")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount的情况")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略服务端渲染相关逻辑")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentHostContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHostContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为fiber创建对应DOM节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    currentHostContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将子孙DOM节点插入刚生成的DOM节点中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM节点赋值给fiber.stateNode")]),t._v("\nworkInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与update逻辑中的updateHostComponent类似的处理props的过程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalizeInitialChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    currentHostContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("markUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("p",[t._v("还记得"),a("RouterLink",{attrs:{to:"/react/process/beginWork.html#effecttag"}},[t._v("上一节")]),t._v("讲到："),a("code",[t._v("mount")]),t._v("时只会在"),a("code",[t._v("rootFiber")]),t._v("存在"),a("code",[t._v("Placement effectTag")]),t._v("。那么"),a("code",[t._v("commit阶段")]),t._v("是如何通过一次插入"),a("code",[t._v("DOM")]),t._v("操作（对应一个"),a("code",[t._v("Placement effectTag")]),t._v("）将整棵"),a("code",[t._v("DOM树")]),t._v("插入页面的呢？")],1),t._v(" "),a("p",[t._v("原因就在于"),a("code",[t._v("completeWork")]),t._v("中的"),a("code",[t._v("appendAllChildren")]),t._v("方法。")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("completeWork")]),t._v("属于“归”阶段调用的函数，每次调用"),a("code",[t._v("appendAllChildren")]),t._v("时都会将已生成的子孙"),a("code",[t._v("DOM节点")]),t._v("插入当前生成的"),a("code",[t._v("DOM节点")]),t._v("下。那么当“归”到"),a("code",[t._v("rootFiber")]),t._v("时，已经有一个构建好的离屏"),a("code",[t._v("DOM树")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"effectlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#effectlist"}},[t._v("#")]),t._v(" effectList")]),t._v(" "),a("p",[t._v("至此"),a("code",[t._v("render阶段")]),t._v("的绝大部分工作就完成了。")]),t._v(" "),a("p",[t._v("还有一个问题：作为"),a("code",[t._v("DOM")]),t._v("操作的依据，"),a("code",[t._v("commit阶段")]),t._v("需要找到所有有"),a("code",[t._v("effectTag")]),t._v("的"),a("code",[t._v("Fiber节点")]),t._v("并依次执行"),a("code",[t._v("effectTag")]),t._v("对应操作。难道需要在"),a("code",[t._v("commit阶段")]),t._v("再遍历一次"),a("code",[t._v("Fiber树")]),t._v("寻找"),a("code",[t._v("effectTag !== null")]),t._v("的"),a("code",[t._v("Fiber节点")]),t._v("么？")]),t._v(" "),a("p",[t._v("这显然是很低效的。")]),t._v(" "),a("p",[t._v("为了解决这个问题，在"),a("code",[t._v("completeWork")]),t._v("的上层函数"),a("code",[t._v("completeUnitOfWork")]),t._v("中，每个执行完"),a("code",[t._v("completeWork")]),t._v("且存在"),a("code",[t._v("effectTag")]),t._v("的"),a("code",[t._v("Fiber节点")]),t._v("会被保存在一条被称为"),a("code",[t._v("effectList")]),t._v("的单向链表中。")]),t._v(" "),a("p",[a("code",[t._v("effectList")]),t._v("中第一个"),a("code",[t._v("Fiber节点")]),t._v("保存在"),a("code",[t._v("fiber.firstEffect")]),t._v("，最后一个元素保存在"),a("code",[t._v("fiber.lastEffect")]),t._v("。")]),t._v(" "),a("p",[t._v("类似"),a("code",[t._v("appendAllChildren")]),t._v("，在“归”阶段，所有有"),a("code",[t._v("effectTag")]),t._v("的"),a("code",[t._v("Fiber节点")]),t._v("都会被追加在"),a("code",[t._v("effectList")]),t._v("中，最终形成一条以"),a("code",[t._v("rootFiber.firstEffect")]),t._v("为起点的单向链表。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("                       nextEffect         nextEffect\nrootFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fiber\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这样，在"),a("code",[t._v("commit阶段")]),t._v("只需要遍历"),a("code",[t._v("effectList")]),t._v("就能执行所有"),a("code",[t._v("effect")]),t._v("了。")]),t._v(" "),a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1744",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到这段代码逻辑。")]),t._v(" "),a("p",[t._v("借用"),a("code",[t._v("React")]),t._v("团队成员"),a("strong",[t._v("Dan Abramov")]),t._v("的话："),a("code",[t._v("effectList")]),t._v("相较于"),a("code",[t._v("Fiber树")]),t._v("，就像圣诞树上挂的那一串彩灯。")]),t._v(" "),a("h2",{attrs:{id:"流程结尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程结尾"}},[t._v("#")]),t._v(" 流程结尾")]),t._v(" "),a("p",[t._v("至此，"),a("code",[t._v("render阶段")]),t._v("全部工作完成。在"),a("code",[t._v("performSyncWorkOnRoot")]),t._v("函数中"),a("code",[t._v("fiberRootNode")]),t._v("被传递给"),a("code",[t._v("commitRoot")]),t._v("方法，开启"),a("code",[t._v("commit阶段")]),t._v("工作流程。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("代码见"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1107",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("code",[t._v("completeWork")]),t._v("流程图")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"completeWork流程图",href:"/notes/assets/react/completeWork.png"}},[a("img",{attrs:{src:"/notes/assets/react/completeWork.png",alt:"completeWork流程图"}})])])])}),[],!1,null,null,null);s.default=n.exports}}]);