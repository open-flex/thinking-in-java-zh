(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{482:function(e,n,t){"use strict";t.r(n);var a=t(56),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_15-6-java与cgi的沟通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-6-java与cgi的沟通"}},[e._v("#")]),e._v(" 15.6 Java与CGI的沟通")]),e._v(" "),t("p",[e._v("Java程序可向一个服务器发出一个CGI请求，这与HTML表单页没什么两样。而且和HTML页一样，这个请求既可以设为GET（下载），亦可设为POST（上传）。除此以外，Java程序还可拦截CGI程序的输出，所以不必依赖程序来格式化一个新页，也不必在出错的时候强迫用户从一个页回转到另一个页。事实上，程序的外观可以做得跟以前的版本别无二致。")]),e._v(" "),t("p",[e._v("代码也要简单一些，毕竟用CGI也不是很难就能写出来（前提是真正地理解它）。所以在这一节里，我们准备办个CGI编程速成班。为解决常规问题，将用C++创建一些CGI工具，以便我们编写一个能解决所有问题的CGI程序。这样做的好处是移植能力特别强——即将看到的例子能在支持CGI的任何系统上运行，而且不存在防火墙的问题。")]),e._v(" "),t("p",[e._v("这个例子也阐示了如何在程序片（Applet）和CGI程序之间建立连接，以便将其方便地改编到自己的项目中。")]),e._v(" "),t("h2",{attrs:{id:"_15-6-1-cgi数据的编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-6-1-cgi数据的编码"}},[e._v("#")]),e._v(" 15.6.1 CGI数据的编码")]),e._v(" "),t("p",[e._v("在这个版本中，我们将收集名字和电子函件地址，并用下述形式将其保存到文件中：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("First Last <email@domain.com>;\n")])])]),t("p",[e._v("这对任何E-mail程序来说都是一种非常方便的格式。由于只需收集两个字段，而且CGI为字段中的编码采用了一种特殊的格式，所以这里没有简便的方法。如果自己动手编制一个原始的HTML页，并加入下述代码行，即可正确地理解这一点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<Form method="GET" ACTION="/cgi-bin/Listmgr2.exe">\n<P>Name: <INPUT TYPE = "text" NAME = "name"\nVALUE = "" size = "40"></p>\n<P>Email Address: <INPUT TYPE = "text"\nNAME = "email" VALUE = "" size = "40"></p>\n<p><input type = "submit" name = "submit" > </p>\n</Form>\n')])])]),t("p",[e._v("上述代码创建了两个数据输入字段（区），名为"),t("code",[e._v("name")]),e._v("和"),t("code",[e._v("email")]),e._v("。另外还有一个"),t("code",[e._v("submit")]),e._v("（提交）按钮，用于收集数据，并将其发给CGI程序。"),t("code",[e._v("Listmgr2.exe")]),e._v("是驻留在特殊程序目录中的一个可执行文件。在我们的Web服务器上，该目录一般都叫作"),t("code",[e._v("cgi-bin")]),e._v("（注释③）。如果在那个目录里找不到该程序，结果就无法出现。填好这个表单，然后按下提交按钮，即可在浏览器的URL地址窗口里看到象下面这样的内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://www.myhome.com/cgi-bin/Listmgr2.exe?name=First+Last&email=email@domain.com&submit=Submit\n")])])]),t("p",[e._v("③：在Windows32平台下，可利用与Microsoft Office 97或其他产品配套提供的Microsoft Personal Web Server（微软个人Web服务器）进行测试。这是进行试验的最好方法，因为不必正式连入网络，可在本地环境中完成测试（速度也非常快）。如果使用的是不同的平台，或者没有Office 97或者FrontPage 98那样的产品，可到网上找一个免费的Web服务器供自己测试。")]),e._v(" "),t("p",[e._v("当然，上述URL实际显示时是不会拆行的。从中可稍微看出如何对数据编码并传给CGI。至少有一件事情能够肯定——空格是不允许的（因为它通常用于分隔命令行参数）。所有必需的空格都用“+”号替代，每个字段都包含了字段名（具体由HTML页决定），后面跟随一个"),t("code",[e._v("=")]),e._v("号以及正式的字段数据，最后用一个"),t("code",[e._v("&")]),e._v("结束。")]),e._v(" "),t("p",[e._v("到这时，大家也许会对"),t("code",[e._v("+")]),e._v("，"),t("code",[e._v("=")]),e._v("以及"),t("code",[e._v("&")]),e._v("的使用产生疑惑。假如必须在字段里使用这些字符，那么该如何声明呢？例如，我们可能使用“John & MarshaSmith”这个名字，其中的"),t("code",[e._v("&")]),e._v("代表“And”。事实上，它会编码成下面这个样子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("John+%26+Marsha+Smith\n")])])]),t("p",[e._v("也就是说，特殊字符会转换成一个"),t("code",[e._v("%")]),e._v("，并在后面跟上它的十六进制ASCII编码。")]),e._v(" "),t("p",[e._v("幸运的是，Java有一个工具来帮助我们进行这种编码。这是"),t("code",[e._v("URLEncoder")]),e._v("类的一个静态方法，名为"),t("code",[e._v("encode()")]),e._v("。可用下述程序来试验这个方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: EncodeDemo.java\n// Demonstration of URLEncoder.encode()\nimport java.net.*;\n\npublic class EncodeDemo {\n  public static void main(String[] args) {\n    String s = "";\n    for(int i = 0; i < args.length; i++)\n      s += args[i] + " ";\n    s = URLEncoder.encode(s.trim());\n    System.out.println(s);\n  }\n} ///:~\n')])])]),t("p",[e._v("该程序将获取一些命令行参数，把它们合并成一个由多个词构成的字符串，各词之间用空格分隔（最后一个空格用"),t("code",[e._v("String.trim()")]),e._v("剔除了）。随后对它们进行编码，并打印出来。")]),e._v(" "),t("p",[e._v("为调用一个CGI程序，程序片要做的全部事情就是从自己的字段或其他地方收集数据，将所有数据都编码成正确的URL样式，然后汇编到单独一个字符串里。每个字段名后面都加上一个"),t("code",[e._v("=")]),e._v("符号，紧跟正式数据，再紧跟一个"),t("code",[e._v("&")]),e._v("。为构建完整的CGI命令，我们将这个字符串置于CGI程序的URL以及一个"),t("code",[e._v("?")]),e._v("后。这是调用所有CGI程序的标准方法。大家马上就会看到，用一个程序片能够很轻松地完成所有这些编码与合并。")]),e._v(" "),t("h2",{attrs:{id:"_15-6-2-程序片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-6-2-程序片"}},[e._v("#")]),e._v(" 15.6.2 程序片")]),e._v(" "),t("p",[e._v("程序片实际要比"),t("code",[e._v("NameSender.java")]),e._v("简单一些。这部分是由于很容易即可发出一个GET请求。此外，也不必等候回复信息。现在有两个字段，而非一个，但大家会发现许多程序片都是熟悉的，请比较"),t("code",[e._v("NameSender.java")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: NameSender2.java\n// An applet that sends an email address\n// via a CGI GET, using Java 1.02.\nimport java.awt.*;\nimport java.applet.*;\nimport java.net.*;\nimport java.io.*;\n\npublic class NameSender2 extends Applet {\n  final String CGIProgram = "Listmgr2.exe";\n  Button send = new Button(\n    "Add email address to mailing list");\n  TextField name = new TextField(\n    "type your name here", 40),\n    email = new TextField(\n    "type your email address here", 40);\n  String str = new String();\n  Label l = new Label(), l2 = new Label();\n  int vcount = 0;\n  public void init() {\n    setLayout(new BorderLayout());\n    Panel p = new Panel();\n    p.setLayout(new GridLayout(3, 1));\n    p.add(name);\n    p.add(email);\n    p.add(send);\n    add("North", p);\n    Panel labels = new Panel();\n    labels.setLayout(new GridLayout(2, 1));\n    labels.add(l);\n    labels.add(l2);\n    add("Center", labels);\n    l.setText("Ready to send email address");\n  }\n  public boolean action (Event evt, Object arg) {\n    if(evt.target.equals(send)) {\n      l2.setText("");\n      // Check for errors in data:\n      if(name.getText().trim()\n         .indexOf(\' \') == -1) {\n        l.setText(\n          "Please give first and last name");\n        l2.setText("");\n        return true;\n      }\n      str = email.getText().trim();\n      if(str.indexOf(\' \') != -1) {\n        l.setText(\n          "Spaces not allowed in email name");\n        l2.setText("");\n        return true;\n      }\n      if(str.indexOf(\',\') != -1) {\n        l.setText(\n          "Commas not allowed in email name");\n        return true;\n      }\n      if(str.indexOf(\'@\') == -1) {\n        l.setText("Email name must include \'@\'");\n        l2.setText("");\n        return true;\n      }\n      if(str.indexOf(\'@\') == 0) {\n        l.setText(\n          "Name must preceed \'@\' in email name");\n        l2.setText("");\n        return true;\n      }\n      String end =\n        str.substring(str.indexOf(\'@\'));\n      if(end.indexOf(\'.\') == -1) {\n        l.setText("Portion after \'@\' must " +\n          "have an extension, such as \'.com\'");\n        l2.setText("");\n        return true;\n      }\n      // Build and encode the email data:\n      String emailData =\n        "name=" + URLEncoder.encode(\n          name.getText().trim()) +\n        "&email=" + URLEncoder.encode(\n          email.getText().trim().toLowerCase()) +\n        "&submit=Submit";\n      // Send the name using CGI\'s GET process:\n      try {\n        l.setText("Sending...");\n        URL u = new URL(\n          getDocumentBase(), "cgi-bin/" +\n          CGIProgram + "?" + emailData);\n        l.setText("Sent: " + email.getText());\n        send.setLabel("Re-send");\n        l2.setText(\n          "Waiting for reply " + ++vcount);\n        DataInputStream server =\n          new DataInputStream(u.openStream());\n        String line;\n        while((line = server.readLine()) != null)\n          l2.setText(line);\n      } catch(MalformedURLException e) {\n        l.setText("Bad URl");\n      } catch(IOException e) {\n        l.setText("IO Exception");\n      }\n    }\n    else return super.action(evt, arg);\n    return true;\n  }\n} ///:~\n')])])]),t("p",[e._v("CGI程序（不久即可看到）的名字是"),t("code",[e._v("Listmgr2.exe")]),e._v("。许多Web服务器都在Unix机器上运行（Linux也越来越受到青睐）。根据传统，它们一般不为自己的可执行程序采用"),t("code",[e._v(".exe")]),e._v("扩展名。但在Unix操作系统中，可以把自己的程序称呼为自己希望的任何东西。若使用的是"),t("code",[e._v(".exe")]),e._v("扩展名，程序毋需任何修改即可通过Unix和Win32的运行测试。")]),e._v(" "),t("p",[e._v("和往常一样，程序片设置了自己的用户界面（这次是两个输入字段，不是一个）。唯一显著的区别是在"),t("code",[e._v("action()")]),e._v("方法内产生的。该方法的作用是对按钮按下事件进行控制。名字检查过以后，大家会发现下述代码行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      String emailData =\n        "name=" + URLEncoder.encode(\n          name.getText().trim()) +\n        "&email=" + URLEncoder.encode(\n          email.getText().trim().toLowerCase()) +\n        "&submit=Submit";\n      // Send the name using CGI\'s GET process:\n      try {\n        l.setText("Sending...");\n        URL u = new URL(\n          getDocumentBase(), "cgi-bin/" +\n          CGIProgram + "?" + emailData);\n        l.setText("Sent: " + email.getText());\n        send.setLabel("Re-send");\n        l2.setText(\n          "Waiting for reply " + ++vcount);\n        DataInputStream server =\n          new DataInputStream(u.openStream());\n        String line;\n        while((line = server.readLine()) != null)\n          l2.setText(line);\n        // ...\n')])])]),t("p",[t("code",[e._v("name")]),e._v("和"),t("code",[e._v("email")]),e._v("数据都是它们对应的文字框里提取出来，而且两端多余的空格都用"),t("code",[e._v("trim()")]),e._v("剔去了。为了进入列表，"),t("code",[e._v("email")]),e._v("名字被强制换成小写形式，以便能够准确地对比（防止基于大小写形式的错误判断）。来自每个字段的数据都编码为URL形式，随后采用与HTML页中一样的方式汇编GET字符串（这样一来，我们可将Java程序片与现有的任何CGI程序结合使用，以满足常规的HTML GET请求）。")]),e._v(" "),t("p",[e._v("到这时，一些Java的魔力已经开始发挥作用了：如果想同任何URL连接，只需创建一个URL对象，并将地址传递给构造器即可。构造器会负责建立同服务器的连接（对Web服务器来说，所有连接行动都是根据作为URL使用的字符串来判断的）。就目前这种情况来说，URL指向的是当前Web站点的"),t("code",[e._v("cgi-bin")]),e._v("目录（当前Web站点的基础地址是用"),t("code",[e._v("getDocumentBase()")]),e._v("设定的）。一旦Web服务器在URL中看到了一个"),t("code",[e._v("cgi-bin")]),e._v("，会接着希望在它后面跟随了"),t("code",[e._v("cgi-bin")]),e._v("目录内的某个程序的名字，那是我们要运行的目标程序。程序名后面是一个问号以及CGI程序会在"),t("code",[e._v("QUERY_STRING")]),e._v("环境变量中查找的一个参数字符串（马上就要学到）。")]),e._v(" "),t("p",[e._v("我们发出任何形式的请求后，一般都会得到一个回应的HTML页。但若使用Java的URL对象，我们可以拦截自CGI程序传回的任何东西，只需从URL对象里取得一个"),t("code",[e._v("InputStream")]),e._v("（输入数据流）即可。这是用URL对象的"),t("code",[e._v("openStream()")]),e._v("方法实现，它要封装到一个"),t("code",[e._v("DataInputStream")]),e._v("里。随后就可以读取数据行，若"),t("code",[e._v("readLine()")]),e._v("返回一个null（空值），就表明CGI程序已结束了它的输出。\n我们即将看到的CGI程序返回的仅仅是一行，它是用于标志成功与否（以及失败的具体原因）的一个字符串。这一行会被捕获并置放第二个"),t("code",[e._v("Label")]),e._v("字段里，使用户看到具体发生了什么事情。")]),e._v(" "),t("p",[e._v("(1) 从程序片里显示一个Web页")]),e._v(" "),t("p",[e._v("程序亦可将CGI程序的结果作为一个Web页显示出来，就象它们在普通HTML模式中运行那样。可用下述代码做到这一点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("getAppletContext().showDocument(u);\n")])])]),t("p",[e._v("其中，"),t("code",[e._v("u")]),e._v("代表URL对象。这是将我们重新定向于另一个Web页的一个简单例子。那个页凑巧是一个CGI程序的输出，但可以非常方便地进入一个原始的HTML页，所以可以构建这个程序片，令其产生一个由密码保护的网关，通过它进入自己Web站点的特殊部分：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: ShowHTML.java\nimport java.awt.*;\nimport java.applet.*;\nimport java.net.*;\nimport java.io.*;\n\npublic class ShowHTML extends Applet {\n  static final String CGIProgram = "MyCGIProgram";\n  Button send = new Button("Go");\n  Label l = new Label();\n  public void init() {\n    add(send);\n    add(l);\n  }\n  public boolean action (Event evt, Object arg) {\n    if(evt.target.equals(send)) {\n      try {\n        // This could be an HTML page instead of\n        // a CGI program. Notice that this CGI\n        // program doesn\'t use arguments, but\n        // you can add them in the usual way.\n        URL u = new URL(\n          getDocumentBase(),\n          "cgi-bin/" + CGIProgram);\n        // Display the output of the URL using\n        // the Web browser, as an ordinary page:\n        getAppletContext().showDocument(u);\n      } catch(Exception e) {\n        l.setText(e.toString());\n      }\n    }\n    else return super.action(evt, arg);\n    return true;\n  }\n} ///:~\n')])])]),t("p",[e._v("URL类的最大的特点就是有效地保护了我们的安全。可以同一个Web服务器建立连接，毋需知道幕后的任何东西。")]),e._v(" "),t("h2",{attrs:{id:"_15-6-3-用c-写的cgi程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-6-3-用c-写的cgi程序"}},[e._v("#")]),e._v(" 15.6.3 用C++写的CGI程序")]),e._v(" "),t("p",[e._v("经过前面的学习，大家应该能够根据例子用ANSI C为自己的服务器写出CGI程序。之所以选用ANSI C，是因为它几乎随处可见，是最流行的C语言标准。当然，现在的C++也非常流行了，特别是采用GNU C++编译器（g++）形式的那一些（注释④）。可从网上许多地方免费下载g++，而且可选用几乎所有平台的版本（通常与Linux那样的操作系统配套提供，且已预先安装好）。正如大家即将看到的那样，从CGI程序可获得面向对象程序设计的许多好处。")]),e._v(" "),t("p",[e._v("④：GNU的全称是“Gnu's Not Unix”。这最早是由“自由软件基金会”（FSF）负责开发的一个项目，致力于用一个免费的版本取代原有的Unix操作系统。现在的Linux似乎正在做前人没有做到的事情。但GNU工具在Linux的开发中扮演了至关重要的角色。事实上，Linux的整套软件包附带了数量非常多的GNU组件。")]),e._v(" "),t("p",[e._v("为避免第一次就提出过多的新概念，这个程序并未打算成为一个“纯”C++程序；有些代码是用普通C写成的——尽管还可选用C++的一些替用形式。但这并不是个突出的问题，因为该程序用C++制作最大的好处就是能够创建类。在解析CGI信息的时候，由于我们最关心的是字段的“名称／值”对，所以要用一个类（"),t("code",[e._v("Pair")]),e._v("）来代表单个名称／值对；另一个类（"),t("code",[e._v("CGI_vector")]),e._v("）则将CGI字符串自动解析到它会容纳的Pair对象里（作为一个"),t("code",[e._v("vector")]),e._v("），这样即可在有空的时候把每个Pair（对）都取出来。")]),e._v(" "),t("p",[e._v("这个程序同时也非常有趣，因为它演示了C++与Java相比的许多优缺点。大家会看到一些相似的东西；比如"),t("code",[e._v("class")]),e._v("关键字。访问控制使用的是完全相同的关键字"),t("code",[e._v("public")]),e._v("和"),t("code",[e._v("private")]),e._v("，但用法却有所不同。它们控制的是一个块，而非单个方法或字段（也就是说，如果指定"),t("code",[e._v("private:")]),e._v("，后续的每个定义都具有"),t("code",[e._v("private")]),e._v("属性，直到我们再指定"),t("code",[e._v("public:")]),e._v("为止）。另外在创建一个类的时候，所有定义都自动默认为"),t("code",[e._v("private")]),e._v("。")]),e._v(" "),t("p",[e._v("在这儿使用C++的一个原因是要利用C++“标准模板库”（STL）提供的便利。至少，STL包含了一个"),t("code",[e._v("vector")]),e._v("类。这是一个C++模板，可在编译期间进行配置，令其只容纳一种特定类型的对象（这里是"),t("code",[e._v("Pair")]),e._v("对象）。和Java的"),t("code",[e._v("Vector")]),e._v("不同，如果我们试图将除"),t("code",[e._v("Pair")]),e._v("对象之外的任何东西置入"),t("code",[e._v("vector")]),e._v("，C++的"),t("code",[e._v("vector")]),e._v("模板都会造成一个编译期错误；而Java的"),t("code",[e._v("Vector")]),e._v("能够照单全收。而且从"),t("code",[e._v("vector")]),e._v("里取出什么东西的时候，它会自动成为一个"),t("code",[e._v("Pair")]),e._v("对象，毋需进行转换处理。所以检查在编译期进行，这使程序显得更为“健壮”。此外，程序的运行速度也可以加快，因为没有必要进行运行期间的转换。"),t("code",[e._v("vector")]),e._v("也会重载"),t("code",[e._v("operator[]")]),e._v("，所以可以利用非常方便的语法来提取"),t("code",[e._v("Pair")]),e._v("对象。"),t("code",[e._v("vector")]),e._v("模板将在"),t("code",[e._v("CGI_vector")]),e._v("创建时使用；在那时，大家就可以体会到如此简短的一个定义居然蕴藏有那么巨大的能量。")]),e._v(" "),t("p",[e._v("若提到缺点，就一定不要忘记"),t("code",[e._v("Pair")]),e._v("在下列代码中定义时的复杂程度。与我们在Java代码中看到的相比，"),t("code",[e._v("Pair")]),e._v("的方法定义要多得多。这是由于C++的程序员必须提前知道如何用副本构造器控制复制过程，而且要用重载的"),t("code",[e._v("operator=")]),e._v("完成赋值。正如第12章解释的那样，我们有时也要在Java中考虑同样的事情。但在C++中，几乎一刻都不能放松对这些问题的关注。")]),e._v(" "),t("p",[e._v("这个项目首先创建一个可以重复使用的部分，由C++头文件中的"),t("code",[e._v("Pair")]),e._v("和"),t("code",[e._v("CGI_vector")]),e._v("构成。从技术角度看，确实不应把这些东西都塞到一个头文件里。但就目前的例子来说，这样做不会造成任何方面的损害，而且更具有Java风格，所以大家阅读理解代码时要显得轻松一些：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//: CGITools.h\n// Automatically extracts and decodes data\n// from CGI GETs and POSTs. Tested with GNU C++\n// (available for most server machines).\n#include <string.h>\n#include <vector> // STL vector\nusing namespace std;\n\n// A class to hold a single name-value pair from\n// a CGI query. CGI_vector holds Pair objects and\n// returns them from its operator[].\nclass Pair {\n  char* nm;\n  char* val;\npublic:\n  Pair() { nm = val = 0; }\n  Pair(char* name, char* value) {\n    // Creates new memory:\n    nm = decodeURLString(name);\n    val = decodeURLString(value);\n  }\n  const char* name() const { return nm; }\n  const char* value() const { return val; }\n  // Test for \"emptiness\"\n  bool empty() const {\n    return (nm == 0) || (val == 0);\n  }\n  // Automatic type conversion for boolean test:\n  operator bool() const {\n    return (nm != 0) && (val != 0);\n  }\n  // The following constructors & destructor are\n  // necessary for bookkeeping in C++.\n  // Copy-constructor:\n  Pair(const Pair& p) {\n    if(p.nm == 0 || p.val == 0) {\n      nm = val = 0;\n    } else {\n      // Create storage & copy rhs values:\n      nm = new char[strlen(p.nm) + 1];\n      strcpy(nm, p.nm);\n      val = new char[strlen(p.val) + 1];\n      strcpy(val, p.val);\n    }\n  }\n  // Assignment operator:\n  Pair& operator=(const Pair& p) {\n    // Clean up old lvalues:\n    delete nm;\n    delete val;\n    if(p.nm == 0 || p.val == 0) {\n      nm = val = 0;\n    } else {\n      // Create storage & copy rhs values:\n      nm = new char[strlen(p.nm) + 1];\n      strcpy(nm, p.nm);\n      val = new char[strlen(p.val) + 1];\n      strcpy(val, p.val);\n    }\n    return *this;\n  }\n  ~Pair() { // Destructor\n    delete nm; // 0 value OK\n    delete val;\n  }\n  // If you use this method outide this class,\n  // you're responsible for calling 'delete' on\n  // the pointer that's returned:\n  static char*\n  decodeURLString(const char* URLstr) {\n    int len = strlen(URLstr);\n    char* result = new char[len + 1];\n    memset(result, len + 1, 0);\n    for(int i = 0, j = 0; i <= len; i++, j++) {\n      if(URLstr[i] == '+')\n        result[j] = ' ';\n      else if(URLstr[i] == '%') {\n        result[j] =\n          translateHex(URLstr[i + 1]) * 16 +\n          translateHex(URLstr[i + 2]);\n        i += 2; // Move past hex code\n      } else // An ordinary character\n        result[j] = URLstr[i];\n    }\n    return result;\n  }\n  // Translate a single hex character; used by\n  // decodeURLString():\n  static char translateHex(char hex) {\n    if(hex >= 'A')\n      return (hex & 0xdf) - 'A' + 10;\n    else\n      return hex - '0';\n  }\n};\n\n// Parses any CGI query and turns it\n// into an STL vector of Pair objects:\nclass CGI_vector : public vector<Pair> {\n  char* qry;\n  const char* start; // Save starting position\n  // Prevent assignment and copy-construction:\n  void operator=(CGI_vector&);\n  CGI_vector(CGI_vector&);\npublic:\n  // const fields must be initialized in the C++\n  // \"Constructor initializer list\":\n  CGI_vector(char* query) :\n      start(new char[strlen(query) + 1]) {\n    qry = (char*)start; // Cast to non-const\n    strcpy(qry, query);\n    Pair p;\n    while((p = nextPair()) != 0)\n      push_back(p);\n  }\n  // Destructor:\n  ~CGI_vector() { delete start; }\nprivate:\n  // Produces name-value pairs from the query\n  // string. Returns an empty Pair when there's\n  // no more query string left:\n  Pair nextPair() {\n    char* name = qry;\n    if(name == 0 || *name == '\\0')\n      return Pair(); // End, return null Pair\n    char* value = strchr(name, '=');\n    if(value == 0)\n      return Pair(); // Error, return null Pair\n    // Null-terminate name, move value to start\n    // of its set of characters:\n    *value = '\\0';\n    value++;\n    // Look for end of value, marked by '&':\n    qry = strchr(value, '&');\n    if(qry == 0) qry = \"\"; // Last pair found\n    else {\n      *qry = '\\0'; // Terminate value string\n      qry++; // Move to next pair\n    }\n    return Pair(name, value);\n  }\n}; ///:~\n")])])]),t("p",[e._v("在"),t("code",[e._v("#include")]),e._v("语句后，可看到有一行是：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("using namespace std;\n")])])]),t("p",[e._v("C++中的“命名空间”（Namespace）解决了由Java的"),t("code",[e._v("package")]),e._v("负责的一个问题：将库名隐藏起来。"),t("code",[e._v("std")]),e._v("命名空间引用的是标准C++库，而"),t("code",[e._v("vector")]),e._v("就在这个库中，所以这一行是必需的。")]),e._v(" "),t("p",[t("code",[e._v("Pair")]),e._v("类表面看异常简单，只是容纳了两个（"),t("code",[e._v("private")]),e._v("）字符指针而已——一个用于名字，另一个用于值。默认构造器将这两个指针简单地设为零。这是由于在C++中，对象的内存不会自动置零。第二个构造器调用方法"),t("code",[e._v("decodeURLString()")]),e._v("，在新分配的堆内存中生成一个解码过后的字符串。这个内存区域必须由对象负责管理及清除，这与“析构器”中见到的相同。"),t("code",[e._v("name()")]),e._v("和"),t("code",[e._v("value()")]),e._v("方法为相关的字段产生只读指针。利用"),t("code",[e._v("empty()")]),e._v("方法，我们查询"),t("code",[e._v("Pair")]),e._v("对象它的某个字段是否为空；返回的结果是一个"),t("code",[e._v("bool")]),e._v("——C++内建的基本布尔数据类型。"),t("code",[e._v("operator bool()")]),e._v("使用的是C++“运算符重载”的一种特殊形式。它允许我们控制自动类型转换。如果有一个名为"),t("code",[e._v("p")]),e._v("的"),t("code",[e._v("Pair")]),e._v("对象，而且在一个本来希望是布尔结果的表达式中使用，比如"),t("code",[e._v("if(p){//...")]),e._v("，那么编译器能辨别出它有一个"),t("code",[e._v("Pair")]),e._v("，而且需要的是个布尔值，所以自动调用"),t("code",[e._v("operator bool()")]),e._v("，进行必要的转换。")]),e._v(" "),t("p",[e._v("接下来的三个方法属于常规编码，在C++中创建类时必须用到它们。根据C++类采用的所谓“经典形式”，我们必须定义必要的“原始”构造器，以及一个副本构造器和赋值运算符——"),t("code",[e._v("operator=")]),e._v("（以及析构器，用于清除内存）。之所以要作这样的定义，是由于编译器会“默默”地调用它们。在对象传入、传出一个函数的时候，需要调用副本构造器；而在分配对象时，需要调用赋值运算符。只有真正掌握了副本构造器和赋值运算符的工作原理，才能在C++里写出真正“健壮”的类，但这需要需要一个比较艰苦的过程（注释⑤）。")]),e._v(" "),t("p",[e._v("⑤：我的《Thinking in C++》（Prentice-Hall,1995）用了一整章的地方来讨论这个主题。若需更多的帮助，请务必看看那一章。")]),e._v(" "),t("p",[e._v("只要将一个对象按值传入或传出函数，就会自动调用副本构造器"),t("code",[e._v("Pair(const Pair&)")]),e._v("。也就是说，对于准备为其制作一个完整副本的那个对象，我们不准备在函数框架中传递它的地址。这并不是Java提供的一个选项，由于我们只能传递引用，所以在Java里没有所谓的副本构造器（如果想制作一个本地副本，可以“克隆”那个对象——使用"),t("code",[e._v("clone()")]),e._v("，参见第12章）。类似地，如果在Java里分配一个引用，它会简单地复制。但C++中的赋值意味着整个对象都会复制。在副本构造器中，我们创建新的存储空间，并复制原始数据。但对于赋值运算符，我们必须在分配新存储空间之前释放老存储空间。我们要见到的也许是C++类最复杂的一种情况，但那正是Java的支持者们论证Java比C++简单得多的有力证据。在Java中，我们可以自由传递引用，善后工作则由垃圾收集器负责，所以可以轻松许多。")]),e._v(" "),t("p",[e._v("但事情并没有完。"),t("code",[e._v("Pair")]),e._v("类为"),t("code",[e._v("nm")]),e._v("和"),t("code",[e._v("val")]),e._v("使用的是"),t("code",[e._v("char*")]),e._v("，最复杂的情况主要是围绕指针展开的。如果用较时髦的C++ "),t("code",[e._v("string")]),e._v("类来代替 "),t("code",[e._v("char*")]),e._v(" ，事情就要变得简单得多（当然，并不是所有编译器都提供了对"),t("code",[e._v("string")]),e._v("的支持）。那么，"),t("code",[e._v("Pair")]),e._v("的第一部分看起来就象下面这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('class Pair {\n  string nm;\n  string val;\npublic:\n  Pair() { }\n  Pair(char* name, char* value) {\n    nm = decodeURLString(name);\n    val = decodeURLString(value);\n  }\n  const char* name() const { return nm.c_str(); }\n  const char* value() const {\n    return val.c_str();\n  }\n  // Test for "emptiness"\n  bool empty() const {\n    return (nm.length() == 0)\n      || (val.length() == 0);\n  }\n  // Automatic type conversion for boolean test:\n  operator bool() const {\n    return (nm.length() != 0)\n      && (val.length() != 0);\n  }\n')])])]),t("p",[e._v("（此外，对这个类"),t("code",[e._v("decodeURLString()")]),e._v("会返回一个"),t("code",[e._v("string")]),e._v("，而不是一个"),t("code",[e._v("char*")]),e._v("）。我们不必定义副本构造器、"),t("code",[e._v("operator=")]),e._v("或者析构器，因为编译器已帮我们做了，而且做得非常好。但即使有些事情是自动进行的，C++程序员也必须了解副本构建以及赋值的细节。")]),e._v(" "),t("p",[t("code",[e._v("Pair")]),e._v("类剩下的部分由两个方法构成："),t("code",[e._v("decodeURLString()")]),e._v("以及一个“帮助器”方法"),t("code",[e._v("translateHex()")]),e._v("——将由"),t("code",[e._v("decodeURLString()")]),e._v("使用。注意"),t("code",[e._v("translateHex()")]),e._v("并不能防范用户的恶意输入，比如"),t("code",[e._v("%1H")]),e._v("。分配好足够的存储空间后（必须由析构器释放），"),t("code",[e._v("decodeURLString()")]),e._v("就会其中遍历，将所有"),t("code",[e._v("+")]),e._v("都换成一个空格；将所有十六进制代码（以一个"),t("code",[e._v("%")]),e._v("打头）换成对应的字符。")]),e._v(" "),t("p",[t("code",[e._v("CGI_vector")]),e._v("用于解析和容纳整个CGI GET命令。它是从STL"),t("code",[e._v("vector")]),e._v("里继承的，后者例示为容纳"),t("code",[e._v("Pair")]),e._v("。C++中的继承是用一个冒号表示，在Java中则要用"),t("code",[e._v("extends")]),e._v("。此外，继承默认为"),t("code",[e._v("private")]),e._v("属性，所以几乎肯定需要用到"),t("code",[e._v("public")]),e._v("关键字，就象这样做的那样。大家也会发现"),t("code",[e._v("CGI_vector")]),e._v("有一个副本构造器以及一个"),t("code",[e._v("operator=")]),e._v("，但它们都声明成"),t("code",[e._v("private")]),e._v("。这样做是为了防止编译器同步两个函数（如果不自己声明它们，两者就会同步）。但这同时也禁止了客户程序员按值或者通过赋值传递一个"),t("code",[e._v("CGI_vector")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("CGI_vector")]),e._v("的工作是获取"),t("code",[e._v("QUERY_STRING")]),e._v("，并把它解析成“名称／值”对，这需要在"),t("code",[e._v("Pair")]),e._v("的帮助下完成。它首先将字符串复制到本地分配的内存，并用常数指针"),t("code",[e._v("start")]),e._v("跟踪起始地址（稍后会在析构器中用于释放内存）。随后，它用自己的"),t("code",[e._v("nextPair()")]),e._v("方法将字符串解析成原始的“名称／值”对，各个对之间用一个"),t("code",[e._v("=")]),e._v("和"),t("code",[e._v("&")]),e._v("符号分隔。这些对由"),t("code",[e._v("nextPair()")]),e._v("传递给"),t("code",[e._v("Pair")]),e._v("构造器，所以"),t("code",[e._v("nextPair()")]),e._v("返回的是一个"),t("code",[e._v("Pair")]),e._v("对象。随后用"),t("code",[e._v("push_back()")]),e._v("将该对象加入"),t("code",[e._v("vector")]),e._v("。"),t("code",[e._v("nextPair()")]),e._v("遍历完整个"),t("code",[e._v("QUERY_STRING")]),e._v("后，会返回一个零值。")]),e._v(" "),t("p",[e._v("现在基本工具已定义好，它们可以简单地在一个CGI程序中使用，就象下面这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: Listmgr2.cpp\n// CGI version of Listmgr.c in C++, which\n// extracts its input via the GET submission\n// from the associated applet. Also works as\n// an ordinary CGI program with HTML forms.\n#include <stdio.h>\n#include "CGITools.h"\nconst char* dataFile = "list2.txt";\nconst char* notify = "Bruce@EckelObjects.com";\n#undef DEBUG\n\n// Similar code as before, except that it looks\n// for the email name inside of \'<>\':\nint inList(FILE* list, const char* emailName) {\n  const int BSIZE = 255;\n  char lbuf[BSIZE];\n  char emname[BSIZE];\n  // Put the email name in \'<>\' so there\'s no\n  // possibility of a match within another name:\n  sprintf(emname, "<%s>", emailName);\n  // Go to the beginning of the list:\n  fseek(list, 0, SEEK_SET);\n  // Read each line in the list:\n  while(fgets(lbuf, BSIZE, list)) {\n    // Strip off the newline:\n    char * newline = strchr(lbuf, \'\\n\');\n    if(newline != 0)\n      *newline = \'\\0\';\n    if(strstr(lbuf, emname) != 0)\n      return 1;\n  }\n  return 0;\n}\n\nvoid main() {\n  // You MUST print this out, otherwise the\n  // server will not send the response:\n  printf("Content-type: text/plain\\n\\n");\n  FILE* list = fopen(dataFile, "a+t");\n  if(list == 0) {\n    printf("error: could not open database. ");\n    printf("Notify %s", notify);\n    return;\n  }\n  // For a CGI "GET," the server puts the data\n  // in the environment variable QUERY_STRING:\n  CGI_vector query(getenv("QUERY_STRING"));\n  #if defined(DEBUG)\n  // Test: dump all names and values\n  for(int i = 0; i < query.size(); i++) {\n    printf("query[%d].name() = [%s], ",\n      i, query[i].name());\n    printf("query[%d].value() = [%s]\\n",\n      i, query[i].value());\n  }\n  #endif(DEBUG)\n  Pair name = query[0];\n  Pair email = query[1];\n  if(name.empty() || email.empty()) {\n    printf("error: null name or email");\n    return;\n  }\n  if(inList(list, email.value())) {\n    printf("Already in list: %s", email.value());\n    return;\n  }\n  // It\'s not in the list, add it:\n  fseek(list, 0, SEEK_END);\n  fprintf(list, "%s <%s>;\\n",\n    name.value(), email.value());\n  fflush(list);\n  fclose(list);\n  printf("%s <%s> added to list\\n",\n    name.value(), email.value());\n} ///:~\n')])])]),t("p",[t("code",[e._v("alreadyInList()")]),e._v("函数与前一个版本几乎是完全相同的，只是它假定所有电子函件地址都在一个"),t("code",[e._v("<>")]),e._v("内。")]),e._v(" "),t("p",[e._v("在使用GET方法时（通过在"),t("code",[e._v("FORM")]),e._v("引导命令的"),t("code",[e._v("METHOD")]),e._v("标记内部设置，但这在这里由数据发送的方式控制），Web服务器会收集位于"),t("code",[e._v("?")]),e._v("后面的所有信息，并把它们置入环境变量"),t("code",[e._v("QUERY_STRING")]),e._v("（查询字符串）里。所以为了读取那些信息，必须获得"),t("code",[e._v("QUERY_STRING")]),e._v("的值，这是用标准的C库函数"),t("code",[e._v("getenv()")]),e._v("完成的。在"),t("code",[e._v("main()")]),e._v("中，注意对"),t("code",[e._v("QUERY_STRING")]),e._v("的解析有多么容易：只需把它传递给用于"),t("code",[e._v("CGI_vector")]),e._v("对象的构造器（名为"),t("code",[e._v("query")]),e._v("），剩下的所有工作都会自动进行。从这时开始，我们就可以从"),t("code",[e._v("query")]),e._v("中取出名称和值，把它们当作数组看待（这是由于"),t("code",[e._v("operator[]")]),e._v("在"),t("code",[e._v("vector")]),e._v("里已经重载了）。在调试代码中，大家可看到这一切是如何运作的；调试代码封装在预处理器引导命令"),t("code",[e._v("#if defined(DEBUG)")]),e._v("和"),t("code",[e._v("#endif(DEBUG)")]),e._v("之间。")]),e._v(" "),t("p",[e._v("现在，我们迫切需要掌握一些与CGI有关的东西。CGI程序用两个方式之一传递它们的输入：在GET执行期间通过"),t("code",[e._v("QUERY_STRING")]),e._v("传递（目前用的这种方式），或者在POST期间通过标准输入。但CGI程序通过标准输出发送自己的输出，这通常是用C程序的"),t("code",[e._v("printf()")]),e._v("命令实现的。那么这个输出到哪里去了呢？它回到了Web服务器，由服务器决定该如何处理它。服务器作出决定的依据是"),t("code",[e._v("content-type")]),e._v("（内容类型）头数据。这意味着假如"),t("code",[e._v("content-type")]),e._v("头不是它看到的第一件东西，就不知道该如何处理收到的数据。因此，我们无论如何也要使所有CGI程序都从"),t("code",[e._v("content-type")]),e._v("头开始输出。")]),e._v(" "),t("p",[e._v("在目前这种情况下，我们希望服务器将所有信息都直接反馈回客户程序（亦即我们的程序片，它们正在等候给自己的回复）。信息应该原封不动，所以"),t("code",[e._v("content-type")]),e._v("设为"),t("code",[e._v("text/plain")]),e._v("（纯文本）。一旦服务器看到这个头，就会将所有字符串都直接发还给客户。所以每个字符串（三个用于出错条件，一个用于成功的加入）都会返回程序片。")]),e._v(" "),t("p",[e._v("我们用相同的代码添加电子函件名称（用户的姓名）。但在CGI脚本的情况下，并不存在无限循环——程序只是简单地响应，然后就中断。每次有一个CGI请求抵达时，程序都会启动，对那个请求作出反应，然后自行关闭。所以CPU不可能陷入空等待的尴尬境地，只有启动程序和打开文件时才存在性能上的隐患。Web服务器对CGI请求进行控制时，它的开销会将这种隐患减轻到最低程度。")]),e._v(" "),t("p",[e._v("这种设计的另一个好处是由于"),t("code",[e._v("Pair")]),e._v("和"),t("code",[e._v("CGI_vector")]),e._v("都得到了定义，大多数工作都帮我们自动完成了，所以只需修改"),t("code",[e._v("main()")]),e._v("即可轻松创建自己的CGI程序。尽管小服务程序（"),t("code",[e._v("Servlet")]),e._v("）最终会变得越来越流行，但为了创建快速的CGI程序，C++仍然显得非常方便。")]),e._v(" "),t("h2",{attrs:{id:"_15-6-4-post的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-6-4-post的概念"}},[e._v("#")]),e._v(" 15.6.4 POST的概念")]),e._v(" "),t("p",[e._v("在许多应用程序中使用GET都没有问题。但是，GET要求通过一个环境变量将自己的数据传递给CGI程序。但假如GET字符串过长，有些Web服务器可能用光自己的环境空间（若字符串长度超过200字符，就应开始关心这方面的问题）。CGI为此提供了一个解决方案：POST。通过POST，数据可以编码，并按与GET相同的方法连结起来。但POST利用标准输入将编码过后的查询字符串传递给CGI程序。我们要做的全部事情就是判断查询字符串的长度，而这个长度已在环境变量"),t("code",[e._v("CONTENT_LENGTH")]),e._v("中保存好了。一旦知道了长度，就可自由分配存储空间，并从标准输入中读入指定数量的字符。")]),e._v(" "),t("p",[e._v("对一个用来控制POST的CGI程序，由"),t("code",[e._v("CGITools.h")]),e._v("提供的"),t("code",[e._v("Pair")]),e._v("和"),t("code",[e._v("CGI_vector")]),e._v("均可不加丝毫改变地使用。下面这段程序揭示了写这样的一个CGI程序有多么简单。这个例子将采用“纯”C++，所以"),t("code",[e._v("studio.h")]),e._v("库被"),t("code",[e._v("iostream")]),e._v("（IO数据流）代替。对于"),t("code",[e._v("iostream")]),e._v("，我们可以使用两个预先定义好的对象："),t("code",[e._v("cin")]),e._v("，用于同标准输入连接；以及"),t("code",[e._v("cout")]),e._v("，用于同标准输出连接。有几个办法可从"),t("code",[e._v("cin")]),e._v("中读入数据以及向"),t("code",[e._v("cout")]),e._v("中写入。但下面这个程序准备采用标准方法：用"),t("code",[e._v("<<")]),e._v("将信息发给"),t("code",[e._v("cout")]),e._v("，并用一个成员函数（此时是"),t("code",[e._v("read()")]),e._v("）从"),t("code",[e._v("cin")]),e._v("中读入数据：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: POSTtest.cpp\n// CGI_vector works as easily with POST as it\n// does with GET. Written in "pure" C++.\n#include <iostream.h>\n#include "CGITools.h"\n\nvoid main() {\n  cout << "Content-type: text/plain\\n" << endl;\n  // For a CGI "POST," the server puts the length\n  // of the content string in the environment\n  // variable CONTENT_LENGTH:\n  char* clen = getenv("CONTENT_LENGTH");\n  if(clen == 0) {\n    cout << "Zero CONTENT_LENGTH" << endl;\n    return;\n  }\n  int len = atoi(clen);\n  char* query_str = new char[len + 1];\n  cin.read(query_str, len);\n  query_str[len] = \'\\0\';\n  CGI_vector query(query_str);\n  // Test: dump all names and values\n  for(int i = 0; i < query.size(); i++)\n    cout << "query[" << i << "].name() = [" <<\n      query[i].name() << "], " <<\n      "query[" << i << "].value() = [" <<\n      query[i].value() << "]" << endl;\n  delete query_str; // Release storage\n} ///:~\n')])])]),t("p",[t("code",[e._v("getenv()")]),e._v("函数返回指向一个字符串的指针，那个字符串指示着内容的长度。若指针为零，表明"),t("code",[e._v("CONTENT_LENGTH")]),e._v("环境变量尚未设置，所以肯定某个地方出了问题。否则就必须用ANSI C库函数"),t("code",[e._v("atoi()")]),e._v("将字符串转换成一个整数。这个长度将与"),t("code",[e._v("new")]),e._v("一起运用，分配足够的存储空间，以便容纳查询字符串（另加它的空中止符）。随后为"),t("code",[e._v("cin()")]),e._v("调用"),t("code",[e._v("read()")]),e._v("。"),t("code",[e._v("read()")]),e._v("函数需要取得指向目标缓冲区的一个指针以及要读入的字节数。随后用空字符（"),t("code",[e._v("null")]),e._v("）中止"),t("code",[e._v("query_str")]),e._v("，指出已经抵达字符串的末尾，这就叫作“空中止”。")]),e._v(" "),t("p",[e._v("到这个时候，我们得到的查询字符串与GET查询字符串已经没有什么区别，所以把它传递给用于"),t("code",[e._v("CGI_vector")]),e._v("的构造器。随后便和前例一样，我们可以自由·内不同的字段。")]),e._v(" "),t("p",[e._v("为测试这个程序，必须把它编译到主机Web服务器的"),t("code",[e._v("cgi-bin")]),e._v("目录下。然后就可以写一个简单的HTML页进行测试，就象下面这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<HTML>\n<HEAD>\n<META CONTENT="text/html">\n<TITLE>A test of standard HTML POST</TITLE>\n</HEAD>\nTest, uses standard html POST\n<Form method="POST" ACTION="/cgi-bin/POSTtest">\n<P>Field1: <INPUT TYPE = "text" NAME = "Field1"\nVALUE = "" size = "40"></p>\n<P>Field2: <INPUT TYPE = "text" NAME = "Field2"\nVALUE = "" size = "40"></p>\n<P>Field3: <INPUT TYPE = "text" NAME = "Field3"\nVALUE = "" size = "40"></p>\n<P>Field4: <INPUT TYPE = "text" NAME = "Field4"\nVALUE = "" size = "40"></p>\n<P>Field5: <INPUT TYPE = "text" NAME = "Field5"\nVALUE = "" size = "40"></p>\n<P>Field6: <INPUT TYPE = "text" NAME = "Field6"\nVALUE = "" size = "40"></p>\n<p><input type = "submit" name = "submit" > </p>\n</Form>\n</HTML>\n')])])]),t("p",[e._v("填好这个表单并提交出去以后，会得到一个简单的文本页，其中包含了解析出来的结果。从中可知道CGI程序是否在正常工作。")]),e._v(" "),t("p",[e._v("当然，用一个程序片来提交数据显得更有趣一些。然而，POST数据的提交属于一个不同的过程。在用常规方式调用了CGI程序以后，必须另行建立与服务器的一个连接，以便将查询字符串反馈给它。服务器随后会进行一番处理，再通过标准输入将查询字符串反馈回CGI程序。")]),e._v(" "),t("p",[e._v("为建立与服务器的一个直接连接，必须取得自己创建的URL，然后调用"),t("code",[e._v("openConnection()")]),e._v("创建一个"),t("code",[e._v("URLConnection")]),e._v("。但是，由于"),t("code",[e._v("URLConnection")]),e._v("一般不允许我们把数据发给它，所以必须很可笑地调用"),t("code",[e._v("setDoOutput(true")]),e._v(")函数，同时调用的还包括"),t("code",[e._v("setDoInput(true)")]),e._v("以及"),t("code",[e._v("setAllowUserInteraction(false)")]),e._v("——注释⑥。最后，可调用"),t("code",[e._v("getOutputStream()")]),e._v("来创建一个"),t("code",[e._v("OutputStream")]),e._v("（输出数据流），并把它封装到一个"),t("code",[e._v("DataOutputStream")]),e._v("里，以便能按传统方式同它通信。下面列出的便是一个用于完成上述工作的程序片，必须在从它的各个字段里收集了数据之后再执行它：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: POSTtest.java\n// An applet that sends its data via a CGI POST\nimport java.awt.*;\nimport java.applet.*;\nimport java.net.*;\nimport java.io.*;\n\npublic class POSTtest extends Applet {\n  final static int SIZE = 10;\n  Button submit = new Button("Submit");\n  TextField[] t = new TextField[SIZE];\n  String query = "";\n  Label l = new Label();\n  TextArea ta = new TextArea(15, 60);\n  public void init() {\n    Panel p = new Panel();\n    p.setLayout(new GridLayout(t.length + 2, 2));\n    for(int i = 0; i < t.length; i++) {\n      p.add(new Label(\n        "Field " + i + "  ", Label.RIGHT));\n      p.add(t[i] = new TextField(30));\n    }\n    p.add(l);\n    p.add(submit);\n    add("North", p);\n    add("South", ta);\n  }\n  public boolean action (Event evt, Object arg) {\n    if(evt.target.equals(submit)) {\n      query = "";\n      ta.setText("");\n      // Encode the query from the field data:\n      for(int i = 0; i < t.length; i++)\n         query += "Field" + i + "=" +\n           URLEncoder.encode(\n             t[i].getText().trim()) +\n           "&";\n      query += "submit=Submit";\n      // Send the name using CGI\'s POST process:\n      try {\n        URL u = new URL(\n          getDocumentBase(), "cgi-bin/POSTtest");\n        URLConnection urlc = u.openConnection();\n        urlc.setDoOutput(true);\n        urlc.setDoInput(true);\n        urlc.setAllowUserInteraction(false);\n        DataOutputStream server =\n          new DataOutputStream(\n            urlc.getOutputStream());\n        // Send the data\n        server.writeBytes(query);\n        server.close();\n        // Read and display the response. You\n        // cannot use\n        // getAppletContext().showDocument(u);\n        // to display the results as a Web page!\n        DataInputStream in =\n          new DataInputStream(\n            urlc.getInputStream());\n        String s;\n        while((s = in.readLine()) != null) {\n          ta.appendText(s + "\\n");\n        }\n        in.close();\n      }\n      catch (Exception e) {\n        l.setText(e.toString());\n      }\n    }\n    else return super.action(evt, arg);\n    return true;\n  }\n} ///:~\n')])])]),t("p",[e._v("⑥：我不得不说自己并没有真正理解这儿都发生了什么事情，这些概念都是从Elliotte Rusty Harold编著的《Java Network Programming》里得来的，该书由O'Reilly于1997年出版。他在书中提到了Java连网函数库中出现的许多令人迷惑的Bug。所以一旦涉足这些领域，事情就不是编写代码，然后让它自己运行那么简单。一定要警惕潜在的陷阱！")]),e._v(" "),t("p",[e._v("信息发送到服务器后，我们调用"),t("code",[e._v("getInputStream()")]),e._v("，并把返回值封装到一个"),t("code",[e._v("DataInputStream")]),e._v("里，以便自己能读取结果。要注意的一件事情是结果以文本行的形式显示在一个"),t("code",[e._v("TextArea")]),e._v("（文本区域）中。为什么不简单地使用"),t("code",[e._v("getAppletContext().showDocument(u)")]),e._v("呢？事实上，这正是那些陷阱中的一个。上述代码可以很好地工作，但假如试图换用"),t("code",[e._v("showDocument()")]),e._v("，几乎一切都会停止运行。也就是说，"),t("code",[e._v("showDocument()")]),e._v("确实可以运行，但从"),t("code",[e._v("POSTtest")]),e._v("得到的返回结果是"),t("code",[e._v("Zero CONTENT_LENGTH")]),e._v("（内容长度为零）。所以不知道为什么原因，"),t("code",[e._v("showDocument()")]),e._v("阻止了POST查询向CGI程序的传递。我很难判断这到底是一个在以后版本里会修复的Bug，还是由于我的理解不够（我看过的书对此讲得都很模糊）。但无论在哪种情况下，只要能坚持在文本区域里观看自CGI程序返回的内容，上述程序片运行时就没有问题。")])])}),[],!1,null,null,null);n.default=r.exports}}]);