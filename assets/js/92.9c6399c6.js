(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{490:function(e,n,a){"use strict";a.r(n);var t=a(56),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_16-3-模拟垃圾回收站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-模拟垃圾回收站"}},[e._v("#")]),e._v(" 16.3 模拟垃圾回收站")]),e._v(" "),a("p",[e._v("这个问题的本质是若将垃圾丢进单个垃圾筒，事实上是未经分类的。但在以后，某些特殊的信息必须恢复，以便对垃圾正确地归类。在最开始的解决方案中，RTTI扮演了关键的角色（详见第11章）。")]),e._v(" "),a("p",[e._v("这并不是一种普通的设计，因为它增加了一个新的限制。正是这个限制使问题变得非常有趣——它更象我们在工作中碰到的那些非常麻烦的问题。这个额外的限制是：垃圾抵达垃圾回收站时，它们全都是混合在一起的。程序必须为那些垃圾的分类定出一个模型。这正是RTTI发挥作用的地方：我们有大量不知名的垃圾，程序将正确判断出它们所属的类型。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: RecycleA.java\n// Recycling with RTTI\npackage c16.recyclea;\nimport java.util.*;\nimport java.io.*;\n\nabstract class Trash {\n  private double weight;\n  Trash(double wt) { weight = wt; }\n  abstract double value();\n  double weight() { return weight; }\n  // Sums the value of Trash in a bin:\n  static void sumValue(Vector bin) {\n    Enumeration e = bin.elements();\n    double val = 0.0f;\n    while(e.hasMoreElements()) {\n      // One kind of RTTI:\n      // A dynamically-checked cast\n      Trash t = (Trash)e.nextElement();\n      // Polymorphism in action:\n      val += t.weight() * t.value();\n      System.out.println(\n        "weight of " +\n        // Using RTTI to get type\n        // information about the class:\n        t.getClass().getName() +\n        " = " + t.weight());\n    }\n    System.out.println("Total value = " + val);\n  }\n}\n\nclass Aluminum extends Trash {\n  static double val  = 1.67f;\n  Aluminum(double wt) { super(wt); }\n  double value() { return val; }\n  static void value(double newval) {\n    val = newval;\n  }\n}\n\nclass Paper extends Trash {\n  static double val = 0.10f;\n  Paper(double wt) { super(wt); }\n  double value() { return val; }\n  static void value(double newval) {\n    val = newval;\n  }\n}\n\nclass Glass extends Trash {\n  static double val = 0.23f;\n  Glass(double wt) { super(wt); }\n  double value() { return val; }\n  static void value(double newval) {\n    val = newval;\n  }\n}\n\npublic class RecycleA {\n  public static void main(String[] args) {\n    Vector bin = new Vector();\n    // Fill up the Trash bin:\n    for(int i = 0; i < 30; i++)\n      switch((int)(Math.random() * 3)) {\n        case 0 :\n          bin.addElement(new\n            Aluminum(Math.random() * 100));\n          break;\n        case 1 :\n          bin.addElement(new\n            Paper(Math.random() * 100));\n          break;\n        case 2 :\n          bin.addElement(new\n            Glass(Math.random() * 100));\n      }\n    Vector\n      glassBin = new Vector(),\n      paperBin = new Vector(),\n      alBin = new Vector();\n    Enumeration sorter = bin.elements();\n    // Sort the Trash:\n    while(sorter.hasMoreElements()) {\n      Object t = sorter.nextElement();\n      // RTTI to show class membership:\n      if(t instanceof Aluminum)\n        alBin.addElement(t);\n      if(t instanceof Paper)\n        paperBin.addElement(t);\n      if(t instanceof Glass)\n        glassBin.addElement(t);\n    }\n    Trash.sumValue(alBin);\n    Trash.sumValue(paperBin);\n    Trash.sumValue(glassBin);\n    Trash.sumValue(bin);\n  }\n} ///:~\n')])])]),a("p",[e._v("要注意的第一个地方是"),a("code",[e._v("package")]),e._v("语句：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("package c16.recyclea;\n")])])]),a("p",[e._v("这意味着在本书采用的源码目录中，这个文件会被置入从"),a("code",[e._v("c16")]),e._v("（代表第16章的程序）分支出来的"),a("code",[e._v("recyclea")]),e._v("子目录中。第17章的解包工具会负责将其置入正确的子目录。之所以要这样做，是因为本章会多次改写这个特定的例子；它的每个版本都会置入自己的“包”（"),a("code",[e._v("package")]),e._v("）内，避免类名的冲突。")]),e._v(" "),a("p",[e._v("其中创建了几个"),a("code",[e._v("Vector")]),e._v("对象，用于容纳"),a("code",[e._v("Trash")]),e._v("引用。当然，"),a("code",[e._v("Vector")]),e._v("实际容纳的是"),a("code",[e._v("Object")]),e._v("（对象），所以它们最终能够容纳任何东西。之所以要它们容纳"),a("code",[e._v("Trash")]),e._v("（或者从"),a("code",[e._v("Trash")]),e._v("派生出来的其他东西），唯一的理由是我们需要谨慎地避免放入除"),a("code",[e._v("Trash")]),e._v("以外的其他任何东西。如果真的把某些“错误”的东西置入"),a("code",[e._v("Vector")]),e._v("，那么不会在编译期得到出错或警告提示——只能通过运行期的一个异常知道自己已经犯了错误。")]),e._v(" "),a("p",[a("code",[e._v("Trash")]),e._v("引用加入后，它们会丢失自己的特定标识信息，只会成为简单的"),a("code",[e._v("Object")]),e._v("引用（向上转换）。然而，由于存在多态性的因素，所以在我们通过"),a("code",[e._v("Enumeration sorter")]),e._v("调用动态绑定方法时，一旦结果"),a("code",[e._v("Object")]),e._v("已经转换回"),a("code",[e._v("Trash")]),e._v("，仍然会发生正确的行为。"),a("code",[e._v("sumValue()")]),e._v("也用一个"),a("code",[e._v("Enumeration")]),e._v("对"),a("code",[e._v("Vector")]),e._v("中的每个对象进行操作。")]),e._v(" "),a("p",[e._v("表面上持，先把"),a("code",[e._v("Trash")]),e._v("的类型向上转换到一个集合容纳基类型的引用，再回过头重新向下转换，这似乎是一种非常愚蠢的做法。为什么不只是一开始就将垃圾置入适当的容器里呢？（事实上，这正是拨开“回收”一团迷雾的关键）。在这个程序中，我们很容易就可以换成这种做法，但在某些情况下，系统的结构及灵活性都能从向下转换中得到极大的好处。")]),e._v(" "),a("p",[e._v("该程序已满足了设计的初衷：它能够正常工作！只要这是个一次性的方案，就会显得非常出色。但是，真正有用的程序应该能够在任何时候解决问题。所以必须问自己这样一个问题：“如果情况发生了变化，它还能工作吗？”举个例子来说，厚纸板现在是一种非常有价值的可回收物品，那么如何把它集成到系统中呢（特别是程序很大很复杂的时候）？由于前面在"),a("code",[e._v("switch")]),e._v("语句中的类型检查编码可能散布于整个程序，所以每次加入一种新类型时，都必须找到所有那些编码。若不慎遗漏一个，编译器除了指出存在一个错误之外，不能再提供任何有价值的帮助。")]),e._v(" "),a("p",[e._v("RTTI在这里使用不当的关键是“每种类型都进行了测试”。如果由于类型的子集需要特殊的对待，所以只寻找那个子集，那么情况就会变得好一些。但假如在一个"),a("code",[e._v("switch")]),e._v("语句中查找每一种类型，那么很可能错过一个重点，使最终的代码很难维护。在下一节中，大家会学习如何逐步对这个程序进行改进，使其显得越来越灵活。这是在程序设计中一种非常有意义的例子。")])])}),[],!1,null,null,null);n.default=s.exports}}]);