(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{787:function(s,t,a){"use strict";a.r(t);var e=a(25),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"export-default-被认为是有害的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-default-被认为是有害的"}},[s._v("#")]),s._v(" "),a("code",[s._v("export default")]),s._v(" 被认为是有害的")]),s._v(" "),a("p",[s._v("假如你有一个包含以下内容的 "),a("code",[s._v("foo.ts")]),s._v(" 文件：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("你可能会使用 ES6 语法导入它（在 "),a("code",[s._v("bar.ts")]),s._v(" 里）：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这存在一些可维护性的问题：")]),s._v(" "),a("ul",[a("li",[s._v("如果你在 "),a("code",[s._v("foo.ts")]),s._v(" 里重构 "),a("code",[s._v("Foo")]),s._v("，在 "),a("code",[s._v("bar.ts")]),s._v(" 文件中，它将不会被重新命名；")]),s._v(" "),a("li",[s._v("如果你最终需要从 "),a("code",[s._v("foo.ts")]),s._v(" 文件中导出更多有用的信息（在你的很多文件中都存在这种情景），那么你必须兼顾导入语法。")])]),s._v(" "),a("p",[s._v("由于这些原因，我推荐在导入时使用简单的 "),a("code",[s._v("export")]),s._v(" 与解构的形式，如 "),a("code",[s._v("foo.ts")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接着：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面，我将会介绍更多的原因。")]),s._v(" "),a("h2",{attrs:{id:"可发现性差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可发现性差"}},[s._v("#")]),s._v(" 可发现性差")]),s._v(" "),a("p",[s._v("默认导出的可发现性非常差，你不能智能的辨别一个模块它是否有默认导出。")]),s._v(" "),a("p",[s._v("在使用默认导出时，你什么也没有得到（可能它有默认导出，可能它没有）。")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* here */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("没有默认导出，你可以用以下方式获取智能提示：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* here */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"自动完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动完成"}},[s._v("#")]),s._v(" 自动完成")]),s._v(" "),a("p",[s._v("不管你是否了解导出，你都可以在 "),a("code",[s._v("import { /* here */ } from './foo'")]),s._v(" 的 "),a("code",[s._v("here")]),s._v(" 位置，来了解导出模块的信息。")]),s._v(" "),a("h2",{attrs:{id:"commonjs-互用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-互用"}},[s._v("#")]),s._v(" CommonJS 互用")]),s._v(" "),a("p",[s._v("对于必须使用 "),a("code",[s._v("const { default } = require('module/foo')")]),s._v(" 而不是 "),a("code",[s._v("const { Foo } = require('module/foo')")]),s._v(" 的 CommonJS 的用户来说，这会是一个糟糕的体验。当你导入一个模块时，你很可能想重命名 "),a("code",[s._v("default")]),s._v(" 作为导入的名字。")]),s._v(" "),a("h2",{attrs:{id:"防止拼写错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止拼写错误"}},[s._v("#")]),s._v(" 防止拼写错误")]),s._v(" "),a("p",[s._v("当你在开发时使用 "),a("code",[s._v("import Foo from './foo'")]),s._v(" 时，并不会得到有关于拼写的任何错误，其他人可能会这么写 "),a("code",[s._v("import foo from './foo'")]),s._v("；")]),s._v(" "),a("h2",{attrs:{id:"再次导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再次导出"}},[s._v("#")]),s._v(" 再次导出")]),s._v(" "),a("p",[s._v("再次导出是没必要的，但是在 "),a("code",[s._v("npm")]),s._v(" 包的根文件 "),a("code",[s._v("index")]),s._v(" 却是很常见。如："),a("code",[s._v("import Foo from './foo'；export { Foo }")]),s._v("（默认导出）VS "),a("code",[s._v("export * from './foo'")]),s._v(" （命名导出）。")]),s._v(" "),a("h2",{attrs:{id:"动态导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态导入"}},[s._v("#")]),s._v(" 动态导入")]),s._v(" "),a("p",[s._v("在动态的 "),a("code",[s._v("import")]),s._v(" 中，默认导出会以 "),a("code",[s._v("default")]),s._v(" 的名字暴露自己，如：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HighChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://code.highcharts.com/js/es-modules/masters/highcharts.src.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nHighChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Notice `.default`")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);