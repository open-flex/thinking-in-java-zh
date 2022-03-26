(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{457:function(e,t,a){"use strict";a.r(t);var v=a(56),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_13-2-基本程序片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-基本程序片"}},[e._v("#")]),e._v(" 13.2 基本程序片")]),e._v(" "),a("p",[e._v("库通常按照它们的功能来进行组合。一些库，例如使用过的，便中断搁置起来。标准的Java库字符串和向量类就是这样的一个例子。其他的库被特殊地设计，例如构建块去建立其它的库。库中的某些类是应用程序的框架，其目的是协助我们构建应用程序，在提供类或类集的情况下产生每个特定应用程序的基本活动状况。然后，为我们定制活动状况，必须继承应用程序类并且废弃程序的权益。应用程序框架的默认控制结构将在特定的时间调用我们废弃的程序。应用程序的框架是“分离、改变和中止事件”的好例子，因为它总是努力去尝试集中在被废弃的所有特殊程序段。")]),e._v(" "),a("p",[e._v("程序片利用应用程序框架来建立。我们从类中继承程序片，并且废弃特定的程序。大多数时间我们必须考虑一些不得不运行的使程序片在WEB页面上建立和使用的重要方法。这些方法是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Method\n\nOperation\n\ninit( )\n\nCalled when the applet is first created to perform first-time initialization of the applet\n\nstart( )\n\nCalled every time the applet moves into sight on the Web browser to allow the applet to start up its normal operations (especially those that are shut off by stop( )). Also called after init( ).\n\npaint( )\n\nPart of the base class Component (three levels of inheritance up). Called as part of an update( ) to perform special painting on the canvas of an applet.\n\nstop( )\n\nCalled every time the applet moves out of sight on the Web browser to allow the applet to shut off expensive operations. Also called right before destroy( ).\n\ndestroy( )\n\nCalled when the applet is being unloaded from the page to perform final release of resources when the applet is no longer used\n")])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("方法")]),e._v(" "),a("th",[e._v("作用")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("init()")])]),e._v(" "),a("td",[e._v("程序片第一次被创建，初次运行初始化程序片时调用")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("start()")])]),e._v(" "),a("td",[e._v("每当程序片进入Web浏览器中，并且允许程序片启动它的常规操作时调用（特殊的程序片被"),a("code",[e._v("stop()")]),e._v("关闭）；同样在"),a("code",[e._v("init()")]),e._v("后调用")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("paint()")])]),e._v(" "),a("td",[e._v("基类"),a("code",[e._v("Component")]),e._v("的一部分（继承结构中上溯三级）。作为"),a("code",[e._v("update()")]),e._v("的一部分调用，以便对程序片的画布进行特殊的描绘")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("stop()")])]),e._v(" "),a("td",[e._v("每次程序片从Web浏览器的视线中离开时调用，使程序片能关闭代价高昂的操作；同样在调用"),a("code",[e._v("destroy()")]),e._v("前调用")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("destroy()")])]),e._v(" "),a("td",[e._v("程序片不再需要，将它从页面中卸载时调用，以执行资源的最后清除工作")])])])]),e._v(" "),a("p",[e._v("现在来看一看"),a("code",[e._v("paint()")]),e._v("方法。一旦"),a("code",[e._v("Component")]),e._v("（目前是程序片）决定自己需要更新，就会调用这个方法——可能是由于它再次回转屏幕，首次在屏幕上显示，或者是由于其他窗口临时覆盖了你的Web浏览器。此时程序片会调用它的"),a("code",[e._v("update()")]),e._v("方法（在基类"),a("code",[e._v("Component中")]),e._v("定义），该方法会恢复一切该恢复的东西，而调用"),a("code",[e._v("paint()")]),e._v("正是这个过程的一部分。没必要对"),a("code",[e._v("paint()")]),e._v("进行重载处理，但构建一个简单的程序片无疑是方便的方法，所以我们首先从"),a("code",[e._v("paint()")]),e._v("方法开始。")]),e._v(" "),a("p",[a("code",[e._v("update()")]),e._v("调用"),a("code",[e._v("paint()")]),e._v("时，会向其传递指向"),a("code",[e._v("Graphics")]),e._v("对象的一个引用，那个对象代表准备在上面描绘（作图）的表面。这是非常重要的，因为我们受到项目组件的外观的限制，因此不能画到区域外，这可是一件好事，否则我们就会画到线外去。在程序片的例子中，程序片的外观就是这界定的区域。")]),e._v(" "),a("p",[e._v("图形对象同样有一系列我们可对其进行的操作。这些操作都与在画布上作图有关。所以其中的大部分都要涉及图像、几何菜状、圆弧等等的描绘（注意如果有兴趣，可在Java文档中找到更详细的说明）。有些方法允许我们画出字符，而其中最常用的就是"),a("code",[e._v("drawString()")]),e._v("。对于它，需指出自己想描绘的"),a("code",[e._v("String")]),e._v("（字符串），并指定它在程序片作图区域的起点。这个位置用像素表示，所以它在不同的机器上看起来是不同的，但至少是可以移植的。")]),e._v(" "),a("p",[e._v("根据这些信息即可创建一个简单的程序片：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: Applet1.java\n// Very simple applet\npackage c13;\nimport java.awt.*;\nimport java.applet.*;\n\npublic class Applet1 extends Applet {\n  public void paint(Graphics g) {\n    g.drawString("First applet", 10, 10);\n  }\n} ///:~\n')])])]),a("p",[e._v("注意这个程序片不需要有一个"),a("code",[e._v("main()")]),e._v("。所有内容都封装到应用程序框架中；我们将所有启动代码都放在"),a("code",[e._v("init()")]),e._v("里。")]),e._v(" "),a("p",[e._v("必须将这个程序放到一个Web页中才能运行，而只能在支持Java的Web浏览器中才能看到此页。为了将一个程序片置入Web页，需要在那个Web页的代码中设置一个特殊的标记（注释①），以指示网页装载和运行程序片。这就是"),a("code",[e._v("applet")]),e._v("标记，它在"),a("code",[e._v("Applet1")]),e._v("中的样子如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<applet\ncode=Applet1\nwidth=200\nheight=200>\n</applet>\n")])])]),a("p",[e._v("①：本书假定读者已掌握了HTML的基本知识。这些知识不难学习，有许多书籍和网上资源都可以提供帮助。")]),e._v(" "),a("p",[e._v("其中，"),a("code",[e._v("code")]),e._v("值指定了"),a("code",[e._v(".class")]),e._v("文件的名字，程序片就驻留在那个文件中。width和height指定这个程序片的初始尺寸（如前所述，以像素为单位）。还可将另一些东西放入"),a("code",[e._v("applet")]),e._v("标记：用于在因特网上寻找其他"),a("code",[e._v(".class")]),e._v("文件的位置（"),a("code",[e._v("codebase")]),e._v("）、对齐和排列信息（"),a("code",[e._v("align")]),e._v("）、使程序片相互间能够通信的一个特殊标识符（"),a("code",[e._v("name")]),e._v("）以及用于提供程序片能接收的信息的参数。参数采取下述形式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Paramname=标识符 value ="信息">\n')])])]),a("p",[e._v("可根据需要设置任意多个这样的参数。")]),e._v(" "),a("p",[e._v("在简单的程序片中，我们要做的唯一事情是按上述形式在Web页中设置一个程序片标记（"),a("code",[e._v("applet")]),e._v("），令其装载和运行程序片。")]),e._v(" "),a("h2",{attrs:{id:"_13-2-1-程序片的测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-1-程序片的测试"}},[e._v("#")]),e._v(" 13.2.1 程序片的测试")]),e._v(" "),a("p",[e._v("我们可在不必建立网络连接的前提下进行一次简单的测试，方法是启动我们的Web浏览器，然后打开包含了程序片标签的HTML文件（Sun公司的JDK同样包括一个称为“程序片观察器”的工具，它能挑出html文件的"),a("code",[e._v("<applet>")]),e._v("标记，并运行这个程序片，不必显示周围的HTML文本——注释②）。html文件载入后，浏览器会发现程序片的标签，并查找由"),a("code",[e._v("code")]),e._v("值指定的"),a("code",[e._v(".class")]),e._v("文件。当然，它会先在"),a("code",[e._v("CLASSPATH")]),e._v("（类路径）中寻找，如果在"),a("code",[e._v("CLASSPATH")]),e._v("下找不到类文件，就在WEB浏览器状态栏给出一个错误信息，告知不能找到"),a("code",[e._v(".class")]),e._v("文件。")]),e._v(" "),a("p",[e._v("②；由于程序片观察器会忽略除"),a("code",[e._v("APPLET")]),e._v("标记之外的任何东西，所以可将那些标记作为注释置入Java源码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// <applet code=MyApplet.class width=200 height=100></applet>\n")])])]),a("p",[e._v("这样就可直接执行"),a("code",[e._v("appletviewer MyApplet.java")]),e._v("，不必再创建小的HTML文件来完成测试。")]),e._v(" "),a("p",[e._v("若想在Web站点上试验，还会碰到另一些麻烦。首先，我们必须有一个Web站点，这对大多数人来说都意味着位于远程地点的一家服务提供商（ISP）。然后必须通过某种途径将HTML文件和"),a("code",[e._v(".class")]),e._v("文件从自己的站点移至ISP机器上正确的目录（WWW目录）。这一般是通过采用“文件传输协议”（FTP）的程序来做成的，网上可找到许多这样的免费程序。所以我们要做的全部事情似乎就是用FTP协议将文件移至ISP的机器，然后用自己的浏览器连接网站和HTML文件；假如程序片正确装载和执行，就表明大功告成。但真是这样吗？")]),e._v(" "),a("p",[e._v("但这儿我们可能会受到愚弄。假如Web浏览器在服务器上找不到"),a("code",[e._v(".class")]),e._v("文件，就会在你的本地机器上搜寻"),a("code",[e._v("CLASSPATH")]),e._v("。所以程序片或许根本不能从服务器上正确地装载，但在你看来却是一切正常的，因为浏览器在你的机器上找到了它需要的东西。但在其他人访问时，他们的浏览器就无法找到那些类文件。所以在测试时，必须确定已从自己的机器删除了相关的"),a("code",[e._v(".class")]),e._v("文件，以确保测试结果的真实。")]),e._v(" "),a("p",[e._v("我自己就遇到过这样的一个问题。当时是将程序片置入一个"),a("code",[e._v("package")]),e._v("（包）中。上载了HTML文件和程序片后，由于包名的问题，程序片的服务器路径似乎陷入了混乱。但是，我的浏览器在本地类路径（"),a("code",[e._v("CLASSPATH")]),e._v("）中找到了它。这样一来，我就成了能够成功装载程序片的唯一一个人。后来我花了一些时间才发现原来是"),a("code",[e._v("package")]),e._v("语句有误。一般地，应该将"),a("code",[e._v("package")]),e._v("语句置于程序片的外部。")]),e._v(" "),a("h2",{attrs:{id:"_13-2-2-一个更图形化的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-2-一个更图形化的例子"}},[e._v("#")]),e._v(" 13.2.2 一个更图形化的例子")]),e._v(" "),a("p",[e._v("这个程序不会太令人紧张，所以让我们试着增加一些有趣的图形组件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: Applet2.java\n// Easy graphics\nimport java.awt.*;\nimport java.applet.*;\n\npublic class Applet2 extends Applet {\n  public void paint(Graphics g) {\n    g.drawString("Second applet", 10, 15);\n    g.draw3DRect(0, 0, 100, 20, true);\n  }\n} ///:~\n')])])]),a("p",[e._v("这个程序用一个方框将字符串包围起来。当然，所有数字都是“硬编码”的（指数字固定于程序内部），并以像素为基础。所以在一些机器上，框会正好将字符串围住；而在另一些机器上，也许根本看不见这个框，因为不同机器安装的字体也会有所区别。")]),e._v(" "),a("p",[e._v("对"),a("code",[e._v("Graphic")]),e._v("类而言，可在帮助文档中找到另一些有趣的内容。大多数涉及图形的活动都是很有趣的，所有我将更多的试验留给读者自己去进行。")]),e._v(" "),a("h2",{attrs:{id:"_13-2-3-框架方法的演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-2-3-框架方法的演示"}},[e._v("#")]),e._v(" 13.2.3 框架方法的演示")]),e._v(" "),a("p",[e._v("观看框架方法的实际运作是相当有趣的（这个例子只使用"),a("code",[e._v("init()")]),e._v("，"),a("code",[e._v("start()")]),e._v("和"),a("code",[e._v("stop()")]),e._v("，因为"),a("code",[e._v("paint()")]),e._v("和"),a("code",[e._v("destroy()")]),e._v("非常简单，很容易就能掌握）。下面的程序片将跟踪这些方法调用的次数，并用"),a("code",[e._v("paint()")]),e._v("将其显示出来：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: Applet3.java\n// Shows init(), start() and stop() activities\nimport java.awt.*;\nimport java.applet.*;\n\npublic class Applet3 extends Applet {\n  String s;\n  int inits = 0;\n  int starts = 0;\n  int stops = 0;\n  public void init() { inits++; }\n  public void start() { starts++; }\n  public void stop() { stops++; }\n  public void paint(Graphics g) {\n    s = "inits: " + inits +\n      ", starts: " + starts +\n      ", stops: " + stops;\n    g.drawString(s, 10, 10);\n  }\n} ///:~\n')])])]),a("p",[e._v("正常情况下，当我们重载一个方法时，需检查自己是否需要调用方法的基类版本，这是十分重要的。例如，使用"),a("code",[e._v("init()")]),e._v("时可能需要调用"),a("code",[e._v("super.init()")]),e._v("。然而，"),a("code",[e._v("Applet")]),e._v("文档特别指出"),a("code",[e._v("init()")]),e._v("、"),a("code",[e._v("start()")]),e._v("和"),a("code",[e._v("stop()")]),e._v("在"),a("code",[e._v("Applet")]),e._v("中没有用处，所以这里不需要调用它们。")]),e._v(" "),a("p",[e._v("试验这个程序片时，会发现假如最小化WEB浏览器，或者用另一个窗口将其覆盖，那么就不能再调用"),a("code",[e._v("stop()")]),e._v("和"),a("code",[e._v("start()")]),e._v("（这一行为会随着不同的实现方案变化；可考虑将Web浏览器的行为同程序片观察器的行为对照一下）。调用唯一发生的场合是在我们转移到一个不同的Web页，然后返回包含了程序片的那个页时。")])])}),[],!1,null,null,null);t.default=_.exports}}]);