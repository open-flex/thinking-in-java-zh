(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{498:function(e,n,t){"use strict";t.r(n);var r=t(56),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_17-1-文字处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-1-文字处理"}},[e._v("#")]),e._v(" 17.1 文字处理")]),e._v(" "),t("p",[e._v("如果您有C或C++的经验，那么最开始可能会对Java控制文本的能力感到怀疑。事实上，我们最害怕的就是速度特别慢，这可能妨碍我们创造能力的发挥。然而，Java对应的工具（特别是"),t("code",[e._v("String")]),e._v("类）具有很强的功能，就象本节的例子展示的那样（而且性能也有一定程度的提升）。")]),e._v(" "),t("p",[e._v("正如大家即将看到的那样，建立这些例子的目的都是为了解决本书编制过程中遇到的一些问题。但是，它们的能力并非仅止于此。通过简单的改造，即可让它们在其他场合大显身手。除此以外，它们还揭示出了本书以前没有强调过的一项Java特性。")]),e._v(" "),t("h2",{attrs:{id:"_17-1-1-提取代码列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-1-1-提取代码列表"}},[e._v("#")]),e._v(" 17.1.1 提取代码列表")]),e._v(" "),t("p",[e._v("对于本书每一个完整的代码列表（不是代码段），大家无疑会注意到它们都用特殊的注释记号起始与结束（"),t("code",[e._v("//:")]),e._v("和"),t("code",[e._v("///:~")]),e._v("）。之所以要包括这种标志信息，是为了能将代码从本书自动提取到兼容的源码文件中。在我的前一本书里，我设计了一个系统，可将测试过的代码文件自动合并到书中。但对于这本书，我发现一种更简便的做法是一旦通过了最初的测试，就把代码粘贴到书中。而且由于很难第一次就编译通过，所以我在书的内部编辑代码。但如何提取并测试代码呢？这个程序就是关键。如果你打算解决一个文字处理的问题，那么它也很有利用价值。该例也演示了"),t("code",[e._v("String")]),e._v("类的许多特性。")]),e._v(" "),t("p",[e._v("我首先将整本书都以ASCII文本格式保存成一个独立的文件。"),t("code",[e._v("CodePackager")]),e._v("程序有两种运行模式（在"),t("code",[e._v("usageString")]),e._v("有相应的描述）：如果使用"),t("code",[e._v("-p")]),e._v("标志，程序就会检查一个包含了ASCII文本（即本书的内容）的一个输入文件。它会遍历这个文件，按照注释记号提取出代码，并用位于第一行的文件名来决定创建文件使用什么名字。除此以外，在需要将文件置入一个特殊目录的时候，它还会检查"),t("code",[e._v("package")]),e._v("语句（根据由"),t("code",[e._v("package")]),e._v("语句指定的路径选择）。")]),e._v(" "),t("p",[e._v("但这样还不够。程序还要对包（"),t("code",[e._v("package")]),e._v("）名进行跟踪，从而监视章内发生的变化。由于每一章使用的所有包都以"),t("code",[e._v("c02")]),e._v("，"),t("code",[e._v("c03")]),e._v("，"),t("code",[e._v("c04")]),e._v("等等起头，用于标记它们所属的是哪一章（除那些以"),t("code",[e._v("com")]),e._v("起头的以外，它们在对不同的章进行跟踪的时候会被忽略）——只要每一章的第一个代码列表包含了一个"),t("code",[e._v("package")]),e._v("，所以"),t("code",[e._v("CodePackager")]),e._v("程序能知道每一章发生的变化，并将后续的文件放到新的子目录里。")]),e._v(" "),t("p",[e._v("每个文件提取出来时，都会置入一个"),t("code",[e._v("SourceCodeFile")]),e._v("对象，随后再将那个对象置入一个集合（后面还会详尽讲述这个过程）。这些"),t("code",[e._v("SourceCodeFile")]),e._v("对象可以简单地保存在文件中，那正是本项目的第二个用途。如果直接调用"),t("code",[e._v("CodePackager")]),e._v("，不添加"),t("code",[e._v("-p")]),e._v("标志，它就会将一个“打包”文件作为输入。那个文件随后会被提取（释放）进入单独的文件。所以"),t("code",[e._v("-p")]),e._v("标志的意思就是提取出来的文件已被“打包”（"),t("code",[e._v("packed")]),e._v("）进入这个单一的文件。")]),e._v(" "),t("p",[e._v("但为什么还要如此麻烦地使用打包文件呢？这是由于不同的计算机平台用不同的方式在文件里保存文本信息。其中最大的问题是换行字符的表示方法；当然，还有可能存在另一些问题。然而，Java有一种特殊类型的IO数据流——"),t("code",[e._v("DataOutputStream")]),e._v("——它可以保证“无论数据来自何种机器，只要使用一个"),t("code",[e._v("DataInputStream")]),e._v("收取这些数据，就可用本机正确的格式保存它们”。也就是说，Java负责控制与不同平台有关的所有细节，而这正是Java最具魅力的一点。所以"),t("code",[e._v("-p")]),e._v("标志能将所有东西都保存到单一的文件里，并采用通用的格式。用户可从Web下载这个文件以及Java程序，然后对这个文件运行"),t("code",[e._v("CodePackager")]),e._v("，同时不指定"),t("code",[e._v("-p")]),e._v("标志，文件便会释放到系统中正确的场所（亦可指定另一个子目录；否则就在当前目录创建子目录）。为确保不会留下与特定平台有关的格式，凡是需要描述一个文件或路径的时候，我们就使用File对象。除此以外，还有一项特别的安全措施：在每个子目录里都放入一个空文件；那个文件的名字指出在那个子目录里应找到多少个文件。")]),e._v(" "),t("p",[e._v("下面是完整的代码，后面会对它进行详细的说明：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: CodePackager.java\n// "Packs" and "unpacks" the code in "Thinking\n// in Java" for cross-platform distribution.\n/* Commented so CodePackager sees it and starts\n   a new chapter directory, but so you don\'t\n   have to worry about the directory where this\n   program lives:\npackage c17;\n*/\nimport java.util.*;\nimport java.io.*;\n\nclass Pr {\n  static void error(String e) {\n    System.err.println("ERROR: " + e);\n    System.exit(1);\n  }\n}\n\nclass IO {\n  static BufferedReader disOpen(File f) {\n    BufferedReader in = null;\n    try {\n      in = new BufferedReader(\n        new FileReader(f));\n    } catch(IOException e) {\n      Pr.error("could not open " + f);\n    }\n    return in;\n  }\n  static BufferedReader disOpen(String fname) {\n    return disOpen(new File(fname));\n  }\n  static DataOutputStream dosOpen(File f) {\n    DataOutputStream in = null;\n    try {\n      in = new DataOutputStream(\n        new BufferedOutputStream(\n          new FileOutputStream(f)));\n    } catch(IOException e) {\n      Pr.error("could not open " + f);\n    }\n    return in;\n  }\n  static DataOutputStream dosOpen(String fname) {\n    return dosOpen(new File(fname));\n  }\n  static PrintWriter psOpen(File f) {\n    PrintWriter in = null;\n    try {\n      in = new PrintWriter(\n        new BufferedWriter(\n          new FileWriter(f)));\n    } catch(IOException e) {\n      Pr.error("could not open " + f);\n    }\n    return in;\n  }\n  static PrintWriter psOpen(String fname) {\n    return psOpen(new File(fname));\n  }\n  static void close(Writer os) {\n    try {\n      os.close();\n    } catch(IOException e) {\n      Pr.error("closing " + os);\n    }\n  }\n  static void close(DataOutputStream os) {\n    try {\n      os.close();\n    } catch(IOException e) {\n      Pr.error("closing " + os);\n    }\n  }\n  static void close(Reader os) {\n    try {\n      os.close();\n    } catch(IOException e) {\n      Pr.error("closing " + os);\n    }\n  }\n}\n\nclass SourceCodeFile {\n  public static final String\n    startMarker = "//:", // Start of source file\n    endMarker = "} ///:~", // End of source\n    endMarker2 = "}; ///:~", // C++ file end\n    beginContinue = "} ///:Continued",\n    endContinue = "///:Continuing",\n    packMarker = "###", // Packed file header tag\n    eol = // Line separator on current system\n      System.getProperty("line.separator"),\n    filesep = // System\'s file path separator\n      System.getProperty("file.separator");\n  public static String copyright = "";\n  static {\n    try {\n      BufferedReader cr =\n        new BufferedReader(\n          new FileReader("Copyright.txt"));\n      String crin;\n      while((crin = cr.readLine()) != null)\n        copyright += crin + "\\n";\n      cr.close();\n    } catch(Exception e) {\n      copyright = "";\n    }\n  }\n  private String filename, dirname,\n    contents = new String();\n  private static String chapter = "c02";\n  // The file name separator from the old system:\n  public static String oldsep;\n  public String toString() {\n    return dirname + filesep + filename;\n  }\n  // Constructor for parsing from document file:\n  public SourceCodeFile(String firstLine,\n      BufferedReader in) {\n    dirname = chapter;\n    // Skip past marker:\n    filename = firstLine.substring(\n        startMarker.length()).trim();\n    // Find space that terminates file name:\n    if(filename.indexOf(\' \') != -1)\n      filename = filename.substring(\n          0, filename.indexOf(\' \'));\n    System.out.println("found: " + filename);\n    contents = firstLine + eol;\n    if(copyright.length() != 0)\n      contents += copyright + eol;\n    String s;\n    boolean foundEndMarker = false;\n    try {\n      while((s = in.readLine()) != null) {\n        if(s.startsWith(startMarker))\n          Pr.error("No end of file marker for " +\n            filename);\n        // For this program, no spaces before\n        // the "package" keyword are allowed\n        // in the input source code:\n        else if(s.startsWith("package")) {\n          // Extract package name:\n          String pdir = s.substring(\n            s.indexOf(\' \')).trim();\n          pdir = pdir.substring(\n            0, pdir.indexOf(\';\')).trim();\n          // Capture the chapter from the package\n          // ignoring the \'com\' subdirectories:\n          if(!pdir.startsWith("com")) {\n            int firstDot = pdir.indexOf(\'.\');\n            if(firstDot != -1)\n              chapter =\n                pdir.substring(0,firstDot);\n            else\n              chapter = pdir;\n          }\n          // Convert package name to path name:\n          pdir = pdir.replace(\n            \'.\', filesep.charAt(0));\n          System.out.println("package " + pdir);\n          dirname = pdir;\n        }\n        contents += s + eol;\n        // Move past continuations:\n        if(s.startsWith(beginContinue))\n          while((s = in.readLine()) != null)\n            if(s.startsWith(endContinue)) {\n              contents += s + eol;\n              break;\n            }\n        // Watch for end of code listing:\n        if(s.startsWith(endMarker) ||\n           s.startsWith(endMarker2)) {\n          foundEndMarker = true;\n          break;\n        }\n      }\n      if(!foundEndMarker)\n        Pr.error(\n          "End marker not found before EOF");\n      System.out.println("Chapter: " + chapter);\n    } catch(IOException e) {\n      Pr.error("Error reading line");\n    }\n  }\n  // For recovering from a packed file:\n  public SourceCodeFile(BufferedReader pFile) {\n    try {\n      String s = pFile.readLine();\n      if(s == null) return;\n      if(!s.startsWith(packMarker))\n        Pr.error("Can\'t find " + packMarker\n          + " in " + s);\n      s = s.substring(\n        packMarker.length()).trim();\n      dirname = s.substring(0, s.indexOf(\'#\'));\n      filename = s.substring(s.indexOf(\'#\') + 1);\n      dirname = dirname.replace(\n        oldsep.charAt(0), filesep.charAt(0));\n      filename = filename.replace(\n        oldsep.charAt(0), filesep.charAt(0));\n      System.out.println("listing: " + dirname\n        + filesep + filename);\n      while((s = pFile.readLine()) != null) {\n        // Watch for end of code listing:\n        if(s.startsWith(endMarker) ||\n           s.startsWith(endMarker2)) {\n          contents += s;\n          break;\n        }\n        contents += s + eol;\n      }\n    } catch(IOException e) {\n      System.err.println("Error reading line");\n    }\n  }\n  public boolean hasFile() {\n    return filename != null;\n  }\n  public String directory() { return dirname; }\n  public String filename() { return filename; }\n  public String contents() { return contents; }\n  // To write to a packed file:\n  public void writePacked(DataOutputStream out) {\n    try {\n      out.writeBytes(\n        packMarker + dirname + "#"\n        + filename + eol);\n      out.writeBytes(contents);\n    } catch(IOException e) {\n      Pr.error("writing " + dirname +\n        filesep + filename);\n    }\n  }\n  // To generate the actual file:\n  public void writeFile(String rootpath) {\n    File path = new File(rootpath, dirname);\n    path.mkdirs();\n    PrintWriter p =\n      IO.psOpen(new File(path, filename));\n    p.print(contents);\n    IO.close(p);\n  }\n}\n\nclass DirMap {\n  private Hashtable t = new Hashtable();\n  private String rootpath;\n  DirMap() {\n    rootpath = System.getProperty("user.dir");\n  }\n  DirMap(String alternateDir) {\n    rootpath = alternateDir;\n  }\n  public void add(SourceCodeFile f){\n    String path = f.directory();\n    if(!t.containsKey(path))\n      t.put(path, new Vector());\n    ((Vector)t.get(path)).addElement(f);\n  }\n  public void writePackedFile(String fname) {\n    DataOutputStream packed = IO.dosOpen(fname);\n    try {\n      packed.writeBytes("###Old Separator:" +\n        SourceCodeFile.filesep + "###\\n");\n    } catch(IOException e) {\n      Pr.error("Writing separator to " + fname);\n    }\n    Enumeration e = t.keys();\n    while(e.hasMoreElements()) {\n      String dir = (String)e.nextElement();\n      System.out.println(\n        "Writing directory " + dir);\n      Vector v = (Vector)t.get(dir);\n      for(int i = 0; i < v.size(); i++) {\n        SourceCodeFile f =\n          (SourceCodeFile)v.elementAt(i);\n        f.writePacked(packed);\n      }\n    }\n    IO.close(packed);\n  }\n  // Write all the files in their directories:\n  public void write() {\n    Enumeration e = t.keys();\n    while(e.hasMoreElements()) {\n      String dir = (String)e.nextElement();\n      Vector v = (Vector)t.get(dir);\n      for(int i = 0; i < v.size(); i++) {\n        SourceCodeFile f =\n          (SourceCodeFile)v.elementAt(i);\n        f.writeFile(rootpath);\n      }\n      // Add file indicating file quantity\n      // written to this directory as a check:\n      IO.close(IO.dosOpen(\n        new File(new File(rootpath, dir),\n          Integer.toString(v.size())+".files")));\n    }\n  }\n}\n\npublic class CodePackager {\n  private static final String usageString =\n  "usage: java CodePackager packedFileName" +\n  "\\nExtracts source code files from packed \\n" +\n  "version of Tjava.doc sources into " +\n  "directories off current directory\\n" +\n  "java CodePackager packedFileName newDir\\n" +\n  "Extracts into directories off newDir\\n" +\n  "java CodePackager -p source.txt packedFile" +\n  "\\nCreates packed version of source files" +\n  "\\nfrom text version of Tjava.doc";\n  private static void usage() {\n    System.err.println(usageString);\n    System.exit(1);\n  }\n  public static void main(String[] args) {\n    if(args.length == 0) usage();\n    if(args[0].equals("-p")) {\n      if(args.length != 3)\n        usage();\n      createPackedFile(args);\n    }\n    else {\n      if(args.length > 2)\n        usage();\n      extractPackedFile(args);\n    }\n  }\n  private static String currentLine;\n  private static BufferedReader in;\n  private static DirMap dm;\n  private static void\n  createPackedFile(String[] args) {\n    dm = new DirMap();\n    in = IO.disOpen(args[1]);\n    try {\n      while((currentLine = in.readLine())\n          != null) {\n        if(currentLine.startsWith(\n            SourceCodeFile.startMarker)) {\n          dm.add(new SourceCodeFile(\n                   currentLine, in));\n        }\n        else if(currentLine.startsWith(\n            SourceCodeFile.endMarker))\n          Pr.error("file has no start marker");\n        // Else ignore the input line\n      }\n    } catch(IOException e) {\n      Pr.error("Error reading " + args[1]);\n    }\n    IO.close(in);\n    dm.writePackedFile(args[2]);\n  }\n  private static void\n  extractPackedFile(String[] args) {\n    if(args.length == 2) // Alternate directory\n      dm = new DirMap(args[1]);\n    else // Current directory\n      dm = new DirMap();\n    in = IO.disOpen(args[0]);\n    String s = null;\n    try {\n       s = in.readLine();\n    } catch(IOException e) {\n      Pr.error("Cannot read from " + in);\n    }\n    // Capture the separator used in the system\n    // that packed the file:\n    if(s.indexOf("###Old Separator:") != -1 ) {\n      String oldsep = s.substring(\n        "###Old Separator:".length());\n      oldsep = oldsep.substring(\n        0, oldsep. indexOf(\'#\'));\n      SourceCodeFile.oldsep = oldsep;\n    }\n    SourceCodeFile sf = new SourceCodeFile(in);\n    while(sf.hasFile()) {\n      dm.add(sf);\n      sf = new SourceCodeFile(in);\n    }\n    dm.write();\n  }\n} ///:~\n')])])]),t("p",[e._v("我们注意到"),t("code",[e._v("package")]),e._v("语句已经作为注释标志出来了。由于这是本章的第一个程序，所以"),t("code",[e._v("package")]),e._v("语句是必需的，用它告诉"),t("code",[e._v("CodePackager")]),e._v("已改换到另一章。但是把它放入包里却会成为一个问题。当我们创建一个包的时候，需要将结果程序同一个特定的目录结构联系在一起，这一做法对本书的大多数例子都是适用的。但在这里，"),t("code",[e._v("CodePackager")]),e._v("程序必须在一个专用的目录里编译和运行，所以"),t("code",[e._v("package")]),e._v("语句作为注释标记出去。但对"),t("code",[e._v("CodePackager")]),e._v("来说，它“看起来”依然象一个普通的"),t("code",[e._v("package")]),e._v("语句，因为程序还不是特别复杂，不能侦查到多行注释（没有必要做得这么复杂，这里只要求方便就行）。")]),e._v(" "),t("p",[e._v("头两个类是“支持／工具”类，作用是使程序剩余的部分在编写时更加连贯，也更便于阅读。第一个是"),t("code",[e._v("Pr")]),e._v("，它类似ANSI C的"),t("code",[e._v("perror")]),e._v("库，两者都能打印出一条错误提示消息（但同时也会退出程序）。第二个类将文件的创建过程封装在内，这个过程已在第10章介绍过了；大家已经知道，这样做很快就会变得非常累赘和麻烦。为解决这个问题，第10章提供的方案致力于新类的创建，但这儿的“静态”方法已经使用过了。在那些方法中，正常的异常会被捕获，并相应地进行处理。这些方法使剩余的代码显得更加清爽，更易阅读。")]),e._v(" "),t("p",[e._v("帮助解决问题的第一个类是"),t("code",[e._v("SourceCodeFile")]),e._v("（源码文件），它代表本书一个源码文件包含的所有信息（内容、文件名以及目录）。它同时还包含了一系列"),t("code",[e._v("String")]),e._v("常数，分别代表一个文件的开始与结束；在打包文件内使用的一个标记；当前系统的换行符；文件路径分隔符（注意要用"),t("code",[e._v("System.getProperty()")]),e._v("侦查本地版本是什么）；以及一大段版权声明，它是从下面这个"),t("code",[e._v("Copyright.txt")]),e._v("文件里提取出来的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//////////////////////////////////////////////////\n// Copyright (c) Bruce Eckel, 1998\n// Source code file from the book "Thinking in Java"\n// All rights reserved EXCEPT as allowed by the\n// following statements: You may freely use this file\n// for your own work (personal or commercial),\n// including modifications and distribution in\n// executable form only. Permission is granted to use\n// this file in classroom situations, including its\n// use in presentation materials, as long as the book\n// "Thinking in Java" is cited as the source.\n// Except in classroom situations, you may not copy\n// and distribute this code; instead, the sole\n// distribution point is http://www.BruceEckel.com\n// (and official mirror sites) where it is\n// freely available. You may not remove this\n// copyright and notice. You may not distribute\n// modified versions of the source code in this\n// package. You may not use this file in printed\n// media without the express permission of the\n// author. Bruce Eckel makes no representation about\n// the suitability of this software for any purpose.\n// It is provided "as is" without express or implied\n// warranty of any kind, including any implied\n// warranty of merchantability, fitness for a\n// particular purpose or non-infringement. The entire\n// risk as to the quality and performance of the\n// software is with you. Bruce Eckel and the\n// publisher shall not be liable for any damages\n// suffered by you or any third party as a result of\n// using or distributing software. In no event will\n// Bruce Eckel or the publisher be liable for any\n// lost revenue, profit, or data, or for direct,\n// indirect, special, consequential, incidental, or\n// punitive damages, however caused and regardless of\n// the theory of liability, arising out of the use of\n// or inability to use software, even if Bruce Eckel\n// and the publisher have been advised of the\n// possibility of such damages. Should the software\n// prove defective, you assume the cost of all\n// necessary servicing, repair, or correction. If you\n// think you\'ve found an error, please email all\n// modified files with clearly commented changes to:\n// Bruce@EckelObjects.com. (please use the same\n// address for non-code errors found in the book).\n//////////////////////////////////////////////////\n')])])]),t("p",[e._v("从一个打包文件中提取文件时，当初所用系统的文件分隔符也会标注出来，以便用本地系统适用的符号替换它。")]),e._v(" "),t("p",[e._v("当前章的子目录保存在"),t("code",[e._v("chapter")]),e._v("字段中，它初始化成"),t("code",[e._v("c02")]),e._v("（大家可注意一下第2章的列表正好没有包含一个打包语句）。只有在当前文件里发现一个"),t("code",[e._v("package")]),e._v("（打包）语句时，"),t("code",[e._v("chapter")]),e._v("字段才会发生改变。")]),e._v(" "),t("p",[e._v("(1) 构建一个打包文件")]),e._v(" "),t("p",[e._v("第一个构造器用于从本书的ASCII文本版里提取出一个文件。发出调用的代码（在列表里较深的地方）会读入并检查每一行，直到找到与一个列表的开头相符的为止。在这个时候，它就会新建一个"),t("code",[e._v("SourceCodeFile")]),e._v("对象，将第一行的内容（已经由调用代码读入了）传递给它，同时还要传递"),t("code",[e._v("BufferedReader")]),e._v("对象，以便在这个缓冲区中提取源码列表剩余的内容。")]),e._v(" "),t("p",[e._v("从这时起，大家会发现"),t("code",[e._v("String")]),e._v("方法被频繁运用。为提取出文件名，需调用"),t("code",[e._v("substring()")]),e._v("的重载版本，令其从一个起始偏移开始，一直读到字符串的末尾，从而形成一个“子串”。为算出这个起始索引，先要用"),t("code",[e._v("length()")]),e._v("得出"),t("code",[e._v("startMarker")]),e._v("的总长，再用"),t("code",[e._v("trim()")]),e._v("删除字符串头尾多余的空格。第一行在文件名后也可能有一些字符；它们是用"),t("code",[e._v("indexOf()")]),e._v("侦测出来的。若没有发现找到我们想寻找的字符，就返回-1；若找到那些字符，就返回它们第一次出现的位置。注意这也是"),t("code",[e._v("indexOf()")]),e._v("的一个重载版本，采用一个字符串作为参数，而非一个字符。")]),e._v(" "),t("p",[e._v("解析出并保存好文件名后，第一行会被置入字符串"),t("code",[e._v("contents")]),e._v("中（该字符串用于保存源码清单的完整正文）。随后，将剩余的代码行读入，并合并进入"),t("code",[e._v("contents")]),e._v("字符串。当然事情并没有想象的那么简单，因为特定的情况需加以特别的控制。一种情况是错误检查：若直接遇到一个"),t("code",[e._v("startMarker")]),e._v("（起始标记），表明当前操作的这个代码列表没有设置一个结束标记。这属于一个出错条件，需要退出程序。")]),e._v(" "),t("p",[e._v("另一种特殊情况与"),t("code",[e._v("package")]),e._v("关键字有关。尽管Java是一种自由形式的语言，但这个程序要求"),t("code",[e._v("package")]),e._v("关键字必须位于行首。若发现"),t("code",[e._v("package")]),e._v("关键字，就通过检查位于开头的空格以及位于末尾的分号，从而提取出包名（注意亦可一次单独的操作实现，方法是使用重载的"),t("code",[e._v("substring()")]),e._v("，令其同时检查起始和结束索引位置）。随后，将包名中的点号替换成特定的文件分隔符——当然，这里要假设文件分隔符仅有一个字符的长度。尽管这个假设可能对目前的所有系统都是适用的，但一旦遇到问题，一定不要忘了检查一下这里。")]),e._v(" "),t("p",[e._v("默认操作是将每一行都连接到"),t("code",[e._v("contents")]),e._v("里，同时还有换行字符，直到遇到一个"),t("code",[e._v("endMarker")]),e._v("（结束标记）为止。该标记指出构造器应当停止了。若在"),t("code",[e._v("endMarker")]),e._v("之前遇到了文件结尾，就认为存在一个错误。")]),e._v(" "),t("p",[e._v("(2) 从打包文件中提取")]),e._v(" "),t("p",[e._v("第二个构造器用于将源码文件从打包文件中恢复（提取）出来。在这儿，作为调用者的方法不必担心会跳过一些中间文本。打包文件包含了所有源码文件，它们相互间紧密地靠在一起。需要传递给该构造器的仅仅是一个"),t("code",[e._v("BufferedReader")]),e._v("，它代表着“信息源”。构造器会从中提取出自己需要的信息。但在每个代码列表开始的地方还有一些配置信息，它们的身份是用"),t("code",[e._v("packMarker")]),e._v("（打包标记）指出的。若"),t("code",[e._v("packMarker")]),e._v("不存在，意味着调用者试图用错误的方法来使用这个构造器。")]),e._v(" "),t("p",[e._v("一旦发现"),t("code",[e._v("packMarker")]),e._v("，就会将其剥离出来，并提取出目录名（用一个"),t("code",[e._v("#")]),e._v("结尾）以及文件名（直到行末）。不管在哪种情况下，旧分隔符都会被替换成本地适用的一个分隔符，这是用"),t("code",[e._v("String replace()")]),e._v("方法实现的。老的分隔符被置于打包文件的开头，在代码列表稍靠后的一部分即可看到是如何把它提取出来的。")]),e._v(" "),t("p",[e._v("构造器剩下的部分就非常简单了。它读入每一行，把它合并到"),t("code",[e._v("contents")]),e._v("里，直到遇见"),t("code",[e._v("endMarker")]),e._v("为止。")]),e._v(" "),t("p",[e._v("(3) 程序列表的存取")]),e._v(" "),t("p",[e._v("接下来的一系列方法是简单的访问器："),t("code",[e._v("directory()")]),e._v("、"),t("code",[e._v("filename()")]),e._v("（注意方法可能与字段有相同的拼写和大小写形式）和"),t("code",[e._v("contents()")]),e._v("。而"),t("code",[e._v("hasFile()")]),e._v("用于指出这个对象是否包含了一个文件（很快就会知道为什么需要这个）。")]),e._v(" "),t("p",[e._v("最后三个方法致力于将这个代码列表写进一个文件——要么通过"),t("code",[e._v("writePacked()")]),e._v("写入一个打包文件，要么通过"),t("code",[e._v("writeFile()")]),e._v("写入一个Java源码文件。"),t("code",[e._v("writePacked()")]),e._v("需要的唯一东西就是"),t("code",[e._v("DataOutputStream")]),e._v("，它是在别的地方打开的，代表着准备写入的文件。它先把头信息置入第一行，再调用"),t("code",[e._v("writeBytes()")]),e._v("将"),t("code",[e._v("contents")]),e._v("（内容）写成一种“通用”格式。")]),e._v(" "),t("p",[e._v("准备写Java源码文件时，必须先把文件建好。这是用"),t("code",[e._v("IO.psOpen()")]),e._v("实现的。我们需要向它传递一个"),t("code",[e._v("File")]),e._v("对象，其中不仅包含了文件名，也包含了路径信息。但现在的问题是：这个路径实际存在吗？用户可能决定将所有源码目录都置入一个完全不同的子目录，那个目录可能是尚不存在的。所以在正式写每个文件之前，都要调用"),t("code",[e._v("File.mkdirs()")]),e._v("方法，建好我们想向其中写入文件的目录路径。它可一次性建好整个路径。")]),e._v(" "),t("p",[e._v("(4) 整套列表的包容")]),e._v(" "),t("p",[e._v("以子目录的形式组织代码列表是非常方便的，尽管这要求先在内存中建好整套列表。之所以要这样做，还有另一个很有说服力的原因：为了构建更“健康”的系统。也就是说，在创建代码列表的每个子目录时，都会加入一个额外的文件，它的名字包含了那个目录内应有的文件数目。")]),e._v(" "),t("p",[t("code",[e._v("DirMap")]),e._v("类可帮助我们实现这一效果，并有效地演示了一个“多重映射”的概述。这是通过一个散列表（"),t("code",[e._v("Hashtable")]),e._v("）实现的，它的“键”是准备创建的子目录，而“值”是包含了那个特定目录中的"),t("code",[e._v("SourceCodeFile")]),e._v("对象的"),t("code",[e._v("Vector")]),e._v("对象。所以，我们在这儿并不是将一个“键”映射（或对应）到一个值，而是通过对应的"),t("code",[e._v("Vector")]),e._v("，将一个键“多重映射”到一系列值。尽管这听起来似乎很复杂，但具体实现时却是非常简单和直接的。大家可以看到，"),t("code",[e._v("DirMap")]),e._v("类的大多数代码都与向文件中的写入有关，而非与“多重映射”有关。与它有关的代码仅极少数而已。")]),e._v(" "),t("p",[e._v("可通过两种方式建立一个"),t("code",[e._v("DirMap")]),e._v("（目录映射或对应）关系：默认构造器假定我们希望目录从当前位置向下展开，而另一个构造器让我们为起始目录指定一个备用的“绝对”路径。")]),e._v(" "),t("p",[t("code",[e._v("add()")]),e._v("方法是一个采取的行动比较密集的场所。首先将"),t("code",[e._v("directory()")]),e._v("从我们想添加的"),t("code",[e._v("SourceCodeFile")]),e._v("里提取出来，然后检查散列表（"),t("code",[e._v("Hashtable")]),e._v("），看看其中是否已经包含了那个键。如果没有，就向散列表加入一个新的"),t("code",[e._v("Vector")]),e._v("，并将它同那个键关联到一起。到这时，不管采取的是什么途径，"),t("code",[e._v("Vector")]),e._v("都已经就位了，可以将它提取出来，以便添加"),t("code",[e._v("SourceCodeFile")]),e._v("。由于"),t("code",[e._v("Vector")]),e._v("可象这样同散列表方便地合并到一起，所以我们从两方面都能感觉得非常方便。")]),e._v(" "),t("p",[e._v("写一个打包文件时，需打开一个准备写入的文件（当作"),t("code",[e._v("DataOutputStream")]),e._v("打开，使数据具有“通用”性），并在第一行写入与老的分隔符有关的头信息。接着产生对"),t("code",[e._v("Hashtable")]),e._v("键的一个"),t("code",[e._v("Enumeration")]),e._v("（枚举），并遍历其中，选择每一个目录，并取得与那个目录有关的Vector，使那个"),t("code",[e._v("Vector")]),e._v("中的每个"),t("code",[e._v("SourceCodeFile")]),e._v("都能写入打包文件中。")]),e._v(" "),t("p",[e._v("用"),t("code",[e._v("write()")]),e._v("将Java源码文件写入它们对应的目录时，采用的方法几乎与"),t("code",[e._v("writePackedFile()")]),e._v("完全一致，因为两个方法都只需简单调用"),t("code",[e._v("SourceCodeFile")]),e._v("中适当的方法。但在这里，根路径会传递给"),t("code",[e._v("SourceCodeFile.writeFile()")]),e._v("。所有文件都写好后，名字中指定了已写文件数量的那个附加文件也会被写入。")]),e._v(" "),t("p",[e._v("(5) 主程序")]),e._v(" "),t("p",[e._v("前面介绍的那些类都要在"),t("code",[e._v("CodePackager")]),e._v("中用到。大家首先看到的是用法字符串。一旦最终用户不正确地调用了程序，就会打印出介绍正确用法的这个字符串。调用这个字符串的是"),t("code",[e._v("usage()")]),e._v("方法，同时还要退出程序。"),t("code",[e._v("main()")]),e._v("唯一的任务就是判断我们希望创建一个打包文件，还是希望从一个打包文件中提取什么东西。随后，它负责保证使用的是正确的参数，并调用适当的方法。")]),e._v(" "),t("p",[e._v("创建一个打包文件时，它默认位于当前目录，所以我们用默认构造器创建"),t("code",[e._v("DirMap")]),e._v("。打开文件后，其中的每一行都会读入，并检查是否符合特殊的条件：")]),e._v(" "),t("p",[e._v("(1) 若行首是一个用于源码列表的起始标记，就新建一个"),t("code",[e._v("SourceCodeFile")]),e._v("对象。构造器会读入源码列表剩下的所有内容。结果产生的引用将直接加入"),t("code",[e._v("DirMap")]),e._v("。")]),e._v(" "),t("p",[e._v("(2) 若行首是一个用于源码列表的结束标记，表明某个地方出现错误，因为结束标记应当只能由"),t("code",[e._v("SourceCodeFile")]),e._v("构造器发现。")]),e._v(" "),t("p",[e._v("提取／释放一个打包文件时，提取出来的内容可进入当前目录，亦可进入另一个备用目录。所以需要相应地创建"),t("code",[e._v("DirMap")]),e._v("对象。打开文件，并将第一行读入。老的文件路径分隔符信息将从这一行中提取出来。随后根据输入来创建第一个"),t("code",[e._v("SourceCodeFile")]),e._v("对象，它会加入"),t("code",[e._v("DirMap")]),e._v("。只要包含了一个文件，新的"),t("code",[e._v("SourceCodeFile")]),e._v("对象就会创建并加入（创建的最后一个用光输入内容后，会简单地返回，然后"),t("code",[e._v("hasFile()")]),e._v("会返回一个错误）。")]),e._v(" "),t("h2",{attrs:{id:"_17-1-2-检查大小写样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-1-2-检查大小写样式"}},[e._v("#")]),e._v(" 17.1.2 检查大小写样式")]),e._v(" "),t("p",[e._v("尽管对涉及文字处理的一些项目来说，前例显得比较方便，但下面要介绍的项目却能立即发挥作用，因为它执行的是一个样式检查，以确保我们的大小写形式符合“事实上”的Java样式标准。它会在当前目录中打开每个"),t("code",[e._v(".java")]),e._v("文件，并提取出所有类名以及标识符。若发现有不符合Java样式的情况，就向我们提出报告。")]),e._v(" "),t("p",[e._v("为了让这个程序正确运行，首先必须构建一个类名，将它作为一个“仓库”，负责容纳标准Java库中的所有类名。为达到这个目的，需遍历用于标准Java库的所有源码子目录，并在每个子目录都运行"),t("code",[e._v("ClassScanner")]),e._v("。至于参数，则提供仓库文件的名字（每次都用相同的路径和名字）和命令行开关"),t("code",[e._v("-a")]),e._v("，指出类名应当添加到该仓库文件中。")]),e._v(" "),t("p",[e._v("为了用程序检查自己的代码，需要运行它，并向它传递要使用的仓库文件的路径与名字。它会检查当前目录中的所有类和标识符，并告诉我们哪些没有遵守典型的Java大写写规范。")]),e._v(" "),t("p",[e._v("要注意这个程序并不是十全十美的。有些时候，它可能报告自己查到一个问题。但当我们仔细检查代码的时候，却发现没有什么需要更改的。尽管这有点儿烦人，但仍比自己动手检查代码中的所有错误强得多。")]),e._v(" "),t("p",[e._v("下面列出源代码，后面有详细的解释：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//: ClassScanner.java\n// Scans all files in directory for classes\n// and identifiers, to check capitalization.\n// Assumes properly compiling code listings.\n// Doesn\'t do everything right, but is a very\n// useful aid.\nimport java.io.*;\nimport java.util.*;\n\nclass MultiStringMap extends Hashtable {\n  public void add(String key, String value) {\n    if(!containsKey(key))\n      put(key, new Vector());\n    ((Vector)get(key)).addElement(value);\n  }\n  public Vector getVector(String key) {\n    if(!containsKey(key)) {\n      System.err.println(\n        "ERROR: can\'t find key: " + key);\n      System.exit(1);\n    }\n    return (Vector)get(key);\n  }\n  public void printValues(PrintStream p) {\n    Enumeration k = keys();\n    while(k.hasMoreElements()) {\n      String oneKey = (String)k.nextElement();\n      Vector val = getVector(oneKey);\n      for(int i = 0; i < val.size(); i++)\n        p.println((String)val.elementAt(i));\n    }\n  }\n}\n\npublic class ClassScanner {\n  private File path;\n  private String[] fileList;\n  private Properties classes = new Properties();\n  private MultiStringMap\n    classMap = new MultiStringMap(),\n    identMap = new MultiStringMap();\n  private StreamTokenizer in;\n  public ClassScanner() {\n    path = new File(".");\n    fileList = path.list(new JavaFilter());\n    for(int i = 0; i < fileList.length; i++) {\n      System.out.println(fileList[i]);\n      scanListing(fileList[i]);\n    }\n  }\n  void scanListing(String fname) {\n    try {\n      in = new StreamTokenizer(\n          new BufferedReader(\n            new FileReader(fname)));\n      // Doesn\'t seem to work:\n      // in.slashStarComments(true);\n      // in.slashSlashComments(true);\n      in.ordinaryChar(\'/\');\n      in.ordinaryChar(\'.\');\n      in.wordChars(\'_\', \'_\');\n      in.eolIsSignificant(true);\n      while(in.nextToken() !=\n            StreamTokenizer.TT_EOF) {\n        if(in.ttype == \'/\')\n          eatComments();\n        else if(in.ttype ==\n                StreamTokenizer.TT_WORD) {\n          if(in.sval.equals("class") ||\n             in.sval.equals("interface")) {\n            // Get class name:\n               while(in.nextToken() !=\n                     StreamTokenizer.TT_EOF\n                     && in.ttype !=\n                     StreamTokenizer.TT_WORD)\n                 ;\n               classes.put(in.sval, in.sval);\n               classMap.add(fname, in.sval);\n          }\n          if(in.sval.equals("import") ||\n             in.sval.equals("package"))\n            discardLine();\n          else // It\'s an identifier or keyword\n            identMap.add(fname, in.sval);\n        }\n      }\n    } catch(IOException e) {\n      e.printStackTrace();\n    }\n  }\n  void discardLine() {\n    try {\n      while(in.nextToken() !=\n            StreamTokenizer.TT_EOF\n            && in.ttype !=\n            StreamTokenizer.TT_EOL)\n        ; // Throw away tokens to end of line\n    } catch(IOException e) {\n      e.printStackTrace();\n    }\n  }\n  // StreamTokenizer\'s comment removal seemed\n  // to be broken. This extracts them:\n  void eatComments() {\n    try {\n      if(in.nextToken() !=\n         StreamTokenizer.TT_EOF) {\n        if(in.ttype == \'/\')\n          discardLine();\n        else if(in.ttype != \'*\')\n          in.pushBack();\n        else\n          while(true) {\n            if(in.nextToken() ==\n              StreamTokenizer.TT_EOF)\n              break;\n            if(in.ttype == \'*\')\n              if(in.nextToken() !=\n                StreamTokenizer.TT_EOF\n                && in.ttype == \'/\')\n                break;\n          }\n      }\n    } catch(IOException e) {\n      e.printStackTrace();\n    }\n  }\n  public String[] classNames() {\n    String[] result = new String[classes.size()];\n    Enumeration e = classes.keys();\n    int i = 0;\n    while(e.hasMoreElements())\n      result[i++] = (String)e.nextElement();\n    return result;\n  }\n  public void checkClassNames() {\n    Enumeration files = classMap.keys();\n    while(files.hasMoreElements()) {\n      String file = (String)files.nextElement();\n      Vector cls = classMap.getVector(file);\n      for(int i = 0; i < cls.size(); i++) {\n        String className =\n          (String)cls.elementAt(i);\n        if(Character.isLowerCase(\n             className.charAt(0)))\n          System.out.println(\n            "class capitalization error, file: "\n            + file + ", class: "\n            + className);\n      }\n    }\n  }\n  public void checkIdentNames() {\n    Enumeration files = identMap.keys();\n    Vector reportSet = new Vector();\n    while(files.hasMoreElements()) {\n      String file = (String)files.nextElement();\n      Vector ids = identMap.getVector(file);\n      for(int i = 0; i < ids.size(); i++) {\n        String id =\n          (String)ids.elementAt(i);\n        if(!classes.contains(id)) {\n          // Ignore identifiers of length 3 or\n          // longer that are all uppercase\n          // (probably static final values):\n          if(id.length() >= 3 &&\n             id.equals(\n               id.toUpperCase()))\n            continue;\n          // Check to see if first char is upper:\n          if(Character.isUpperCase(id.charAt(0))){\n            if(reportSet.indexOf(file + id)\n                == -1){ // Not reported yet\n              reportSet.addElement(file + id);\n              System.out.println(\n                "Ident capitalization error in:"\n                + file + ", ident: " + id);\n            }\n          }\n        }\n      }\n    }\n  }\n  static final String usage =\n    "Usage: \\n" +\n    "ClassScanner classnames -a\\n" +\n    "\\tAdds all the class names in this \\n" +\n    "\\tdirectory to the repository file \\n" +\n    "\\tcalled \'classnames\'\\n" +\n    "ClassScanner classnames\\n" +\n    "\\tChecks all the java files in this \\n" +\n    "\\tdirectory for capitalization errors, \\n" +\n    "\\tusing the repository file \'classnames\'";\n  private static void usage() {\n    System.err.println(usage);\n    System.exit(1);\n  }\n  public static void main(String[] args) {\n    if(args.length < 1 || args.length > 2)\n      usage();\n    ClassScanner c = new ClassScanner();\n    File old = new File(args[0]);\n    if(old.exists()) {\n      try {\n        // Try to open an existing\n        // properties file:\n        InputStream oldlist =\n          new BufferedInputStream(\n            new FileInputStream(old));\n        c.classes.load(oldlist);\n        oldlist.close();\n      } catch(IOException e) {\n        System.err.println("Could not open "\n          + old + " for reading");\n        System.exit(1);\n      }\n    }\n    if(args.length == 1) {\n      c.checkClassNames();\n      c.checkIdentNames();\n    }\n    // Write the class names to a repository:\n    if(args.length == 2) {\n      if(!args[1].equals("-a"))\n        usage();\n      try {\n        BufferedOutputStream out =\n          new BufferedOutputStream(\n            new FileOutputStream(args[0]));\n        c.classes.save(out,\n          "Classes found by ClassScanner.java");\n        out.close();\n      } catch(IOException e) {\n        System.err.println(\n          "Could not write " + args[0]);\n        System.exit(1);\n      }\n    }\n  }\n}\n\nclass JavaFilter implements FilenameFilter {\n  public boolean accept(File dir, String name) {\n    // Strip path information:\n    String f = new File(name).getName();\n    return f.trim().endsWith(".java");\n  }\n} ///:~\n')])])]),t("p",[t("code",[e._v("MultiStringMap")]),e._v("类是个特殊的工具，允许我们将一组字符串与每个键项对应（映射）起来。和前例一样，这里也使用了一个散列表（"),t("code",[e._v("Hashtable")]),e._v("），不过这次设置了继承。该散列表将键作为映射成为"),t("code",[e._v("Vector")]),e._v("值的单一的字符串对待。"),t("code",[e._v("add()")]),e._v("方法的作用很简单，负责检查散列表里是否存在一个键。如果不存在，就在其中放置一个。"),t("code",[e._v("getVector()")]),e._v("方法为一个特定的键产生一个"),t("code",[e._v("Vector")]),e._v("；而"),t("code",[e._v("printValues()")]),e._v("将所有值逐个"),t("code",[e._v("Vector")]),e._v("地打印出来，这对程序的调试非常有用。")]),e._v(" "),t("p",[e._v("为简化程序，来自标准Java库的类名全都置入一个"),t("code",[e._v("Properties")]),e._v("（属性）对象中（来自标准Java库）。记住"),t("code",[e._v("Properties")]),e._v("对象实际是个散列表，其中只容纳了用于键和值项的"),t("code",[e._v("String")]),e._v("对象。然而仅需一次方法调用，我们即可把它保存到磁盘，或者从磁盘中恢复。实际上，我们只需要一个名字列表，所以为键和值都使用了相同的对象。")]),e._v(" "),t("p",[e._v("针对特定目录中的文件，为找出相应的类与标识符，我们使用了两个"),t("code",[e._v("MultiStringMap")]),e._v("："),t("code",[e._v("classMap")]),e._v("以及"),t("code",[e._v("identMap")]),e._v("。此外在程序启动的时候，它会将标准类名仓库装载到名为"),t("code",[e._v("classes")]),e._v("的"),t("code",[e._v("Properties")]),e._v("对象中。一旦在本地目录发现了一个新类名，也会将其加入"),t("code",[e._v("classes")]),e._v("以及"),t("code",[e._v("classMap")]),e._v("。这样一来，"),t("code",[e._v("classMap")]),e._v("就可用于在本地目录的所有类间遍历，而且可用"),t("code",[e._v("classes")]),e._v("检查当前标记是不是一个类名（它标记着对象或方法定义的开始，所以收集接下去的记号——直到碰到一个分号——并将它们都置入"),t("code",[e._v("identMap")]),e._v("）。")]),e._v(" "),t("p",[t("code",[e._v("ClassScanner")]),e._v("的默认构造器会创建一个由文件名构成的列表（采用"),t("code",[e._v("FilenameFilter")]),e._v("的"),t("code",[e._v("JavaFilter")]),e._v("实现形式，参见第10章）。随后会为每个文件名都调用"),t("code",[e._v("scanListing()")]),e._v("。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("scanListing()")]),e._v("内部，会打开源码文件，并将其转换成一个"),t("code",[e._v("StreamTokenizer")]),e._v("。根据Java帮助文档，将"),t("code",[e._v("true")]),e._v("传递给"),t("code",[e._v("slashStartComments()")]),e._v("和"),t("code",[e._v("slashSlashComments()")]),e._v("的本意应当是剥除那些注释内容，但这样做似乎有些问题（在Java 1.0中几乎无效）。所以相反，那些行被当作注释标记出去，并用另一个方法来提取注释。为达到这个目的，"),t("code",[e._v("'/'")]),e._v("必须作为一个原始字符捕获，而不是让"),t("code",[e._v("StreamTokeinzer")]),e._v("将其当作注释的一部分对待。此时要用"),t("code",[e._v("ordinaryChar()")]),e._v("方法指示"),t("code",[e._v("StreamTokenizer")]),e._v("采取正确的操作。同样的道理也适用于点号（"),t("code",[e._v("'.'")]),e._v("），因为我们希望让方法调用分离出单独的标识符。但对下划线来说，它最初是被"),t("code",[e._v("StreamTokenizer")]),e._v("当作一个单独的字符对待的，但此时应把它留作标识符的一部分，因为它在"),t("code",[e._v("static final")]),e._v("值中以"),t("code",[e._v("TT_EOF")]),e._v("等等形式使用。当然，这一点只对目前这个特殊的程序成立。"),t("code",[e._v("wordChars()")]),e._v("方法需要取得我们想添加的一系列字符，把它们留在作为一个单词看待的记号中。最后，在解析单行注释或者放弃一行的时候，我们需要知道一个换行动作什么时候发生。所以通过调用"),t("code",[e._v("eollsSignificant(true)")]),e._v("，换行符（"),t("code",[e._v("EOL")]),e._v("）会被显示出来，而不是被"),t("code",[e._v("StreamTokenizer")]),e._v("吸收。")]),e._v(" "),t("p",[t("code",[e._v("scanListing()")]),e._v("剩余的部分将读入和检查记号，直至文件尾。一旦"),t("code",[e._v("nextToken()")]),e._v("返回一个"),t("code",[e._v("final static")]),e._v("值——"),t("code",[e._v("StreamTokenizer.TT_EOF")]),e._v("，就标志着已经抵达文件尾部。")]),e._v(" "),t("p",[e._v("若记号是个"),t("code",[e._v("'/'")]),e._v("，意味着它可能是个注释，所以就调用"),t("code",[e._v("eatComments()")]),e._v("，对这种情况进行处理。我们在这儿唯一感兴趣的其他情况是它是否为一个单词，当然还可能存在另一些特殊情况。")]),e._v(" "),t("p",[e._v("如果单词是"),t("code",[e._v("class")]),e._v("（类）或"),t("code",[e._v("interface")]),e._v("（接口），那么接着的记号就应当代表一个类或接口名字，并将其置入"),t("code",[e._v("classes")]),e._v("和"),t("code",[e._v("classMap")]),e._v("。若单词是"),t("code",[e._v("import")]),e._v("或者"),t("code",[e._v("package")]),e._v("，那么我们对这一行剩下的东西就没什么兴趣了。其他所有东西肯定是一个标识符（这是我们感兴趣的），或者是一个关键字（对此不感兴趣，但它们采用的肯定是小写形式，所以不必兴师动众地检查它们）。它们将加入到"),t("code",[e._v("identMap")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("discardLine()")]),e._v("方法是一个简单的工具，用于查找行末位置。注意每次得到一个新记号时，都必须检查行末。")]),e._v(" "),t("p",[e._v("只要在主解析循环中碰到一个正斜杠，就会调用"),t("code",[e._v("eatComments()")]),e._v("方法。然而，这并不表示肯定遇到了一条注释，所以必须将接着的记号提取出来，检查它是一个正斜杠（那么这一行会被丢弃），还是一个星号。但假如两者都不是，意味着必须在主解析循环中将刚才取出的记号送回去！幸运的是，"),t("code",[e._v("pushBack()")]),e._v("方法允许我们将当前记号“压回”输入数据流。所以在主解析循环调用"),t("code",[e._v("nextToken()")]),e._v("的时候，它能正确地得到刚才送回的东西。")]),e._v(" "),t("p",[e._v("为方便起见，"),t("code",[e._v("classNames()")]),e._v("方法产生了一个数组，其中包含了"),t("code",[e._v("classes")]),e._v("集合中的所有名字。这个方法未在程序中使用，但对代码的调试非常有用。")]),e._v(" "),t("p",[e._v("接下来的两个方法是实际进行检查的地方。在"),t("code",[e._v("checkClassNames()")]),e._v("中，类名从"),t("code",[e._v("classMap")]),e._v("提取出来（请记住，"),t("code",[e._v("classMap")]),e._v("只包含了这个目录内的名字，它们按文件名组织，所以文件名可能伴随错误的类名打印出来）。为做到这一点，需要取出每个关联的"),t("code",[e._v("Vector")]),e._v("，并遍历其中，检查第一个字符是否为小写。若确实为小写，则打印出相应的出错提示消息。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("checkIdentNames()")]),e._v("中，我们采用了一种类似的方法：每个标识符名字都从"),t("code",[e._v("identMap")]),e._v("中提取出来。如果名字不在"),t("code",[e._v("classes")]),e._v("列表中，就认为它是一个标识符或者关键字。此时会检查一种特殊情况：如果标识符的长度等于3或者更长，而且所有字符都是大写的，则忽略此标识符，因为它可能是一个"),t("code",[e._v("static fina")]),e._v("l值，比如"),t("code",[e._v("TT_EOF")]),e._v("。当然，这并不是一种完美的算法，但它假定我们最终会注意到任何全大写标识符都是不合适的。")]),e._v(" "),t("p",[e._v("这个方法并不是报告每一个以大写字符开头的标识符，而是跟踪那些已在一个名为"),t("code",[e._v("reportSet()")]),e._v("的"),t("code",[e._v("Vector")]),e._v("中报告过的。它将"),t("code",[e._v("Vector")]),e._v("当作一个“集合”对待，告诉我们一个项目是否已在那个集合中。该项目是通过将文件名和标识符连接起来生成的。若元素不在集合中，就加入它，然后产生报告。")]),e._v(" "),t("p",[e._v("程序列表剩下的部分由"),t("code",[e._v("main()")]),e._v("构成，它负责控制命令行参数，并判断我们是准备在标准Java库的基础上构建由一系列类名构成的“仓库”，还是想检查已写好的那些代码的正确性。不管在哪种情况下，都会创建一个"),t("code",[e._v("ClassScanner")]),e._v("对象。")]),e._v(" "),t("p",[e._v("无论准备构建一个“仓库”，还是准备使用一个现成的，都必须尝试打开现有仓库。通过创建一个"),t("code",[e._v("File")]),e._v("对象并测试是否存在，就可决定是否打开文件并在"),t("code",[e._v("ClassScanner")]),e._v("中装载"),t("code",[e._v("classes")]),e._v("这个"),t("code",[e._v("Properties")]),e._v("列表（使用"),t("code",[e._v("load()")]),e._v("）。来自仓库的类将追加到由"),t("code",[e._v("ClassScanner")]),e._v("构造器发现的类后面，而不是将其覆盖。如果仅提供一个命令行参数，就意味着自己想对类名和标识符名字进行一次检查。但假如提供两个参数（第二个是"),t("code",[e._v("-a")]),e._v("），就表明自己想构成一个类名仓库。在这种情况下，需要打开一个输出文件，并用"),t("code",[e._v("Properties.save()")]),e._v("方法将列表写入一个文件，同时用一个字符串提供文件头信息。")])])}),[],!1,null,null,null);n.default=i.exports}}]);