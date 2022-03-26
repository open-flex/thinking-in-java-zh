(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{428:function(e,n,t){"use strict";t.r(n);var o=t(56),r=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_10-6-streamtokenizer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-6-streamtokenizer"}},[e._v("#")]),e._v(" 10.6 "),t("code",[e._v("StreamTokenizer")])]),e._v(" "),t("p",[e._v("尽管"),t("code",[e._v("StreamTokenizer")]),e._v("并不是从"),t("code",[e._v("InputStream")]),e._v("或"),t("code",[e._v("OutputStream")]),e._v("派生的，但它只随同"),t("code",[e._v("InputStream")]),e._v("工作，所以十分恰当地包括在库的IO部分中。")]),e._v(" "),t("p",[t("code",[e._v("StreamTokenizer")]),e._v("类用于将任何"),t("code",[e._v("InputStream")]),e._v("分割为一系列“记号”（"),t("code",[e._v("Token")]),e._v("）。这些记号实际是一些断续的文本块，中间用我们选择的任何东西分隔。例如，我们的记号可以是单词，中间用空白（空格）以及标点符号分隔。\n下面是一个简单的程序，用于计算各个单词在文本文件中重复出现的次数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: SortedWordCount.java\n// Counts words in a file, outputs\n// results in sorted form.\nimport java.io.*;\nimport java.util.*;\nimport c08.*; // Contains StrSortVector\n\nclass Counter {\n  private int i = 1;\n  int read() { return i; }\n  void increment() { i++; }\n}\n\npublic class SortedWordCount {\n  private FileInputStream file;\n  private StreamTokenizer st;\n  private Hashtable counts = new Hashtable();\n  SortedWordCount(String filename)\n    throws FileNotFoundException {\n    try {\n      file = new FileInputStream(filename);\n      st = new StreamTokenizer(file);\n      st.ordinaryChar(\'.\');\n      st.ordinaryChar(\'-\');\n    } catch(FileNotFoundException e) {\n      System.out.println(\n        "Could not open " + filename);\n      throw e;\n    }\n  }\n  void cleanup() {\n    try {\n      file.close();\n    } catch(IOException e) {\n      System.out.println(\n        "file.close() unsuccessful");\n    }\n  }\n  void countWords() {\n    try {\n      while(st.nextToken() !=\n        StreamTokenizer.TT_EOF) {\n        String s;\n        switch(st.ttype) {\n          case StreamTokenizer.TT_EOL:\n            s = new String("EOL");\n            break;\n          case StreamTokenizer.TT_NUMBER:\n            s = Double.toString(st.nval);\n            break;\n          case StreamTokenizer.TT_WORD:\n            s = st.sval; // Already a String\n            break;\n          default: // single character in ttype\n            s = String.valueOf((char)st.ttype);\n        }\n        if(counts.containsKey(s))\n          ((Counter)counts.get(s)).increment();\n        else\n          counts.put(s, new Counter());\n      }\n    } catch(IOException e) {\n      System.out.println(\n        "st.nextToken() unsuccessful");\n    }\n  }\n  Enumeration values() {\n    return counts.elements();\n  }\n  Enumeration keys() { return counts.keys(); }\n  Counter getCounter(String s) {\n    return (Counter)counts.get(s);\n  }\n  Enumeration sortedKeys() {\n    Enumeration e = counts.keys();\n    StrSortVector sv = new StrSortVector();\n    while(e.hasMoreElements())\n      sv.addElement((String)e.nextElement());\n    // This call forces a sort:\n    return sv.elements();\n  }\n  public static void main(String[] args) {\n    try {\n      SortedWordCount wc =\n        new SortedWordCount(args[0]);\n      wc.countWords();\n      Enumeration keys = wc.sortedKeys();\n      while(keys.hasMoreElements()) {\n        String key = (String)keys.nextElement();\n        System.out.println(key + ": "\n                 + wc.getCounter(key).read());\n      }\n      wc.cleanup();\n    } catch(Exception e) {\n      e.printStackTrace();\n    }\n  }\n} ///:~\n')])])]),t("p",[e._v("最好将结果按排序格式输出，但由于Java 1.0和Java 1.1都没有提供任何排序方法，所以必须由自己动手。这个目标可用一个"),t("code",[e._v("StrSortVector")]),e._v("方便地达成（创建于第8章，属于那一章创建的软件包的一部分。记住本书所有子目录的起始目录都必须位于类路径中，否则程序将不能正确地编译）。")]),e._v(" "),t("p",[e._v("为打开文件，使用了一个"),t("code",[e._v("FileInputStream")]),e._v("。而且为了将文件转换成单词，从"),t("code",[e._v("FileInputStream")]),e._v("中创建了一个"),t("code",[e._v("StreamTokenizer")]),e._v("。在"),t("code",[e._v("StreamTokenizer")]),e._v("中，存在一个默认的分隔符列表，我们可用一系列方法加入更多的分隔符。在这里，我们用"),t("code",[e._v("ordinaryChar()")]),e._v("指出“该字符没有特别重要的意义”，所以解析器不会把它当作自己创建的任何单词的一部分。例如，"),t("code",[e._v("st.ordinaryChar('.')")]),e._v("表示小数点不会成为解析出来的单词的一部分。在与Java配套提供的联机文档中，可以找到更多的相关信息。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("countWords()")]),e._v("中，每次从数据流中取出一个记号，而"),t("code",[e._v("ttype")]),e._v("信息的作用是判断对每个记号采取什么操作——因为记号可能代表一个行尾、一个数字、一个字符串或者一个字符。")]),e._v(" "),t("p",[e._v("找到一个记号后，会查询"),t("code",[e._v("Hashtable counts")]),e._v("，核实其中是否已经以“键”（"),t("code",[e._v("Key")]),e._v("）的形式包含了一个记号。若答案是肯定的，对应的"),t("code",[e._v("Counter")]),e._v("（计数器）对象就会自增，指出已找到该单词的另一个实例。若答案为否，则新建一个"),t("code",[e._v("Counter")]),e._v("——因为"),t("code",[e._v("Counter")]),e._v("构造器会将它的值初始化为1，正是我们计算单词数量时的要求。")]),e._v(" "),t("p",[t("code",[e._v("SortedWordCount")]),e._v("并不属于"),t("code",[e._v("Hashtable")]),e._v("（散列表）的一种类型，所以它不会继承。它执行的一种特定类型的操作，所以尽管"),t("code",[e._v("keys()")]),e._v("和"),t("code",[e._v("values()")]),e._v("方法都必须重新揭示出来，但仍不表示应使用那个继承，因为大量"),t("code",[e._v("Hashtable")]),e._v("方法在这里都是不适当的。除此以外，对于另一些方法来说（比如"),t("code",[e._v("getCounter()")]),e._v("——用于获得一个特定字符串的计数器；又如"),t("code",[e._v("sortedKeys()")]),e._v("——用于产生一个枚举），它们最终都改变了"),t("code",[e._v("SortedWordCount")]),e._v("接口的形式。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("main()")]),e._v("内，我们用"),t("code",[e._v("SortedWordCount")]),e._v("打开和计算文件中的单词数量——总共只用了两行代码。随后，我们为一个排好序的键（单词）列表提取出一个枚举。并用它获得每个键以及相关的"),t("code",[e._v("Count")]),e._v("（计数）。注意必须调用"),t("code",[e._v("cleanup()")]),e._v("，否则文件不能正常关闭。\n采用了"),t("code",[e._v("StreamTokenizer")]),e._v("的第二个例子将在第17章提供。")]),e._v(" "),t("h2",{attrs:{id:"_10-6-1-stringtokenizer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-6-1-stringtokenizer"}},[e._v("#")]),e._v(" 10.6.1 "),t("code",[e._v("StringTokenizer")])]),e._v(" "),t("p",[e._v("尽管并不必要IO库的一部分，但"),t("code",[e._v("StringTokenizer")]),e._v("提供了与"),t("code",[e._v("StreamTokenizer")]),e._v("极相似的功能，所以在这里一并讲述。")]),e._v(" "),t("p",[t("code",[e._v("StringTokenizer")]),e._v("的作用是每次返回字符串内的一个记号。这些记号是一些由制表站、空格以及新行分隔的连续字符。因此，字符串"),t("code",[e._v('"Where is my cat?"')]),e._v("的记号分别是"),t("code",[e._v('"Where"')]),e._v("、"),t("code",[e._v('"is"')]),e._v("、"),t("code",[e._v('"my"')]),e._v("和"),t("code",[e._v('"cat?"')]),e._v("。与"),t("code",[e._v("StreamTokenizer")]),e._v("类似，我们可以指示"),t("code",[e._v("StringTokenizer")]),e._v("按照我们的愿望分割输入。但对于"),t("code",[e._v("StringTokenizer")]),e._v("，却需要向构造器传递另一个参数，即我们想使用的分隔字符串。通常，如果想进行更复杂的操作，应使用"),t("code",[e._v("StreamTokenizer")]),e._v("。")]),e._v(" "),t("p",[e._v("可用"),t("code",[e._v("nextToken()")]),e._v("向"),t("code",[e._v("StringTokenizer")]),e._v("对象请求字符串内的下一个记号。该方法要么返回一个记号，要么返回一个空字符串（表示没有记号剩下）。")]),e._v(" "),t("p",[e._v("作为一个例子，下述程序将执行一个有限的句法分析，查询键短语序列，了解句子暗示的是快乐亦或悲伤的含义。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: AnalyzeSentence.java\n// Look for particular sequences\n// within sentences.\nimport java.util.*;\n\npublic class AnalyzeSentence {\n  public static void main(String[] args) {\n    analyze("I am happy about this");\n    analyze("I am not happy about this");\n    analyze("I am not! I am happy");\n    analyze("I am sad about this");\n    analyze("I am not sad about this");\n    analyze("I am not! I am sad");\n    analyze("Are you happy about this?");\n    analyze("Are you sad about this?");\n    analyze("It\'s you! I am happy");\n    analyze("It\'s you! I am sad");\n  }\n  static StringTokenizer st;\n  static void analyze(String s) {\n    prt("\\nnew sentence >> " + s);\n    boolean sad = false;\n    st = new StringTokenizer(s);\n    while (st.hasMoreTokens()) {\n      String token = next();\n      // Look until you find one of the\n      // two starting tokens:\n      if(!token.equals("I") &&\n         !token.equals("Are"))\n        continue; // Top of while loop\n      if(token.equals("I")) {\n        String tk2 = next();\n        if(!tk2.equals("am")) // Must be after I\n          break; // Out of while loop\n        else {\n          String tk3 = next();\n          if(tk3.equals("sad")) {\n            sad = true;\n            break; // Out of while loop\n          }\n          if (tk3.equals("not")) {\n            String tk4 = next();\n            if(tk4.equals("sad"))\n              break; // Leave sad false\n            if(tk4.equals("happy")) {\n              sad = true;\n              break;\n            }\n          }\n        }\n      }\n      if(token.equals("Are")) {\n        String tk2 = next();\n        if(!tk2.equals("you"))\n          break; // Must be after Are\n        String tk3 = next();\n        if(tk3.equals("sad"))\n          sad = true;\n        break; // Out of while loop\n      }\n    }\n    if(sad) prt("Sad detected");\n  }\n  static String next() {\n    if(st.hasMoreTokens()) {\n      String s = st.nextToken();\n      prt(s);\n      return s;\n    }\n    else\n      return "";\n  }\n  static void prt(String s) {\n    System.out.println(s);\n  }\n} ///:~\n')])])]),t("p",[e._v("对于准备分析的每个字符串，我们进入一个"),t("code",[e._v("while")]),e._v("循环，并将记号从那个字符串中取出。请注意第一个if语句，假如记号既不是"),t("code",[e._v('"I"')]),e._v("，也不是"),t("code",[e._v('"Are"')]),e._v("，就会执行"),t("code",[e._v("continue")]),e._v("（返回循环起点，再一次开始）。这意味着除非发现一个"),t("code",[e._v('"I"')]),e._v("或者"),t("code",[e._v('"Are"')]),e._v("，才会真正得到记号。大家可能想用"),t("code",[e._v("==")]),e._v("代替"),t("code",[e._v("equals()")]),e._v("方法，但那样做会出现不正常的表现，因为"),t("code",[e._v("==")]),e._v("比较的是引用值，而"),t("code",[e._v("equals()")]),e._v("比较的是内容。")]),e._v(" "),t("p",[t("code",[e._v("analyze()")]),e._v("方法剩余部分的逻辑是搜索"),t("code",[e._v('"I am sad"')]),e._v("（我很忧伤、"),t("code",[e._v('"I am nothappy"')]),e._v("（我不快乐）或者"),t("code",[e._v('"Are you sad?"')]),e._v("（你悲伤吗？）这样的句法格式。若没有"),t("code",[e._v("break")]),e._v("语句，这方面的代码甚至可能更加散乱。大家应注意对一个典型的解析器来说，通常都有这些记号的一个表格，并能在读取新记号的时候用一小段代码在表格内移动。")]),e._v(" "),t("p",[e._v("无论如何，只应将"),t("code",[e._v("StringTokenizer")]),e._v("看作"),t("code",[e._v("StreamTokenizer")]),e._v("一种简单而且特殊的简化形式。然而，如果有一个字符串需要进行记号处理，而且"),t("code",[e._v("StringTokenizer")]),e._v("的功能实在有限，那么应该做的全部事情就是用"),t("code",[e._v("StringBufferInputStream")]),e._v("将其转换到一个数据流里，再用它创建一个功能更强大的"),t("code",[e._v("StreamTokenizer")]),e._v("。")])])}),[],!1,null,null,null);n.default=r.exports}}]);