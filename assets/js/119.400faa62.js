(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{516:function(e,n,a){"use strict";a.r(n);var t=a(56),v=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_3-2-执行控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-执行控制"}},[e._v("#")]),e._v(" 3.2 执行控制")]),e._v(" "),a("p",[e._v("(3)2 执行控制")]),e._v(" "),a("p",[e._v("Java使用了C的全部控制语句，所以假期您以前用C或C++编程，其中大多数都应是非常熟悉的。大多数程序化的编程语言都提供了某种形式的控制语句，这在语言间通常是共通的。在Java里，涉及的关键字包括"),a("code",[e._v("if-else")]),e._v("、"),a("code",[e._v("while")]),e._v("、"),a("code",[e._v("do-while")]),e._v("、"),a("code",[e._v("for")]),e._v("以及一个名为"),a("code",[e._v("switch")]),e._v("的选择语句。然而，Java并不支持非常有害的"),a("code",[e._v("goto")]),e._v("（它仍是解决某些特殊问题的权宜之计）。仍然可以进行象"),a("code",[e._v("goto")]),e._v("那样的跳转，但比典型的"),a("code",[e._v("goto")]),e._v("要局限多了。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-1-真和假"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-真和假"}},[e._v("#")]),e._v(" 3.2.1 真和假")]),e._v(" "),a("p",[e._v("所有条件语句都利用条件表达式的真或假来决定执行流程。条件表达式的一个例子是"),a("code",[e._v("A==B")]),e._v("。它用条件运算符"),a("code",[e._v("==")]),e._v("来判断"),a("code",[e._v("A")]),e._v("值是否等于"),a("code",[e._v("B")]),e._v("值。该表达式返回"),a("code",[e._v("true")]),e._v("或"),a("code",[e._v("false")]),e._v("。本章早些时候接触到的所有关系运算符都可拿来构造一个条件语句。注意Java不允许我们将一个数字作为布尔值使用，即使它在C和C++里是允许的（真是非零，而假是零）。若想在一次布尔测试中使用一个非布尔值——比如在"),a("code",[e._v("if(a)")]),e._v("里，那么首先必须用一个条件表达式将其转换成一个布尔值，例如"),a("code",[e._v("if(a!=0)")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-2-if-else"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-if-else"}},[e._v("#")]),e._v(" 3.2.2 "),a("code",[e._v("if-else")])]),e._v(" "),a("p",[a("code",[e._v("if-else")]),e._v("语句或许是控制程序流程最基本的形式。其中的"),a("code",[e._v("else")]),e._v("是可选的，所以可按下述两种形式来使用"),a("code",[e._v("if")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if(布尔表达式)\n语句\n")])])]),a("p",[e._v("或者")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if(布尔表达式)\n语句\nelse\n语句\n")])])]),a("p",[e._v("条件必须产生一个布尔结果。“语句”要么是用分号结尾的一个简单语句，要么是一个复合语句——封闭在括号内的一组简单语句。在本书任何地方，只要提及“语句”这个词，就有可能包括简单或复合语句。")]),e._v(" "),a("p",[e._v("作为"),a("code",[e._v("if-else")]),e._v("的一个例子，下面这个"),a("code",[e._v("test()")]),e._v("方法可告诉我们猜测的一个数字位于目标数字之上、之下还是相等：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("static int test(int testval) {\n  int result = 0;\n  if(testval > target)\n    result = -1;\n  else if(testval < target)\n    result = +1;\n  else\n    result = 0; // match\n  return result;\n}\n")])])]),a("p",[e._v("最好将流程控制语句缩进排列，使读者能方便地看出起点与终点。")]),e._v(" "),a("p",[e._v("(1) "),a("code",[e._v("return")])]),e._v(" "),a("p",[a("code",[e._v("return")]),e._v("关键字有两方面的用途：指定一个方法返回什么值（假设它没有"),a("code",[e._v("void")]),e._v("返回值），并立即返回那个值。可据此改写上面的"),a("code",[e._v("test()")]),e._v("方法，使其利用这些特点：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("static int test2(int testval) {\n  if(testval > target)\n    return -1;\n  if(testval < target)\n    return +1;\n  return 0; // match\n}\n")])])]),a("p",[e._v("不必加上"),a("code",[e._v("else")]),e._v("，因为方法在遇到"),a("code",[e._v("return")]),e._v("后便不再继续。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-3-迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-迭代"}},[e._v("#")]),e._v(" 3.2.3 迭代")]),e._v(" "),a("p",[a("code",[e._v("while")]),e._v("，"),a("code",[e._v("do-while")]),e._v("和"),a("code",[e._v("for")]),e._v("控制着循环，有时将其划分为“迭代语句”。除非用于控制迭代的布尔表达式得到“假”的结果，否则语句会重复执行下去。"),a("code",[e._v("while")]),e._v("循环的格式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while(布尔表达式)\n语句\n")])])]),a("p",[e._v("在循环刚开始时，会计算一次“布尔表达式”的值。而对于后来每一次额外的循环，都会在开始前重新计算一次。\n下面这个简单的例子可产生随机数，直到符合特定的条件为止：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//: WhileTest.java\n// Demonstrates the while loop\n\npublic class WhileTest {\n  public static void main(String[] args) {\n    double r = 0;\n    while(r < 0.99d) {\n      r = Math.random();\n      System.out.println(r);\n    }\n  }\n} ///:~\n")])])]),a("p",[e._v("它用到了"),a("code",[e._v("Math")]),e._v("库里的"),a("code",[e._v("static")]),e._v("（静态）方法"),a("code",[e._v("random()")]),e._v("。该方法的作用是产生0和1之间（包括0，但不包括1）的一个"),a("code",[e._v("double")]),e._v("值。"),a("code",[e._v("while")]),e._v("的条件表达式意思是说：“一直循环下去，直到数字等于或大于0.99”。由于它的随机性，每运行一次这个程序，都会获得大小不同的数字列表。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-4-do-while"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-do-while"}},[e._v("#")]),e._v(" 3.2.4 "),a("code",[e._v("do-while")])]),e._v(" "),a("p",[a("code",[e._v("do-while")]),e._v("的格式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("do\n语句\nwhile(布尔表达式)\n")])])]),a("p",[a("code",[e._v("while")]),e._v("和"),a("code",[e._v("do-while")]),e._v("唯一的区别就是"),a("code",[e._v("do-while")]),e._v("肯定会至少执行一次；也就是说，至少会将其中的语句“过一遍”——即便表达式第一次便计算为"),a("code",[e._v("false")]),e._v("。而在"),a("code",[e._v("while")]),e._v("循环结构中，若条件第一次就为"),a("code",[e._v("false")]),e._v("，那么其中的语句根本不会执行。在实际应用中，"),a("code",[e._v("while")]),e._v("比"),a("code",[e._v("do-while")]),e._v("更常用一些。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-5-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-for"}},[e._v("#")]),e._v(" 3.2.5 "),a("code",[e._v("for")])]),e._v(" "),a("p",[a("code",[e._v("for")]),e._v("循环在第一次迭代之前要进行初始化。随后，它会进行条件测试，而且在每一次迭代的时候，进行某种形式的“步进”（Stepping）。"),a("code",[e._v("for")]),e._v("循环的形式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for(初始表达式; 布尔表达式; 步进)\n语句\n")])])]),a("p",[e._v("无论初始表达式，布尔表达式，还是步进，都可以置空。每次迭代前，都要测试一下布尔表达式。若获得的结果是"),a("code",[e._v("false")]),e._v("，就会继续执行紧跟在"),a("code",[e._v("for")]),e._v("语句后面的那行代码。在每次循环的末尾，会计算一次步进。")]),e._v(" "),a("p",[a("code",[e._v("for")]),e._v("循环通常用于执行“计数”任务：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: ListCharacters.java\n// Demonstrates "for" loop by listing\n// all the ASCII characters.\n\npublic class ListCharacters {\n  public static void main(String[] args) {\n  for( char c = 0; c < 128; c++)\n    if (c != 26 )  // ANSI Clear screen\n      System.out.println(\n        "value: " + (int)c +\n        " character: " + c);\n  }\n} ///:~\n')])])]),a("p",[e._v("注意变量"),a("code",[e._v("c")]),e._v("是在需要用到它的时候定义的——在"),a("code",[e._v("for")]),e._v("循环的控制表达式内部，而非在由起始花括号标记的代码块的最开头。"),a("code",[e._v("c")]),e._v("的作用域是由"),a("code",[e._v("for")]),e._v("控制的表达式。")]),e._v(" "),a("p",[e._v("以于象C这样传统的程序化语言，要求所有变量都在一个块的开头定义。所以在编译器创建一个块的时候，它可以为那些变量分配空间。而在Java和C++中，则可在整个块的范围内分散变量声明，在真正需要的地方才加以定义。这样便可形成更自然的编码风格，也更易理解。")]),e._v(" "),a("p",[e._v("可在"),a("code",[e._v("for")]),e._v("语句里定义多个变量，但它们必须具有同样的类型：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for(int i = 0, j = 1;\n    i < 10 && j != 11;\n    i++, j++)\n /* body of for loop */;\n")])])]),a("p",[e._v("其中，"),a("code",[e._v("for")]),e._v("语句内的"),a("code",[e._v("int")]),e._v("定义同时覆盖了"),a("code",[e._v("i")]),e._v("和"),a("code",[e._v("j")]),e._v("。只有"),a("code",[e._v("for")]),e._v("循环才具备在控制表达式里定义变量的能力。对于其他任何条件或循环语句，都不可采用这种方法。")]),e._v(" "),a("p",[e._v("(1) 逗号运算符")]),e._v(" "),a("p",[e._v("早在第1章，我们已提到了逗号运算符——注意不是逗号分隔符；后者用于分隔函数的不同参数。Java里唯一用到逗号运算符的地方就是"),a("code",[e._v("for")]),e._v("循环的控制表达式。在控制表达式的初始化和步进控制部分，我们可使用一系列由逗号分隔的语句。而且那些语句均会独立执行。前面的例子已运用了这种能力，下面则是另一个例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: CommaOperator.java\n\npublic class CommaOperator {\n  public static void main(String[] args) {\n    for(int i = 1, j = i + 10; i < 5;\n        i++, j = i * 2) {\n      System.out.println("i= " + i + " j= " + j);\n    }\n  }\n} ///:~\n')])])]),a("p",[e._v("输出如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("i= 1 j= 11\ni= 2 j= 4\ni= 3 j= 6\ni= 4 j= 8\n")])])]),a("p",[e._v("大家可以看到，无论在初始化还是在步进部分，语句都是顺序执行的。此外，尽管初始化部分可设置任意数量的定义，但都属于同一类型。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-6-中断和继续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-中断和继续"}},[e._v("#")]),e._v(" 3.2.6 中断和继续")]),e._v(" "),a("p",[e._v("在任何循环语句的主体部分，亦可用"),a("code",[e._v("break")]),e._v("和"),a("code",[e._v("continue")]),e._v("控制循环的流程。其中，"),a("code",[e._v("break")]),e._v("用于强行退出循环，不执行循环中剩余的语句。而"),a("code",[e._v("continue")]),e._v("则停止执行当前的迭代，然后退回循环起始和，开始新的迭代。")]),e._v(" "),a("p",[e._v("下面这个程序向大家展示了"),a("code",[e._v("break")]),e._v("和"),a("code",[e._v("continue")]),e._v("在"),a("code",[e._v("for")]),e._v("和"),a("code",[e._v("while")]),e._v("循环中的例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: BreakAndContinue.java\n// Demonstrates break and continue keywords\n\npublic class BreakAndContinue {\n  public static void main(String[] args) {\n    for(int i = 0; i < 100; i++) {\n      if(i == 74) break; // Out of for loop\n      if(i % 9 != 0) continue; // Next iteration\n      System.out.println(i);\n    }\n    int i = 0;\n    // An "infinite loop":\n    while(true) {\n      i++;\n      int j = i * 27;\n      if(j == 1269) break; // Out of loop\n      if(i % 10 != 0) continue; // Top of loop\n      System.out.println(i);\n    }\n  }\n} ///:~\n')])])]),a("p",[e._v("在这个"),a("code",[e._v("for")]),e._v("循环中，"),a("code",[e._v("i")]),e._v("的值永远不会到达100。因为一旦"),a("code",[e._v("i")]),e._v("到达74，"),a("code",[e._v("break")]),e._v("语句就会中断循环。通常，只有在不知道中断条件何时满足时，才需象这样使用"),a("code",[e._v("break")]),e._v("。只要"),a("code",[e._v("i")]),e._v("不能被9整除，"),a("code",[e._v("continue")]),e._v("语句会使程序流程返回循环的最开头执行（所以使"),a("code",[e._v("i")]),e._v("值递增）。如果能够整除，则将值显示出来。")]),e._v(" "),a("p",[e._v("第二部分向大家揭示了一个“无限循环”的情况。然而，循环内部有一个"),a("code",[e._v("break")]),e._v("语句，可中止循环。除此以外，大家还会看到"),a("code",[e._v("continue")]),e._v("移回循环顶部，同时不完成剩余的内容（所以只有在i值能被9整除时才打印出值）。输出结果如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("0\n9\n18\n27\n36\n45\n54\n63\n72\n10\n20\n30\n40\n")])])]),a("p",[e._v("之所以显示0，是由于"),a("code",[e._v("0%9")]),e._v("等于0。")]),e._v(" "),a("p",[e._v("无限循环的第二种形式是"),a("code",[e._v("for(;;)")]),e._v("。编译器将"),a("code",[e._v("while(true)")]),e._v("与"),a("code",[e._v("for(;;)")]),e._v("看作同一回事。所以具体选用哪个取决于自己的编程习惯。")]),e._v(" "),a("p",[e._v("(1) 臭名昭著的"),a("code",[e._v("goto")])]),e._v(" "),a("p",[a("code",[e._v("goto")]),e._v("关键字很早就在程序设计语言中出现。事实上，"),a("code",[e._v("goto")]),e._v("是汇编语言的程序控制结构的始祖：“若条件"),a("code",[e._v("A")]),e._v("，则跳到这里；否则跳到那里”。若阅读由几乎所有编译器生成的汇编代码，就会发现程序控制里包含了许多跳转。然而，"),a("code",[e._v("goto")]),e._v("是在源码的级别跳转的，所以招致了不好的声誉。若程序总是从一个地方跳到另一个地方，还有什么办法能识别代码的流程呢？随着Edsger Dijkstra著名的“Goto有害”论的问世，"),a("code",[e._v("goto")]),e._v("便从此失宠。")]),e._v(" "),a("p",[e._v("事实上，真正的问题并不在于使用"),a("code",[e._v("goto")]),e._v("，而在于"),a("code",[e._v("goto")]),e._v("的滥用。而且在一些少见的情况下，"),a("code",[e._v("goto")]),e._v("是组织控制流程的最佳手段。")]),e._v(" "),a("p",[e._v("尽管"),a("code",[e._v("goto")]),e._v("仍是Java的一个保留字，但并未在语言中得到正式使用；Java没有"),a("code",[e._v("goto")]),e._v("。然而，在"),a("code",[e._v("break")]),e._v("和"),a("code",[e._v("continue")]),e._v("这两个关键字的身上，我们仍然能看出一些"),a("code",[e._v("goto")]),e._v("的影子。它并不属于一次跳转，而是中断循环语句的一种方法。之所以把它们纳入"),a("code",[e._v("goto")]),e._v("问题中一起讨论，是由于它们使用了相同的机制：标签。")]),e._v(" "),a("p",[e._v("“标签”是后面跟一个冒号的标识符，就象下面这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("label1:\n")])])]),a("p",[e._v("对Java来说，唯一用到标签的地方是在循环语句之前。进一步说，它实际需要紧靠在循环语句的前方——在标签和循环之间置入任何语句都是不明智的。而在循环之前设置标签的唯一理由是：我们希望在其中嵌套另一个循环或者一个开关。这是由于"),a("code",[e._v("break")]),e._v("和"),a("code",[e._v("continue")]),e._v("关键字通常只中断当前循环，但若随同标签使用，它们就会中断到存在标签的地方。如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("label1:\n外部循环{\n内部循环{\n//...\nbreak; //1\n//...\ncontinue; //2\n//...\ncontinue label1; //3\n//...\nbreak label1; //4\n}\n}\n")])])]),a("p",[e._v("在条件1中，"),a("code",[e._v("break")]),e._v("中断内部循环，并在外部循环结束。在条件2中，"),a("code",[e._v("continue")]),e._v("移回内部循环的起始处。但在条件3中，"),a("code",[e._v("continue label1")]),e._v("却同时中断内部循环以及外部循环，并移至"),a("code",[e._v("label1")]),e._v("处。随后，它实际是继续循环，但却从外部循环开始。在条件4中，break label1也会中断所有循环，并回到label1处，但并不重新进入循环。也就是说，它实际是完全中止了两个循环。")]),e._v(" "),a("p",[e._v("下面是"),a("code",[e._v("for")]),e._v("循环的一个例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: LabeledFor.java\n// Java’s "labeled for loop"\n\npublic class LabeledFor {\n  public static void main(String[] args) {\n    int i = 0;\n    outer: // Can\'t have statements here\n    for(; true ;) { // infinite loop\n      inner: // Can\'t have statements here\n      for(; i < 10; i++) {\n        prt("i = " + i);\n        if(i == 2) {\n          prt("continue");\n          continue;\n        }\n        if(i == 3) {\n          prt("break");\n          i++; // Otherwise i never\n               // gets incremented.\n          break;\n        }\n        if(i == 7) {\n          prt("continue outer");\n          i++; // Otherwise i never\n               // gets incremented.\n          continue outer;\n        }\n        if(i == 8) {\n          prt("break outer");\n          break outer;\n        }\n        for(int k = 0; k < 5; k++) {\n          if(k == 3) {\n            prt("continue inner");\n            continue inner;\n          }\n        }\n      }\n    }\n    // Can\'t break or continue\n    // to labels here\n  }\n  static void prt(String s) {\n    System.out.println(s);\n  }\n} ///:~\n')])])]),a("p",[e._v("这里用到了在其他例子中已经定义的"),a("code",[e._v("prt()")]),e._v("方法。")]),e._v(" "),a("p",[e._v("注意"),a("code",[e._v("break")]),e._v("会中断"),a("code",[e._v("for")]),e._v("循环，而且在抵达"),a("code",[e._v("for")]),e._v("循环的末尾之前，递增表达式不会执行。由于"),a("code",[e._v("break")]),e._v("跳过了递增表达式，所以递增会在"),a("code",[e._v("i==3")]),e._v("的情况下直接执行。在"),a("code",[e._v("i==7")]),e._v("的情况下，"),a("code",[e._v("continue outer")]),e._v("语句也会到达循环顶部，而且也会跳过递增，所以它也是直接递增的。")]),e._v(" "),a("p",[e._v("下面是输出结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("i = 0\ncontinue inner\ni = 1\ncontinue inner\ni = 2\ncontinue\ni = 3\nbreak\ni = 4\ncontinue inner\ni = 5\ncontinue inner\ni = 6\ncontinue inner\ni = 7\ncontinue outer\ni = 8\nbreak outer\n")])])]),a("p",[e._v("如果没有"),a("code",[e._v("break outer")]),e._v("语句，就没有办法在一个内部循环里找到出外部循环的路径。这是由于break本身只能中断最内层的循环（对于"),a("code",[e._v("continue")]),e._v("同样如此）。")]),e._v(" "),a("p",[e._v("当然，若想在中断循环的同时退出方法，简单地用一个"),a("code",[e._v("return")]),e._v("即可。")]),e._v(" "),a("p",[e._v("下面这个例子向大家展示了带标签的"),a("code",[e._v("break")]),e._v("以及"),a("code",[e._v("continue")]),e._v("语句在"),a("code",[e._v("while")]),e._v("循环中的用法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: LabeledWhile.java\n// Java\'s "labeled while" loop\n\npublic class LabeledWhile {\n  public static void main(String[] args) {\n    int i = 0;\n    outer:\n    while(true) {\n      prt("Outer while loop");\n      while(true) {\n        i++;\n        prt("i = " + i);\n        if(i == 1) {\n          prt("continue");\n          continue;\n        }\n        if(i == 3) {\n          prt("continue outer");\n          continue outer;\n        }\n        if(i == 5) {\n          prt("break");\n          break;\n        }\n        if(i == 7) {\n          prt("break outer");\n          break outer;\n        }\n      }\n    }\n  }\n  static void prt(String s) {\n    System.out.println(s);\n  }\n} ///:~\n')])])]),a("p",[e._v("同样的规则亦适用于"),a("code",[e._v("while")]),e._v("：")]),e._v(" "),a("p",[e._v("(1) 简单的一个"),a("code",[e._v("continue")]),e._v("会退回最内层循环的开头（顶部），并继续执行。")]),e._v(" "),a("p",[e._v("(2) 带有标签的"),a("code",[e._v("continue")]),e._v("会到达标签的位置，并重新进入紧接在那个标签后面的循环。")]),e._v(" "),a("p",[e._v("(3) "),a("code",[e._v("break")]),e._v("会中断当前循环，并移离当前标签的末尾。")]),e._v(" "),a("p",[e._v("(4) 带标签的"),a("code",[e._v("break")]),e._v("会中断当前循环，并移离由那个标签指示的循环的末尾。")]),e._v(" "),a("p",[e._v("这个方法的输出结果是一目了然的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Outer while loop\ni = 1\ncontinue\ni = 2\ni = 3\ncontinue outer\nOuter while loop\ni = 4\ni = 5\nbreak\nOuter while loop\ni = 6\ni = 7\nbreak outer\n")])])]),a("p",[e._v("大家要记住的重点是：在Java里唯一需要用到标签的地方就是拥有嵌套循环，而且想中断或继续多个嵌套级别的时候。")]),e._v(" "),a("p",[e._v("在Dijkstra的“Goto有害”论中，他最反对的就是标签，而非"),a("code",[e._v("goto")]),e._v("。随着标签在一个程序里数量的增多，他发现产生错误的机会也越来越多。标签和"),a("code",[e._v("goto")]),e._v("使我们难于对程序作静态分析。这是由于它们在程序的执行流程中引入了许多“怪圈”。但幸运的是，Java标签不会造成这方面的问题，因为它们的活动场所已被限死，不可通过特别的方式到处传递程序的控制权。由此也引出了一个有趣的问题：通过限制语句的能力，反而能使一项语言特性更加有用。")]),e._v(" "),a("h2",{attrs:{id:"_3-2-7-开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-7-开关"}},[e._v("#")]),e._v(" 3.2.7 开关")]),e._v(" "),a("p",[e._v("“开关”（"),a("code",[e._v("Switch")]),e._v("）有时也被划分为一种“选择语句”。根据一个整数表达式的值，"),a("code",[e._v("switch")]),e._v("语句可从一系列代码选出一段执行。它的格式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("switch(整数选择因子) {\ncase 整数值1 : 语句; break;\ncase 整数值2 : 语句; break;\ncase 整数值3 : 语句; break;\ncase 整数值4 : 语句; break;\ncase 整数值5 : 语句; break;\n//..\ndefault:语句;\n}\n")])])]),a("p",[e._v("其中，“整数选择因子”是一个特殊的表达式，能产生整数值。"),a("code",[e._v("switch")]),e._v("能将整数选择因子的结果与每个整数值比较。若发现相符的，就执行对应的语句（简单或复合语句）。若没有发现相符的，就执行"),a("code",[e._v("default")]),e._v("语句。")]),e._v(" "),a("p",[e._v("在上面的定义中，大家会注意到每个"),a("code",[e._v("case")]),e._v("均以一个"),a("code",[e._v("break")]),e._v("结尾。这样可使执行流程跳转至"),a("code",[e._v("switch")]),e._v("主体的末尾。这是构建"),a("code",[e._v("switch")]),e._v("语句的一种传统方式，但"),a("code",[e._v("break")]),e._v("是可选的。若省略"),a("code",[e._v("break")]),e._v("，会继续执行后面的"),a("code",[e._v("case")]),e._v("语句的代码，直到遇到一个"),a("code",[e._v("break")]),e._v("为止。尽管通常不想出现这种情况，但对有经验的程序员来说，也许能够善加利用。注意最后的"),a("code",[e._v("default")]),e._v("语句没有"),a("code",[e._v("break")]),e._v("，因为执行流程已到了"),a("code",[e._v("break")]),e._v("的跳转目的地。当然，如果考虑到编程风格方面的原因，完全可以在"),a("code",[e._v("default")]),e._v("语句的末尾放置一个"),a("code",[e._v("break")]),e._v("，尽管它并没有任何实际的用处。")]),e._v(" "),a("p",[a("code",[e._v("switch")]),e._v("语句是实现多路选择的一种易行方式（比如从一系列执行路径中挑选一个）。但它要求使用一个选择因子，并且必须是"),a("code",[e._v("int")]),e._v("或"),a("code",[e._v("char")]),e._v("那样的整数值。例如，假若将一个字符串或者浮点数作为选择因子使用，那么它们在"),a("code",[e._v("switch")]),e._v("语句里是不会工作的。对于非整数类型，则必须使用一系列"),a("code",[e._v("if")]),e._v("语句。")]),e._v(" "),a("p",[e._v("下面这个例子可随机生成字母，并判断它们是元音还是辅音字母：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//: VowelsAndConsonants.java\n// Demonstrates the switch statement\n\npublic class VowelsAndConsonants {\n  public static void main(String[] args) {\n    for(int i = 0; i < 100; i++) {\n      char c = (char)(Math.random() * 26 + 'a');\n      System.out.print(c + \": \");\n      switch(c) {\n      case 'a':\n      case 'e':\n      case 'i':\n      case 'o':\n      case 'u':\n                System.out.println(\"vowel\");\n                break;\n      case 'y':\n      case 'w':\n                System.out.println(\n                  \"Sometimes a vowel\");\n                break;\n      default:\n                System.out.println(\"consonant\");\n      }\n    }\n  }\n} ///:~\n")])])]),a("p",[e._v("由于"),a("code",[e._v("Math.random()")]),e._v("会产生0到1之间的一个值，所以只需将其乘以想获得的最大随机数（对于英语字母，这个数字是26），再加上一个偏移量，得到最小的随机数。")]),e._v(" "),a("p",[e._v("尽管我们在这儿表面上要处理的是字符，但"),a("code",[e._v("switch")]),e._v("语句实际使用的字符的整数值。在"),a("code",[e._v("case")]),e._v("语句中，用单引号封闭起来的字符也会产生整数值，以便我们进行比较。")]),e._v(" "),a("p",[e._v("请注意"),a("code",[e._v("case")]),e._v("语句相互间是如何聚合在一起的，它们依次排列，为一部分特定的代码提供了多种匹配模式。也应注意将"),a("code",[e._v("break")]),e._v("语句置于一个特定"),a("code",[e._v("case")]),e._v("的末尾，否则控制流程会简单地下移，并继续判断下一个条件是否相符。")]),e._v(" "),a("p",[e._v("(1) 具体的计算")]),e._v(" "),a("p",[e._v("应特别留意下面这个语句：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("char c = (char)(Math.random() * 26 + 'a');\n")])])]),a("p",[a("code",[e._v("Math.random()")]),e._v("会产生一个"),a("code",[e._v("double")]),e._v("值，所以26会转换成"),a("code",[e._v("double")]),e._v("类型，以便执行乘法运算。这个运算也会产生一个"),a("code",[e._v("double")]),e._v("值。这意味着为了执行加法，必须无将"),a("code",[e._v("'a'")]),e._v("转换成一个"),a("code",[e._v("double")]),e._v("。利用一个“转换”，"),a("code",[e._v("double")]),e._v("结果会转换回"),a("code",[e._v("char")]),e._v("。")]),e._v(" "),a("p",[e._v("我们的第一个问题是，转换会对"),a("code",[e._v("char")]),e._v("作什么样的处理呢？换言之，假设一个值是29.7，我们把它转换成一个"),a("code",[e._v("char")]),e._v("，那么结果值到底是30还是29呢？答案可从下面这个例子中得到：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: CastingNumbers.java\n// What happens when you cast a float or double\n// to an integral value?\n\npublic class CastingNumbers {\n  public static void main(String[] args) {\n    double\n      above = 0.7,\n      below = 0.4;\n    System.out.println("above: " + above);\n    System.out.println("below: " + below);\n    System.out.println(\n      "(int)above: " + (int)above);\n    System.out.println(\n      "(int)below: " + (int)below);\n    System.out.println(\n      "(char)(\'a\' + above): " +\n      (char)(\'a\' + above));\n    System.out.println(\n      "(char)(\'a\' + below): " +\n      (char)(\'a\' + below));\n  }\n} ///:~\n')])])]),a("p",[e._v("输出结果如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("above: 0.7\nbelow: 0.4\n(int)above: 0\n(int)below: 0\n(char)('a' + above): a\n(char)('a' + below): a\n")])])]),a("p",[e._v("所以答案就是：将一个"),a("code",[e._v("float")]),e._v("或"),a("code",[e._v("double")]),e._v("值转换成整数值后，总是将小数部分“砍掉”，不作任何进位处理。")]),e._v(" "),a("p",[e._v("第二个问题与"),a("code",[e._v("Math.random()")]),e._v("有关。它会产生0和1之间的值，但是否包括值1呢？用正统的数学语言表达，它到底是"),a("code",[e._v("(0,1)")]),e._v("，"),a("code",[e._v("[0,1]")]),e._v("，"),a("code",[e._v("(0,1]")]),e._v("，还是"),a("code",[e._v("[0,1)")]),e._v("呢（方括号表示“包括”，圆括号表示“不包括”）？同样地，一个示范程序向我们揭示了答案：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: RandomBounds.java\n// Does Math.random() produce 0.0 and 1.0?\n\npublic class RandomBounds {\n  static void usage() {\n    System.err.println("Usage: \\n\\t" +\n      "RandomBounds lower\\n\\t" +\n      "RandomBounds upper");\n    System.exit(1);\n  }\n  public static void main(String[] args) {\n    if(args.length != 1) usage();\n    if(args[0].equals("lower")) {\n      while(Math.random() != 0.0)\n        ; // Keep trying\n      System.out.println("Produced 0.0!");\n    }\n    else if(args[0].equals("upper")) {\n      while(Math.random() != 1.0)\n        ; // Keep trying\n      System.out.println("Produced 1.0!");\n    }\n    else\n      usage();\n  }\n} ///:~\n')])])]),a("p",[e._v("为运行这个程序，只需在命令行键入下述命令即可：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("java RandomBounds lower\n")])])]),a("p",[e._v("或")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("java RandomBounds upper\n")])])]),a("p",[e._v("在这两种情况下，我们都必须人工中断程序，所以会发现"),a("code",[e._v("Math.random()")]),e._v("“似乎”永远都不会产生0.0或1.0。但这只是一项实验而已。若想到0和1之间有2的128次方不同的双精度小数，所以如果全部产生这些数字，花费的时间会远远超过一个人的生命。当然，最后的结果是在"),a("code",[e._v("Math.random()")]),e._v("的输出中包括了0.0。或者用数字语言表达，输出值范围是"),a("code",[e._v("[0,1)")]),e._v("。")])])}),[],!1,null,null,null);n.default=v.exports}}]);