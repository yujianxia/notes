(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{595:function(t,e,v){"use strict";v.r(e);var r=v(25),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"第19天-attribute-和-property-有什么不同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第19天-attribute-和-property-有什么不同"}},[t._v("#")]),t._v(' 第19天 "attribute"和"property"有什么不同？')]),t._v(" "),v("h2",{attrs:{id:"总结-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-1"}},[t._v("#")]),t._v(" 总结 1")]),t._v(" "),v("p",[t._v("在操作 DOM 时，我们经常会操作 "),v("code",[t._v("attribute")]),t._v(" 和 "),v("code",[t._v("property")]),t._v("。不过从两者的所属关系上来说： "),v("code",[t._v("property")]),t._v(" 属于 DOM Object，而 "),v("code",[t._v("atrribute")]),t._v(" 属于 HTML。")]),t._v(" "),v("p",[v("code",[t._v("property")]),t._v(" 通常比较容易获取，并且有固定的值（当然，类似 JavaScript 的对象，我们可以添加自定义的值，只是这些不会被 DOM 所认识）。比如 "),v("code",[t._v("el.id")]),t._v("、"),v("code",[t._v("el.value")]),t._v("、"),v("code",[t._v("el.style")]),t._v(" 都是 "),v("code",[t._v("property")]),t._v(" 而设置也只需要 "),v("code",[t._v("el.id=newId")]),t._v(" 即可。"),v("code",[t._v("attribute")]),t._v(" 的值不是固定的，我们可以自己为 DOM 添加需要的属性（以前常常用来存放数据或者标志位，在 HTML5 有了 "),v("code",[t._v("data-*")]),t._v(" 的属性后，一般就利用 "),v("code",[t._v("data-*")]),t._v(" 来存放数据了）。对于 "),v("code",[t._v("attribute")]),t._v(" 的设定和获取我们使用 "),v("code",[t._v("setAttribute")]),t._v(" 和 "),v("code",[t._v("getAttribute")]),t._v(" 两个方法。")]),t._v(" "),v("p",[t._v("在书写方面 "),v("code",[t._v("property")]),t._v(" 对于大小写敏感；而 "),v("code",[t._v("attribute")]),t._v(" 对于大小写不敏感。")]),t._v(" "),v("p",[t._v("总的来看 "),v("code",[t._v("property")]),t._v(" 的值更偏向于标准而 "),v("code",[t._v("attribute")]),t._v(" 的值更偏向于自定义和非标准。")]),t._v(" "),v("h2",{attrs:{id:"总结-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结 2")]),t._v(" "),v("h3",{attrs:{id:"property"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" property")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("是DOM中的属性，是JavaScript里的对象")])]),t._v(" "),v("li",[v("p",[t._v("可以读取标签自带属性，包括没有写出来的")])]),t._v(" "),v("li",[v("p",[t._v("不能读取"),v("code",[t._v("attribute")]),t._v("设置的属性")])]),t._v(" "),v("li",[v("p",[t._v("获取方式：读："),v("code",[t._v("element.property")]),t._v(";            如：p.className;")])]),t._v(" "),v("li",[v("p",[t._v("设置方式："),v("code",[t._v("element.property = 'xxx'")]),t._v(";        如：p.className = 'xiao';")])]),t._v(" "),v("li",[v("p",[t._v("是元素（对象）的属性")])])]),t._v(" "),v("h3",{attrs:{id:"attribute"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#attribute"}},[t._v("#")]),t._v(" attribute")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("是HTML标签的属性,即直接在html标签添加的都是attribute属性")])]),t._v(" "),v("li",[v("p",[t._v("不能读取property设置的属性")])]),t._v(" "),v("li",[v("p",[t._v("读取方式：element.getAttribute('属性名','属性值');  如：a.getAttribute('href');")])]),t._v(" "),v("li",[v("p",[t._v("设置方式：element.setAttribute('属性名','属性值');  如：a.getAttribute('href','xiaowan.jpg');")])]),t._v(" "),v("li",[v("p",[t._v("直接在html标签上添加的和使用setAttribute添加的情况一致")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);