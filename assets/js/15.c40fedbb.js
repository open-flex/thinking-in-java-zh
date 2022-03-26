(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{414:function(v,e,_){"use strict";_.r(e);var t=_(56),r=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_1-3-实现方案的隐藏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实现方案的隐藏"}},[v._v("#")]),v._v(" 1.3 实现方案的隐藏")]),v._v(" "),_("p",[v._v("为方便后面的讨论，让我们先对这一领域的从业人员作一下分类。从根本上说，大致有两方面的人员涉足面向对象的编程：“类创建者”（创建新数据类型的人）以及“客户程序员”（在自己的应用程序中采用现成数据类型的人；注释④）。对客户程序员来讲，最主要的目标就是收集一个充斥着各种类的编程“工具箱”，以便快速开发符合自己要求的应用。而对类创建者来说，他们的目标则是从头构建一个类，只向客户程序员开放有必要开放的东西（接口），其他所有细节都隐藏起来。为什么要这样做？隐藏之后，客户程序员就不能接触和改变那些细节，所以原创者不用担心自己的作品会受到非法修改，可确保它们不会对其他人造成影响。")]),v._v(" "),_("p",[v._v("④：感谢我的朋友Scott Meyers，是他帮我起了这个名字。")]),v._v(" "),_("p",[v._v("“接口”（"),_("code",[v._v("Interface")]),v._v("）规定了可对一个特定的对象发出哪些请求。然而，必须在某个地方存在着一些代码，以便满足这些请求。这些代码与那些隐藏起来的数据便叫作“隐藏的实现”。站在程式化程序编写（Procedural Programming）的角度，整个问题并不显得复杂。一种类型含有与每种可能的请求关联起来的函数。一旦向对象发出一个特定的请求，就会调用那个函数。我们通常将这个过程总结为向对象“发送一条消息”（提出一个请求）。对象的职责就是决定如何对这条消息作出反应（执行相应的代码）。")]),v._v(" "),_("p",[v._v("对于任何关系，重要一点是让牵连到的所有成员都遵守相同的规则。创建一个库时，相当于同客户程序员建立了一种关系。对方也是程序员，但他们的目标是组合出一个特定的应用（程序），或者用您的库构建一个更大的库。")]),v._v(" "),_("p",[v._v("若任何人都能使用一个类的所有成员，那么客户程序员可对那个类做任何事情，没有办法强制他们遵守任何约束。即便非常不愿客户程序员直接操作类内包含的一些成员，但倘若未进行访问控制，就没有办法阻止这一情况的发生——所有东西都会暴露无遗。")]),v._v(" "),_("p",[v._v("有两方面的原因促使我们控制对成员的访问。第一个原因是防止程序员接触他们不该接触的东西——通常是内部数据类型的设计思想。若只是为了解决特定的问题，用户只需操作接口即可，毋需明白这些信息。我们向用户提供的实际是一种服务，因为他们很容易就可看出哪些对自己非常重要，以及哪些可忽略不计。")]),v._v(" "),_("p",[v._v("进行访问控制的第二个原因是允许库设计人员修改内部结构，不用担心它会对客户程序员造成什么影响。例如，我们最开始可能设计了一个形式简单的类，以便简化开发。以后又决定进行改写，使其更快地运行。若接口与实现方法早已隔离开，并分别受到保护，就可放心做到这一点，只要求用户重新链接一下即可。")]),v._v(" "),_("p",[v._v("Java采用三个显式（明确）关键字以及一个隐式（暗示）关键字来设置类边界："),_("code",[v._v("public")]),v._v("，"),_("code",[v._v("private")]),v._v("，"),_("code",[v._v("protected")]),v._v("以及暗示性的"),_("code",[v._v("friendly")]),v._v("。若未明确指定其他关键字，则默认为后者。这些关键字的使用和含义都是相当直观的，它们决定了谁能使用后续的定义内容。"),_("code",[v._v("public")]),v._v("（公共）意味着后续的定义任何人均可使用。而在另一方面，"),_("code",[v._v("private")]),v._v("（私有）意味着除您自己、类型的创建者以及那个类型的内部函数成员，其他任何人都不能访问后续的定义信息。"),_("code",[v._v("private")]),v._v("在您与客户程序员之间竖起了一堵墙。若有人试图访问私有成员，就会得到一个编译期错误。"),_("code",[v._v("friendly")]),v._v("（友好的）涉及“包装”或“封装”（Package）的概念——即Java用来构建库的方法。若某样东西是“友好的”，意味着它只能在这个包装的范围内使用（所以这一访问级别有时也叫作“包装访问”）。"),_("code",[v._v("protected")]),v._v("（受保护的）与"),_("code",[v._v("private")]),v._v("相似，只是一个继承的类可访问受保护的成员，但不能访问私有成员。继承的问题不久就要谈到。")])])}),[],!1,null,null,null);e.default=r.exports}}]);