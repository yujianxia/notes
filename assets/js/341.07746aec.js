(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{701:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h1",{attrs:{id:"fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[t._v("#")]),t._v(" Fragment")]),t._v(" "),a("p",[t._v("为一个组件添加多个元素,可以讲你的子组件列表添加到一个分组中(<></>),并且不会再DOM增加额外节点")]),t._v(" "),a("h1",{attrs:{id:"dom-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-元素"}},[t._v("#")]),t._v(" DOM 元素")]),t._v(" "),a("p",[t._v("在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。例如，与 HTML 中的 "),a("code",[t._v("tabindex")]),t._v(" 属性对应的 React 的属性是 "),a("code",[t._v("tabIndex")]),t._v("。例外的情况是 "),a("code",[t._v("aria-*")]),t._v(" 以及 "),a("code",[t._v("data-*")]),t._v(" 属性，一律使用小写字母命名。比如, 你依然可以用 "),a("code",[t._v("aria-label")]),t._v(" 作为 "),a("code",[t._v("aria-label")]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"属性差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性差异"}},[t._v("#")]),t._v(" 属性差异")]),t._v(" "),a("p",[t._v("React 与 HTML 之间有很多属性存在差异：")]),t._v(" "),a("h2",{attrs:{id:"checked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checked"}},[t._v("#")]),t._v(" checked")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("<input>")]),t._v(" 组件的 type 类型为 "),a("code",[t._v("checkbox")]),t._v(" 或 "),a("code",[t._v("radio")]),t._v(" 时，组件支持 "),a("code",[t._v("checked")]),t._v(" 属性。你可以使用它来设置组件是否被选中。这对于构建受控组件（controlled components）很有帮助。而 "),a("code",[t._v("defaultChecked")]),t._v(" 则是非受控组件的属性，用于设置组件首次挂载时是否被选中。")]),t._v(" "),a("h2",{attrs:{id:"classname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classname"}},[t._v("#")]),t._v(" className")]),t._v(" "),a("p",[a("code",[t._v("className")]),t._v(" 属性用于指定 CSS 的 class，此特性适用于所有常规 DOM 节点和 SVG 元素，如 "),a("code",[t._v("<div>")]),t._v("，"),a("code",[t._v("<a>")]),t._v(" 及其它标签。")]),t._v(" "),a("h2",{attrs:{id:"dangerouslysetinnerhtml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslysetinnerhtml"}},[t._v("#")]),t._v(" dangerouslySetInnerHTML")]),t._v(" "),a("p",[a("code",[t._v("dangerouslySetInnerHTML")]),t._v(" 是 React 为浏览器 DOM 提供 "),a("code",[t._v("innerHTML")]),t._v(" 的替换方案。通常来讲，使用代码直接设置 HTML 存在风险，因为很容易无意中使用户暴露于跨站脚本（XSS）的攻击。因此，你可以直接在 React 中设置 HTML，但当你想设置 "),a("code",[t._v("dangerouslySetInnerHTML")]),t._v(" 时，需要向其传递包含 key 为 "),a("code",[t._v("__html")]),t._v(" 的对象，以此来警示你。例如：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMarkup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("__html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First &middot; Second'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dangerouslySetInnerHTML")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMarkup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"htmlfor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlfor"}},[t._v("#")]),t._v(" htmlFor")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("for")]),t._v(" 在 JavaScript 中是保留字，所以 React 元素中使用了 "),a("code",[t._v("htmlFor")]),t._v(" 来代替。")]),t._v(" "),a("h2",{attrs:{id:"onchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onchange"}},[t._v("#")]),t._v(" onChange")]),t._v(" "),a("p",[a("code",[t._v("onChange")]),t._v(" 事件与预期行为一致：每当表单字段变化时，该事件都会被触发。故意没有使用浏览器已有的默认行为，是因为 "),a("code",[t._v("onChange")]),t._v(" 在浏览器中的行为和名称不对应，并且 React 依靠了该事件实时处理用户输入。")]),t._v(" "),a("h2",{attrs:{id:"selected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selected"}},[t._v("#")]),t._v(" selected")]),t._v(" "),a("p",[t._v("如果要将 "),a("code",[t._v("<option>")]),t._v(" 标记为已选中状态，请在 "),a("code",[t._v("select")]),t._v(" 的 "),a("code",[t._v("value")]),t._v(" 中引用该选项的值。")]),t._v(" "),a("h2",{attrs:{id:"style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[t._v("#")]),t._v(" style")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("注意")])]),t._v(" "),a("p",[t._v("在文档中，部分例子为了方便，直接使用了 "),a("code",[t._v("style")]),t._v("，但是"),a("strong",[t._v("通常不推荐将 style 属性作为设置元素样式的主要方式")]),t._v("。在多数情况下，应使用 "),a("code",[t._v("className")]),t._v(" 属性来引用外部 CSS 样式表中定义的 class。style 在 React 应用中多用于在渲染过程中添加动态计算的样式。")])]),t._v(" "),a("p",[a("code",[t._v("style")]),t._v(" 接受一个采用小驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串。这与 DOM 中 "),a("code",[t._v("style")]),t._v(" 的 JavaScript 属性是一致的，同时会更高效的，且能预防跨站脚本（XSS）的安全漏洞。例如：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" divStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  backgroundImage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" imgUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HelloWorldComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("divStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Hello World!")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("blockquote",[a("p",[t._v("注意：样式不会自动补齐前缀。如需支持旧版浏览器，请手动补充对应的样式属性：")])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" divStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  WebkitTransition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// note the capital 'W' here")]),t._v("\n  msTransition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ms' is the only lowercase vendor prefix")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentWithTransition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("divStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("This should work cross-browser")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("Style 中的 key 采用小驼峰命名是为了与 JS 访问 DOM 节点的属性保持一致（例如："),a("code",[t._v("node.style.backgroundImage")]),t._v(" ）。浏览器引擎前缀都应以大写字母开头，除了 ms。因此，"),a("code",[t._v("WebkitTransition")]),t._v(" 首字母为 ”W”。")]),t._v(" "),a("p",[t._v("React 会自动添加 ”px” 后缀到内联样式为数字的属性后。如需使用 ”px” 以外的单位，请将此值设为数字与所需单位组成的字符串。例如：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Result style: '10px'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  Hello World!\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Result style: '10%'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10%'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  Hello World!\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("但并非所有样式属性都转换为像素字符串。有些样式属性是没有单位的(例如 "),a("code",[t._v("zoom")]),t._v("，"),a("code",[t._v("order")]),t._v("，"),a("code",[t._v("flex")]),t._v(")。")]),t._v(" "),a("h2",{attrs:{id:"suppresscontenteditablewarning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suppresscontenteditablewarning"}},[t._v("#")]),t._v(" suppressContentEditableWarning")]),t._v(" "),a("p",[t._v("通常，当拥有子节点的元素被标记为 "),a("code",[t._v("contentEditable")]),t._v(" 时，React 会发出一个警告，因为这不会生效。该属性将禁止此警告。尽量不要使用该属性，除非你要构建一个类似 Draft.js 的手动管理 "),a("code",[t._v("contentEditable")]),t._v(" 属性的库。")]),t._v(" "),a("h2",{attrs:{id:"suppresshydrationwarning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suppresshydrationwarning"}},[t._v("#")]),t._v(" suppressHydrationWarning")]),t._v(" "),a("p",[t._v("如果你使用 React 服务端渲染，通常会在当服务端与客户端渲染不同的内容时发出警告。但是，在一些极少数的情况下，很难甚至于不可能保证内容的一致性。例如，在服务端和客户端上，时间戳通常是不同的。")]),t._v(" "),a("p",[t._v("如果设置 "),a("code",[t._v("suppressHydrationWarning")]),t._v(" 为 "),a("code",[t._v("true")]),t._v("，React 将不会警告你属性与元素内容不一致。它只会对元素一级深度有效，并且打算作为应急方案。因此不要过度使用它。")]),t._v(" "),a("h2",{attrs:{id:"value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[t._v("#")]),t._v(" value")]),t._v(" "),a("p",[a("code",[t._v("<input>")]),t._v("、"),a("code",[t._v("<select>")]),t._v(" 和 "),a("code",[t._v("<textarea>")]),t._v(" 组件支持 "),a("code",[t._v("value")]),t._v(" 属性。你可以使用它为组件设置 value。这对于构建受控组件是非常有帮助。"),a("code",[t._v("defaultValue")]),t._v(" 属性对应的是非受控组件的属性，用于设置组件第一次挂载时的 value。")]),t._v(" "),a("h2",{attrs:{id:"all-supported-html-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-supported-html-attributes"}},[t._v("#")]),t._v(" All Supported HTML Attributes")]),t._v(" "),a("p",[t._v("React 为 DOM 提供了一套以 JavaScript 为中心的 API。由于 React 组件经常采用自定义或和 DOM 相关的 props 的关系，React 采用了"),a("code",[t._v("小驼峰命名")]),t._v("的方式，正如 DOM APIs 那样：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tabIndex")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Just like node.tabIndex DOM API")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Just like node.className DOM API")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Just like node.readOnly DOM API")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("所有的 SVG 属性也完全得到了支持：")])]),t._v(" "),a("blockquote",[a("p",[t._v("自定义属性，但要注意属性名全都为小写。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);