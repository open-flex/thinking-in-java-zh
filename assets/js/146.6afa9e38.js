(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{541:function(n,t,e){"use strict";e.r(t);var v=e(56),_=Object(v.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_6-7-向上转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-向上转换"}},[n._v("#")]),n._v(" 6.7 向上转换")]),n._v(" "),e("p",[n._v("继承最值得注意的地方就是它没有为新类提供方法。继承是对新类和基类之间的关系的一种表达。可这样总结该关系：“新类属于现有类的一种类型”。")]),n._v(" "),e("p",[n._v("这种表达并不仅仅是对继承的一种形象化解释，继承是直接由语言提供支持的。作为一个例子，大家可考虑一个名为"),e("code",[n._v("Instrument")]),n._v("的基类，它用于表示乐器；另一个派生类叫作"),e("code",[n._v("Wind")]),n._v("。由于继承意味着基类的所有方法亦可在派生出来的类中使用，所以我们发给基类的任何消息亦可发给派生类。若"),e("code",[n._v("Instrument")]),n._v("类有一个"),e("code",[n._v("play()")]),n._v("方法，则"),e("code",[n._v("Wind")]),n._v("设备也会有这个方法。这意味着我们能肯定地认为一个"),e("code",[n._v("Wind")]),n._v("对象也是"),e("code",[n._v("Instrument")]),n._v("的一种类型。下面这个例子揭示出编译器如何提供对这一概念的支持：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//: Wind.java\n// Inheritance & upcasting\nimport java.util.*;\n\nclass Instrument {\n  public void play() {}\n  static void tune(Instrument i) {\n    // ...\n    i.play();\n  }\n}\n\n// Wind objects are instruments\n// because they have the same interface:\nclass Wind extends Instrument {\n  public static void main(String[] args) {\n    Wind flute = new Wind();\n    Instrument.tune(flute); // Upcasting\n  }\n} ///:~\n")])])]),e("p",[n._v("这个例子中最有趣的无疑是"),e("code",[n._v("tune()")]),n._v("方法，它能接受一个"),e("code",[n._v("Instrument")]),n._v("引用。但在"),e("code",[n._v("Wind.main()")]),n._v("中，"),e("code",[n._v("tune()")]),n._v("方法是通过为其赋予一个"),e("code",[n._v("Wind")]),n._v("引用来调用的。由于Java对类型检查特别严格，所以大家可能会感到很奇怪，为什么接收一种类型的方法也能接收另一种类型呢？但是，我们一定要认识到一个"),e("code",[n._v("Wind")]),n._v("对象也是一个"),e("code",[n._v("Instrument")]),n._v("对象。而且对于不在"),e("code",[n._v("Wind")]),n._v("中的一个"),e("code",[n._v("Instrument")]),n._v("（乐器），没有方法可以由"),e("code",[n._v("tune()")]),n._v("调用。在"),e("code",[n._v("tune()")]),n._v("中，代码适用于"),e("code",[n._v("Instrument")]),n._v("以及从"),e("code",[n._v("Instrument")]),n._v("派生出来的任何东西。在这里，我们将从一个"),e("code",[n._v("Wind")]),n._v("引用转换成一个"),e("code",[n._v("Instrument")]),n._v("引用的行为叫作“向上转换”。")]),n._v(" "),e("h2",{attrs:{id:"_6-7-1-何谓-向上转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-1-何谓-向上转换"}},[n._v("#")]),n._v(" 6.7.1 何谓“向上转换”？")]),n._v(" "),e("p",[n._v("之所以叫作这个名字，除了有一定的历史原因外，也是由于在传统意义上，类继承图的画法是根位于最顶部，再逐渐向下扩展（当然，可根据自己的习惯用任何方法描绘这种图）。因素，"),e("code",[n._v("Wind.java")]),n._v("的继承图就象下面这个样子：")]),n._v(" "),e("p",[n._v("由于转换的方向是从派生类到基类，箭头朝上，所以通常把它叫作“向上转换”，即"),e("code",[n._v("Upcasting")]),n._v("。向上转换肯定是安全的，因为我们是从一个更特殊的类型到一个更常规的类型。换言之，派生类是基类的一个超集。它可以包含比基类更多的方法，但它至少包含了基类的方法。进行向上转换的时候，类接口可能出现的唯一一个问题是它可能丢失方法，而不是赢得这些方法。这便是在没有任何明确的转换或者其他特殊标注的情况下，编译器为什么允许向上转换的原因所在。")]),n._v(" "),e("p",[n._v("也可以执行向下转换，但这时会面临第11章要详细讲述的一种困境。")]),n._v(" "),e("p",[n._v("(1) 再论组合与继承")]),n._v(" "),e("p",[n._v("在面向对象的程序设计中，创建和使用代码最可能采取的一种做法是：将数据和方法统一封装到一个类里，并且使用那个类的对象。有些时候，需通过“组合”技术用现成的类来构造新类。而继承是最少见的一种做法。因此，尽管继承在学习OOP的过程中得到了大量的强调，但并不意味着应该尽可能地到处使用它。相反，使用它时要特别慎重。只有在清楚知道继承在所有方法中最有效的前提下，才可考虑它。为判断自己到底应该选用组合还是继承，一个最简单的办法就是考虑是否需要从新类向上转换回基类。若必须上溯，就需要继承。但如果不需要向上转换，就应提醒自己防止继承的滥用。在下一章里（多态性），会向大家介绍必须进行向上转换的一种场合。但只要记住经常问自己“我真的需要向上转换吗”，对于组合还是继承的选择就不应该是个太大的问题。")])])}),[],!1,null,null,null);t.default=_.exports}}]);