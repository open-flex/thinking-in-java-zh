(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{463:function(t,e,n){"use strict";n.r(e);var a=n(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_13-6-文本区域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-6-文本区域"}},[t._v("#")]),t._v(" 13.6 文本区域")]),t._v(" "),n("p",[t._v("“文本区域”很像文字字段，只是它拥有更多的行以及一些引人注目的更多的功能。另外你能在给定位置对一个文本字段追加、插入或者修改文字。这看起来对文本字段有用的功能相当不错，所以设法发现它设计的特性会产生一些困惑。我们可以认为如果我们处处需要“文本区域”的功能，那么可以简单地使用一个线型文字区域在我们将另外使用文本字段的地方。在Java 1.0版中，当它们不是固定的时候我们也得到了一个文本区域的垂直和水平方向的滚动条。在Java 1.1版中，对高级构造器的修改允许我们选择哪个滚动条是当前的。下面的例子演示的仅仅是在Java1.0版的状况下滚动条一直打开。在下一章里我们将看到一个证明Java 1.1版中的文字区域的例程。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('//: TextArea1.java\n// Using the text area control\nimport java.awt.*;\nimport java.applet.*;\n\npublic class TextArea1 extends Applet {\n  Button b1 = new Button("Text Area 1");\n  Button b2 = new Button("Text Area 2");\n  Button b3 = new Button("Replace Text");\n  Button b4 = new Button("Insert Text");\n  TextArea t1 = new TextArea("t1", 1, 30);\n  TextArea t2 = new TextArea("t2", 4, 30);\n  public void init() {\n    add(b1);\n    add(t1);\n    add(b2);\n    add(t2);\n    add(b3);\n    add(b4);\n  }\n  public boolean action (Event evt, Object arg) {\n    if(evt.target.equals(b1))\n      getAppletContext().showStatus(t1.getText());\n    else if(evt.target.equals(b2)) {\n      t2.setText("Inserted by Button 2");\n      t2.appendText(": " + t1.getText());\n      getAppletContext().showStatus(t2.getText());\n    }\n    else if(evt.target.equals(b3)) {\n      String s = " Replacement ";\n      t2.replaceText(s, 3, 3 + s.length());\n    }\n    else if(evt.target.equals(b4))\n      t2.insertText(" Inserted ", 10);\n    // Let the base class handle it:\n    else\n      return super.action(evt, arg);\n    return true; // We\'ve handled it here\n  }\n} ///:~\n')])])]),n("p",[t._v("程序中有几个不同的“文本区域”构造器，这其中的一个在此处显示了一个初始字符串和行号和列号。不同的按钮显示得到、追加、修改和插入文字。")])])}),[],!1,null,null,null);e.default=s.exports}}]);