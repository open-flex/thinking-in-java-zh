(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{476:function(e,t,a){"use strict";a.r(t);var s=a(56),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_15-1-机器的标识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-机器的标识"}},[e._v("#")]),e._v(" 15.1 机器的标识")]),e._v(" "),a("p",[e._v("当然，为了分辨来自别处的一台机器，以及为了保证自己连接的是希望的那台机器，必须有一种机制能独一无二地标识出网络内的每台机器。早期网络只解决了如何在本地网络环境中为机器提供唯一的名字。但Java面向的是整个因特网，这要求用一种机制对来自世界各地的机器进行标识。为达到这个目的，我们采用了IP（互联网地址）的概念。IP以两种形式存在着：")]),e._v(" "),a("p",[e._v("(1) 大家最熟悉的DNS（域名服务）形式。我自己的域名是"),a("code",[e._v("bruceeckel.com")]),e._v("。所以假定我在自己的域内有一台名为Opus的计算机，它的域名就可以是"),a("code",[e._v("Opus.bruceeckel.com")]),e._v("。这正是大家向其他人发送电子函件时采用的名字，而且通常集成到一个万维网（WWW）地址里。")]),e._v(" "),a("p",[e._v("(2) 此外，亦可采用“四点”格式，亦即由点号（.）分隔的四组数字，比如"),a("code",[e._v("202.98.32.111")]),e._v("。\n不管哪种情况，IP地址在内部都表达成一个由32个二进制位（bit）构成的数字（注释①），所以IP地址的每一组数字都不能超过255。利用由"),a("code",[e._v("java.net")]),e._v("提供的"),a("code",[e._v("static InetAddress.getByName()")]),e._v("，我们可以让一个特定的Java对象表达上述任何一种形式的数字。结果是类型为"),a("code",[e._v("InetAddress")]),e._v("的一个对象，可用它构成一个“套接字”（"),a("code",[e._v("Socket")]),e._v("），大家在后面会见到这一点。")]),e._v(" "),a("p",[e._v("①：这意味着最多只能得到40亿左右的数字组合，全世界的人很快就会把它用光。但根据目前正在研究的新IP编址方案，它将采用128 bit的数字，这样得到的唯一性IP地址也许在几百年的时间里都不会用完。")]),e._v(" "),a("p",[e._v("作为运用"),a("code",[e._v("InetAddress.getByName()")]),e._v("一个简单的例子，请考虑假设自己有一家拨号连接因特网服务提供者（ISP），那么会发生什么情况。每次拨号连接的时候，都会分配得到一个临时IP地址。但在连接期间，那个IP地址拥有与因特网上其他IP地址一样的有效性。如果有人按照你的IP地址连接你的机器，他们就有可能使用在你机器上运行的Web或者FTP服务器程序。当然这有个前提，对方必须准确地知道你目前分配到的IP。由于每次拨号连接获得的IP都是随机的，怎样才能准确地掌握你的IP呢？")]),e._v(" "),a("p",[e._v("下面这个程序利用"),a("code",[e._v("InetAddress.getByName()")]),e._v("来产生你的IP地址。为了让它运行起来，事先必须知道计算机的名字。该程序只在Windows 95中进行了测试，但大家可以依次进入自己的“开始”、“设置”、“控制面板”、“网络”，然后进入“标识”卡片。其中，“计算机名称”就是应在命令行输入的内容。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//: WhoAmI.java\n// Finds out your network address when you\'re\n// connected to the Internet.\npackage c15;\nimport java.net.*;\n\npublic class WhoAmI {\n  public static void main(String[] args)\n      throws Exception {\n    if(args.length != 1) {\n      System.err.println(\n        "Usage: WhoAmI MachineName");\n      System.exit(1);\n    }\n    InetAddress a =\n      InetAddress.getByName(args[0]);\n    System.out.println(a);\n  }\n} ///:~\n')])])]),a("p",[e._v("就我自己的情况来说，机器的名字叫作"),a("code",[e._v("Colossus")]),e._v("（来自同名电影，“巨人”的意思。我在这台机器上有一个很大的硬盘）。所以一旦连通我的ISP，就象下面这样执行程序：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("java whoAmI Colossus\n")])])]),a("p",[e._v("得到的结果象下面这个样子（当然，这个地址可能每次都是不同的）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Colossus/202.98.41.151\n")])])]),a("p",[e._v("假如我把这个地址告诉一位朋友，他就可以立即登录到我的个人Web服务器，只需指定目标地址 "),a("code",[e._v("http://202.98.41.151")]),e._v(" 即可（当然，我此时不能断线）。有些时候，这是向其他人发送信息或者在自己的Web站点正式出台以前进行测试的一种方便手段。")]),e._v(" "),a("h2",{attrs:{id:"_15-1-1-服务器和客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-1-服务器和客户端"}},[e._v("#")]),e._v(" 15.1.1 服务器和客户端")]),e._v(" "),a("p",[e._v("网络最基本的精神就是让两台机器连接到一起，并相互“交谈”或者“沟通”。一旦两台机器都发现了对方，就可以展开一次令人愉快的双向对话。但它们怎样才能“发现”对方呢？这就象在游乐园里那样：一台机器不得不停留在一个地方，监听其他机器说：“嘿，你在哪里呢？”")]),e._v(" "),a("p",[e._v("“停留在一个地方”的机器叫作“服务器”（Server）；到处“找人”的机器则叫作“客户端”（Client）或者“客户”。它们之间的区别只有在客户端试图同服务器连接的时候才显得非常明显。一旦连通，就变成了一种双向通信，谁来扮演服务器或者客户端便显得不那么重要了。")]),e._v(" "),a("p",[e._v("所以服务器的主要任务是监听建立连接的请求，这是由我们创建的特定服务器对象完成的。而客户端的任务是试着与一台服务器建立连接，这是由我们创建的特定客户端对象完成的。一旦连接建好，那么无论在服务器端还是客户端端，连接只是魔术般地变成了一个IO数据流对象。从这时开始，我们可以象读写一个普通的文件那样对待连接。所以一旦建好连接，我们只需象第10章那样使用自己熟悉的IO命令即可。这正是Java连网最方便的一个地方。")]),e._v(" "),a("p",[e._v("(1) 在没有网络的前提下测试程序")]),e._v(" "),a("p",[e._v("由于多种潜在的原因，我们可能没有一台客户端、服务器以及一个网络来测试自己做好的程序。我们也许是在一个课堂环境中进行练习，或者写出的是一个不十分可靠的网络应用，还能拿到网络上去。IP的设计者注意到了这个问题，并建立了一个特殊的地址——"),a("code",[e._v("localhost")]),e._v("——来满足非网络环境中的测试要求。在Java中产生这个地址最一般的做法是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("InetAddress addr = InetAddress.getByName(null);\n")])])]),a("p",[e._v("如果向"),a("code",[e._v("getByName()")]),e._v("传递一个"),a("code",[e._v("null")]),e._v("（空）值，就默认为使用"),a("code",[e._v("localhost")]),e._v("。我们"),a("code",[e._v("用InetAddress")]),e._v("对特定的机器进行索引，而且必须在进行进一步的操作之前得到这个"),a("code",[e._v("InetAddress")]),e._v("（互联网地址）。我们不可以操纵一个"),a("code",[e._v("InetAddress")]),e._v("的内容（但可把它打印出来，就象下一个例子要演示的那样）。创建"),a("code",[e._v("InetAddress")]),e._v("的唯一途径就是那个类的static（静态）成员方法"),a("code",[e._v("getByName()")]),e._v("（这是最常用的）、"),a("code",[e._v("getAllByName()")]),e._v("或者"),a("code",[e._v("getLocalHost()")]),e._v("。")]),e._v(" "),a("p",[e._v("为得到本地主机地址，亦可向其直接传递字符串"),a("code",[e._v('"localhost"')]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('InetAddress.getByName("localhost");\n')])])]),a("p",[e._v("或者使用它的保留IP地址（四点形式），就象下面这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('InetAddress.getByName("127.0.0.1");\n')])])]),a("p",[e._v("这三种方法得到的结果是一样的。")]),e._v(" "),a("h2",{attrs:{id:"_15-1-2-端口-机器内独一无二的场所"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-2-端口-机器内独一无二的场所"}},[e._v("#")]),e._v(" 15.1.2 端口：机器内独一无二的场所")]),e._v(" "),a("p",[e._v("有些时候，一个IP地址并不足以完整标识一个服务器。这是由于在一台物理性的机器中，往往运行着多个服务器（程序）。由IP表达的每台机器也包含了“端口”（Port）。我们设置一个客户端或者服务器的时候，必须选择一个无论客户端还是服务器都认可连接的端口。就象我们去拜会某人时，IP地址是他居住的房子，而端口是他在的那个房间。")]),e._v(" "),a("p",[e._v("注意端口并不是机器上一个物理上存在的场所，而是一种软件抽象（主要是为了表述的方便）。客户程序知道如何通过机器的IP地址同它连接，但怎样才能同自己真正需要的那种服务连接呢（一般每个端口都运行着一种服务，一台机器可能提供了多种服务，比如HTTP和FTP等等）？端口编号在这里扮演了重要的角色，它是必需的一种二级定址措施。也就是说，我们请求一个特定的端口，便相当于请求与那个端口编号关联的服务。“报时”便是服务的一个典型例子。通常，每个服务都同一台特定服务器机器上的一个独一\n无二的端口编号关联在一起。客户程序必须事先知道自己要求的那项服务的运行端口号。")]),e._v(" "),a("p",[e._v("系统服务保留了使用端口1到端口1024的权力，所以不应让自己设计的服务占用这些以及其他任何已知正在使用的端口。本书的第一个例子将使用端口8080（为追忆我的第一台机器使用的老式8位Intel 8080芯片，那是一部使用CP/M操作系统的机子）。")])])}),[],!1,null,null,null);t.default=v.exports}}]);