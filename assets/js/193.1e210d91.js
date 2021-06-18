(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{591:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第16天-返回到顶部的方法有哪些-把其中一个方法出来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第16天-返回到顶部的方法有哪些-把其中一个方法出来"}},[t._v("#")]),t._v(" 第16天 返回到顶部的方法有哪些？把其中一个方法出来")]),t._v(" "),a("h2",{attrs:{id:"方法总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法总结"}},[t._v("#")]),t._v(" 方法总结")]),t._v(" "),a("h3",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),a("p",[t._v("利用 "),a("code",[t._v("a")]),t._v(" 标签的锚点。在顶部放一个 "),a("code",[t._v("a")]),t._v(" 标签 "),a("code",[t._v('<a name="top">顶部</a>')]),t._v("，在需要回到顶部的位置放置一个 "),a("code",[t._v("a")]),t._v(" 标签，地址为 "),a("code",[t._v("top")]),t._v("。 "),a("code",[t._v('<a href="#top">回到顶部</a>')]),t._v("。要做成隐藏的锚点，可以把内部的内容去掉，"),a("code",[t._v("name")]),t._v(" 是必须的。")]),t._v(" "),a("h3",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),a("p",[t._v("利用 "),a("code",[t._v("#")]),t._v("，在 url 后增加 "),a("code",[t._v("#")]),t._v(" 不会让页面刷新，并且可以回到顶部。可以对 "),a("code",[t._v("location.href")]),t._v(" 进行设置 "),a("code",[t._v("location.href += '#'")]),t._v("。当这个方法执行多次即有多个 "),a("code",[t._v("#")]),t._v(" 时，页面不会有响应。（这种方式其实不好）")]),t._v(" "),a("h3",{attrs:{id:"方案三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),a("p",[t._v("利用 "),a("code",[t._v("javascript")]),t._v(" 设置 "),a("code",[t._v("scrollTop = 0")]),t._v("，一般设置在最外层，即 "),a("code",[t._v("document.documentElement.scrollTop = 0")]),t._v(" 就可以返回顶部。")]),t._v(" "),a("h3",{attrs:{id:"方案四"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案四"}},[t._v("#")]),t._v(" 方案四")]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("JavaScript")]),t._v("回到顶部"),a("code",[t._v("<s/a>")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript:scroll(0,0)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("JavaScript回到顶部<s/a>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"衍生内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#衍生内容"}},[t._v("#")]),t._v(" 衍生内容")]),t._v(" "),a("h3",{attrs:{id:"动画需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画需求"}},[t._v("#")]),t._v(" 动画需求")]),t._v(" "),a("p",[t._v("当回到顶部需要有滚动条的动画以及页面的执行动画")]),t._v(" "),a("h3",{attrs:{id:"解法-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-1"}},[t._v("#")]),t._v(" 解法 1")]),t._v(" "),a("p",[t._v("使用递归进行延时（js执行页面io操作均有异步延时效果）执行，每次执行部分距离则当执行完毕会产生有动画的错觉")]),t._v(" "),a("h3",{attrs:{id:"示例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[t._v("#")]),t._v(" 示例 1")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("funScroll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" speed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("funScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("funScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例 2")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"关于-document-documentelement-和-document-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-document-documentelement-和-document-body"}},[t._v("#")]),t._v(" 关于 document.documentElement 和 document.body")]),t._v(" "),a("h3",{attrs:{id:"document-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-body"}},[t._v("#")]),t._v(" document.body")]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("html")]),t._v(" "),a("code",[t._v("dom")]),t._v("中的"),a("code",[t._v("body")]),t._v("节点 即"),a("code",[t._v("<body>")])]),t._v(" "),a("h3",{attrs:{id:"document-documentelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-documentelement"}},[t._v("#")]),t._v(" document.documentElement")]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("html")]),t._v(" "),a("code",[t._v("dom")]),t._v("中的"),a("code",[t._v("root")]),t._v(" 节点 即"),a("code",[t._v("<html>")])]),t._v(" "),a("h3",{attrs:{id:"document-documentelement-与-document-body的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-documentelement-与-document-body的应用场景"}},[t._v("#")]),t._v(" document.documentElement 与 document.body的应用场景")]),t._v(" "),a("blockquote",[a("p",[t._v("获取 "),a("code",[t._v("scrollTop")]),t._v(" 方面的差异")])]),t._v(" "),a("div",{staticClass:"language-文案说明 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在chrome(版本 52.0.2743.116 m)下获取scrollTop只能通过document.body.scrollTop,而且DTD是否存在,不会影响 document.body.scrollTop的获取。\n\n通过console查看结果：\n\ndemo 1 with doctype : http://jsbin.com/cisacam \n\ndemo 2 without doctype: http://jsbin.com/kamexad/16\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-文案说明 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在firefox(47.0)及 IE(11.3)下获取scrollTop，DTD是否存,会影响document.body.scrollTop 与 document.documentElement.scrollTop的取值\n\n在firefox(47.0)\n\n页面存在DTD，使用document.documentElement.scrollTop获取滚动条距离；\n\n页面不存在，使用document.body.scrollTop 获取滚动条距离\n\ndemo 1 with doctype : http://jsbin.com/cisacam \n\ndemo 2 without doctype: http://jsbin.com/kamexad/16\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("div",{staticClass:"language-文案说明 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IE(11.3)\n\n页面存在DTD，使用document.documentEelement.scrollTop获取滚动条距离\n\n页面不存在DTD,使用document.documentElement.scrollTop 或 document.body.scrollTop都可以获取到滚动条距离\n\ndemo 1 with doctype : http://jsbin.com/cisacam \n\ndemo 2 without doctype: http://jsbin.com/kamexad/16\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"兼容解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容解决方案"}},[t._v("#")]),t._v(" 兼容解决方案：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);