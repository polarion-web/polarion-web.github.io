(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{267:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-this-的原理以及几种不同使用场景的取值。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-this-的原理以及几种不同使用场景的取值。","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. this 的原理以及几种不同使用场景的取值。")]),s._v(" "),a("p",[a("strong",[s._v("this")]),s._v(" 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于"),a("code",[s._v("函数调用时")]),s._v("的各种条件。")]),s._v(" "),a("p",[a("strong",[s._v("this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。")])]),s._v(" "),a("p",[s._v("当一个函数被调用时，会创建一个活动记录(有时候也称为执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。"),a("code",[s._v("this")]),s._v(" 就是记录的其中一个属性，会在函数执行的过程中用到。")]),s._v(" "),a("p",[s._v("理解"),a("code",[s._v("调用栈")]),s._v("和"),a("code",[s._v("调用位置")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前调用栈是: baz")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <-- bar 的调用位置 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前调用栈是 baz -> bar")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <-- foo 的调用位置，当前调用位置在 baz 中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前调用栈是 baz -> bar -> foo ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因此，当前调用位置在 bar 中")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <-- baz 的调用位置，当前调用位置是全局作用域  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("strong",[s._v("this 绑定遵循以下四种规则：")]),s._v(" "),a("code",[s._v("默认绑定")]),s._v("、"),a("code",[s._v("隐式绑定")]),s._v("、"),a("code",[s._v("显示绑定")]),s._v("、"),a("code",[s._v("new 绑定")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"_1-默认绑定：独立函数调用，this-指向全局对象。调用时前边没有或省略-操作符号。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认绑定：独立函数调用，this-指向全局对象。调用时前边没有或省略-操作符号。","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 默认绑定：独立函数调用，"),a("code",[s._v("this")]),s._v(" 指向全局对象。调用时前边没有或省略 "),a("code",[s._v(".")]),s._v(" 操作符号。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window.a = 2;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window.foo();")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("如果使用严格模式")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("strict mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，那么全局对象将无法使用默认绑定，因此 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" 会绑定到 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-隐式绑定：调用位置是否有上下文对象，也就是说，函数被作为某个对象的方法被调用时，this-指向那个对象。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-隐式绑定：调用位置是否有上下文对象，也就是说，函数被作为某个对象的方法被调用时，this-指向那个对象。","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 隐式绑定：调用位置是否有上下文对象，也就是说，函数被作为某个对象的方法被调用时，"),a("code",[s._v("this")]),s._v(" 指向那个对象。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" foo \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" obj2 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 42")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("上段代码中，词法作用域只会查找最顶层的 "),a("code",[s._v("obj1")]),s._v("，按着对象属性访问规则，会在自身上查找属性 "),a("code",[s._v("obj2")]),s._v("，所以 "),a("code",[s._v("this")]),s._v(" 指向 "),a("code",[s._v("obj2")]),s._v("，\b所以 "),a("code",[s._v("this.a")]),s._v(" 等于 "),a("code",[s._v("bj2.a")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("对象属性引用链中只有最顶层或者说最后一层会影响调用位置。")])]),s._v(" "),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("会出现隐式丢失的情况：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，\n从而把 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" 绑定到全局对象或者 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" 上，取决于是否是严格模式。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_3-显示绑定：使用-call、apply-或者-bind-绑定到指定的对象。this指向传入的第一个参数。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-显示绑定：使用-call、apply-或者-bind-绑定到指定的对象。this指向传入的第一个参数。","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 显示绑定：使用 "),a("code",[s._v("call")]),s._v("、"),a("code",[s._v("apply")]),s._v(" 或者 "),a("code",[s._v("bind")]),s._v(" 绑定到指定的对象。"),a("strong",[s._v("this指向传入的第一个参数。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("bar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 硬绑定的 bar 不可能再修改它的 this ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" window "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("把 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" 或者 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" 作为 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" 的绑定对象传入 call、apply 或者 bind，这些值\n在调用时会被忽略，实际应用的是默认绑定规则。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_4-new-绑定：this-指向创建的空对象-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-new-绑定：this-指向创建的空对象-。","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. "),a("code",[s._v("new")]),s._v(" 绑定："),a("code",[s._v("this")]),s._v(" 指向创建的空对象 "),a("code",[s._v("{}")]),s._v("。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("new")]),s._v(" 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建(或者说构造)一个全新的对象。")])]),s._v(" "),a("li",[a("p",[s._v("这个新对象会被执行"),a("code",[s._v("[[proto]]")]),s._v("连接。")])]),s._v(" "),a("li",[a("p",[s._v("这个新对象会绑定到函数调用的 "),a("code",[s._v("this")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("如果函数没有返回其他对象，那么 "),a("code",[s._v("new")]),s._v(" 表达式中的函数调用会自动返回这个新对象。")])])]),s._v(" "),a("h5",{attrs:{id:"总结：关于-this-绑定的场景，遵循以下-4-条规则："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结：关于-this-绑定的场景，遵循以下-4-条规则：","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结：关于 "),a("code",[s._v("this")]),s._v(" 绑定的场景，遵循以下 "),a("code",[s._v("4")]),s._v(" 条规则：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("由 "),a("code",[s._v("new")]),s._v(" 调用? 绑定到新创建的对象。")])]),s._v(" "),a("li",[a("p",[s._v("由"),a("code",[s._v("call")]),s._v("或者 "),a("code",[s._v("apply")]),s._v(" 或者 "),a("code",[s._v("bind")]),s._v(" 调用? 绑定到"),a("strong",[s._v("指定的对象")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("由上下文对象调用? 绑定到那个上下文对象。")])]),s._v(" "),a("li",[a("p",[s._v("在严格模式下绑定到 "),a("code",[s._v("undefined")]),s._v("，否则绑定到"),a("strong",[s._v("全局对象")]),s._v("。")])])]),s._v(" "),a("h5",{attrs:{id:"拓展："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展：","aria-hidden":"true"}},[s._v("#")]),s._v(" 拓展：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("绑定优先级：new 绑定 > 硬绑定 > 隐式绑定 > 默认绑定\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("em",[s._v("本节参考：你不知道的 JavaScript（上卷）")])])])}),[],!1,null,null,null);t.default=e.exports}}]);