(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{520:function(t,n,a){"use strict";a.r(n);var e=a(56),i=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-2-方法重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-方法重载"}},[t._v("#")]),t._v(" 4.2 方法重载")]),t._v(" "),a("p",[t._v("在任何程序设计语言中，一项重要的特性就是名字的运用。我们创建一个对象时，会分配到一个保存区域的名字。方法名代表的是一种具体的行动。通过用名字描述自己的系统，可使自己的程序更易人们理解和修改。它非常象写散文——目的是与读者沟通。")]),t._v(" "),a("p",[t._v("我们用名字引用或描述所有对象与方法。若名字选得好，可使自己及其他人更易理解自己的代码。")]),t._v(" "),a("p",[t._v("将人类语言中存在细致差别的概念“映射”到一种程序设计语言中时，会出现一些特殊的问题。在日常生活中，我们用相同的词表达多种不同的含义——即词的“重载”。我们说“洗衬衫”、“洗车”以及“洗狗”。但若强制象下面这样说，就显得很愚蠢：“衬衫洗 衬衫”、“车洗 车”以及“狗洗 狗”。这是由于听众根本不需要对执行的行动作任何明确的区分。人类的大多数语言都具有很强的“冗余”性，所以即使漏掉了几个词，仍然可以推断出含义。我们不需要独一无二的标识符——可从具体的语境中推论出含义。")]),t._v(" "),a("p",[t._v("大多数程序设计语言（特别是C）要求我们为每个函数都设定一个独一无二的标识符。所以绝对不能用一个名为"),a("code",[t._v("print()")]),t._v("的函数来显示整数，再用另一个"),a("code",[t._v("print()")]),t._v("显示浮点数——每个函数都要求具备唯一的名字。")]),t._v(" "),a("p",[t._v("在Java里，另一项因素强迫方法名出现重载情况：构造器。由于构造器的名字由类名决定，所以只能有一个构造器名称。但假若我们想用多种方式创建一个对象呢？例如，假设我们想创建一个类，令其用标准方式进行初始化，另外从文件里读取信息来初始化。此时，我们需要两个构造器，一个没有参数（默认构造器），另一个将字符串作为参数——用于初始化对象的那个文件的名字。由于都是构造器，所以它们必须有相同的名字，亦即类名。所以为了让相同的方法名伴随不同的参数类型使用，“方法重载”是非常关键的一项措施。同时，尽管方法重载是构造器必需的，但它亦可应用于其他任何方法，且用法非常方便。")]),t._v(" "),a("p",[t._v("在下面这个例子里，我们向大家同时展示了重载构造器和重载的原始方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: Overloading.java\n// Demonstration of both constructor\n// and ordinary method overloading.\nimport java.util.*;\n\nclass Tree {\n  int height;\n  Tree() {\n    prt("Planting a seedling");\n    height = 0;\n  }\n  Tree(int i) {\n    prt("Creating new Tree that is "\n        + i + " feet tall");\n    height = i;\n  }\n  void info() {\n    prt("Tree is " + height\n        + " feet tall");\n  }\n  void info(String s) {\n    prt(s + ": Tree is "\n        + height + " feet tall");\n  }\n  static void prt(String s) {\n    System.out.println(s);\n  }\n}\n\npublic class Overloading {\n  public static void main(String[] args) {\n    for(int i = 0; i < 5; i++) {\n      Tree t = new Tree(i);\n      t.info();\n      t.info("overloaded method");\n    }\n    // Overloaded constructor:\n    new Tree();\n  }\n} ///:~\n')])])]),a("p",[a("code",[t._v("Tree")]),t._v("既可创建成一颗种子，不含任何参数；亦可创建成生长在苗圃中的植物。为支持这种创建，共使用了两个构造器，一个没有参数（我们把没有参数的构造器称作“默认构造器”，注释①），另一个采用现成的高度。")]),t._v(" "),a("p",[t._v("①：在Sun公司出版的一些Java资料中，用简陋但很说明问题的词语称呼这类构造器——“无参数构造器”（no-arg constructors）。但“默认构造器”这个称呼已使用了许多年，所以我选择了它。")]),t._v(" "),a("p",[t._v("我们也有可能希望通过多种途径调用"),a("code",[t._v("info()")]),t._v("方法。例如，假设我们有一条额外的消息想显示出来，就使用"),a("code",[t._v("String")]),t._v("参数；而假设没有其他话可说，就不使用。由于为显然相同的概念赋予了两个独立的名字，所以看起来可能有些古怪。幸运的是，方法重载允许我们为两者使用相同的名字。")]),t._v(" "),a("h2",{attrs:{id:"_4-2-1-区分重载方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-区分重载方法"}},[t._v("#")]),t._v(" 4.2.1 区分重载方法")]),t._v(" "),a("p",[t._v("若方法有同样的名字，Java怎样知道我们指的哪一个方法呢？这里有一个简单的规则：每个重载的方法都必须采取独一无二的参数类型列表。")]),t._v(" "),a("p",[t._v("若稍微思考几秒钟，就会想到这样一个问题：除根据参数的类型，程序员如何区分两个同名方法的差异呢？")]),t._v(" "),a("p",[t._v("即使参数的顺序也足够我们区分两个方法（尽管我们通常不愿意采用这种方法，因为它会产生难以维护的代码）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: OverloadingOrder.java\n// Overloading based on the order of\n// the arguments.\n\npublic class OverloadingOrder {\n  static void print(String s, int i) {\n    System.out.println(\n      "String: " + s +\n      ", int: " + i);\n  }\n  static void print(int i, String s) {\n    System.out.println(\n      "int: " + i +\n      ", String: " + s);\n  }\n  public static void main(String[] args) {\n    print("String first", 11);\n    print(99, "Int first");\n  }\n} ///:~\n')])])]),a("p",[t._v("两个"),a("code",[t._v("print()")]),t._v("方法有完全一致的参数，但顺序不同，可据此区分它们。")]),t._v(" "),a("h2",{attrs:{id:"_4-2-2-基本类型的重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-基本类型的重载"}},[t._v("#")]),t._v(" 4.2.2 基本类型的重载")]),t._v(" "),a("p",[t._v("主（数据）类型能从一个“较小”的类型自动转变成一个“较大”的类型。涉及重载问题时，这会稍微造成一些混乱。下面这个例子揭示了将基本类型传递给重载的方法时发生的情况：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: PrimitiveOverloading.java\n// Promotion of primitives and overloading\n\npublic class PrimitiveOverloading {\n  // boolean can\'t be automatically converted\n  static void prt(String s) {\n    System.out.println(s);\n  }\n\n  void f1(char x) { prt("f1(char)"); }\n  void f1(byte x) { prt("f1(byte)"); }\n  void f1(short x) { prt("f1(short)"); }\n  void f1(int x) { prt("f1(int)"); }\n  void f1(long x) { prt("f1(long)"); }\n  void f1(float x) { prt("f1(float)"); }\n  void f1(double x) { prt("f1(double)"); }\n\n  void f2(byte x) { prt("f2(byte)"); }\n  void f2(short x) { prt("f2(short)"); }\n  void f2(int x) { prt("f2(int)"); }\n  void f2(long x) { prt("f2(long)"); }\n  void f2(float x) { prt("f2(float)"); }\n  void f2(double x) { prt("f2(double)"); }\n\n  void f3(short x) { prt("f3(short)"); }\n  void f3(int x) { prt("f3(int)"); }\n  void f3(long x) { prt("f3(long)"); }\n  void f3(float x) { prt("f3(float)"); }\n  void f3(double x) { prt("f3(double)"); }\n\n  void f4(int x) { prt("f4(int)"); }\n  void f4(long x) { prt("f4(long)"); }\n  void f4(float x) { prt("f4(float)"); }\n  void f4(double x) { prt("f4(double)"); }\n\n  void f5(long x) { prt("f5(long)"); }\n  void f5(float x) { prt("f5(float)"); }\n  void f5(double x) { prt("f5(double)"); }\n\n  void f6(float x) { prt("f6(float)"); }\n  void f6(double x) { prt("f6(double)"); }\n\n  void f7(double x) { prt("f7(double)"); }\n\n  void testConstVal() {\n    prt("Testing with 5");\n    f1(5);f2(5);f3(5);f4(5);f5(5);f6(5);f7(5);\n  }\n  void testChar() {\n    char x = \'x\';\n    prt("char argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testByte() {\n    byte x = 0;\n    prt("byte argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testShort() {\n    short x = 0;\n    prt("short argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testInt() {\n    int x = 0;\n    prt("int argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testLong() {\n    long x = 0;\n    prt("long argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testFloat() {\n    float x = 0;\n    prt("float argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  void testDouble() {\n    double x = 0;\n    prt("double argument:");\n    f1(x);f2(x);f3(x);f4(x);f5(x);f6(x);f7(x);\n  }\n  public static void main(String[] args) {\n    PrimitiveOverloading p =\n      new PrimitiveOverloading();\n    p.testConstVal();\n    p.testChar();\n    p.testByte();\n    p.testShort();\n    p.testInt();\n    p.testLong();\n    p.testFloat();\n    p.testDouble();\n  }\n} ///:~\n')])])]),a("p",[t._v("若观察这个程序的输出，就会发现常数值5被当作一个"),a("code",[t._v("int")]),t._v("值处理。所以假若可以使用一个重载的方法，就能获取它使用的"),a("code",[t._v("int")]),t._v("值。在其他所有情况下，若我们的数据类型“小于”方法中使用的参数，就会对那种数据类型进行“转型”处理。"),a("code",[t._v("char")]),t._v("获得的效果稍有些不同，这是由于假期它没有发现一个准确的"),a("code",[t._v("char")]),t._v("匹配，就会转型为"),a("code",[t._v("int")]),t._v("。")]),t._v(" "),a("p",[t._v("若我们的参数“大于”重载方法期望的参数，这时又会出现什么情况呢？对前述程序的一个修改揭示出了答案：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: Demotion.java\n// Demotion of primitives and overloading\n\npublic class Demotion {\n  static void prt(String s) {\n    System.out.println(s);\n  }\n\n  void f1(char x) { prt("f1(char)"); }\n  void f1(byte x) { prt("f1(byte)"); }\n  void f1(short x) { prt("f1(short)"); }\n  void f1(int x) { prt("f1(int)"); }\n  void f1(long x) { prt("f1(long)"); }\n  void f1(float x) { prt("f1(float)"); }\n  void f1(double x) { prt("f1(double)"); }\n\n  void f2(char x) { prt("f2(char)"); }\n  void f2(byte x) { prt("f2(byte)"); }\n  void f2(short x) { prt("f2(short)"); }\n  void f2(int x) { prt("f2(int)"); }\n  void f2(long x) { prt("f2(long)"); }\n  void f2(float x) { prt("f2(float)"); }\n\n  void f3(char x) { prt("f3(char)"); }\n  void f3(byte x) { prt("f3(byte)"); }\n  void f3(short x) { prt("f3(short)"); }\n  void f3(int x) { prt("f3(int)"); }\n  void f3(long x) { prt("f3(long)"); }\n\n  void f4(char x) { prt("f4(char)"); }\n  void f4(byte x) { prt("f4(byte)"); }\n  void f4(short x) { prt("f4(short)"); }\n  void f4(int x) { prt("f4(int)"); }\n\n  void f5(char x) { prt("f5(char)"); }\n  void f5(byte x) { prt("f5(byte)"); }\n  void f5(short x) { prt("f5(short)"); }\n\n  void f6(char x) { prt("f6(char)"); }\n  void f6(byte x) { prt("f6(byte)"); }\n\n  void f7(char x) { prt("f7(char)"); }\n\n  void testDouble() {\n    double x = 0;\n    prt("double argument:");\n    f1(x);f2((float)x);f3((long)x);f4((int)x);\n    f5((short)x);f6((byte)x);f7((char)x);\n  }\n  public static void main(String[] args) {\n    Demotion p = new Demotion();\n    p.testDouble();\n  }\n} ///:~\n')])])]),a("p",[t._v("在这里，方法采用了容量更小、范围更窄的基本类型值。若我们的参数范围比它宽，就必须用括号中的类型名将其转为适当的类型。如果不这样做，编译器会报告出错。")]),t._v(" "),a("p",[t._v("大家可注意到这是一种“缩小转换”。也就是说，在转换或转型过程中可能丢失一些信息。这正是编译器强迫我们明确定义的原因——我们需明确表达想要转型的愿望。")]),t._v(" "),a("h2",{attrs:{id:"_4-2-3-返回值重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-返回值重载"}},[t._v("#")]),t._v(" 4.2.3 返回值重载")]),t._v(" "),a("p",[t._v("我们很易对下面这些问题感到迷惑：为什么只有类名和方法参数列出？为什么不根据返回值对方法加以区分？比如对下面这两个方法来说，虽然它们有同样的名字和参数，但其实是很容易区分的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void f() {}\nint f() {}\n")])])]),a("p",[t._v("若编译器可根据上下文（语境）明确判断出含义，比如在"),a("code",[t._v("int x=f()")]),t._v("中，那么这样做完全没有问题。然而，我们也可能调用一个方法，同时忽略返回值；我们通常把这称为“为它的副作用去调用一个方法”，因为我们关心的不是返回值，而是方法调用的其他效果。所以假如我们象下面这样调用方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f();\n")])])]),a("p",[t._v("Java怎样判断"),a("code",[t._v("f()")]),t._v("的具体调用方式呢？而且别人如何识别并理解代码呢？由于存在这一类的问题，所以不能根据返回值类型来区分重载的方法。")]),t._v(" "),a("h2",{attrs:{id:"_4-2-4-默认构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-默认构造器"}},[t._v("#")]),t._v(" 4.2.4 默认构造器")]),t._v(" "),a("p",[t._v("正如早先指出的那样，默认构造器是没有参数的。它们的作用是创建一个“空对象”。若创建一个没有构造器的类，则编译程序会帮我们自动创建一个默认构造器。例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//: DefaultConstructor.java\n\nclass Bird {\n  int i;\n}\n\npublic class DefaultConstructor {\n  public static void main(String[] args) {\n    Bird nc = new Bird(); // default!\n  }\n} ///:~\n")])])]),a("p",[t._v("对于下面这一行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new Bird();\n")])])]),a("p",[t._v("它的作用是新建一个对象，并调用默认构造器——即使尚未明确定义一个象这样的构造器。若没有它，就没有方法可以调用，无法构建我们的对象。然而，如果已经定义了一个构造器（无论是否有参数），编译程序都不会帮我们自动生成一个：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Bush {\nBush(int i) {}\nBush(double d) {}\n}\n")])])]),a("p",[t._v("现在，假若使用下述代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new Bush();\n")])])]),a("p",[t._v("编译程序就会报告自己找不到一个相符的构造器。就好象我们没有设置任何构造器，编译程序会说：“你看来似乎需要一个构造器，所以让我们给你制造一个吧。”但假如我们写了一个构造器，编译程序就会说：“啊，你已写了一个构造器，所以我知道你想干什么；如果你不放置一个默认的，是由于你打算省略它。”")]),t._v(" "),a("h2",{attrs:{id:"_4-2-5-this关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-this关键字"}},[t._v("#")]),t._v(" 4.2.5 "),a("code",[t._v("this")]),t._v("关键字")]),t._v(" "),a("p",[t._v("如果有两个同类型的对象，分别叫作"),a("code",[t._v("a")]),t._v("和"),a("code",[t._v("b")]),t._v("，那么您也许不知道如何为这两个对象同时调用一个"),a("code",[t._v("f()")]),t._v("方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Banana { void f(int i) { /* ... */ } }\nBanana a = new Banana(), b = new Banana();\na.f(1);\nb.f(2);\n")])])]),a("p",[t._v("若只有一个名叫"),a("code",[t._v("f()")]),t._v("的方法，它怎样才能知道自己是为"),a("code",[t._v("a")]),t._v("还是为"),a("code",[t._v("b")]),t._v("调用的呢？")]),t._v(" "),a("p",[t._v("为了能用简便的、面向对象的语法来书写代码——亦即“将消息发给对象”，编译器为我们完成了一些幕后工作。其中的秘密就是第一个参数传递给方法"),a("code",[t._v("f()")]),t._v("，而且那个参数是准备操作的那个对象的引用。所以前述的两个方法调用就变成了下面这样的形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Banana.f(a,1);\nBanana.f(b,2);\n")])])]),a("p",[t._v("这是内部的表达形式，我们并不能这样书写表达式，并试图让编译器接受它。但是，通过它可理解幕后到底发生了什么事情。")]),t._v(" "),a("p",[t._v("假定我们在一个方法的内部，并希望获得当前对象的引用。由于那个引用是由编译器“秘密”传递的，所以没有标识符可用。然而，针对这一目的有个专用的关键字："),a("code",[t._v("this")]),t._v("。"),a("code",[t._v("this")]),t._v("关键字（注意只能在方法内部使用）可为已调用了其方法的那个对象生成相应的引用。可象对待其他任何对象引用一样对待这个引用。但要注意，假若准备从自己某个类的另一个方法内部调用一个类方法，就不必使用"),a("code",[t._v("this")]),t._v("。只需简单地调用那个方法即可。当前的"),a("code",[t._v("this")]),t._v("引用会自动应用于其他方法。所以我们能使用下面这样的代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Apricot {\nvoid pick() { /* ... */ }\nvoid pit() { pick(); /* ... */ }\n}\n")])])]),a("p",[t._v("在"),a("code",[t._v("pit()")]),t._v("内部，我们可以说"),a("code",[t._v("this.pick()")]),t._v("，但事实上无此必要。编译器能帮我们自动完成。"),a("code",[t._v("this")]),t._v("关键字只能用于那些特殊的类——需明确使用当前对象的引用。例如，假若您希望将引用返回给当前对象，那么它经常在"),a("code",[t._v("return")]),t._v("语句中使用。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: Leaf.java\n// Simple use of the "this" keyword\n\npublic class Leaf {\n  private int i = 0;\n  Leaf increment() {\n    i++;\n    return this;\n  }\n  void print() {\n    System.out.println("i = " + i);\n  }\n  public static void main(String[] args) {\n    Leaf x = new Leaf();\n    x.increment().increment().increment().print();\n  }\n} ///:~\n')])])]),a("p",[t._v("由于"),a("code",[t._v("increment()")]),t._v("通过"),a("code",[t._v("this")]),t._v("关键字返回当前对象的引用，所以可以方便地对同一个对象执行多项操作。")]),t._v(" "),a("p",[t._v("(1) 在构造器里调用构造器")]),t._v(" "),a("p",[t._v("若为一个类写了多个构造器，那么经常都需要在一个构造器里调用另一个构造器，以避免写重复的代码。可用"),a("code",[t._v("this")]),t._v("关键字做到这一点。")]),t._v(" "),a("p",[t._v("通常，当我们说"),a("code",[t._v("this")]),t._v("的时候，都是指“这个对象”或者“当前对象”。而且它本身会产生当前对象的一个引用。在一个构造器中，若为其赋予一个参数列表，那么"),a("code",[t._v("this")]),t._v("关键字会具有不同的含义：它会对与那个参数列表相符的构造器进行明确的调用。这样一来，我们就可通过一条直接的途径来调用其他构造器。如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: Flower.java\n// Calling constructors with "this"\n\npublic class Flower {\n  private int petalCount = 0;\n  private String s = new String("null");\n  Flower(int petals) {\n    petalCount = petals;\n    System.out.println(\n      "Constructor w/ int arg only, petalCount= "\n      + petalCount);\n  }\n  Flower(String ss) {\n    System.out.println(\n      "Constructor w/ String arg only, s=" + ss);\n    s = ss;\n  }\n  Flower(String s, int petals) {\n    this(petals);\n//!    this(s); // Can\'t call two!\n    this.s = s; // Another use of "this"\n    System.out.println("String & int args");\n  }\n  Flower() {\n    this("hi", 47);\n    System.out.println(\n      "default constructor (no args)");\n  }\n  void print() {\n//!    this(11); // Not inside non-constructor!\n    System.out.println(\n      "petalCount = " + petalCount + " s = "+ s);\n  }\n  public static void main(String[] args) {\n    Flower x = new Flower();\n    x.print();\n  }\n} ///:~\n')])])]),a("p",[t._v("其中，构造器"),a("code",[t._v("Flower(String s,int petals)")]),t._v("向我们揭示出这样一个问题：尽管可用"),a("code",[t._v("this")]),t._v("调用一个构造器，但不可调用两个。除此以外，构造器调用必须是我们做的第一件事情，否则会收到编译程序的报错信息。")]),t._v(" "),a("p",[t._v("这个例子也向大家展示了"),a("code",[t._v("this")]),t._v("的另一项用途。由于参数"),a("code",[t._v("s")]),t._v("的名字以及成员数据"),a("code",[t._v("s")]),t._v("的名字是相同的，所以会出现混淆。为解决这个问题，可用"),a("code",[t._v("this.s")]),t._v("来引用成员数据。经常都会在Java代码里看到这种形式的应用，本书的大量地方也采用了这种做法。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("print()")]),t._v("中，我们发现编译器不让我们从除了一个构造器之外的其他任何方法内部调用一个构造器。")]),t._v(" "),a("p",[t._v("(2) "),a("code",[t._v("static")]),t._v("的含义")]),t._v(" "),a("p",[t._v("理解了"),a("code",[t._v("this")]),t._v("关键字后，我们可更完整地理解"),a("code",[t._v("static")]),t._v("（静态）方法的含义。它意味着一个特定的方法没有"),a("code",[t._v("this")]),t._v("。我们不可从一个"),a("code",[t._v("static")]),t._v("方法内部发出对非"),a("code",[t._v("static")]),t._v("方法的调用（注释②），尽管反过来说是可以的。而且在没有任何对象的前提下，我们可针对类本身发出对一个"),a("code",[t._v("static")]),t._v("方法的调用。事实上，那正是"),a("code",[t._v("static")]),t._v("方法最基本的意义。它就好象我们创建一个全局函数的等价物（在C语言中）。除了全局函数不允许在Java中使用以外，若将一个"),a("code",[t._v("static")]),t._v("方法置入一个类的内部，它就可以访问其他"),a("code",[t._v("static")]),t._v("方法以及"),a("code",[t._v("static")]),t._v("字段。")]),t._v(" "),a("p",[t._v("②：有可能发出这类调用的一种情况是我们将一个对象引用传到"),a("code",[t._v("static")]),t._v("方法内部。随后，通过引用（此时实际是"),a("code",[t._v("this")]),t._v("），我们可调用非"),a("code",[t._v("static")]),t._v("方法，并访问非"),a("code",[t._v("static")]),t._v("字段。但一般地，如果真的想要这样做，只要制作一个普通的、非"),a("code",[t._v("static")]),t._v("方法即可。")]),t._v(" "),a("p",[t._v("有些人抱怨"),a("code",[t._v("static")]),t._v("方法并不是“面向对象”的，因为它们具有全局函数的某些特点；利用"),a("code",[t._v("static")]),t._v("方法，我们不必向对象发送一条消息，因为不存在"),a("code",[t._v("this")]),t._v("。这可能是一个清楚的参数，若您发现自己使用了大量静态方法，就应重新思考自己的策略。然而，"),a("code",[t._v("static")]),t._v("的概念是非常实用的，许多时候都需要用到它。所以至于它们是否真的“面向对象”，应该留给理论家去讨论。事实上，即使Smalltalk在自己的“类方法”里也有类似于"),a("code",[t._v("static")]),t._v("的东西。")])])}),[],!1,null,null,null);n.default=i.exports}}]);