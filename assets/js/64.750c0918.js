(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{462:function(t,e,n){"use strict";n.r(e);var a=n(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_13-5-文本字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-5-文本字段"}},[t._v("#")]),t._v(" 13.5 文本字段")]),t._v(" "),n("p",[t._v("“文本字段”是允许用户输入和编辑文字的一种线性区域。文本字段从文本组件那里继承了让我们选择文字、让我们像得到字符串一样得到选择的文字，得到或设置文字，设置文本字段是否可编辑以及连同我们从在线参考书中找到的相关方法。下面的例子将证明文本字段的其它功能；我们能注意到方法名是显而易见的：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('//: TextField1.java\n// Using the text field control\nimport java.awt.*;\nimport java.applet.*;\n\npublic class TextField1 extends Applet {\n  Button\n    b1 = new Button("Get Text"),\n    b2 = new Button("Set Text");\n  TextField\n    t = new TextField("Starting text", 30);\n  String s = new String();\n  public void init() {\n    add(b1);\n    add(b2);\n    add(t);\n  }\n  public boolean action (Event evt, Object arg) {\n    if(evt.target.equals(b1)) {\n      getAppletContext().showStatus(t.getText());\n      s = t.getSelectedText();\n      if(s.length() == 0) s = t.getText();\n      t.setEditable(true);\n    }\n    else if(evt.target.equals(b2)) {\n      t.setText("Inserted by Button 2: " + s);\n      t.setEditable(false);\n    }\n    // Let the base class handle it:\n    else\n      return super.action(evt, arg);\n    return true; // We\'ve handled it here\n  }\n} ///:~\n')])])]),n("p",[t._v("有几种方法均可构建一个文本字段；其中之一是提供一个初始字符串，并设置字符域的大小。")]),t._v(" "),n("p",[t._v("按下按钮1 是得到我们用鼠标选择的文字就是得到字段内所有的文字并转换成字符串"),n("code",[t._v("S")]),t._v("。它也允许字段被编辑。按下按钮2 放一条信息和字符串"),n("code",[t._v("s")]),t._v("到"),n("code",[t._v("Text fields")]),t._v("，并且阻止字段被编辑（尽管我们能够一直选择文字）。文字的可编辑性是通过"),n("code",[t._v("setEditable()")]),t._v("的真假值来控制的。")])])}),[],!1,null,null,null);e.default=s.exports}}]);