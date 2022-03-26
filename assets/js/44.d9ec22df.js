(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{442:function(v,_,t){"use strict";t.r(_);var e=t(56),n=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_12-4-只读类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-只读类"}},[v._v("#")]),v._v(" 12.4 只读类")]),v._v(" "),t("p",[v._v("尽管在一些特定的场合，由"),t("code",[v._v("clone()")]),v._v("产生的本地副本能够获得我们希望的结果，但程序员（方法的作者）不得不亲自禁止别名处理的副作用。假如想制作一个库，令其具有常规用途，但却不能担保它肯定能在正确的类中得以克隆，这时又该怎么办呢？更有可能的一种情况是，假如我们想让别名发挥积极的作用——禁止不必要的对象复制——但却不希望看到由此造成的副作用，那么又该如何处理呢？")]),v._v(" "),t("p",[v._v("一个办法是创建“不变对象”，令其从属于只读类。可定义一个特殊的类，使其中没有任何方法能造成对象内部状态的改变。在这样的一个类中，别名处理是没有问题的。因为我们只能读取内部状态，所以当多处代码都读取相同的对象时，不会出现任何副作用。")]),v._v(" "),t("p",[v._v("作为“不变对象”一个简单例子，Java的标准库包含了“包装器”（wrapper）类，可用于所有基本数据类型。大家可能已发现了这一点，如果想在一个象"),t("code",[v._v("Vector")]),v._v("（只采用"),t("code",[v._v("Object")]),v._v("引用）这样的集合里保存一个"),t("code",[v._v("int")]),v._v("数值，可以将这个"),t("code",[v._v("int")]),v._v("封装到标准库的"),t("code",[v._v("Integer")]),v._v("类内部。如下所示：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("//: ImmutableInteger.java\n// The Integer class cannot be changed\nimport java.util.*;\n\npublic class ImmutableInteger {\n  public static void main(String[] args) {\n    Vector v = new Vector();\n    for(int i = 0; i < 10; i++)\n      v.addElement(new Integer(i));\n    // But how do you change the int\n    // inside the Integer?\n  }\n} ///:~\n")])])]),t("p",[t("code",[v._v("Integer")]),v._v("类（以及基本的“包装器”类）用简单的形式实现了“不变性”：它们没有提供可以修改对象的方法。")]),v._v(" "),t("p",[v._v("若确实需要一个容纳了基本数据类型的对象，并想对基本数据类型进行修改，就必须亲自创建它们。幸运的是，操作非常简单：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("//: MutableInteger.java\n// A changeable wrapper class\nimport java.util.*;\n\nclass IntValue {\n  int n;\n  IntValue(int x) { n = x; }\n  public String toString() {\n    return Integer.toString(n);\n  }\n}\n\npublic class MutableInteger {\n  public static void main(String[] args) {\n    Vector v = new Vector();\n    for(int i = 0; i < 10; i++)\n      v.addElement(new IntValue(i));\n    System.out.println(v);\n    for(int i = 0; i < v.size(); i++)\n      ((IntValue)v.elementAt(i)).n++;\n    System.out.println(v);\n  }\n} ///:~\n")])])]),t("p",[v._v("注意"),t("code",[v._v("n")]),v._v("在这里简化了我们的编码。")]),v._v(" "),t("p",[v._v("若默认的初始化为零已经足够（便不需要构造器），而且不用考虑把它打印出来（便不需要"),t("code",[v._v("toString")]),v._v("），那么"),t("code",[v._v("IntValue")]),v._v("甚至还能更加简单。如下所示：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("class IntValue { int n; }\n")])])]),t("p",[v._v("将元素取出来，再对其进行转换，这多少显得有些笨拙，但那是"),t("code",[v._v("Vector")]),v._v("的问题，不是"),t("code",[v._v("IntValue")]),v._v("的错。")]),v._v(" "),t("h2",{attrs:{id:"_12-4-1-创建只读类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-1-创建只读类"}},[v._v("#")]),v._v(" 12.4.1 创建只读类")]),v._v(" "),t("p",[v._v("完全可以创建自己的只读类，下面是个简单的例子：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('//: Immutable1.java\n// Objects that cannot be modified\n// are immune to aliasing.\n\npublic class Immutable1 {\n  private int data;\n  public Immutable1(int initVal) {\n    data = initVal;\n  }\n  public int read() { return data; }\n  public boolean nonzero() { return data != 0; }\n  public Immutable1 quadruple() {\n    return new Immutable1(data * 4);\n  }\n  static void f(Immutable1 i1) {\n    Immutable1 quad = i1.quadruple();\n    System.out.println("i1 = " + i1.read());\n    System.out.println("quad = " + quad.read());\n  }\n  public static void main(String[] args) {\n    Immutable1 x = new Immutable1(47);\n    System.out.println("x = " + x.read());\n    f(x);\n    System.out.println("x = " + x.read());\n  }\n} ///:~\n')])])]),t("p",[v._v("所有数据都设为"),t("code",[v._v("private")]),v._v("，可以看到没有任何"),t("code",[v._v("public")]),v._v("方法对数据作出修改。事实上，确实需要修改一个对象的方法是"),t("code",[v._v("quadruple()")]),v._v("，但它的作用是新建一个"),t("code",[v._v("Immutable1")]),v._v("对象，初始对象则是原封未动的。")]),v._v(" "),t("p",[v._v("方法"),t("code",[v._v("f()")]),v._v("需要取得一个"),t("code",[v._v("Immutable1")]),v._v("对象，并对其采取不同的操作，而"),t("code",[v._v("main()")]),v._v("的输出显示出没有对x作任何修改。因此，"),t("code",[v._v("x")]),v._v("对象可别名处理许多次，不会造成任何伤害，因为根据"),t("code",[v._v("Immutable1")]),v._v("类的设计，它能保证对象不被改动。")]),v._v(" "),t("h2",{attrs:{id:"_12-4-2-一成不变-的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-2-一成不变-的弊端"}},[v._v("#")]),v._v(" 12.4.2 “一成不变”的弊端")]),v._v(" "),t("p",[v._v("从表面看，不变类的建立似乎是一个好方案。但是，一旦真的需要那种新类型的一个修改的对象，就必须辛苦地进行新对象的创建工作，同时还有可能涉及更频繁的垃圾收集。对有些类来说，这个问题并不是很大。但对其他类来说（比如"),t("code",[v._v("String")]),v._v("类），这一方案的代价显得太高了。")]),v._v(" "),t("p",[v._v("为解决这个问题，我们可以创建一个“同志”类，并使其能够修改。以后只要涉及大量的修改工作，就可换为使用能修改的同志类。完事以后，再切换回不可变的类。")]),v._v(" "),t("p",[v._v("因此，上例可改成下面这个样子：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('//: Immutable2.java\n// A companion class for making changes\n// to immutable objects.\n\nclass Mutable {\n  private int data;\n  public Mutable(int initVal) {\n    data = initVal;\n  }\n  public Mutable add(int x) {\n    data += x;\n    return this;\n  }\n  public Mutable multiply(int x) {\n    data *= x;\n    return this;\n  }\n  public Immutable2 makeImmutable2() {\n    return new Immutable2(data);\n  }\n}\n\npublic class Immutable2 {\n  private int data;\n  public Immutable2(int initVal) {\n    data = initVal;\n  }\n  public int read() { return data; }\n  public boolean nonzero() { return data != 0; }\n  public Immutable2 add(int x) {\n    return new Immutable2(data + x);\n  }\n  public Immutable2 multiply(int x) {\n    return new Immutable2(data * x);\n  }\n  public Mutable makeMutable() {\n    return new Mutable(data);\n  }\n  public static Immutable2 modify1(Immutable2 y){\n    Immutable2 val = y.add(12);\n    val = val.multiply(3);\n    val = val.add(11);\n    val = val.multiply(2);\n    return val;\n  }\n  // This produces the same result:\n  public static Immutable2 modify2(Immutable2 y){\n    Mutable m = y.makeMutable();\n    m.add(12).multiply(3).add(11).multiply(2);\n    return m.makeImmutable2();\n  }\n  public static void main(String[] args) {\n    Immutable2 i2 = new Immutable2(47);\n    Immutable2 r1 = modify1(i2);\n    Immutable2 r2 = modify2(i2);\n    System.out.println("i2 = " + i2.read());\n    System.out.println("r1 = " + r1.read());\n    System.out.println("r2 = " + r2.read());\n  }\n} ///:~\n')])])]),t("p",[v._v("和往常一样，"),t("code",[v._v("Immutable2")]),v._v("包含的方法保留了对象不可变的特征，只要涉及修改，就创建新的对象。完成这些操作的是"),t("code",[v._v("add()")]),v._v("和"),t("code",[v._v("multiply()")]),v._v("方法。同志类叫作"),t("code",[v._v("Mutable")]),v._v("，它也含有"),t("code",[v._v("add()")]),v._v("和"),t("code",[v._v("multiply()")]),v._v("方法。但这些方法能够修改"),t("code",[v._v("Mutable")]),v._v("对象，而不是新建一个。除此以外，"),t("code",[v._v("Mutable")]),v._v("的一个方法可用它的数据产生一个"),t("code",[v._v("Immutable2")]),v._v("对象，反之亦然。")]),v._v(" "),t("p",[v._v("两个静态方法"),t("code",[v._v("modify1()")]),v._v("和"),t("code",[v._v("modify2()")]),v._v("揭示出获得同样结果的两种不同方法。在"),t("code",[v._v("modify1()")]),v._v("中，所有工作都是在"),t("code",[v._v("Immutable2")]),v._v("类中完成的，我们可看到在进程中创建了四个新的"),t("code",[v._v("Immutable2")]),v._v("对象（而且每次重新分配了"),t("code",[v._v("val")]),v._v("，前一个对象就成为垃圾）。")]),v._v(" "),t("p",[v._v("在方法"),t("code",[v._v("modify2()")]),v._v("中，可看到它的第一个行动是获取"),t("code",[v._v("Immutable2 y")]),v._v("，然后从中生成一个"),t("code",[v._v("Mutable")]),v._v("（类似于前面对"),t("code",[v._v("clone()")]),v._v("的调用，但这一次创建了一个不同类型的对象）。随后，用"),t("code",[v._v("Mutable")]),v._v("对象进行大量修改操作，同时用不着新建许多对象。最后，它切换回"),t("code",[v._v("Immutable2")]),v._v("。在这里，我们只创建了两个新对象（"),t("code",[v._v("Mutable")]),v._v("和"),t("code",[v._v("Immutable2")]),v._v("的结果），而不是四个。")]),v._v(" "),t("p",[v._v("这一方法特别适合在下述场合应用：")]),v._v(" "),t("p",[v._v("(1) 需要不可变的对象，而且")]),v._v(" "),t("p",[v._v("(2) 经常需要进行大量修改，或者")]),v._v(" "),t("p",[v._v("(3) 创建新的不变对象代价太高")]),v._v(" "),t("h2",{attrs:{id:"_12-4-3-不变字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-3-不变字符串"}},[v._v("#")]),v._v(" 12.4.3 不变字符串")]),v._v(" "),t("p",[v._v("请观察下述代码：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('//: Stringer.java\n\npublic class Stringer {\n  static String upcase(String s) {\n    return s.toUpperCase();\n  }\n  public static void main(String[] args) {\n    String q = new String("howdy");\n    System.out.println(q); // howdy\n    String qq = upcase(q);\n    System.out.println(qq); // HOWDY\n    System.out.println(q); // howdy\n  }\n} ///:~\n')])])]),t("p",[t("code",[v._v("q")]),v._v("传递进入"),t("code",[v._v("upcase()")]),v._v("时，它实际是"),t("code",[v._v("q")]),v._v("的引用的一个副本。该引用连接的对象实际只在一个统一的物理位置处。引用四处传递的时候，它的引用会得到复制。")]),v._v(" "),t("p",[v._v("若观察对"),t("code",[v._v("upcase()")]),v._v("的定义，会发现传递进入的引用有一个名字"),t("code",[v._v("s")]),v._v("，而且该名字只有在"),t("code",[v._v("upcase()")]),v._v("执行期间才会存在。"),t("code",[v._v("upcase()")]),v._v("完成后，本地引用"),t("code",[v._v("s")]),v._v("便会消失，而"),t("code",[v._v("upcase()")]),v._v("返回结果——还是原来那个字符串，只是所有字符都变成了大写。当然，它返回的实际是结果的一个引用。但它返回的引用最终是为一个新对象的，同时原来的q并未发生变化。所有这些是如何发生的呢？")]),v._v(" "),t("p",[v._v("(1) 隐式常数")]),v._v(" "),t("p",[v._v("若使用下述语句：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('String s = "asdf";\nString x = Stringer.upcase(s);\n')])])]),t("p",[v._v("那么真的希望"),t("code",[v._v("upcase()")]),v._v("方法改变参数或者参数吗？我们通常是不愿意的，因为作为提供给方法的一种信息，参数一般是拿给代码的读者看的，而不是让他们修改。这是一个相当重要的保证，因为它使代码更易编写和理解。")]),v._v(" "),t("p",[v._v("为了在C++中实现这一保证，需要一个特殊关键字的帮助："),t("code",[v._v("const")]),v._v("。利用这个关键字，程序员可以保证一个引用（C++叫“指针”或者“引用”）不会被用来修改原始的对象。但这样一来，C++程序员需要用心记住在所有地方都使用"),t("code",[v._v("const")]),v._v("。这显然易使人混淆，也不容易记住。")]),v._v(" "),t("p",[v._v("(2) 重载"),t("code",[v._v("+")]),v._v("和"),t("code",[v._v("StringBuffer")])]),v._v(" "),t("p",[v._v("利用前面提到的技术，"),t("code",[v._v("String")]),v._v("类的对象被设计成“不可变”。若查阅联机文档中关于"),t("code",[v._v("String")]),v._v("类的内容（本章稍后还要总结它），就会发现类中能够修改"),t("code",[v._v("String")]),v._v("的每个方法实际都创建和返回了一个崭新的"),t("code",[v._v("String")]),v._v("对象，新对象里包含了修改过的信息——原来的"),t("code",[v._v("String")]),v._v("是原封未动的。因此，Java里没有与C++的"),t("code",[v._v("const")]),v._v("对应的特性可用来让编译器支持对象的不可变能力。若想获得这一能力，可以自行设置，就象"),t("code",[v._v("String")]),v._v("那样。")]),v._v(" "),t("p",[v._v("由于"),t("code",[v._v("String")]),v._v("对象是不可变的，所以能够根据情况对一个特定的"),t("code",[v._v("String")]),v._v("进行多次别名处理。因为它是只读的，所以一个引用不可能会改变一些会影响其他引用的东西。因此，只读对象可以很好地解决别名问题。")]),v._v(" "),t("p",[v._v("通过修改产生对象的一个崭新版本，似乎可以解决修改对象时的所有问题，就象"),t("code",[v._v("String")]),v._v("那样。但对某些操作来讲，这种方法的效率并不高。一个典型的例子便是为"),t("code",[v._v("String")]),v._v("对象重载的运算符"),t("code",[v._v("+")]),v._v("。“重载”意味着在与一个特定的类使用时，它的含义已发生了变化（用于"),t("code",[v._v("String")]),v._v("的"),t("code",[v._v("+")]),v._v("和"),t("code",[v._v("+=")]),v._v("是Java中能被重载的唯一运算符，Java不允许程序员重载其他任何运算符——注释④）。")]),v._v(" "),t("p",[v._v("④：C++允许程序员随意重载运算符。由于这通常是一个复杂的过程（参见《Thinking in C++》，Prentice-Hall于1995年出版），所以Java的设计者认定它是一种“糟糕”的特性，决定不在Java中采用。但具有讽剌意味的是，运算符的重载在Java中要比在C++中容易得多。")]),v._v(" "),t("p",[v._v("针对"),t("code",[v._v("String")]),v._v("对象使用时，"),t("code",[v._v("+")]),v._v("允许我们将不同的字符串连接起来：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('String s = "abc" + foo + "def" + Integer.toString(47);\n')])])]),t("p",[v._v("可以想象出它“可能”是如何工作的：字符串"),t("code",[v._v('"abc"')]),v._v("可以有一个方法"),t("code",[v._v("append()")]),v._v("，它新建了一个字符串，其中包含"),t("code",[v._v('"abc"')]),v._v("以及"),t("code",[v._v("foo")]),v._v('的内容；这个新字符串然后再创建另一个新字符串，在其中添加"'),t("code",[v._v('def"')]),v._v("；以此类推。")]),v._v(" "),t("p",[v._v("这一设想是行得通的，但它要求创建大量字符串对象。尽管最终的目的只是获得包含了所有内容的一个新字符串，但中间却要用到大量字符串对象，而且要不断地进行垃圾收集。我怀疑Java的设计者是否先试过种方法（这是软件开发的一个教训——除非自己试试代码，并让某些东西运行起来，否则不可能真正了解系统）。我还怀疑他们是否早就发现这样做获得的性能是不能接受的。")]),v._v(" "),t("p",[v._v("解决的方法是象前面介绍的那样制作一个可变的同志类。对字符串来说，这个同志类叫作"),t("code",[v._v("StringBuffer")]),v._v("，编译器可以自动创建一个"),t("code",[v._v("StringBuffer")]),v._v("，以便计算特定的表达式，特别是面向"),t("code",[v._v("String")]),v._v("对象应用重载过的运算符"),t("code",[v._v("+")]),v._v("和"),t("code",[v._v("+=")]),v._v("时。下面这个例子可以解决这个问题：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('//: ImmutableStrings.java\n// Demonstrating StringBuffer\n\npublic class ImmutableStrings {\n  public static void main(String[] args) {\n    String foo = "foo";\n    String s = "abc" + foo +\n      "def" + Integer.toString(47);\n    System.out.println(s);\n    // The "equivalent" using StringBuffer:\n    StringBuffer sb =\n      new StringBuffer("abc"); // Creates String!\n    sb.append(foo);\n    sb.append("def"); // Creates String!\n    sb.append(Integer.toString(47));\n    System.out.println(sb);\n  }\n} ///:~\n')])])]),t("p",[v._v("创建字符串"),t("code",[v._v("s")]),v._v("时，编译器做的工作大致等价于后面使用"),t("code",[v._v("sb")]),v._v("的代码——创建一个"),t("code",[v._v("StringBuffer")]),v._v("，并用"),t("code",[v._v("append()")]),v._v("将新字符直接加入"),t("code",[v._v("StringBuffer")]),v._v("对象（而不是每次都产生新对象）。尽管这样做更有效，但不值得每次都创建象"),t("code",[v._v('"abc"')]),v._v("和"),t("code",[v._v('"def"')]),v._v("这样的引号字符串，编译器会把它们都转换成"),t("code",[v._v("String")]),v._v("对象。所以尽管"),t("code",[v._v("StringBuffer")]),v._v("提供了更高的效率，但会产生比我们希望的多得多的对象。")]),v._v(" "),t("h2",{attrs:{id:"_12-4-4-string和stringbuffer类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-4-string和stringbuffer类"}},[v._v("#")]),v._v(" 12.4.4 "),t("code",[v._v("String")]),v._v("和"),t("code",[v._v("StringBuffer")]),v._v("类")]),v._v(" "),t("p",[v._v("这里总结一下同时适用于"),t("code",[v._v("String")]),v._v("和"),t("code",[v._v("StringBuffer")]),v._v("的方法，以便对它们相互间的沟通方式有一个印象。这些表格并未把每个单独的方法都包括进去，而是包含了与本次讨论有重要关系的方法。那些已被重载的方法用单独一行总结。")]),v._v(" "),t("p",[v._v("首先总结"),t("code",[v._v("String")]),v._v("类的各种方法：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("方法")]),v._v(" "),t("th",[v._v("参数，重载")]),v._v(" "),t("th",[v._v("用途")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("构造器")]),v._v(" "),t("td",[v._v("已被重载 默认，"),t("code",[v._v("String")]),v._v("，"),t("code",[v._v("StringBuffer")]),v._v("，"),t("code",[v._v("char")]),v._v("数组，"),t("code",[v._v("byte")]),v._v("数组")]),v._v(" "),t("td",[v._v("创建"),t("code",[v._v("String")]),v._v("对象")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("length()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[t("code",[v._v("String")]),v._v("中的字符数量")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("charAt()")])]),v._v(" "),t("td",[t("code",[v._v("int Index")])]),v._v(" "),t("td",[v._v("位于"),t("code",[v._v("String")]),v._v("内某个位置的"),t("code",[v._v("char")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("getChars()")]),v._v("，"),t("code",[v._v("getBytes")])]),v._v(" "),t("td",[v._v("开始复制的起点和终点，要向其中复制内容的数组，对目标数组的一个索引")]),v._v(" "),t("td",[v._v("将"),t("code",[v._v("char")]),v._v("或"),t("code",[v._v("byte")]),v._v("复制到外部数组内部")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("toCharArray()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("产生一个"),t("code",[v._v("char[]")]),v._v("，其中包含了"),t("code",[v._v("String")]),v._v("内部的字符")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("equals()")]),v._v("，"),t("code",[v._v("equalsIgnoreCase()")])]),v._v(" "),t("td",[v._v("用于对比的一个String")]),v._v(" "),t("td",[v._v("对两个字符串的内容进行等价性检查")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("compareTo()")])]),v._v(" "),t("td",[v._v("用于对比的一个"),t("code",[v._v("String")])]),v._v(" "),t("td",[v._v("结果为负、零或正，具体取决于"),t("code",[v._v("String")]),v._v("和参数的字典顺序。注意大写和小写不是相等的！")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("regionMatches()")])]),v._v(" "),t("td",[v._v("这个"),t("code",[v._v("String")]),v._v("以及其他"),t("code",[v._v("String")]),v._v("的位置偏移，以及要比较的区域长度。重载加入了“忽略大小写”的特性")]),v._v(" "),t("td",[v._v("一个布尔结果，指出要对比的区域是否相同")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("startsWith()")])]),v._v(" "),t("td",[v._v("可能以它开头的"),t("code",[v._v("String")]),v._v("。重载在参数里加入了偏移")]),v._v(" "),t("td",[v._v("一个布尔结果，指出"),t("code",[v._v("String")]),v._v("是否以那个参数开头")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("endsWith()")])]),v._v(" "),t("td",[v._v("可能是这个"),t("code",[v._v("String")]),v._v("后缀的一个"),t("code",[v._v("String")])]),v._v(" "),t("td",[v._v("一个布尔结果，指出参数是不是一个后缀")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("indexOf()")]),v._v(","),t("code",[v._v("lastIndexOf()")])]),v._v(" "),t("td",[v._v("已重载："),t("code",[v._v("char")]),v._v("，"),t("code",[v._v("char")]),v._v("和起始索引，"),t("code",[v._v("String")]),v._v("，"),t("code",[v._v("String")]),v._v("和起始索引")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("substring()")])]),v._v(" "),t("td",[v._v("已重载：起始索引，起始索引和结束索引")]),v._v(" "),t("td",[v._v("返回一个新的"),t("code",[v._v("String")]),v._v("对象，其中包含了指定的字符子集")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("concat()")])]),v._v(" "),t("td",[v._v("想连结的"),t("code",[v._v("String")])]),v._v(" "),t("td",[v._v("返回一个新"),t("code",[v._v("String")]),v._v("对象，其中包含了原始"),t("code",[v._v("String")]),v._v("的字符，并在后面加上由参数提供的字符")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("relpace()")])]),v._v(" "),t("td",[v._v("要查找的老字符，要用它替换的新字符")]),v._v(" "),t("td",[v._v("返回一个新"),t("code",[v._v("String")]),v._v("对象，其中已完成了替换工作。若没有找到相符的搜索项，就沿用老字符串")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("toLowerCase()")]),v._v(","),t("code",[v._v("toUpperCase()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("返回一个新"),t("code",[v._v("String")]),v._v("对象，其中所有字符的大小写形式都进行了统一。若不必修改，则沿用老字符串")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("trim()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("返回一个新的"),t("code",[v._v("String")]),v._v("对象，头尾空白均已删除。若毋需改动，则沿用老字符串")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("valueOf()")])]),v._v(" "),t("td",[v._v("已重载："),t("code",[v._v("object")]),v._v("，"),t("code",[v._v("char[]")]),v._v("，"),t("code",[v._v("char[]")]),v._v("和偏移以及计数，"),t("code",[v._v("boolean")]),v._v("，"),t("code",[v._v("char")]),v._v("，"),t("code",[v._v("int")]),v._v("，"),t("code",[v._v("long")]),v._v("，"),t("code",[v._v("float")]),v._v("，"),t("code",[v._v("double")])]),v._v(" "),t("td",[v._v("返回一个"),t("code",[v._v("String")]),v._v("，其中包含参数的一个字符表现形式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("Intern()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("为每个独一无二的字符顺序都产生一个（而且只有一个）"),t("code",[v._v("String")]),v._v("引用")])])])]),v._v(" "),t("p",[v._v("可以看到，一旦有必要改变原来的内容，每个"),t("code",[v._v("String")]),v._v("方法都小心地返回了一个新的"),t("code",[v._v("String")]),v._v("对象。另外要注意的一个问题是，若内容不需要改变，则方法只返回指向原来那个"),t("code",[v._v("String")]),v._v("的一个引用。这样做可以节省存储空间和系统开销。")]),v._v(" "),t("p",[v._v("下面列出有关"),t("code",[v._v("StringBuffer")]),v._v("（字符串缓冲）类的方法：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("方法")]),v._v(" "),t("th",[v._v("参数，重载")]),v._v(" "),t("th",[v._v("用途")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("构造器")]),v._v(" "),t("td",[v._v("已重载：默认，要创建的缓冲区长度，要根据它创建的"),t("code",[v._v("String")])]),v._v(" "),t("td",[v._v("新建一个"),t("code",[v._v("StringBuffer")]),v._v("对象")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("toString()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("根据这个"),t("code",[v._v("StringBuffer")]),v._v("创建一个"),t("code",[v._v("String")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("length()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[t("code",[v._v("StringBuffer")]),v._v("中的字符数量")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("capacity()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("返回目前分配的空间大小")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("ensureCapacity()")])]),v._v(" "),t("td",[v._v("用于表示希望容量的一个整数")]),v._v(" "),t("td",[v._v("使"),t("code",[v._v("StringBuffer")]),v._v("容纳至少希望的空间大小")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("setLength()")])]),v._v(" "),t("td",[v._v("用于指示缓冲区内字符串新长度的一个整数")]),v._v(" "),t("td",[v._v("缩短或扩充前一个字符串。如果是扩充，则用"),t("code",[v._v("null")]),v._v("值填充空隙")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("charAt()")])]),v._v(" "),t("td",[v._v("表示目标元素所在位置的一个整数")]),v._v(" "),t("td",[v._v("返回位于缓冲区指定位置处的"),t("code",[v._v("char")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("setCharAt()")])]),v._v(" "),t("td",[v._v("代表目标元素位置的一个整数以及元素的一个新"),t("code",[v._v("char")]),v._v("值")]),v._v(" "),t("td",[v._v("修改指定位置处的值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("getChars()")])]),v._v(" "),t("td",[v._v("复制的起点和终点，要在其中复制的数组以及目标数组的一个索引")]),v._v(" "),t("td",[v._v("将"),t("code",[v._v("char")]),v._v("复制到一个外部数组。和"),t("code",[v._v("String")]),v._v("不同，这里没有"),t("code",[v._v("getBytes()")]),v._v("可供使用")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("append()")])]),v._v(" "),t("td",[v._v("已重载："),t("code",[v._v("Object")]),v._v("，"),t("code",[v._v("String")]),v._v("，"),t("code",[v._v("char[]")]),v._v("，特定偏移和长度的"),t("code",[v._v("char[]")]),v._v("，"),t("code",[v._v("boolean")]),v._v("，"),t("code",[v._v("char")]),v._v("，"),t("code",[v._v("int")]),v._v("，"),t("code",[v._v("long")]),v._v("，"),t("code",[v._v("float")]),v._v("，"),t("code",[v._v("double")])]),v._v(" "),t("td",[v._v("将参数转换成一个字符串，并将其追加到当前缓冲区的末尾。若有必要，同时增大缓冲区的长度")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("insert()")])]),v._v(" "),t("td",[v._v("已重载，第一个参数代表开始插入的位置："),t("code",[v._v("Object")]),v._v("，"),t("code",[v._v("String")]),v._v("，"),t("code",[v._v("char[]")]),v._v("，"),t("code",[v._v("boolean")]),v._v("，"),t("code",[v._v("char")]),v._v("，"),t("code",[v._v("int")]),v._v("，"),t("code",[v._v("long")]),v._v("，"),t("code",[v._v("float")]),v._v("，"),t("code",[v._v("double")])]),v._v(" "),t("td",[v._v("第二个参数转换成一个字符串，并插入当前缓冲区。插入位置在偏移区域的起点处。若有必要，同时会增大缓冲区的长度")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("reverse()")])]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("反转缓冲内的字符顺序")])])])]),v._v(" "),t("p",[v._v("最常用的一个方法是"),t("code",[v._v("append()")]),v._v("。在计算包含了"),t("code",[v._v("+")]),v._v("和"),t("code",[v._v("+=")]),v._v("运算符的"),t("code",[v._v("String")]),v._v("表达式时，编译器便会用到这个方法。"),t("code",[v._v("insert()")]),v._v("方法采用类似的形式。这两个方法都能对缓冲区进行重要的操作，不需要另建新对象。")]),v._v(" "),t("h2",{attrs:{id:"_12-4-5-字符串的特殊性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-5-字符串的特殊性"}},[v._v("#")]),v._v(" 12.4.5 字符串的特殊性")]),v._v(" "),t("p",[v._v("现在，大家已知道"),t("code",[v._v("String")]),v._v("类并非仅仅是Java提供的另一个类。"),t("code",[v._v("String")]),v._v("里含有大量特殊的类。通过编译器和特殊的重载或重载运算符"),t("code",[v._v("+")]),v._v("和"),t("code",[v._v("+=")]),v._v("，可将引号字符串转换成一个"),t("code",[v._v("String")]),v._v("。在本章中，大家已见识了剩下的一种特殊情况：用同志"),t("code",[v._v("StringBuffer")]),v._v("精心构造的“不可变”能力，以及编译器中出现的一些有趣现象。")])])}),[],!1,null,null,null);_.default=n.exports}}]);