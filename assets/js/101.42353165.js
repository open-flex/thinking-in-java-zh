(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{499:function(e,n,t){"use strict";t.r(n);var r=t(56),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_17-2-方法查找工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-2-方法查找工具"}},[e._v("#")]),e._v(" 17.2 方法查找工具")]),e._v(" "),t("p",[e._v("第11章介绍了Java 1.1新的“反射”概念，并利用这个概念查询一个特定类的方法——要么是由所有方法构成的一个完整列表，要么是这个列表的一个子集（名字与我们指定的关键字相符）。那个例子最大的好处就是能自动显示出所有方法，不强迫我们在继承结构中遍历，检查每一级的基类。所以，它实际是我们节省编程时间的一个有效工具：因为大多数Java方法的名字都规定得非常全面和详尽，所以能有效地找出那些包含了一个特殊关键字的方法名。若找到符合标准的一个名字，便可根据它直接查阅联机帮助文档。")]),e._v(" "),t("p",[e._v("但第11的那个例子也有缺陷，它没有使用AWT，仅是一个纯命令行的应用。在这儿，我们准备制作一个改进的GUI版本，能在我们键入字符的时候自动刷新输出，也允许我们在输出结果中进行剪切和粘贴操作：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: DisplayMethods.java\n// Display the methods of any class inside\n// a window. Dynamically narrows your search.\nimport java.awt.*;\nimport java.awt.event.*;\nimport java.applet.*;\nimport java.lang.reflect.*;\nimport java.io.*;\n\npublic class DisplayMethods extends Applet {\n  Class cl;\n  Method[] m;\n  Constructor[] ctor;\n  String[] n = new String[0];\n  TextField\n    name = new TextField(40),\n    searchFor = new TextField(30);\n  Checkbox strip =\n    new Checkbox("Strip Qualifiers");\n  TextArea results = new TextArea(40, 65);\n  public void init() {\n    strip.setState(true);\n    name.addTextListener(new NameL());\n    searchFor.addTextListener(new SearchForL());\n    strip.addItemListener(new StripL());\n    Panel\n      top = new Panel(),\n      lower = new Panel(),\n      p = new Panel();\n    top.add(new Label("Qualified class name:"));\n    top.add(name);\n    lower.add(\n      new Label("String to search for:"));\n    lower.add(searchFor);\n    lower.add(strip);\n    p.setLayout(new BorderLayout());\n    p.add(top, BorderLayout.NORTH);\n    p.add(lower, BorderLayout.SOUTH);\n    setLayout(new BorderLayout());\n    add(p, BorderLayout.NORTH);\n    add(results, BorderLayout.CENTER);\n  }\n  class NameL implements TextListener {\n    public void textValueChanged(TextEvent e) {\n      String nm = name.getText().trim();\n      if(nm.length() == 0) {\n        results.setText("No match");\n        n = new String[0];\n        return;\n      }\n      try {\n        cl = Class.forName(nm);\n      } catch (ClassNotFoundException ex) {\n        results.setText("No match");\n        return;\n      }\n      m = cl.getMethods();\n      ctor = cl.getConstructors();\n      // Convert to an array of Strings:\n      n = new String[m.length + ctor.length];\n      for(int i = 0; i < m.length; i++)\n        n[i] = m[i].toString();\n      for(int i = 0; i < ctor.length; i++)\n        n[i + m.length] = ctor[i].toString();\n      reDisplay();\n    }\n  }\n  void reDisplay() {\n    // Create the result set:\n    String[] rs = new String[n.length];\n    String find = searchFor.getText();\n    int j = 0;\n    // Select from the list if find exists:\n    for (int i = 0; i < n.length; i++) {\n      if(find == null)\n        rs[j++] = n[i];\n      else if(n[i].indexOf(find) != -1)\n          rs[j++] = n[i];\n    }\n    results.setText("");\n    if(strip.getState() == true)\n      for (int i = 0; i < j; i++)\n        results.append(\n          StripQualifiers.strip(rs[i]) + "\\n");\n    else // Leave qualifiers on\n      for (int i = 0; i < j; i++)\n        results.append(rs[i] + "\\n");\n  }\n  class StripL implements ItemListener {\n    public void itemStateChanged(ItemEvent e) {\n      reDisplay();\n    }\n  }\n  class SearchForL implements TextListener {\n    public void textValueChanged(TextEvent e) {\n      reDisplay();\n    }\n  }\n  public static void main(String[] args) {\n    DisplayMethods applet = new DisplayMethods();\n    Frame aFrame = new Frame("Display Methods");\n    aFrame.addWindowListener(\n      new WindowAdapter() {\n        public void windowClosing(WindowEvent e) {\n          System.exit(0);\n        }\n      });\n    aFrame.add(applet, BorderLayout.CENTER);\n    aFrame.setSize(500,750);\n    applet.init();\n    applet.start();\n    aFrame.setVisible(true);\n  }\n}\n\nclass StripQualifiers {\n  private StreamTokenizer st;\n  public StripQualifiers(String qualified) {\n      st = new StreamTokenizer(\n        new StringReader(qualified));\n      st.ordinaryChar(\' \');\n  }\n  public String getNext() {\n    String s = null;\n    try {\n      if(st.nextToken() !=\n            StreamTokenizer.TT_EOF) {\n        switch(st.ttype) {\n          case StreamTokenizer.TT_EOL:\n            s = null;\n            break;\n          case StreamTokenizer.TT_NUMBER:\n            s = Double.toString(st.nval);\n            break;\n          case StreamTokenizer.TT_WORD:\n            s = new String(st.sval);\n            break;\n          default: // single character in ttype\n            s = String.valueOf((char)st.ttype);\n        }\n      }\n    } catch(IOException e) {\n      System.out.println(e);\n    }\n    return s;\n  }\n  public static String strip(String qualified) {\n    StripQualifiers sq =\n      new StripQualifiers(qualified);\n    String s = "", si;\n    while((si = sq.getNext()) != null) {\n      int lastDot = si.lastIndexOf(\'.\');\n      if(lastDot != -1)\n        si = si.substring(lastDot + 1);\n      s += si;\n    }\n    return s;\n  }\n} ///:~\n')])])]),t("p",[e._v("程序中的有些东西已在以前见识过了。和本书的许多GUI程序一样，这既可作为一个独立的应用程序使用，亦可作为一个程序片（Applet）使用。此外，"),t("code",[e._v("StripQualifiers")]),e._v("类与它在第11章的表现是完全一样的。")]),e._v(" "),t("p",[e._v("GUI包含了一个名为"),t("code",[e._v("name")]),e._v("的“文本字段”（"),t("code",[e._v("TextField")]),e._v("），或在其中输入想查找的类名；还包含了另一个文本字段，名为"),t("code",[e._v("searchFor")]),e._v("，可选择性地在其中输入一定的文字，希望在方法列表中查找那些文字。"),t("code",[e._v("Checkbox")]),e._v("（复选框）允许我们指出最终希望在输出中使用完整的名字，还是将前面的各种限定信息删去。最后，结果显示于一个“文本区域”（"),t("code",[e._v("TextArea")]),e._v("）中。")]),e._v(" "),t("p",[e._v("大家会注意到这个程序未使用任何按钮或其他组件，不能用它们开始一次搜索。这是由于无论文本字段还是复选框都会受到它们的“监听者（"),t("code",[e._v("Listener")]),e._v("）对象的监视。只要作出一项改变，结果列表便会立即更新。若改变了"),t("code",[e._v("name")]),e._v("字段中的文字，新的文字就会在"),t("code",[e._v("NameL")]),e._v("类中捕获。若文字不为空，则在"),t("code",[e._v("Class.forName()")]),e._v("中用于尝试查找类。当然，在文字键入期间，名字可能会变得不完整，而"),t("code",[e._v("Class.forName()")]),e._v("会失败，这意味着它会“抛”出一个异常。该异常会被捕获，"),t("code",[e._v("TextArea")]),e._v("会随之设为"),t("code",[e._v("Nomatch")]),e._v("（不相符）。但只要键入了一个正确的名字（大小写也算在内），"),t("code",[e._v("Class.forName()")]),e._v("就会成功，而"),t("code",[e._v("getMethods()")]),e._v("和"),t("code",[e._v("getConstructors()")]),e._v("会分别返回由"),t("code",[e._v("Method")]),e._v("和"),t("code",[e._v("Constructor")]),e._v("对象构成的一个数组。这些数组中的每个对象都会通过"),t("code",[e._v("toString()")]),e._v("转变成一个字符串（这样便产生了完整的方法或构造器签名），而且两个列表都会合并到"),t("code",[e._v("n")]),e._v("中——一个独立的字符串数组。数组"),t("code",[e._v("n")]),e._v("属于"),t("code",[e._v("DisplayMethods")]),e._v("类的一名成员，并在调用"),t("code",[e._v("reDisplay()")]),e._v("时用于显示的更新。")]),e._v(" "),t("p",[e._v("若改变了"),t("code",[e._v("Checkbox")]),e._v("或"),t("code",[e._v("searchFor")]),e._v("组件，它们的“监听者”会简单地调用"),t("code",[e._v("reDisplay()")]),e._v("。"),t("code",[e._v("reDisplay()")]),e._v("会创建一个临时数组，其中包含了名为"),t("code",[e._v("rs")]),e._v("的字符串（"),t("code",[e._v("rs")]),e._v("代表“结果集”——"),t("code",[e._v("Result Set")]),e._v("）。结果集要么直接从"),t("code",[e._v("n")]),e._v("复制（没有"),t("code",[e._v("find")]),e._v("关键字），要么选择性地从包含了"),t("code",[e._v("find")]),e._v("关键字的"),t("code",[e._v("n")]),e._v("中的字符串复制。最后会检查"),t("code",[e._v("strip Checkbox")]),e._v("，看看用户是不是希望将名字中多余的部分删除（默认为“是”）。若答案是肯定的，则用"),t("code",[e._v("StripQualifiers.strip()")]),e._v("做这件事情；反之，就将列表简单地显示出来。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("init()")]),e._v("中，大家也许认为在设置布局时需要进行大量繁重的工作。事实上，组件的布置完全可能只需要极少的工作。但象这样使用"),t("code",[e._v("BorderLayout")]),e._v("的好处是它允许用户改变窗口的大小，并特别能使"),t("code",[e._v("TextArea")]),e._v("（文本区域）更大一些，这意味着我们可以改变大小，以便毋需滚动即可看到更长的名字。")]),e._v(" "),t("p",[e._v("编程时，大家会发现特别有必要让这个工具处于运行状态，因为在试图判断要调用什么方法的时候，它提供了最好的方法之一。")])])}),[],!1,null,null,null);n.default=i.exports}}]);