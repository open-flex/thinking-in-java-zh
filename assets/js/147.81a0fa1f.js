(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{544:function(n,a,v){"use strict";v.r(a);var i=v(56),_=Object(i.a)({},(function(){var n=this,a=n.$createElement,v=n._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[v("h1",{attrs:{id:"_6-8-final关键字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-final关键字"}},[n._v("#")]),n._v(" 6.8 "),v("code",[n._v("final")]),n._v("关键字")]),n._v(" "),v("p",[n._v("由于语境（应用环境）不同，"),v("code",[n._v("final")]),n._v("关键字的含义可能会稍微产生一些差异。但它最一般的意思就是声明“这个东西不能改变”。之所以要禁止改变，可能是考虑到两方面的因素：设计或效率。由于这两个原因颇有些区别，所以也许会造成"),v("code",[n._v("final")]),n._v("关键字的误用。")]),n._v(" "),v("p",[n._v("在接下去的小节里，我们将讨论"),v("code",[n._v("final")]),n._v("关键字的三种应用场合：数据、方法以及类。")]),n._v(" "),v("h2",{attrs:{id:"_6-8-1-final数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-1-final数据"}},[n._v("#")]),n._v(" 6.8.1 "),v("code",[n._v("final")]),n._v("数据")]),n._v(" "),v("p",[n._v("许多程序设计语言都有自己的办法告诉编译器某个数据是“常数”。常数主要应用于下述两个方面：")]),n._v(" "),v("p",[n._v("(1) 编译期常数，它永远不会改变")]),n._v(" "),v("p",[n._v("(2) 在运行期初始化的一个值，我们不希望它发生变化")]),n._v(" "),v("p",[n._v("对于编译期的常数，编译器（程序）可将常数值“封装”到需要的计算过程里。也就是说，计算可在编译期间提前执行，从而节省运行时的一些开销。在Java中，这些形式的常数必须属于基本数据类型（Primitives），而且要用"),v("code",[n._v("final")]),n._v("关键字进行表达。在对这样的一个常数进行定义的时候，必须给出一个值。")]),n._v(" "),v("p",[n._v("无论"),v("code",[n._v("static")]),n._v("还是"),v("code",[n._v("final")]),n._v("字段，都只能存储一个数据，而且不得改变。")]),n._v(" "),v("p",[n._v("若随同对象引用使用"),v("code",[n._v("final")]),n._v("，而不是基本数据类型，它的含义就稍微让人有点儿迷糊了。对于基本数据类型，"),v("code",[n._v("final")]),n._v("会将值变成一个常数；但对于对象引用，"),v("code",[n._v("final")]),n._v("会将引用变成一个常数。进行声明时，必须将引用初始化到一个具体的对象。而且永远不能将引用变成指向另一个对象。然而，对象本身是可以修改的。Java对此未提供任何手段，可将一个对象直接变成一个常数（但是，我们可自己编写一个类，使其中的对象具有“常数”效果）。这一限制也适用于数组，它也属于对象。")]),n._v(" "),v("p",[n._v("下面是演示"),v("code",[n._v("final")]),n._v("字段用法的一个例子：")]),n._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v('//: FinalData.java\n// The effect of final on fields\n\nclass Value {\n  int i = 1;\n}\n\npublic class FinalData {\n  // Can be compile-time constants\n  final int i1 = 9;\n  static final int I2 = 99;\n  // Typical public constant:\n  public static final int I3 = 39;\n  // Cannot be compile-time constants:\n  final int i4 = (int)(Math.random()*20);\n  static final int i5 = (int)(Math.random()*20);\n\n  Value v1 = new Value();\n  final Value v2 = new Value();\n  static final Value v3 = new Value();\n  //! final Value v4; // Pre-Java 1.1 Error:\n                      // no initializer\n  // Arrays:\n  final int[] a = { 1, 2, 3, 4, 5, 6 };\n\n  public void print(String id) {\n    System.out.println(\n      id + ": " + "i4 = " + i4 +\n      ", i5 = " + i5);\n  }\n  public static void main(String[] args) {\n    FinalData fd1 = new FinalData();\n    //! fd1.i1++; // Error: can\'t change value\n    fd1.v2.i++; // Object isn\'t constant!\n    fd1.v1 = new Value(); // OK -- not final\n    for(int i = 0; i < fd1.a.length; i++)\n      fd1.a[i]++; // Object isn\'t constant!\n    //! fd1.v2 = new Value(); // Error: Can\'t\n    //! fd1.v3 = new Value(); // change handle\n    //! fd1.a = new int[3];\n\n    fd1.print("fd1");\n    System.out.println("Creating new FinalData");\n    FinalData fd2 = new FinalData();\n    fd1.print("fd1");\n    fd2.print("fd2");\n  }\n} ///:~\n')])])]),v("p",[n._v("由于"),v("code",[n._v("i1")]),n._v("和"),v("code",[n._v("I2")]),n._v("都是具有"),v("code",[n._v("final")]),n._v("属性的基本数据类型，并含有编译期的值，所以它们除了能作为编译期的常数使用外，在任何导入方式中也不会出现任何不同。"),v("code",[n._v("I3")]),n._v("是我们体验此类常数定义时更典型的一种方式："),v("code",[n._v("public")]),n._v("表示它们可在包外使用；"),v("code",[n._v("Static")]),n._v("强调它们只有一个；而"),v("code",[n._v("final")]),n._v("表明它是一个常数。注意对于含有固定初始化值（即编译期常数）的"),v("code",[n._v("final static")]),n._v("基本数据类型，它们的名字根据规则要全部采用大写。也要注意"),v("code",[n._v("i5")]),n._v("在编译期间是未知的，所以它没有大写。")]),n._v(" "),v("p",[n._v("不能由于某样东西的属性是"),v("code",[n._v("final")]),n._v("，就认定它的值能在编译时期知道。"),v("code",[n._v("i4")]),n._v("和"),v("code",[n._v("i5")]),n._v("向大家证明了这一点。它们在运行期间使用随机生成的数字。例子的这一部分也向大家揭示出将"),v("code",[n._v("final")]),n._v("值设为"),v("code",[n._v("static")]),n._v("和非"),v("code",[n._v("static")]),n._v("之间的差异。只有当值在运行期间初始化的前提下，这种差异才会揭示出来。因为编译期间的值被编译器认为是相同的。这种差异可从输出结果中看出：")]),n._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v("fd1: i4 = 15, i5 = 9\nCreating new FinalData\nfd1: i4 = 15, i5 = 9\nfd2: i4 = 10, i5 = 9\n")])])]),v("p",[n._v("注意对于"),v("code",[n._v("fd1")]),n._v("和"),v("code",[n._v("fd2")]),n._v("来说，"),v("code",[n._v("i4")]),n._v("的值是唯一的，但"),v("code",[n._v("i5")]),n._v("的值不会由于创建了另一个"),v("code",[n._v("FinalData")]),n._v("对象而发生改变。那是因为它的属性是"),v("code",[n._v("static")]),n._v("，而且在载入时初始化，而非每创建一个对象时初始化。")]),n._v(" "),v("p",[n._v("从"),v("code",[n._v("v1")]),n._v("到"),v("code",[n._v("v4")]),n._v("的变量向我们揭示出"),v("code",[n._v("final")]),n._v("引用的含义。正如大家在"),v("code",[n._v("main()")]),n._v("中看到的那样，并不能认为由于"),v("code",[n._v("v2")]),n._v("属于"),v("code",[n._v("final")]),n._v("，所以就不能再改变它的值。然而，我们确实不能再将"),v("code",[n._v("v2")]),n._v("绑定到一个新对象，因为它的属性是"),v("code",[n._v("final")]),n._v("。这便是"),v("code",[n._v("final")]),n._v("对于一个引用的确切含义。我们会发现同样的含义亦适用于数组，后者只不过是另一种类型的引用而已。将引用变成"),v("code",[n._v("final")]),n._v("看起来似乎不如将基本数据类型变成"),v("code",[n._v("final")]),n._v("那么有用。")]),n._v(" "),v("p",[n._v("(2) 空白"),v("code",[n._v("final")])]),n._v(" "),v("p",[n._v("Java 1.1允许我们创建“空白"),v("code",[n._v("final")]),n._v("”，它们属于一些特殊的字段。尽管被声明成"),v("code",[n._v("final")]),n._v("，但却未得到一个初始值。无论在哪种情况下，空白"),v("code",[n._v("final")]),n._v("都必须在实际使用前得到正确的初始化。而且编译器会主动保证这一规定得以贯彻。然而，对于"),v("code",[n._v("final")]),n._v("关键字的各种应用，空白"),v("code",[n._v("final")]),n._v("具有最大的灵活性。举个例子来说，位于类内部的一个"),v("code",[n._v("final")]),n._v("字段现在对每个对象都可以有所不同，同时依然保持其“不变”的本质。下面列出一个例子：")]),n._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v('//: BlankFinal.java\n// "Blank" final data members\n\nclass Poppet { }\n\nclass BlankFinal {\n  final int i = 0; // Initialized final\n  final int j; // Blank final\n  final Poppet p; // Blank final handle\n  // Blank finals MUST be initialized\n  // in the constructor:\n  BlankFinal() {\n    j = 1; // Initialize blank final\n    p = new Poppet();\n  }\n  BlankFinal(int x) {\n    j = x; // Initialize blank final\n    p = new Poppet();\n  }\n  public static void main(String[] args) {\n    BlankFinal bf = new BlankFinal();\n  }\n} ///:~\n')])])]),v("p",[n._v("现在强行要求我们对"),v("code",[n._v("final")]),n._v("进行赋值处理——要么在定义字段时使用一个表达式，要么在每个构造器中。这样就可以确保"),v("code",[n._v("final")]),n._v("字段在使用前获得正确的初始化。")]),n._v(" "),v("p",[n._v("(3) "),v("code",[n._v("final")]),n._v("参数")]),n._v(" "),v("p",[n._v("Java 1.1允许我们将参数设成"),v("code",[n._v("final")]),n._v("属性，方法是在参数列表中对它们进行适当的声明。这意味着在一个方法的内部，我们不能改变参数引用指向的东西。如下所示：")]),n._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v('//: FinalArguments.java\n// Using "final" with method arguments\n\nclass Gizmo {\n  public void spin() {}\n}\n\npublic class FinalArguments {\n  void with(final Gizmo g) {\n    //! g = new Gizmo(); // Illegal -- g is final\n    g.spin();\n  }\n  void without(Gizmo g) {\n    g = new Gizmo(); // OK -- g not final\n    g.spin();\n  }\n  // void f(final int i) { i++; } // Can\'t change\n  // You can only read from a final primitive:\n  int g(final int i) { return i + 1; }\n  public static void main(String[] args) {\n    FinalArguments bf = new FinalArguments();\n    bf.without(null);\n    bf.with(null);\n  }\n} ///:~\n')])])]),v("p",[n._v("注意此时仍然能为"),v("code",[n._v("final")]),n._v("参数分配一个"),v("code",[n._v("null")]),n._v("（空）引用，同时编译器不会捕获它。这与我们对非"),v("code",[n._v("final")]),n._v("参数采取的操作是一样的。")]),n._v(" "),v("p",[n._v("方法"),v("code",[n._v("f()")]),n._v("和"),v("code",[n._v("g()")]),n._v("向我们展示出基本类型的参数为"),v("code",[n._v("final")]),n._v("时会发生什么情况：我们只能读取参数，不可改变它。")]),n._v(" "),v("h2",{attrs:{id:"_6-8-2-final方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-2-final方法"}},[n._v("#")]),n._v(" 6.8.2 "),v("code",[n._v("final")]),n._v("方法")]),n._v(" "),v("p",[n._v("之所以要使用"),v("code",[n._v("final")]),n._v("方法，可能是出于对两方面理由的考虑。第一个是为方法“上锁”，防止任何继承类改变它的本来含义。设计程序时，若希望一个方法的行为在继承期间保持不变，而且不可被覆盖或改写，就可以采取这种做法。")]),n._v(" "),v("p",[n._v("采用"),v("code",[n._v("final")]),n._v("方法的第二个理由是程序执行的效率。将一个方法设成"),v("code",[n._v("final")]),n._v("后，编译器就可以把对那个方法的所有调用都置入“嵌入”调用里。只要编译器发现一个"),v("code",[n._v("final")]),n._v("方法调用，就会（根据它自己的判断）忽略为执行方法调用机制而采取的常规代码插入方法（将参数压入栈；跳至方法代码并执行它；跳回来；清除栈参数；最后对返回值进行处理）。相反，它会用方法主体内实际代码的一个副本来替换方法调用。这样做可避免方法调用时的系统开销。当然，若方法体积太大，那么程序也会变得雍肿，可能受到到不到嵌入代码所带来的任何性能提升。因为任何提升都被花在方法内部的时间抵消了。Java编译器能自动侦测这些情况，并颇为“明智”地决定是否嵌入一个"),v("code",[n._v("final")]),n._v("方法。然而，最好还是不要完全相信编译器能正确地作出所有判断。通常，只有在方法的代码量非常少，或者想明确禁止方法被覆盖的时候，才应考虑将一个方法设为"),v("code",[n._v("final")]),n._v("。")]),n._v(" "),v("p",[n._v("类内所有"),v("code",[n._v("private")]),n._v("方法都自动成为"),v("code",[n._v("final")]),n._v("。由于我们不能访问一个"),v("code",[n._v("private")]),n._v("方法，所以它绝对不会被其他方法覆盖（若强行这样做，编译器会给出错误提示）。可为一个"),v("code",[n._v("private")]),n._v("方法添加"),v("code",[n._v("final")]),n._v("指示符，但却不能为那个方法提供任何额外的含义。")]),n._v(" "),v("h2",{attrs:{id:"_6-8-3-final类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-3-final类"}},[n._v("#")]),n._v(" 6.8.3 "),v("code",[n._v("final")]),n._v("类")]),n._v(" "),v("p",[n._v("如果说整个类都是"),v("code",[n._v("final")]),n._v("（在它的定义前冠以"),v("code",[n._v("final")]),n._v("关键字），就表明自己不希望从这个类继承，或者不允许其他任何人采取这种操作。换言之，出于这样或那样的原因，我们的类肯定不需要进行任何改变；或者出于安全方面的理由，我们不希望进行子类化（子类处理）。")]),n._v(" "),v("p",[n._v("除此以外，我们或许还考虑到执行效率的问题，并想确保涉及这个类各对象的所有行动都要尽可能地有效。如下所示：")]),n._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[n._v("//: Jurassic.java\n// Making an entire class final\n\nclass SmallBrain {}\n\nfinal class Dinosaur {\n  int i = 7;\n  int j = 1;\n  SmallBrain x = new SmallBrain();\n  void f() {}\n}\n\n//! class Further extends Dinosaur {}\n// error: Cannot extend final class 'Dinosaur'\n\npublic class Jurassic {\n  public static void main(String[] args) {\n    Dinosaur n = new Dinosaur();\n    n.f();\n    n.i = 40;\n    n.j++;\n  }\n} ///:~\n")])])]),v("p",[n._v("注意数据成员既可以是"),v("code",[n._v("final")]),n._v("，也可以不是，取决于我们具体选择。应用于"),v("code",[n._v("final")]),n._v("的规则同样适用于数据成员，无论类是否被定义成"),v("code",[n._v("final")]),n._v("。将类定义成"),v("code",[n._v("final")]),n._v("后，结果只是禁止进行继承——没有更多的限制。然而，由于它禁止了继承，所以一个"),v("code",[n._v("final")]),n._v("类中的所有方法都默认为"),v("code",[n._v("final")]),n._v("。因为此时再也无法覆盖它们。所以与我们将一个方法明确声明为"),v("code",[n._v("final")]),n._v("一样，编译器此时有相同的效率选择。")]),n._v(" "),v("p",[n._v("可为"),v("code",[n._v("final")]),n._v("类内的一个方法添加"),v("code",[n._v("final")]),n._v("指示符，但这样做没有任何意义。")]),n._v(" "),v("h2",{attrs:{id:"_6-8-4-final的注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-4-final的注意事项"}},[n._v("#")]),n._v(" 6.8.4 "),v("code",[n._v("final")]),n._v("的注意事项")]),n._v(" "),v("p",[n._v("设计一个类时，往往需要考虑是否将一个方法设为"),v("code",[n._v("final")]),n._v("。可能会觉得使用自己的类时执行效率非常重要，没有人想覆盖自己的方法。这种想法在某些时候是正确的。")]),n._v(" "),v("p",[n._v("但要慎重作出自己的假定。通常，我们很难预测一个类以后会以什么样的形式复用或重复利用。常规用途的类尤其如此。若将一个方法定义成"),v("code",[n._v("final")]),n._v("，就可能杜绝了在其他程序员的项目中对自己的类进行继承的途径，因为我们根本没有想到它会象那样使用。")]),n._v(" "),v("p",[n._v("标准Java库是阐述这一观点的最好例子。其中特别常用的一个类是"),v("code",[n._v("Vector")]),n._v("。如果我们考虑代码的执行效率，就会发现只有不把任何方法设为"),v("code",[n._v("final")]),n._v("，才能使其发挥更大的作用。我们很容易就会想到自己应继承和覆盖如此有用的一个类，但它的设计者却否定了我们的想法。但我们至少可以用两个理由来反驳他们。首先，"),v("code",[n._v("Stack")]),n._v("（栈）是从"),v("code",[n._v("Vector")]),n._v("继承来的，亦即"),v("code",[n._v("Stack")]),n._v("“是”一个"),v("code",[n._v("Vector")]),n._v("，这种说法是不确切的。其次，对于"),v("code",[n._v("Vector")]),n._v("许多重要的方法，如"),v("code",[n._v("addElement()")]),n._v("以及"),v("code",[n._v("elementAt()")]),n._v("等，它们都变成了"),v("code",[n._v("synchronized")]),n._v("（同步的）。正如在第14章要讲到的那样，这会造成显著的性能开销，可能会把final提供的性能改善抵销得一干二净。因此，程序员不得不猜测到底应该在哪里进行优化。在标准库里居然采用了如此笨拙的设计，真不敢想象会在程序员里引发什么样的情绪。")]),n._v(" "),v("p",[n._v("另一个值得注意的是"),v("code",[n._v("Hashtable")]),n._v("（散列表），它是另一个重要的标准类。该类没有采用任何"),v("code",[n._v("final")]),n._v("方法。正如我们在本书其他地方提到的那样，显然一些类的设计人员与其他设计人员有着全然不同的素质（注意比较"),v("code",[n._v("Hashtable")]),n._v("极短的方法名与"),v("code",[n._v("Vector")]),n._v("的方法名）。对类库的用户来说，这显然是不应该如此轻易就能看出的。一个产品的设计变得不一致后，会加大用户的工作量。这也从另一个侧面强调了代码设计与检查时需要很强的责任心。")])])}),[],!1,null,null,null);a.default=_.exports}}]);