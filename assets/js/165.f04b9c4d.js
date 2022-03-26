(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{561:function(e,t,n){"use strict";n.r(t);var o=n(56),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_8-5-排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-排序"}},[e._v("#")]),e._v(" 8.5 排序")]),e._v(" "),n("p",[e._v("Java 1.0和1.1库都缺少的一样东西是算术运算，甚至没有最简单的排序运算方法。因此，我们最好创建一个"),n("code",[e._v("Vector")]),e._v("，利用经典的"),n("code",[e._v("Quicksort")]),e._v("（快速排序）方法对其自身进行排序。")]),e._v(" "),n("p",[e._v("编写通用的排序代码时，面临的一个问题是必须根据对象的实际类型来执行比较运算，从而实现正确的排序。当然，一个办法是为每种不同的类型都写一个不同的排序方法。然而，应认识到假若这样做，以后增加新类型时便不易实现代码的重复利用。")]),e._v(" "),n("p",[e._v("程序设计一个主要的目标就是“将发生变化的东西同保持不变的东西分隔开”。在这里，保持不变的代码是通用的排序算法，而每次使用时都要变化的是对象的实际比较方法。因此，我们不可将比较代码“硬编码”到多个不同的排序例程内，而是采用“回调”技术。利用回调，经常发生变化的那部分代码会封装到它自己的类内，而总是保持相同的代码则“回调”发生变化的代码。这样一来，不同的对象就可以表达不同的比较方式，同时向它们传递相同的排序代码。")]),e._v(" "),n("p",[e._v("下面这个“接口”（"),n("code",[e._v("Interface")]),e._v("）展示了如何比较两个对象，它将那些“要发生变化的东西”封装在内：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//: Compare.java\n// Interface for sorting callback:\npackage c08;\n\ninterface Compare {\n  boolean lessThan(Object lhs, Object rhs);\n  boolean lessThanOrEqual(Object lhs, Object rhs);\n} ///:~\n")])])]),n("p",[e._v("对这两种方法来说，"),n("code",[e._v("lhs")]),e._v("代表本次比较中的“左手”对象，而"),n("code",[e._v("rhs")]),e._v("代表“右手”对象。")]),e._v(" "),n("p",[e._v("可创建"),n("code",[e._v("Vector")]),e._v("的一个子类，通过"),n("code",[e._v("Compare")]),e._v("实现“快速排序”。对于这种算法，包括它的速度以及原理等等，在此不具体说明。欲知详情，可参考Binstock和Rex编著的《Practical Algorithms for Programmers》，由Addison-Wesley于1995年出版。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//: SortVector.java\n// A generic sorting vector\npackage c08;\nimport java.util.*;\n\npublic class SortVector extends Vector {\n  private Compare compare; // To hold the callback\n  public SortVector(Compare comp) {\n    compare = comp;\n  }\n  public void sort() {\n    quickSort(0, size() - 1);\n  }\n  private void quickSort(int left, int right) {\n    if(right > left) {\n      Object o1 = elementAt(right);\n      int i = left - 1;\n      int j = right;\n      while(true) {\n        while(compare.lessThan(\n              elementAt(++i), o1))\n          ;\n        while(j > 0)\n          if(compare.lessThanOrEqual(\n             elementAt(--j), o1))\n            break; // out of while\n        if(i >= j) break;\n        swap(i, j);\n      }\n      swap(i , right);\n      quickSort(left, i-1);\n      quickSort(i+1, right);\n    }\n  }\n  private void swap(int loc1, int loc2) {\n    Object tmp = elementAt(loc1);\n    setElementAt(elementAt(loc2), loc1);\n    setElementAt(tmp, loc2);\n  }\n} ///:~\n")])])]),n("p",[e._v("现在，大家可以明白“回调”一词的来历，这是由于"),n("code",[e._v("quickSort()")]),e._v("方法“往回调用”了"),n("code",[e._v("Compare")]),e._v("中的方法。从中亦可理解这种技术如何生成通用的、可重复利用（复用）的代码。")]),e._v(" "),n("p",[e._v("为使用"),n("code",[e._v("SortVector")]),e._v("，必须创建一个类，令其为我们准备排序的对象实现"),n("code",[e._v("Compare")]),e._v("。此时内部类并不显得特别重要，但对于代码的组织却是有益的。下面是针对"),n("code",[e._v("String")]),e._v("对象的一个例子：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//: StringSortTest.java\n// Testing the generic sorting Vector\npackage c08;\nimport java.util.*;\n\npublic class StringSortTest {\n  static class StringCompare implements Compare {\n    public boolean lessThan(Object l, Object r) {\n      return ((String)l).toLowerCase().compareTo(\n        ((String)r).toLowerCase()) < 0;\n    }\n    public boolean\n    lessThanOrEqual(Object l, Object r) {\n      return ((String)l).toLowerCase().compareTo(\n        ((String)r).toLowerCase()) <= 0;\n    }\n  }\n  public static void main(String[] args) {\n    SortVector sv =\n      new SortVector(new StringCompare());\n    sv.addElement("d");\n    sv.addElement("A");\n    sv.addElement("C");\n    sv.addElement("c");\n    sv.addElement("b");\n    sv.addElement("B");\n    sv.addElement("D");\n    sv.addElement("a");\n    sv.sort();\n    Enumeration e = sv.elements();\n    while(e.hasMoreElements())\n      System.out.println(e.nextElement());\n  }\n} ///:~\n')])])]),n("p",[e._v("内部类是“静态”（"),n("code",[e._v("Static")]),e._v("）的，因为它毋需连接一个外部类即可工作。")]),e._v(" "),n("p",[e._v("大家可以看到，一旦设置好框架，就可以非常方便地重复使用象这样的一个设计——只需简单地写一个类，将“需要发生变化”的东西封装进去，然后将一个对象传给"),n("code",[e._v("SortVector")]),e._v("即可。")]),e._v(" "),n("p",[e._v("比较时将字符串强制为小写形式，所以大写"),n("code",[e._v("A")]),e._v("会排列于小写"),n("code",[e._v("a")]),e._v("的旁边，而不会移动一个完全不同的地方。然而，该例也显示了这种方法的一个不足，因为上述测试代码按照出现顺序排列同一个字母的大写和小写形式："),n("code",[e._v("A a b B c C d D")]),e._v("。但这通常不是一个大问题，因为经常处理的都是更长的字符串，所以上述效果不会显露出来（Java 1.2的集合提供了排序功能，已解决了这个问题）。")]),e._v(" "),n("p",[e._v("继承（"),n("code",[e._v("extends")]),e._v("）在这儿用于创建一种新类型的"),n("code",[e._v("Vector")]),e._v("——也就是说，"),n("code",[e._v("SortVector")]),e._v("属于一种"),n("code",[e._v("Vector")]),e._v("，并带有一些附加的功能。继承在这里可发挥很大的作用，但了带来了问题。它使一些方法具有了"),n("code",[e._v("final")]),e._v("属性（已在第7章讲述），所以不能覆盖它们。如果想创建一个排好序的"),n("code",[e._v("Vector")]),e._v("，令其只接收和生成"),n("code",[e._v("String")]),e._v("对象，就会遇到麻烦。因为"),n("code",[e._v("addElement()")]),e._v("和"),n("code",[e._v("elementAt()")]),e._v("都具有"),n("code",[e._v("final")]),e._v("属性，而且它们都是我们必须覆盖的方法，否则便无法实现只能接收和产生"),n("code",[e._v("String")]),e._v("对象。")]),e._v(" "),n("p",[e._v("但在另一方面，请考虑采用“组合”方法：将一个对象置入一个新类的内部。此时，不是改写上述代码来达到这个目的，而是在新类里简单地使用一个"),n("code",[e._v("SortVector")]),e._v("。在这种情况下，用于实现"),n("code",[e._v("Compare")]),e._v("接口的内部类就可以“匿名”地创建。如下所示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//: StrSortVector.java\n// Automatically sorted Vector that\n// accepts and produces only Strings\npackage c08;\nimport java.util.*;\n\npublic class StrSortVector {\n  private SortVector v = new SortVector(\n    // Anonymous inner class:\n    new Compare() {\n      public boolean\n      lessThan(Object l, Object r) {\n        return\n          ((String)l).toLowerCase().compareTo(\n          ((String)r).toLowerCase()) < 0;\n      }\n      public boolean\n      lessThanOrEqual(Object l, Object r) {\n        return\n          ((String)l).toLowerCase().compareTo(\n          ((String)r).toLowerCase()) <= 0;\n      }\n    }\n  );\n  private boolean sorted = false;\n  public void addElement(String s) {\n    v.addElement(s);\n    sorted = false;\n  }\n  public String elementAt(int index) {\n    if(!sorted) {\n      v.sort();\n      sorted = true;\n    }\n    return (String)v.elementAt(index);\n  }\n  public Enumeration elements() {\n    if(!sorted) {\n      v.sort();\n      sorted = true;\n    }\n    return v.elements();\n  }\n  // Test it:\n  public static void main(String[] args) {\n    StrSortVector sv = new StrSortVector();\n    sv.addElement("d");\n    sv.addElement("A");\n    sv.addElement("C");\n    sv.addElement("c");\n    sv.addElement("b");\n    sv.addElement("B");\n    sv.addElement("D");\n    sv.addElement("a");\n    Enumeration e = sv.elements();\n    while(e.hasMoreElements())\n      System.out.println(e.nextElement());\n  }\n} ///:~\n')])])]),n("p",[e._v("这样便可快速复用来自"),n("code",[e._v("SortVector")]),e._v("的代码，从而获得希望的功能。然而，并不是来自"),n("code",[e._v("SortVector")]),e._v("和"),n("code",[e._v("Vector")]),e._v("的所有"),n("code",[e._v("public")]),e._v("方法都能在"),n("code",[e._v("StrSortVector")]),e._v("中出现。若按这种形式复用代码，可在新类里为包含类内的每一个方法都生成一个定义。当然，也可以在刚开始时只添加少数几个，以后根据需要再添加更多的。新类的设计最终会稳定下来。")]),e._v(" "),n("p",[e._v("这种方法的好处在于它仍然只接纳"),n("code",[e._v("String")]),e._v("对象，也只产生"),n("code",[e._v("String")]),e._v("对象。而且相应的检查是在编译期间进行的，而非在运行期。当然，只有"),n("code",[e._v("addElement()")]),e._v("和"),n("code",[e._v("elementAt()")]),e._v("才具备这一特性；"),n("code",[e._v("elements()")]),e._v("仍然会产生一个"),n("code",[e._v("Enumeration")]),e._v("（枚举），它在编译期的类型是未定的。当然，对"),n("code",[e._v("Enumeration")]),e._v("以及在"),n("code",[e._v("StrSortVector")]),e._v("中的类型检查会照旧进行；如果真的有什么错误，运行期间会简单地产生一个异常。事实上，我们在编译或运行期间能保证一切都正确无误吗？（也就是说，“代码测试时也许不能保证”，以及“该程序的用户有可能做一些未经我们测试的事情”）。尽管存在其他选择和争论，使用继承都要容易得多，只是在转换时让人深感不便。同样地，一旦为Java加入参数化类型，就有望解决这个问题。")]),e._v(" "),n("p",[e._v("大家在这个类中可以看到有一个名为"),n("code",[e._v("sorted")]),e._v("的标志。每次调用"),n("code",[e._v("addElement()")]),e._v("时，都可对"),n("code",[e._v("Vector")]),e._v("进行排序，而且将其连续保持在一个排好序的状态。但在开始读取之前，人们总是向一个"),n("code",[e._v("Vector")]),e._v("添加大量元素。所以与其在每个"),n("code",[e._v("addElement()")]),e._v("后排序，不如一直等到有人想读取"),n("code",[e._v("Vector")]),e._v("，再对其进行排序。后者的效率要高得多。这种除非绝对必要，否则就不采取行动的方法叫作“懒惰求值”（还有一种类似的技术叫作“懒惰初始化”——除非真的需要一个字段值，否则不进行初始化）。")])])}),[],!1,null,null,null);t.default=r.exports}}]);