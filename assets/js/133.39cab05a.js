(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{529:function(v,e,t){"use strict";t.r(e);var _=t(56),a=Object(_.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_5-3-接口与实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-接口与实现"}},[v._v("#")]),v._v(" 5.3 接口与实现")]),v._v(" "),t("p",[v._v("我们通常认为访问控制是“隐藏实现细节”的一种方式。将数据和方法封装到类内后，可生成一种数据类型，它具有自己的特征与行为。但由于两方面重要的原因，访问为那个数据类型加上了自己的边界。第一个原因是规定客户程序员哪些能够使用，哪些不能。我们可在结构里构建自己的内部机制，不用担心客户程序员将其当作接口的一部分，从而自由地使用或者“滥用”。")]),v._v(" "),t("p",[v._v("这个原因直接导致了第二个原因：我们需要将接口同实现细节分离开。若结构在一系列程序中使用，但用户除了将消息发给"),t("code",[v._v("public")]),v._v("接口之外，不能做其他任何事情，我们就可以改变不属于"),t("code",[v._v("public")]),v._v("的所有东西（如“友好的”、"),t("code",[v._v("protected")]),v._v("以及"),t("code",[v._v("private")]),v._v("），同时不要求用户对他们的代码作任何修改。")]),v._v(" "),t("p",[v._v("我们现在是在一个面向对象的编程环境中，其中的一个类（"),t("code",[v._v("class")]),v._v("）实际是指“一类对象”，就象我们说“鱼类”或“鸟类”那样。从属于这个类的所有对象都共享这些特征与行为。“类”是对属于这一类的所有对象的外观及行为进行的一种描述。")]),v._v(" "),t("p",[v._v("在一些早期OOP语言中，如Simula-67，关键字"),t("code",[v._v("class")]),v._v("的作用是描述一种新的数据类型。同样的关键字在大多数面向对象的编程语言里都得到了应用。它其实是整个语言的焦点：需要新建数据类型的场合比那些用于容纳数据和方法的“容器”多得多。")]),v._v(" "),t("p",[v._v("在Java中，类是最基本的OOP概念。它是本书未采用粗体印刷的关键字之一——由于数量太多，所以会造成页面排版的严重混乱。")]),v._v(" "),t("p",[v._v("为清楚起见，可考虑用特殊的样式创建一个类：将"),t("code",[v._v("public")]),v._v("成员置于最开头，后面跟随"),t("code",[v._v("protected")]),v._v("、友好以及"),t("code",[v._v("private")]),v._v("成员。这样做的好处是类的使用者可从上向下依次阅读，并首先看到对自己来说最重要的内容（即"),t("code",[v._v("public")]),v._v("成员，因为它们可从文件的外部访问），并在遇到非公共成员后停止阅读，后者已经属于内部实现细节的一部分了。然而，利用由"),t("code",[v._v("javadoc")]),v._v("提供支持的注释文档（已在第2章介绍），代码的可读性问题已在很大程度上得到了解决。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("public class X {\n  public void pub1( ) { /* . . . */ }\n  public void pub2( ) { /* . . . */ }\n  public void pub3( ) { /* . . . */ }\n  private void priv1( ) { /* . . . */ }\n  private void priv2( ) { /* . . . */ }\n  private void priv3( ) { /* . . . */ }\n  private int i;\n  // . . .\n}\n")])])]),t("p",[v._v("由于接口和实现细节仍然混合在一起，所以只是部分容易阅读。也就是说，仍然能够看到源码——实现的细节，因为它们需要保存在类里面。向一个类的消费者显示出接口实际是“类浏览器”的工作。这种工具能查找所有可用的类，总结出可对它们采取的全部操作（比如可以使用哪些成员等），并用一种清爽悦目的形式显示出来。到大家读到这本书的时候，所有优秀的Java开发工具都应推出了自己的浏览器。")])])}),[],!1,null,null,null);e.default=a.exports}}]);