(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{569:function(t,e,a){"use strict";a.r(e);var n=a(56),c=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_9-2-异常的捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-异常的捕获"}},[t._v("#")]),t._v(" 9.2 异常的捕获")]),t._v(" "),a("p",[t._v("若某个方法产生一个异常，必须保证该异常能被捕获，并获得正确对待。对于Java的异常控制机制，它的一个好处就是允许我们在一个地方将精力集中在要解决的问题上，然后在另一个地方对待来自那个代码内部的错误。")]),t._v(" "),a("p",[t._v("为理解异常是如何捕获的，首先必须掌握“警戒区”的概念。它代表一个特殊的代码区域，有可能产生异常，并在后面跟随用于控制那些异常的代码。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-1-try块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-1-try块"}},[t._v("#")]),t._v(" 9.2.1 "),a("code",[t._v("try")]),t._v("块")]),t._v(" "),a("p",[t._v("若位于一个方法内部，并“抛”出一个异常（或在这个方法内部调用的另一个方法产生了异常），那个方法就会在异常产生过程中退出。若不想一个"),a("code",[t._v("throw")]),t._v("离开方法，可在那个方法内部设置一个特殊的代码块，用它捕获异常。这就叫作“"),a("code",[t._v("try")]),t._v("块”，因为要在这个地方“尝试”各种方法调用。"),a("code",[t._v("try")]),t._v("块属于一种普通的作用域，用一个"),a("code",[t._v("try")]),t._v("关键字开头：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("try {\n// 可能产生异常的代码\n}\n")])])]),a("p",[t._v("若用一种不支持异常控制的编程语言全面检查错误，必须用设置和错误检测代码将每个方法都包围起来——即便多次调用相同的方法。而在使用了异常控制技术后，可将所有东西都置入一个"),a("code",[t._v("try")]),t._v("块内，在同一地点捕获所有异常。这样便可极大简化我们的代码，并使其更易辨读，因为代码本身要达到的目标再也不会与繁复的错误检查混淆。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-2-异常控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-2-异常控制器"}},[t._v("#")]),t._v(" 9.2.2 异常控制器")]),t._v(" "),a("p",[t._v("当然，生成的异常必须在某个地方中止。这个“地方”便是异常控制器或者异常控制模块。而且针对想捕获的每种异常类型，都必须有一个相应的异常控制器。异常控制器紧接在"),a("code",[t._v("try")]),t._v("块后面，且用"),a("code",[t._v("catch")]),t._v("（捕获）关键字标记。如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("try {\n  // Code that might generate exceptions\n} catch(Type1 id1) {\n  // Handle exceptions of Type1\n} catch(Type2 id2) {\n  // Handle exceptions of Type2\n} catch(Type3 id3) {\n  // Handle exceptions of Type3\n}\n\n// etc...\n")])])]),a("p",[t._v("每个"),a("code",[t._v("catch")]),t._v("从句——即异常控制器——都类似一个小型方法，它需要采用一个（而且只有一个）特定类型的参数。可在控制器内部使用标识符（"),a("code",[t._v("id1")]),t._v("，"),a("code",[t._v("id2")]),t._v("等等），就象一个普通的方法参数那样。我们有时也根本不使用标识符，因为异常类型已提供了足够的信息，可有效处理异常。但即使不用，标识符也必须就位。")]),t._v(" "),a("p",[t._v("控制器必须“紧接”在try块后面。若“抛”出一个异常，异常控制机制就会搜寻参数与异常类型相符的第一个控制器。随后，它会进入那个"),a("code",[t._v("catch")]),t._v("从句，并认为异常已得到控制（一旦"),a("code",[t._v("catch")]),t._v("从句结束，对控制器的搜索也会停止）。只有相符的"),a("code",[t._v("catch")]),t._v("从句才会得到执行；它与"),a("code",[t._v("switch")]),t._v("语句不同，后者在每个"),a("code",[t._v("case")]),t._v("后都需要一个"),a("code",[t._v("break")]),t._v("命令，防止误执行其他语句。\n在"),a("code",[t._v("try")]),t._v("块内部，请注意大量不同的方法调用可能生成相同的异常，但只需要一个控制器。")]),t._v(" "),a("p",[t._v("(1) 中断与恢复")]),t._v(" "),a("p",[t._v("在异常控制理论中，共存在两种基本方法。在“中断”方法中（Java和C++提供了对这种方法的支持），我们假定错误非常关键，没有办法返回异常发生的地方。无论谁只要“抛”出一个异常，就表明没有办法补救错误，而且也不希望再回来。")]),t._v(" "),a("p",[t._v("另一种方法叫作“恢复”。它意味着异常控制器有责任来纠正当前的状况，然后取得出错的方法，假定下一次会成功执行。若使用恢复，意味着在异常得到控制以后仍然想继续执行。在这种情况下，我们的异常更象一个方法调用——我们用它在Java中设置各种各样特殊的环境，产生类似于“恢复”的行为（换言之，此时不是“抛”出一个异常，而是调用一个用于解决问题的方法）。另外，也可以将自己的"),a("code",[t._v("try")]),t._v("块置入一个"),a("code",[t._v("while")]),t._v("循环里，用它不断进入"),a("code",[t._v("try")]),t._v("块，直到结果满意时为止。")]),t._v(" "),a("p",[t._v("从历史的角度看，若程序员使用的操作系统支持可恢复的异常控制，最终都会用到类似于中断的代码，并跳过恢复进程。所以尽管“恢复”表面上十分不错，但在实际应用中却显得困难重重。其中决定性的原因可能是：我们的控制模块必须随时留意是否产生了异常，以及是否包含了由产生位置专用的代码。这便使代码很难编写和维护——大型系统尤其如此，因为异常可能在多个位置产生。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-3-异常规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-3-异常规范"}},[t._v("#")]),t._v(" 9.2.3 异常规范")]),t._v(" "),a("p",[t._v("在Java中，对那些要调用方法的客户程序员，我们要通知他们可能从自己的方法里“抛”出异常。这是一种有礼貌的做法，只有它才能使客户程序员准确地知道要编写什么代码来捕获所有潜在的异常。当然，若你同时提供了源码，客户程序员甚至能全盘检查代码，找出相应的"),a("code",[t._v("throw")]),t._v("语句。但尽管如此，通常并不随同源码提供库。为解决这个问题，Java提供了一种特殊的语法格式（并强迫我们采用），以便礼貌地告诉客户程序员该方法会“抛”出什么异常，令对方方便地加以控制。这便是我们在这里要讲述的“异常规范”，它属于方法声明的一部分，位于参数列表的后面。")]),t._v(" "),a("p",[t._v("异常规范采用了一个额外的关键字："),a("code",[t._v("throws")]),t._v("；后面跟随全部潜在的异常类型。因此，我们的方法定义看起来应象下面这个样子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void f() throws tooBig, tooSmall, divZero { //...\n")])])]),a("p",[t._v("若使用下述代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void f() [ // ...\n")])])]),a("p",[t._v("它意味着不会从方法里“抛”出异常（除类型为"),a("code",[t._v("RuntimeException")]),t._v("的异常以外，它可能从任何地方抛出——稍后还会详细讲述）。\n但不能完全依赖异常规范——假若方法造成了一个异常，但没有对其进行控制，编译器会侦测到这个情况，并告诉我们必须控制异常，或者指出应该从方法里“抛”出一个异常规范。通过坚持从顶部到底部排列异常规范，Java可在编译期保证异常的正确性（注释②）。")]),t._v(" "),a("p",[t._v("②：这是在C++异常控制基础上一个显著的进步，后者除非到运行期，否则不会捕获不符合异常规范的错误。这使得C++的异常控制机制显得用处不大。")]),t._v(" "),a("p",[t._v("我们在这个地方可采取欺骗手段：要求“抛”出一个并没有发生的异常。编译器能理解我们的要求，并强迫使用这个方法的用户当作真的产生了那个异常处理。在实际应用中，可将其作为那个异常的一个“占位符”使用。这样一来，以后可以方便地产生实际的异常，毋需修改现有的代码。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-4-捕获所有异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-4-捕获所有异常"}},[t._v("#")]),t._v(" 9.2.4 捕获所有异常")]),t._v(" "),a("p",[t._v("我们可创建一个控制器，令其捕获所有类型的异常。具体的做法是捕获基类异常类型"),a("code",[t._v("Exception")]),t._v("（也存在其他类型的基础异常，但"),a("code",[t._v("Exception")]),t._v("是适用于几乎所有编程活动的基础）。如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('catch(Exception e) {\nSystem.out.println("caught an exception");\n}\n')])])]),a("p",[t._v("这段代码能捕获任何异常，所以在实际使用时最好将其置于控制器列表的末尾，防止跟随在后面的任何特殊异常控制器失效。\n对于程序员常用的所有异常类来说，由于"),a("code",[t._v("Exception")]),t._v("类是它们的基础，所以我们不会获得关于异常太多的信息，但可调用来自它的基类"),a("code",[t._v("Throwable")]),t._v("的方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("String getMessage()\n")])])]),a("p",[t._v("获得详细的消息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("String toString()\n")])])]),a("p",[t._v("返回对"),a("code",[t._v("Throwable")]),t._v("的一段简要说明，其中包括详细的消息（如果有的话）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void printStackTrace()\nvoid printStackTrace(PrintStream)\n")])])]),a("p",[t._v("打印出"),a("code",[t._v("Throwable")]),t._v("和"),a("code",[t._v("Throwable")]),t._v("的调用栈路径。调用栈显示出将我们带到异常发生地点的方法调用的顺序。")]),t._v(" "),a("p",[t._v("第一个版本会打印出标准错误，第二个则打印出我们的选择流程。若在Windows下工作，就不能重定向标准错误。因此，我们一般愿意使用第二个版本，并将结果送给"),a("code",[t._v("System.out")]),t._v("；这样一来，输出就可重定向到我们希望的任何路径。")]),t._v(" "),a("p",[t._v("除此以外，我们还可从"),a("code",[t._v("Throwable")]),t._v("的基类"),a("code",[t._v("Object")]),t._v("（所有对象的基类型）获得另外一些方法。对于异常控制来说，其中一个可能有用的是"),a("code",[t._v("getClass()")]),t._v("，它的作用是返回一个对象，用它代表这个对象的类。我们可依次用"),a("code",[t._v("getName()")]),t._v("或"),a("code",[t._v("toString()")]),t._v("查询这个"),a("code",[t._v("Class")]),t._v("类的名字。亦可对"),a("code",[t._v("Class")]),t._v("对象进行一些复杂的操作，尽管那些操作在异常控制中是不必要的。本章稍后还会详细讲述"),a("code",[t._v("Class")]),t._v("对象。")]),t._v(" "),a("p",[t._v("下面是一个特殊的例子，它展示了"),a("code",[t._v("Exception")]),t._v("方法的使用（若执行该程序遇到困难，请参考第3章3.1.2小节“赋值”）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: ExceptionMethods.java\n// Demonstrating the Exception Methods\npackage c09;\n\npublic class ExceptionMethods {\n  public static void main(String[] args) {\n    try {\n      throw new Exception("Here\'s my Exception");\n    } catch(Exception e) {\n      System.out.println("Caught Exception");\n      System.out.println(\n        "e.getMessage(): " + e.getMessage());\n      System.out.println(\n        "e.toString(): " + e.toString());\n      System.out.println("e.printStackTrace():");\n      e.printStackTrace();\n    }\n  }\n} ///:~\n')])])]),a("p",[t._v("该程序输出如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Caught Exception\ne.getMessage(): Here's my Exception\ne.toString(): java.lang.Exception: Here's my Exception\ne.printStackTrace():\njava.lang.Exception: Here's my Exception\n        at ExceptionMethods.main\n")])])]),a("p",[t._v("可以看到，该方法连续提供了大量信息——每类信息都是前一类信息的一个子集。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-5-重新-抛-出异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-5-重新-抛-出异常"}},[t._v("#")]),t._v(" 9.2.5 重新“抛”出异常")]),t._v(" "),a("p",[t._v("在某些情况下，我们想重新抛出刚才产生过的异常，特别是在用"),a("code",[t._v("Exception")]),t._v("捕获所有可能的异常时。由于我们已拥有当前异常的引用，所以只需简单地重新抛出那个引用即可。下面是一个例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('catch(Exception e) {\nSystem.out.println("一个异常已经产生");\nthrow e;\n}\n')])])]),a("p",[t._v("重新“抛”出一个异常导致异常进入更高一级环境的异常控制器中。用于同一个"),a("code",[t._v("try")]),t._v("块的任何更进一步的"),a("code",[t._v("catch")]),t._v("从句仍然会被忽略。此外，与异常对象有关的所有东西都会得到保留，所以用于捕获特定异常类型的更高一级的控制器可以从那个对象里提取出所有信息。")]),t._v(" "),a("p",[t._v("若只是简单地重新抛出当前异常，我们打印出来的、与"),a("code",[t._v("printStackTrace()")]),t._v("内的那个异常有关的信息会与异常的起源地对应，而不是与重新抛出它的地点对应。若想安装新的栈跟踪信息，可调用"),a("code",[t._v("fillInStackTrace()")]),t._v("，它会返回一个特殊的异常对象。这个异常的创建过程如下：将当前栈的信息填充到原来的异常对象里。下面列出它的形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: Rethrowing.java\n// Demonstrating fillInStackTrace()\n\npublic class Rethrowing {\n  public static void f() throws Exception {\n    System.out.println(\n      "originating the exception in f()");\n    throw new Exception("thrown from f()");\n  }\n  public static void g() throws Throwable {\n    try {\n      f();\n    } catch(Exception e) {\n      System.out.println(\n        "Inside g(), e.printStackTrace()");\n      e.printStackTrace();\n      throw e; // 17\n      // throw e.fillInStackTrace(); // 18\n    }\n  }\n  public static void\n  main(String[] args) throws Throwable {\n    try {\n      g();\n    } catch(Exception e) {\n      System.out.println(\n        "Caught in main, e.printStackTrace()");\n      e.printStackTrace();\n    }\n  }\n} ///:~\n')])])]),a("p",[t._v("其中最重要的行号在注释内标记出来。注意第17行没有设为注释行。它的输出结果如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("originating the exception in f()\nInside g(), e.printStackTrace()\njava.lang.Exception: thrown from f()\n        at Rethrowing.f(Rethrowing.java:8)\n        at Rethrowing.g(Rethrowing.java:12)\n        at Rethrowing.main(Rethrowing.java:24)\nCaught in main, e.printStackTrace()\njava.lang.Exception: thrown from f()\n        at Rethrowing.f(Rethrowing.java:8)\n        at Rethrowing.g(Rethrowing.java:12)\n        at Rethrowing.main(Rethrowing.java:24)\n")])])]),a("p",[t._v("因此，异常栈路径无论如何都会记住它的真正起点，无论自己被重复“抛”了好几次。\n若将第17行标注（变成注释行），而撤消对第18行的标注，就会换用"),a("code",[t._v("fillInStackTrace()")]),t._v("，结果如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("originating the exception in f()\nInside g(), e.printStackTrace()\njava.lang.Exception: thrown from f()\n        at Rethrowing.f(Rethrowing.java:8)\n        at Rethrowing.g(Rethrowing.java:12)\n        at Rethrowing.main(Rethrowing.java:24)\nCaught in main, e.printStackTrace()\njava.lang.Exception: thrown from f()\n        at Rethrowing.g(Rethrowing.java:18)\n        at Rethrowing.main(Rethrowing.java:24)\n")])])]),a("p",[t._v("由于使用的是"),a("code",[t._v("fillInStackTrace()")]),t._v("，第18行成为异常的新起点。")]),t._v(" "),a("p",[t._v("针对"),a("code",[t._v("g()")]),t._v("和"),a("code",[t._v("main()")]),t._v("，"),a("code",[t._v("Throwable")]),t._v("类必须在异常规约中出现，因为"),a("code",[t._v("fillInStackTrace()")]),t._v("会生成一个"),a("code",[t._v("Throwable")]),t._v("对象的引用。由于"),a("code",[t._v("Throwable")]),t._v("是"),a("code",[t._v("Exception")]),t._v("的一个基类，所以有可能获得一个能够“抛”出的对象（具有"),a("code",[t._v("Throwable")]),t._v("属性），但却并非一个"),a("code",[t._v("Exception")]),t._v("（异常）。因此，在"),a("code",[t._v("main()")]),t._v("中用于"),a("code",[t._v("Exception")]),t._v("的引用可能丢失自己的目标。为保证所有东西均井然有序，编译器强制"),a("code",[t._v("Throwable")]),t._v("使用一个异常规范。举个例子来说，下述程序的异常便不会在"),a("code",[t._v("main()")]),t._v("中被捕获到：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: ThrowOut.java\npublic class ThrowOut {\n  public static void\n  main(String[] args) throws Throwable {\n    try {\n      throw new Throwable();\n    } catch(Exception e) {\n      System.out.println("Caught in main()");\n    }\n  }\n} ///:~\n')])])]),a("p",[t._v("也有可能从一个已经捕获的异常重新“抛”出一个不同的异常。但假如这样做，会得到与使用"),a("code",[t._v("fillInStackTrace()")]),t._v("类似的效果：与异常起源地有关的信息会全部丢失，我们留下的是与新的"),a("code",[t._v("throw")]),t._v("有关的信息。如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//: RethrowNew.java\n// Rethrow a different object from the one that\n// was caught\n\npublic class RethrowNew {\n  public static void f() throws Exception {\n    System.out.println(\n      "originating the exception in f()");\n    throw new Exception("thrown from f()");\n  }\n  public static void main(String[] args) {\n    try {\n      f();\n    } catch(Exception e) {\n      System.out.println(\n        "Caught in main, e.printStackTrace()");\n      e.printStackTrace();\n      throw new NullPointerException("from main");\n    }\n  }\n} ///:~\n')])])]),a("p",[t._v("输出如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("originating the exception in f()\nCaught in main, e.printStackTrace()\njava.lang.Exception: thrown from f()\n        at RethrowNew.f(RethrowNew.java:8)\n        at RethrowNew.main(RethrowNew.java:13)\njava.lang.NullPointerException: from main\n        at RethrowNew.main(RethrowNew.java:18)\n")])])]),a("p",[t._v("最后一个异常只知道自己来自"),a("code",[t._v("main()")]),t._v("，而非来自"),a("code",[t._v("f()")]),t._v("。注意"),a("code",[t._v("Throwable")]),t._v("在任何异常规范中都不是必需的。")]),t._v(" "),a("p",[t._v("永远不必关心如何清除前一个异常，或者与之有关的其他任何异常。它们都属于用"),a("code",[t._v("new")]),t._v("创建的、以内存堆为基础的对象，所以垃圾收集器会自动将其清除。")])])}),[],!1,null,null,null);e.default=c.exports}}]);