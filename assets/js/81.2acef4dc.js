(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{478:function(e,t,n){"use strict";n.r(t);var r=n(56),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_15-3-服务多个客户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15-3-服务多个客户"}},[e._v("#")]),e._v(" 15.3 服务多个客户")]),e._v(" "),n("p",[n("code",[e._v("JabberServer")]),e._v("可以正常工作，但每次只能为一个客户程序提供服务。在典型的服务器中，我们希望同时能处理多个客户的请求。解决这个问题的关键就是多线程处理机制。而对于那些本身不支持多线程的语言，达到这个要求无疑是异常困难的。通过第14章的学习，大家已经知道Java已对多线程的处理进行了尽可能的简化。由于Java的线程处理方式非常直接，所以让服务器控制多名客户并不是件难事。")]),e._v(" "),n("p",[e._v("最基本的方法是在服务器（程序）里创建单个"),n("code",[e._v("ServerSocket")]),e._v("，并调用"),n("code",[e._v("accept()")]),e._v("来等候一个新连接。一旦"),n("code",[e._v("accept()")]),e._v("返回，我们就取得结果获得的"),n("code",[e._v("Socket")]),e._v("，并用它新建一个线程，令其只为那个特定的客户服务。然后再调用"),n("code",[e._v("accept()")]),e._v("，等候下一次新的连接请求。")]),e._v(" "),n("p",[e._v("对于下面这段服务器代码，大家可发现它与"),n("code",[e._v("JabberServer.java")]),e._v("例子非常相似，只是为一个特定的客户提供服务的所有操作都已移入一个独立的线程类中：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//: MultiJabberServer.java\n// A server that uses multithreading to handle\n// any number of clients.\nimport java.io.*;\nimport java.net.*;\n\nclass ServeOneJabber extends Thread {\n  private Socket socket;\n  private BufferedReader in;\n  private PrintWriter out;\n  public ServeOneJabber(Socket s)\n      throws IOException {\n    socket = s;\n    in =\n      new BufferedReader(\n        new InputStreamReader(\n          socket.getInputStream()));\n    // Enable auto-flush:\n    out =\n      new PrintWriter(\n        new BufferedWriter(\n          new OutputStreamWriter(\n            socket.getOutputStream())), true);\n    // If any of the above calls throw an\n    // exception, the caller is responsible for\n    // closing the socket. Otherwise the thread\n    // will close it.\n    start(); // Calls run()\n  }\n  public void run() {\n    try {\n      while (true) {  \n        String str = in.readLine();\n        if (str.equals("END")) break;\n        System.out.println("Echoing: " + str);\n        out.println(str);\n      }\n      System.out.println("closing...");\n    } catch (IOException e) {\n    } finally {\n      try {\n        socket.close();\n      } catch(IOException e) {}\n    }\n  }\n}\n\npublic class MultiJabberServer {  \n  static final int PORT = 8080;\n  public static void main(String[] args)\n      throws IOException {\n    ServerSocket s = new ServerSocket(PORT);\n    System.out.println("Server Started");\n    try {\n      while(true) {\n        // Blocks until a connection occurs:\n        Socket socket = s.accept();\n        try {\n          new ServeOneJabber(socket);\n        } catch(IOException e) {\n          // If it fails, close the socket,\n          // otherwise the thread will close it:\n          socket.close();\n        }\n      }\n    } finally {\n      s.close();\n    }\n  }\n} ///:~\n')])])]),n("p",[e._v("每次有新客户请求建立一个连接时，"),n("code",[e._v("ServeOneJabber")]),e._v("线程都会取得由"),n("code",[e._v("accept()")]),e._v("在"),n("code",[e._v("main()")]),e._v("中生成的"),n("code",[e._v("Socket")]),e._v("对象。然后和往常一样，它创建一个"),n("code",[e._v("BufferedReader")]),e._v("，并用"),n("code",[e._v("Socket")]),e._v("自动刷新"),n("code",[e._v("PrintWriter")]),e._v("对象。最后，它调用"),n("code",[e._v("Thread")]),e._v("的特殊方法"),n("code",[e._v("start()")]),e._v("，令其进行线程的初始化，然后调用"),n("code",[e._v("run()")]),e._v("。这里采取的操作与前例是一样的：从套扫字读入某些东西，然后把它原样反馈回去，直到遇到一个特殊的"),n("code",[e._v('"END"')]),e._v("结束标志为止。")]),e._v(" "),n("p",[e._v("同样地，套接字的清除必须进行谨慎的设计。就目前这种情况来说，套接字是在"),n("code",[e._v("ServeOneJabber")]),e._v("外部创建的，所以清除工作可以“共享”。若"),n("code",[e._v("ServeOneJabber")]),e._v("构造器失败，那么只需向调用者“抛”出一个异常即可，然后由调用者负责线程的清除。但假如构造器成功，那么必须由"),n("code",[e._v("ServeOneJabber")]),e._v("对象负责线程的清除，这是在它的"),n("code",[e._v("run()")]),e._v("里进行的。")]),e._v(" "),n("p",[e._v("请注意"),n("code",[e._v("MultiJabberServer")]),e._v("有多么简单。和以前一样，我们创建一个"),n("code",[e._v("ServerSocket")]),e._v("，并调用"),n("code",[e._v("accept()")]),e._v("允许一个新连接的建立。但这一次，"),n("code",[e._v("accept()")]),e._v("的返回值（一个套接字）将传递给用于"),n("code",[e._v("ServeOneJabber")]),e._v("的构造器，由它创建一个新线程，并对那个连接进行控制。连接中断后，线程便可简单地消失。")]),e._v(" "),n("p",[e._v("如果"),n("code",[e._v("ServerSocket")]),e._v("创建失败，则再一次通过"),n("code",[e._v("main()")]),e._v("抛出异常。如果成功，则位于外层的"),n("code",[e._v("try-finally")]),e._v("代码块可以担保正确的清除。位于内层的"),n("code",[e._v("try-catch")]),e._v("块只负责防范"),n("code",[e._v("ServeOneJabber")]),e._v("构造器的失败；若构造器成功，则"),n("code",[e._v("ServeOneJabber")]),e._v("线程会将对应的套接字关掉。")]),e._v(" "),n("p",[e._v("为了证实服务器代码确实能为多名客户提供服务，下面这个程序将创建许多客户（使用线程），并同相同的服务器建立连接。每个线程的“存在时间”都是有限的。一旦到期，就留出空间以便创建一个新线程。允许创建的线程的最大数量是由"),n("code",[e._v("final int maxthreads")]),e._v("决定的。大家会注意到这个值非常关键，因为假如把它设得很大，线程便有可能耗尽资源，并产生不可预知的程序错误。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//: MultiJabberClient.java\n// Client that tests the MultiJabberServer\n// by starting up multiple clients.\nimport java.net.*;\nimport java.io.*;\n\nclass JabberClientThread extends Thread {\n  private Socket socket;\n  private BufferedReader in;\n  private PrintWriter out;\n  private static int counter = 0;\n  private int id = counter++;\n  private static int threadcount = 0;\n  public static int threadCount() {\n    return threadcount;\n  }\n  public JabberClientThread(InetAddress addr) {\n    System.out.println("Making client " + id);\n    threadcount++;\n    try {\n      socket =\n        new Socket(addr, MultiJabberServer.PORT);\n    } catch(IOException e) {\n      // If the creation of the socket fails,\n      // nothing needs to be cleaned up.\n    }\n    try {    \n      in =\n        new BufferedReader(\n          new InputStreamReader(\n            socket.getInputStream()));\n      // Enable auto-flush:\n      out =\n        new PrintWriter(\n          new BufferedWriter(\n            new OutputStreamWriter(\n              socket.getOutputStream())), true);\n      start();\n    } catch(IOException e) {\n      // The socket should be closed on any\n      // failures other than the socket\n      // constructor:\n      try {\n        socket.close();\n      } catch(IOException e2) {}\n    }\n    // Otherwise the socket will be closed by\n    // the run() method of the thread.\n  }\n  public void run() {\n    try {\n      for(int i = 0; i < 25; i++) {\n        out.println("Client " + id + ": " + i);\n        String str = in.readLine();\n        System.out.println(str);\n      }\n      out.println("END");\n    } catch(IOException e) {\n    } finally {\n      // Always close it:\n      try {\n        socket.close();\n      } catch(IOException e) {}\n      threadcount--; // Ending this thread\n    }\n  }\n}\n\npublic class MultiJabberClient {\n  static final int MAX_THREADS = 40;\n  public static void main(String[] args)\n      throws IOException, InterruptedException {\n    InetAddress addr =\n      InetAddress.getByName(null);\n    while(true) {\n      if(JabberClientThread.threadCount()\n         < MAX_THREADS)\n        new JabberClientThread(addr);\n      Thread.currentThread().sleep(100);\n    }\n  }\n} ///:~\n')])])]),n("p",[n("code",[e._v("JabberClientThread")]),e._v("构造器获取一个"),n("code",[e._v("InetAddress")]),e._v("，并用它打开一个套接字。大家可能已看出了这样的一个套路："),n("code",[e._v("Socket")]),e._v("肯定用于创建某种"),n("code",[e._v("Reader")]),e._v("以及／或者"),n("code",[e._v("Writer")]),e._v("（或者"),n("code",[e._v("InputStream")]),e._v("和／或"),n("code",[e._v("OutputStream")]),e._v("）对象，这是运用"),n("code",[e._v("Socket")]),e._v("的唯一方式（当然，我们可考虑编写一、两个类，令其自动完成这些操作，避免大量重复的代码编写工作）。同样地，"),n("code",[e._v("start()")]),e._v("执行线程的初始化，并调用"),n("code",[e._v("run()")]),e._v("。在这里，消息发送给服务器，而来自服务器的信息则在屏幕上回显出来。然而，线程的“存在时间”是有限的，最终都会结束。注意在套接字创建好以后，但在构造器完成之前，假若构造器失败，套接字会被清除。否则，为套接字调用"),n("code",[e._v("close()")]),e._v("的责任便落到了"),n("code",[e._v("run()")]),e._v("方法的头上。")]),e._v(" "),n("p",[n("code",[e._v("threadcount")]),e._v("跟踪计算目前存在的"),n("code",[e._v("JabberClientThread")]),e._v("对象的数量。它将作为构造器的一部分自增，并在"),n("code",[e._v("run()")]),e._v("退出时自减（"),n("code",[e._v("run()")]),e._v("退出意味着线程中止）。在"),n("code",[e._v("MultiJabberClient.main()")]),e._v("中，大家可以看到线程的数量会得到检查。若数量太多，则多余的暂时不创建。方法随后进入“休眠”状态。这样一来，一旦部分线程最后被中止，多作的那些线程就可以创建了。大家可试验一下逐渐增大"),n("code",[e._v("MAX_THREADS")]),e._v("，看看对于你使用的系统来说，建立多少线程（连接）才会使您的系统资源降低到危险程度。")])])}),[],!1,null,null,null);t.default=a.exports}}]);