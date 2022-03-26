(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{449:function(t,a,e){"use strict";e.r(a);var n=e(56),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_13-12-布局的控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-布局的控制"}},[t._v("#")]),t._v(" 13.12 布局的控制")]),t._v(" "),e("p",[t._v("在Java里该方法是安一个组件到一个窗体中去，它不同我们使用过的其它GUI系统。首先，它是全代码的；没有控制安放组件的“资源”。其次，该方法的组件被安放到一个被“布局管理器”控制的窗体中，由“布局管理器”根据我们"),e("code",[t._v("add()")]),t._v("它们的决定来安放组件。大小，形状，组件位置与其它系统的布局管理器显著的不同。另外，布局管理器使我们的程序片或应用程序适合窗口的大小，所以，如果窗口的尺寸改变（例如，在HTML页面的程序片指定的规格），组件的大小，形状和位置都会改变。")]),t._v(" "),e("p",[t._v("程序片和帧类都是来源于包含和显示组件的容器。（这个容器也是一个组件，所以它也能响应事件。）在容器中，调用"),e("code",[t._v("setLayout()")]),t._v("方法允许我选择不同的布局管理器。")]),t._v(" "),e("p",[t._v("在这节里我们将探索不同的布局管理器，并安放按钮在它们之上。这里没有捕捉按钮的事件，正好可以演示如何布置这些按钮。")]),t._v(" "),e("h2",{attrs:{id:"_13-12-1-flowlayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-1-flowlayout"}},[t._v("#")]),t._v(" 13.12.1 "),e("code",[t._v("FlowLayout")])]),t._v(" "),e("p",[t._v("到目前为止，所有的程序片都被建立，看起来使用一些不可思议的内部逻辑来布置它们的组件。那是因为程序使用一个默认的方式："),e("code",[t._v("FlowLayout")]),t._v("。这个简单的"),e("code",[t._v("Flow")]),t._v("的组件安装在窗体中，从左到右，直到顶部的空格全部再移去一行，并继续循环这些组件。")]),t._v(" "),e("p",[t._v("这里有一个例子明确地（当然也是多余地）设置一个程序片的布局管理器去"),e("code",[t._v("FlowLayout")]),t._v("，然后在窗体中安放按钮。我们将注意到"),e("code",[t._v("FlowLayout")]),t._v("组件使用它们本来的大小。例如一个按钮将会变得和它的字符串符一样的大小。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//: FlowLayout1.java\n// Demonstrating the FlowLayout\nimport java.awt.*;\nimport java.applet.*;\n\npublic class FlowLayout1 extends Applet {\n  public void init() {\n    setLayout(new FlowLayout());\n    for(int i = 0; i < 20; i++)\n      add(new Button("Button " + i));\n  }\n} ///:~\n')])])]),e("p",[t._v("所有组件将在"),e("code",[t._v("FlowLayout")]),t._v("中被压缩为它们的最小尺寸，所以我们可能会得到一些奇怪的状态。例如，一个标签会合适它自已的字符串的尺寸，所以它会右对齐产生一个不变的显示。")]),t._v(" "),e("h2",{attrs:{id:"_13-12-2-borderlayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-2-borderlayout"}},[t._v("#")]),t._v(" 13.12.2 "),e("code",[t._v("BorderLayout")])]),t._v(" "),e("p",[t._v("布局管理器有四边和中间区域的概念。当我们增加一些事物到使用"),e("code",[t._v("BorderLayout")]),t._v("的面板上时我们必须使用"),e("code",[t._v("add()")]),t._v("方法将一个字符串对象作为它的第一个参数，并且字符串必须指定（正确的大写）"),e("code",[t._v("North")]),t._v("（上），"),e("code",[t._v("South")]),t._v("（下），"),e("code",[t._v("west")]),t._v("（左），"),e("code",[t._v("East")]),t._v("（右）或者"),e("code",[t._v("Center")]),t._v("。如果我们拼写错误或没有大写，就会得到一个编译时的错误，并且程序片不会像你所期望的那样运行。幸运的是，我们会很快发现在Java 1.1中有了更多改进。")]),t._v(" "),e("p",[t._v("这是一个简单的程序例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//: BorderLayout1.java\n// Demonstrating the BorderLayout\nimport java.awt.*;\nimport java.applet.*;\n\npublic class BorderLayout1 extends Applet {\n  public void init() {\n    int i = 0;\n    setLayout(new BorderLayout());\n    add("North", new Button("Button " + i++));\n    add("South", new Button("Button " + i++));\n    add("East", new Button("Button " + i++));\n    add("West", new Button("Button " + i++));\n    add("Center", new Button("Button " + i++));\n  }\n} ///:~\n')])])]),e("p",[t._v("除了"),e("code",[t._v("Center")]),t._v("的每一个位置，当元素在其它空间内扩大到最大时，我们会把它压缩到适合空间的最小尺寸。但是，"),e("code",[t._v("Center")]),t._v("扩大后只会占据中心位置。")]),t._v(" "),e("p",[e("code",[t._v("BorderLayout")]),t._v("是应用程序和对话框的默认布局管理器。")]),t._v(" "),e("h2",{attrs:{id:"_13-12-3-gridlayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-3-gridlayout"}},[t._v("#")]),t._v(" 13.12.3 "),e("code",[t._v("GridLayout")])]),t._v(" "),e("p",[e("code",[t._v("GridLayout")]),t._v("允许我们建立一个组件表。添加那些组件时，它们会按从左到右、从上到下的顺序在网格中排列。在构造器里，需要指定自己希望的行、列数，它们将按正比例展开。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//: GridLayout1.java\n// Demonstrating the GridLayout\nimport java.awt.*;\nimport java.applet.*;\n\npublic class GridLayout1 extends Applet {\n  public void init() {\n    setLayout(new GridLayout(7,3));\n    for(int i = 0; i < 20; i++)\n      add(new Button("Button " + i));\n  }\n} ///:~\n')])])]),e("p",[t._v("在这个例子里共有21个空位，但却只有20个按钮，最后的一个位置作留空处理；注意对"),e("code",[t._v("GridLayout")]),t._v("来说，并不存在什么“均衡”处理。")]),t._v(" "),e("h2",{attrs:{id:"_13-12-4-cardlayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-4-cardlayout"}},[t._v("#")]),t._v(" 13.12.4 "),e("code",[t._v("CardLayout")])]),t._v(" "),e("p",[e("code",[t._v("CardLayout")]),t._v("允许我们在更复杂的拥有真正的文件夹卡片与一条边相遇的环境里创建大致相同于“卡片式对话框”的布局，我们必须压下一个卡片使不同的对话框带到前面来。在AWT里不是这样的："),e("code",[t._v("CardLayout")]),t._v("是简单的空的空格，我们可以自由地把新卡片带到前面来。（JFC/Swing库包括卡片式的窗格看起来非常的棒，且可以我们处理所有的细节。）")]),t._v(" "),e("p",[t._v("(1) 联合布局（Combining layouts)")]),t._v(" "),e("p",[t._v("下面的例子联合了更多的布局类型，在最初只有一个布局管理器被程序片或应用程序操作看起来相当的困难。这是事实，但如果我们创建更多的面板对象，每个面板都能拥有一个布局管理器，并且像被集成到程序片或应用程序中一样使用程序片或应用程序的布局管理器。这就象下面程序中的一样给了我们更多的灵活性：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//: CardLayout1.java\n// Demonstrating the CardLayout\nimport java.awt.*;\nimport java.applet.Applet;\n\nclass ButtonPanel extends Panel {\n  ButtonPanel(String id) {\n    setLayout(new BorderLayout());\n    add("Center", new Button(id));\n  }\n}\n\npublic class CardLayout1 extends Applet {\n  Button\n    first = new Button("First"),\n    second = new Button("Second"),\n    third = new Button("Third");\n  Panel cards = new Panel();\n  CardLayout cl = new CardLayout();\n  public void init() {\n    setLayout(new BorderLayout());\n    Panel p = new Panel();\n    p.setLayout(new FlowLayout());\n    p.add(first);\n    p.add(second);\n    p.add(third);\n    add("North", p);\n    cards.setLayout(cl);\n    cards.add("First card",\n      new ButtonPanel("The first one"));\n    cards.add("Second card",\n      new ButtonPanel("The second one"));\n    cards.add("Third card",\n      new ButtonPanel("The third one"));\n    add("Center", cards);\n  }\n  public boolean action(Event evt, Object arg) {\n    if (evt.target.equals(first)) {\n      cl.first(cards);\n    }\n    else if (evt.target.equals(second)) {\n      cl.first(cards);\n      cl.next(cards);\n    }\n    else if (evt.target.equals(third)) {\n      cl.last(cards);\n    }\n    else\n      return super.action(evt, arg);\n    return true;\n  }\n} ///:~\n')])])]),e("p",[t._v("这个例子首先会创建一种新类型的面板："),e("code",[t._v("BottonPanel")]),t._v("（按钮面板）。它包括一个单独的按钮，安放在"),e("code",[t._v("BorderLayout")]),t._v("的中央，那意味着它将充满整个的面板。按钮上的标签将让我们知道我们在"),e("code",[t._v("CardLayout")]),t._v("上的那个面板上。")]),t._v(" "),e("p",[t._v("在程序片里，面板卡片上将存放卡片和布局管理器CL因为"),e("code",[t._v("CardLayout")]),t._v("必须组成类，因为当我们需要处理卡片时我们需要访问这些引用。")]),t._v(" "),e("p",[t._v("这个程序片变成使用"),e("code",[t._v("BorderLayout")]),t._v("来取代它的默认"),e("code",[t._v("FlowLayout")]),t._v("，创建面板来容纳三个按钮（使用"),e("code",[t._v("FlowLayout")]),t._v("），并且这个面板安置在程序片末尾的"),e("code",[t._v("North")]),t._v("。卡片面板增加到程序片的"),e("code",[t._v("Center")]),t._v("里，有效地占据面板的其余地方。")]),t._v(" "),e("p",[t._v("当我们增加"),e("code",[t._v("BottonPanels")]),t._v("(或者任何其它我们想要的组件）到卡片面板时，"),e("code",[t._v("add()")]),t._v("方法的第一个参数不是"),e("code",[t._v("North")]),t._v("，"),e("code",[t._v("South")]),t._v("等等。相反的是，它是一个描述卡片的字符串。如果我们想轻击那张卡片使用字符串，我们就可以使用，虽然这字符串不会显示在卡片的任何地方。使用的方法不是使用"),e("code",[t._v("action()")]),t._v("；代之使用"),e("code",[t._v("first()")]),t._v("、"),e("code",[t._v("next()")]),t._v("和"),e("code",[t._v("last()")]),t._v("等方法。请查看我们有关其它方法的文件。")]),t._v(" "),e("p",[t._v("在Java中，使用的一些卡片式面板结构十分的重要，因为（我们将在后面看到）在程序片编程中使用的弹出式对话框是十分令人沮丧的。对于Java 1.0版的程序片而言，"),e("code",[t._v("CardLayout")]),t._v("是唯一有效的取得很多不同的“弹出式”的窗体。")]),t._v(" "),e("h2",{attrs:{id:"_13-12-5-gridbaglayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-12-5-gridbaglayout"}},[t._v("#")]),t._v(" 13.12.5 "),e("code",[t._v("GridBagLayout")])]),t._v(" "),e("p",[t._v("很早以前，人们相信所有的恒星、行星、太阳及月亮都围绕地球公转。这是直观的观察。但后来天文学家变得更加的精明，他们开始跟踪个别星体的移动，它们中的一些似乎有时在轨道上缓慢运行。因为天文学家知道所有的天体都围绕地球公转，天文学家花费了大量的时间来讨论相关的方程式和理论去解释天体对象的运行。当我们试图用"),e("code",[t._v("GridBagLayout")]),t._v("来工作时，我们可以想像自己为一个早期的天文学家。基础的条例是（公告：有趣的是设计者居然在太阳上(这可能是在天体图中标错了位置所致，译者注)）所有的天体都将遵守规则来运行。哥白尼日新说（又一次不顾嘲讽，发现太阳系内的所有的行星围绕太阳公转。）是使用网络图来判断布局，这种方法使得程序员的工作变得简单。直到这些增加到Java里，我们忍耐（持续的冷嘲热讽）西班牙的"),e("code",[t._v("GridBagLayout")]),t._v("和"),e("code",[t._v("GridBagConstraints")]),t._v("狂热宗教。我们建议废止"),e("code",[t._v("GridBagLayout")]),t._v("。取代它的是，使用其它的布局管理器和特殊的在单个程序里联合几个面板使用不同的布局管理器的技术。我们的程序片看起来不会有什么不同；至少不足以调整"),e("code",[t._v("GridBagLayout")]),t._v("限制的麻烦。对我而言，通过一个例子来讨论它实在是令人头痛（并且我不鼓励这种库设计）。相反，我建议您从阅读Cornell和Horstmann撰写的《核心Java》（第二版，Prentice-Hall出版社，1997年）开始。")]),t._v(" "),e("p",[t._v("在这范围内还有其它的：在JFC/Swing库里有一个新的使用Smalltalk的受人欢迎的“Spring and Struts”布局管理器并且它能显著地减少"),e("code",[t._v("GridBagLayout")]),t._v("的需要。")])])}),[],!1,null,null,null);a.default=o.exports}}]);