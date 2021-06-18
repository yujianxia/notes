(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{496:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("之前梳理移动端知识点的时候，总结了一些常用的meta，原文地址：https://blog.csdn.net/u013778905/article/details/78077149")]),e._v(" "),a("p",[e._v("以下是回答：")]),e._v(" "),a("h2",{attrs:{id:"什么是meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是meta"}},[e._v("#")]),e._v(" 什么是meta")]),e._v(" "),a("p",[e._v("Meta标签是HTML语言head区的一个辅助性标签，它位于HTML文档头部的head标记和title标记之间，它提供用户不可见的信息。")]),e._v(" "),a("p",[e._v("Meta ： 即 **元数据（Metadata）**是数据的基本信息。")]),e._v(" "),a("p",[e._v("元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。")]),e._v(" "),a("p",[e._v("用的大白话来说，"),a("strong",[e._v("它本身是一个没什么用的标签，但是一旦在它内部通过其他属性设置了某些效果，它就起作用了，所以称之为“ 元数据 ”。")])]),e._v(" "),a("p",[e._v("它内部可填写的属性如下：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("值")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("charset (HTML5)")]),e._v(" "),a("td",[e._v("character_set")]),e._v(" "),a("td",[e._v("定义文档的字符编码。")])]),e._v(" "),a("tr",[a("td",[e._v("content")]),e._v(" "),a("td",[e._v("text")]),e._v(" "),a("td",[e._v("定义与 http-equiv 或 name 属性相关的元信息。")])]),e._v(" "),a("tr",[a("td",[e._v("http-equiv")]),e._v(" "),a("td",[e._v("content-type、default-style、refresh")]),e._v(" "),a("td",[e._v("把 content 属性关联到 HTTP 头部。")])]),e._v(" "),a("tr",[a("td",[e._v("name")]),e._v(" "),a("td",[e._v("application-name、author、description、generator、keywords")]),e._v(" "),a("td",[e._v("把 content 属性关联到一个名称。")])]),e._v(" "),a("tr",[a("td",[e._v("scheme")]),e._v(" "),a("td",[e._v("format/URI")]),e._v(" "),a("td",[e._v("HTML5不支持。 定义用于翻译 content 属性值的格式。")])])])]),e._v(" "),a("h1",{attrs:{id:"meta元素内容含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta元素内容含义"}},[e._v("#")]),e._v(" meta元素内容含义")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("打开VSCode，输入"),a("code",[e._v("html:5")]),e._v("，按下"),a("code",[e._v("tab")]),e._v("，一个基本的"),a("code",[e._v("html")]),e._v("结构出来了，却从未注意过里面某些元素的含义。今天就来总结总结这些重要却不起眼的元素标签"),a("code",[e._v("meta")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"head内各种meta含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head内各种meta含义"}},[e._v("#")]),e._v(" head内各种meta含义")]),e._v(" "),a("p",[e._v("首先meta元素有什么作用呢？看英文版"),a("a",{attrs:{href:"https://www.w3schools.com/tags/tag_meta.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3schools"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The **** tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.")]),e._v(" "),a("p",[e._v("元素标签是提供有关HTML文档的元数据，元数据不会显示在页面上，但是能够被机器识别。")]),e._v(" "),a("p",[e._v("总而言之, "),a("code",[e._v("meta")]),e._v("标签是用来让机器识别的，同时它对SEO起着重要的作用。")]),e._v(" "),a("h3",{attrs:{id:"charset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charset"}},[e._v("#")]),e._v(" charset")]),e._v(" "),a("p",[e._v("指定了"),a("code",[e._v("html")]),e._v("文档的编码格式，常用的是"),a("code",[e._v("utf-8")]),e._v("(Unicode的字符编码)，还有"),a("code",[e._v("ISO-8859-1")]),e._v("(拉丁字母的字符编码)。当然还有其他的，但是一般不常用也就不介绍了")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta charset="utf-8">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"name-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-content"}},[e._v("#")]),e._v(" name & content")]),e._v(" "),a("p",[e._v("指定元数据的名称(这部分对SEO非常有用)")]),e._v(" "),a("h4",{attrs:{id:"author-定义了页面的作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author-定义了页面的作者"}},[e._v("#")]),e._v(" "),a("code",[e._v("author")]),e._v("——定义了页面的作者")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="author" content="Tony">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"keywords-为搜索引擎提供关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords-为搜索引擎提供关键字"}},[e._v("#")]),e._v(" "),a("code",[e._v("keywords")]),e._v("——为搜索引擎提供关键字")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="keywords" content="HTML, CSS, JavaScript">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"description-对网页整体的描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-对网页整体的描述"}},[e._v("#")]),e._v(" "),a("code",[e._v("description")]),e._v("——对网页整体的描述")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="description" content="My tutorials on HTML, CSS and JavaScript">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"viewport-对页面视图相关进行定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport-对页面视图相关进行定义"}},[e._v("#")]),e._v(" "),a("code",[e._v("viewport")]),e._v("——对页面视图相关进行定义")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("width=device-width")]),e._v("——将页面宽度设置为跟随屏幕宽度变化而变化")]),e._v(" "),a("li",[a("code",[e._v("initial-scale=1.0")]),e._v("——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)")]),e._v(" "),a("li",[a("code",[e._v("maximum-scale=1.0")]),e._v("——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于"),a("code",[e._v("minimum-scale")])]),e._v(" "),a("li",[a("code",[e._v("minimum-scale=1.0")]),e._v("——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于"),a("code",[e._v("maximum-scale")])]),e._v(" "),a("li",[a("code",[e._v("user-scalable=no")]),e._v("——是否允许用户手动缩放(yes或者no)")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"generator-包含生成页面软件的标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator-包含生成页面软件的标识符"}},[e._v("#")]),e._v(" "),a("code",[e._v("generator")]),e._v("——包含生成页面软件的标识符")]),e._v(" "),a("p",[e._v("which contains the identifier of the software that generated the page.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="generator" content="Hexo 3.8.0">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"theme-color-定义主题颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-color-定义主题颜色"}},[e._v("#")]),e._v(" "),a("code",[e._v("theme-color")]),e._v("——定义主题颜色")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="theme-color" content="#222">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"http-equiv-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-equiv-content"}},[e._v("#")]),e._v(" http-equiv & content")]),e._v(" "),a("p",[e._v("Provides an HTTP header for the information/value of the content attribute")]),e._v(" "),a("h4",{attrs:{id:"refresh-每30s刷新一次文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-每30s刷新一次文档"}},[e._v("#")]),e._v(" "),a("code",[e._v("refresh")]),e._v("——每30s刷新一次文档")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta http-equiv="refresh" content="30">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"x-ua-compatible-告知浏览器以何种版本渲染界面。下面的例子有限使用ie最新版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-ua-compatible-告知浏览器以何种版本渲染界面。下面的例子有限使用ie最新版本"}},[e._v("#")]),e._v(" "),a("code",[e._v("X-UA-Compatible")]),e._v("——告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta http-equiv="X-UA-Compatible" content="ie=edge">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("关于是否有必要使用这一条在"),a("a",{attrs:{href:"https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do",target:"_blank",rel:"noopener noreferrer"}},[e._v("stack overflow"),a("OutboundLink")],1),e._v("尚且有争议。个人认为如果不想兼容低版本的IE，可以直接忽略这一条。")]),e._v(" "),a("h4",{attrs:{id:"cache-control-请求和响应遵循的缓存机制-可以声明缓存的内容-修改过期时间-可多次声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-请求和响应遵循的缓存机制-可以声明缓存的内容-修改过期时间-可多次声明"}},[e._v("#")]),e._v(" "),a("code",[e._v("Cache-Control")]),e._v("——请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("no-transform")]),e._v("——不得对资源进行转换或转变。")]),e._v(" "),a("li",[a("code",[e._v("no-siteapp")]),e._v("——禁止百度进行转码")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta http-equiv="Cache-Control" content="no-transform">\n<meta http-equiv="Cache-Control" content="no-siteapp">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("为什么会介绍这两个呢？因为"),a("a",{attrs:{href:"https://zjgyb.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("的博客"),a("OutboundLink")],1),e._v("在head内存在，查了一下原因，正如之前所述，这个是针对百度转码的。具体可以看github的"),a("a",{attrs:{href:"https://github.com/iissnan/hexo-theme-next/issues/1646",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("其他更多内容可以查看"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"property-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-content"}},[e._v("#")]),e._v(" property & content")]),e._v(" "),a("p",[e._v("可以让网页成为一个"),a("strong",[e._v("富媒体对象")]),e._v("，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta property="og:type" content="website">\n<meta property="og:url" content="https://zjgyb.github.io/index.html">\n<meta property="og:site_name" content="tony\'s blog">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("具体可以参照"),a("a",{attrs:{href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Open Graph protocal"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("只总结了一些常用的"),a("code",[e._v("meta")]),e._v("标签，其他的不太常用的也就暂时不总结了，如果将来用到再进行补充。总算是有了一些了解。")]),e._v(" "),a("p",[e._v("来源：https://juejin.cn/post/6844903957169438728")]),e._v(" "),a("h2",{attrs:{id:"移动端meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端meta"}},[e._v("#")]),e._v(" 移动端meta")]),e._v(" "),a("p",[e._v("1、移动端页面设置视口宽度等于设备宽度，并禁止缩放。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("2、移动端页面设置视口宽度等于定宽（如640px），并禁止缩放，常用于微信浏览器页面。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width=640,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("3、禁止将页面中的数字识别为电话号码")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="format-detection" content="telephone=no" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("4、忽略对邮箱地址的识别")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="format-detection" content="email=no" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("5、当网站添加到主屏幕快速启动方式，伪装webapp，可隐藏工具栏/菜单栏/地址栏，仅针对ios的safari")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="apple-mobile-web-app-capable" content="yes" />\n\x3c!-- ios7.0版本以后，safari上已看不到效果 --\x3e\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("6、添加到主屏幕后，全屏显示")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="apple-touch-fullscreen" content="yes">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("7、设置ios的safari浏览器顶端状态条的样式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="apple-mobile-web-app-status-bar-style" content="black" />\n\x3c!-- 可选default、black、black-translucent --\x3e\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("8、添加到主屏后的标题")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="apple-mobile-web-app-title" content="标题">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("9、添加智能 App 广告条 Smart App Banner\n告诉浏览器这个网站对应的app，并在页面上显示下载banner。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("10、其他meta")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 --\x3e\n<meta name="HandheldFriendly" content="true">\n\n\x3c!-- 微软的老式浏览器 --\x3e\n<meta name="MobileOptimized" content="320">\n\n\x3c!-- uc强制竖屏 --\x3e\n<meta name="screen-orientation" content="portrait">\n\n\x3c!-- QQ强制竖屏 --\x3e\n<meta name="x5-orientation" content="portrait">\n\n\x3c!-- UC强制全屏 --\x3e\n<meta name="full-screen" content="yes">\n\n\x3c!-- QQ强制全屏 --\x3e\n<meta name="x5-fullscreen" content="true">\n\n\x3c!-- UC应用模式 --\x3e\n<meta name="browsermode" content="application">\n\n\x3c!-- QQ应用模式 --\x3e\n<meta name="x5-page-mode" content="app">\n\n\x3c!-- windows phone 点击无高光 --\x3e\n<meta name="msapplication-tap-highlight" content="no">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("h2",{attrs:{id:"针对苹果手机说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对苹果手机说明"}},[e._v("#")]),e._v(" 针对苹果手机说明：")]),e._v(" "),a("p",[e._v("配合 Web App 的 icon 和启动界面需要额外的两端代码进行设定，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<link rel="apple-touch-icon-precomposed" href="iphone_logo.png" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("说明：这个 link 就是设置 Web App 的放置主屏幕上 icon 文件路径")]),e._v(" "),a("p",[e._v("使用：该路径需要注意的就是放到将网站的文档根目录下但不是服务器的文档的根目录。图片尺寸可以设定为 57_57（px）或者 Retina 可以定为 114_114（px），iPad 尺寸为 72*72（px）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<link rel="apple-touch-startup-image" href="logo_startup.png" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("说明：这个 link 就是设置启动时候的界面。")]),e._v(" "),a("p",[e._v("使用：放置的路径和上面一样。\n官方规定启动界面的尺寸必须为 320*640（px），原本以为 Retina 屏幕可以支持双倍，但是不支持，图片显示不出来。\n如果对 Web App 的这两个 meta 还有不能详细理解的可以查看官方解释："),a("a",{attrs:{href:"https://developer.apple.com/safari/resources/#documentation/appleapplications/reference/SafariHTMLRef/Articles/MetaTags.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meta Tags"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("关于 link 方面还有更多的参数设置（例如：iPod、iPad、iPhone 不同尺寸不同图标），可以查看官方标准文档："),a("a",{attrs:{href:"https://developer.apple.com/safari/resources/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring Web Applications"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("参考：\n1."),a("a",{attrs:{href:"http://www.jianshu.com/p/850d2a209ba8",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端 Meta 用法大汇总"),a("OutboundLink")],1),e._v("\n2."),a("a",{attrs:{href:"http://www.cnblogs.com/futai/p/5343969.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动端meta汇总"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);