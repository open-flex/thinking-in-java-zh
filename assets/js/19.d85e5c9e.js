(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{417:function(v,_,a){"use strict";a.r(_);var e=a(56),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"_1-7-对象的创建和存在时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-对象的创建和存在时间"}},[v._v("#")]),v._v(" 1.7 对象的创建和存在时间")]),v._v(" "),a("p",[v._v("从技术角度说，OOP（面向对象程序设计）只是涉及抽象的数据类型、继承以及多态性，但另一些问题也可能显得非常重要。本节将就这些问题进行探讨。")]),v._v(" "),a("p",[v._v("最重要的问题之一是对象的创建及析构方式。对象需要的数据位于哪儿，如何控制对象的“存在时间”呢？针对这个问题，解决的方案是各异其趣的。C++认为程序的执行效率是最重要的一个问题，所以它允许程序员作出选择。为获得最快的运行速度，存储以及存在时间可在编写程序时决定，只需将对象放置在栈（有时也叫作自动或定域变量）或者静态存储区域即可。这样便为存储空间的分配和释放提供了一个优先级。某些情况下，这种优先级的控制是非常有价值的。然而，我们同时也牺牲了灵活性，因为在编写程序时，必须知道对象的准确的数量、存在时间、以及类型。如果要解决的是一个较常规的问题，如计算机辅助设计、仓储管理或者空中交通控制，这一方法就显得太局限了。")]),v._v(" "),a("p",[v._v("第二个方法是在一个内存池中动态创建对象，该内存池亦叫“堆”或者“内存堆”。若采用这种方式，除非进入运行期，否则根本不知道到底需要多少个对象，也不知道它们的存在时间有多长，以及准确的类型是什么。这些参数都在程序正式运行时才决定的。若需一个新对象，只需在需要它的时候在内存堆里简单地创建它即可。由于存储空间的管理是运行期间动态进行的，所以在内存堆里分配存储空间的时间比在栈里创建的时间长得多（在栈里创建存储空间一般只需要一个简单的指令，将栈指针向下或向下移动即可）。由于动态创建方法使对象本来就倾向于复杂，所以查找存储空间以及释放它所需的额外开销不会为对象的创建造成明显的影响。除此以外，更大的灵活性对于常规编程问题的解决是至关重要的。")]),v._v(" "),a("p",[v._v("C++允许我们决定是在写程序时创建对象，还是在运行期间创建，这种控制方法更加灵活。大家或许认为既然它如此灵活，那么无论如何都应在内存堆里创建对象，而不是在栈中创建。但还要考虑另外一个问题，亦即对象的“存在时间”或者“生存时间”（Lifetime）。若在栈或者静态存储空间里创建一个对象，编译器会判断对象的持续时间有多长，到时会自动“析构”或者“清除”它。程序员可用两种方法来析构一个对象：用程序化的方式决定何时析构对象，或者利用由运行环境提供的一种“垃圾收集器”特性，自动寻找那些不再使用的对象，并将其清除。当然，垃圾收集器显得方便得多，但要求所有应用程序都必须容忍垃圾收集器的存在，并能默许随垃圾收集带来的额外开销。但这并不符合C++语言的设计宗旨，所以未能包括到C++里。但Java确实提供了一个垃圾收集器（Smalltalk也有这样的设计；尽管Delphi默认为没有垃圾收集器，但可选择安装；而C++亦可使用一些由其他公司开发的垃圾收集产品）。")]),v._v(" "),a("p",[v._v("本节剩下的部分将讨论操纵对象时要考虑的另一些因素。")]),v._v(" "),a("h2",{attrs:{id:"_1-7-1-集合与迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-1-集合与迭代器"}},[v._v("#")]),v._v(" 1.7.1 集合与迭代器")]),v._v(" "),a("p",[v._v("针对一个特定问题的解决，如果事先不知道需要多少个对象，或者它们的持续时间有多长，那么也不知道如何保存那些对象。既然如此，怎样才能知道那些对象要求多少空间呢？事先上根本无法提前知道，除非进入运行期。")]),v._v(" "),a("p",[v._v("在面向对象的设计中，大多数问题的解决办法似乎都有些轻率——只是简单地创建另一种类型的对象。用于解决特定问题的新型对象容纳了指向其他对象的引用。当然，也可以用数组来做同样的事情，那是大多数语言都具有的一种功能。但不能只看到这一点。这种新对象通常叫作“集合”（亦叫作一个“容器”，但AWT在不同的场合应用了这个术语，所以本书将一直沿用“集合”的称呼。在需要的时候，集合会自动扩充自己，以便适应我们在其中置入的任何东西。所以我们事先不必知道要在一个集合里容下多少东西。只需创建一个集合，以后的工作让它自己负责好了。")]),v._v(" "),a("p",[v._v("幸运的是，设计优良的OOP语言都配套提供了一系列集合。在C++中，它们是以“标准模板库”（STL）的形式提供的。Object Pascal用自己的“可视组件库”（VCL）提供集合。Smalltalk提供了一套非常完整的集合。而Java也用自己的标准库提供了集合。在某些库中，一个常规集合便可满足人们的大多数要求；而在另一些库中（特别是C++的库），则面向不同的需求提供了不同类型的集合。例如，可以用一个向量统一对所有元素的访问方式；一个链接列表则用于保证所有元素的插入统一。所以我们能根据自己的需要选择适当的类型。其中包括集、队列、散列表、树、栈等等。")]),v._v(" "),a("p",[v._v("所有集合都提供了相应的读写功能。将某样东西置入集合时，采用的方式是十分明显的。有一个叫作“推”（Push）、“添加”（Add）或其他类似名字的函数用于做这件事情。但将数据从集合中取出的时候，方式却并不总是那么明显。如果是一个数组形式的实体，比如一个向量（"),a("code",[v._v("Vector")]),v._v("），那么也许能用索引运算符或函数。但在许多情况下，这样做往往会无功而返。此外，单选定函数的功能是非常有限的。如果想对集合中的一系列元素进行操纵或比较，而不是仅仅面向一个，这时又该怎么办呢？")]),v._v(" "),a("p",[v._v("办法就是使用一个“迭代器”（"),a("code",[v._v("Iterator")]),v._v("），它属于一种对象，负责选择集合内的元素，并把它们提供给迭代器的用户。作为一个类，它也提供了一级抽象。利用这一级抽象，可将集合细节与用于访问那个集合的代码隔离开。通过迭代器的作用，集合被抽象成一个简单的序列。迭代器允许我们遍历那个序列，同时毋需关心基础结构是什么——换言之，不管它是一个向量、一个链接列表、一个栈，还是其他什么东西。这样一来，我们就可以灵活地改变基础数据，不会对程序里的代码造成干扰。Java最开始（在1.0和1.1版中）提供的是一个标准迭代器，名为"),a("code",[v._v("Enumeration")]),v._v("（枚举），为它的所有集合类提供服务。Java 1.2新增一个更复杂的集合库，其中包含了一个名为"),a("code",[v._v("Iterator")]),v._v("的迭代器，可以做比老式的"),a("code",[v._v("Enumeration")]),v._v("更多的事情。")]),v._v(" "),a("p",[v._v("从设计角度出发，我们需要的是一个全功能的序列。通过对它的操纵，应该能解决自己的问题。如果一种类型的序列即可满足我们的所有要求，那么完全没有必要再换用不同的类型。有两方面的原因促使我们需要对集合作出选择。首先，集合提供了不同的接口类型以及外部行为。栈的接口与行为与队列的不同，而队列的接口与行为又与一个集（Set）或列表的不同。利用这个特征，我们解决问题时便有更大的灵活性。")]),v._v(" "),a("p",[v._v("其次，不同的集合在进行特定操作时往往有不同的效率。最好的例子便是向量（"),a("code",[v._v("Vector")]),v._v("）和列表（"),a("code",[v._v("List")]),v._v("）的区别。它们都属于简单的序列，拥有完全一致的接口和外部行为。但在执行一些特定的任务时，需要的开销却是完全不同的。对向量内的元素进行的随机访问（存取）是一种常时操作；无论我们选择的选择是什么，需要的时间量都是相同的。但在一个链接列表中，若想到处移动，并随机挑选一个元素，就需付出“惨重”的代价。而且假设某个元素位于列表较远的地方，找到它所需的时间也会长许多。但在另一方面，如果想在序列中部插入一个元素，用列表就比用向量划算得多。这些以及其他操作都有不同的执行效率，具体取决于序列的基础结构是什么。在设计阶段，我们可以先从一个列表开始。最后调整性能的时候，再根据情况把它换成向量。由于抽象是通过迭代器进行的，所以能在两者方便地切换，对代码的影响则显得微不足道。")]),v._v(" "),a("p",[v._v("最后，记住集合只是一个用来放置对象的储藏所。如果那个储藏所能满足我们的所有需要，就完全没必要关心它具体是如何实现的（这是大多数类型对象的一个基本概念）。如果在一个编程环境中工作，它由于其他因素（比如在Windows下运行，或者由垃圾收集器带来了开销）产生了内在的开销，那么向量和链接列表之间在系统开销上的差异就或许不是一个大问题。我们可能只需要一种类型的序列。甚至可以想象有一个“完美”的集合抽象，它能根据自己的使用方式自动改变基层的实现方式。")]),v._v(" "),a("h2",{attrs:{id:"_1-7-2-单根结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-2-单根结构"}},[v._v("#")]),v._v(" 1.7.2 单根结构")]),v._v(" "),a("p",[v._v("在面向对象的程序设计中，由于C++的引入而显得尤为突出的一个问题是：所有类最终是否都应从单独一个基类继承。在Java中（与其他几乎所有OOP语言一样），对这个问题的答案都是肯定的，而且这个终级基类的名字很简单，就是一个"),a("code",[v._v("Object")]),v._v("。这种“单根结构”具有许多方面的优点。")]),v._v(" "),a("p",[v._v("单根结构中的所有对象都有一个通用接口，所以它们最终都属于相同的类型。另一种方案（就象C++那样）是我们不能保证所有东西都属于相同的基本类型。从向后兼容的角度看，这一方案可与C模型更好地配合，而且可以认为它的限制更少一些。但假期我们想进行纯粹的面向对象编程，那么必须构建自己的结构，以期获得与内建到其他OOP语言里的同样的便利。需添加我们要用到的各种新类库，还要使用另一些不兼容的接口。理所当然地，这也需要付出额外的精力使新接口与自己的设计模式配合（可能还需要多重继承）。为得到C++额外的“灵活性”，付出这样的代价值得吗？当然，如果真的需要——如果早已是C专家，如果对C有难舍的情结——那么就真的很值得。但假如你是一名新手，首次接触这类设计，象Java那样的替换方案也许会更省事一些。")]),v._v(" "),a("p",[v._v("单根结构中的所有对象（比如所有Java对象）都可以保证拥有一些特定的功能。在自己的系统中，我们知道对每个对象都能进行一些基本操作。一个单根结构，加上所有对象都在内存堆中创建，可以极大简化参数的传递（这在C++里是一个复杂的概念）。\n利用单根结构，我们可以更方便地实现一个垃圾收集器。与此有关的必要支持可安装于基类中，而垃圾收集器可将适当的消息发给系统内的任何对象。如果没有这种单根结构，而且系统通过一个引用来操纵对象，那么实现垃圾收集器的途径会有很大的不同，而且会面临许多障碍。")]),v._v(" "),a("p",[v._v("由于运行期的类型信息肯定存在于所有对象中，所以永远不会遇到判断不出一个对象的类型的情况。这对系统级的操作来说显得特别重要，比如异常控制；而且也能在程序设计时获得更大的灵活性。")]),v._v(" "),a("p",[v._v("但大家也可能产生疑问，既然你把好处说得这么天花乱坠，为什么C++没有采用单根结构呢？事实上，这是早期在效率与控制上权衡的一种结果。单根结构会带来程序设计上的一些限制。而且更重要的是，它加大了新程序与原有C代码兼容的难度。尽管这些限制仅在特定的场合会真的造成问题，但为了获得最大的灵活程度，C++最终决定放弃采用单根结构这一做法。而Java不存在上述的问题，它是全新设计的一种语言，不必与现有的语言保持所谓的“向后兼容”。所以很自然地，与其他大多数面向对象的程序设计语言一样，单根结构在Java的设计模式中很快就落实下来。")]),v._v(" "),a("h2",{attrs:{id:"_1-7-3-集合库与方便使用集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-3-集合库与方便使用集合"}},[v._v("#")]),v._v(" 1.7.3 集合库与方便使用集合")]),v._v(" "),a("p",[v._v("由于集合是我们经常都要用到的一种工具，所以一个集合库是十分必要的，它应该可以方便地重复使用。这样一来，我们就可以方便地取用各种集合，将其插入自己的程序。Java提供了这样的一个库，尽管它在Java 1.0和1.1中都显得非常有限（Java 1.2的集合库则无疑是一个杰作）。")]),v._v(" "),a("p",[v._v("(1)向下转换与模板／通用性")]),v._v(" "),a("p",[v._v("为了使这些集合能够重复使用，或者“复用”，Java提供了一种通用类型，以前曾把它叫作"),a("code",[v._v("Object")]),v._v("。单根结构意味着、所有东西归根结底都是一个对象”！所以容纳了"),a("code",[v._v("Object")]),v._v("的一个集合实际可以容纳任何东西。这使我们对它的重复使用变得非常简便。\n为使用这样的一个集合，只需添加指向它的对象引用即可，以后可以通过引用重新使用对象。但由于集合只能容纳"),a("code",[v._v("Object")]),v._v("，所以在我们向集合里添加对象引用时，它会向上转换成"),a("code",[v._v("Object")]),v._v("，这样便丢失了它的身份或者标识信息。再次使用它的时候，会得到一个"),a("code",[v._v("Object")]),v._v("引用，而非指向我们早先置入的那个类型的引用。所以怎样才能归还它的本来面貌，调用早先置入集合的那个对象的有用接口呢？")]),v._v(" "),a("p",[v._v("在这里，我们再次用到了转换（Cast）。但这一次不是在分级结构中向上转换成一种更“通用”的类型。而是向下转换成一种更“特殊”的类型。这种转换方法叫作“向下转换”（Downcasting）。举个例子来说，我们知道在向上转换的时候，"),a("code",[v._v("Circle")]),v._v("（圆）属于"),a("code",[v._v("Shape")]),v._v("（几何形状）的一种类型，所以向上转换是安全的。但我们不知道一个"),a("code",[v._v("Object")]),v._v("到底是"),a("code",[v._v("Circle")]),v._v("还是"),a("code",[v._v("Shape")]),v._v("，所以很难保证向下转换的安全进行，除非确切地知道自己要操作的是什么。")]),v._v(" "),a("p",[v._v("但这也不是绝对危险的，因为假如向下转换成错误的东西，会得到我们称为“异常”（"),a("code",[v._v("Exception")]),v._v("）的一种运行期错误。我们稍后即会对此进行解释。但在从一个集合提取对象引用时，必须用某种方式准确地记住它们是什么，以保证向下转换的正确进行。\n向下转换和运行期检查都要求花额外的时间来运行程序，而且程序员必须付出额外的精力。既然如此，我们能不能创建一个“智能”集合，令其知道自己容纳的类型呢？这样做可消除向下转换的必要以及潜在的错误。答案是肯定的，我们可以采用“参数化类型”，它们是编译器能自动定制的类，可与特定的类型配合。例如，通过使用一个参数化集合，编译器可对那个集合进行定制，使其只接受"),a("code",[v._v("Shape")]),v._v("，而且只提取"),a("code",[v._v("Shape")]),v._v("。")]),v._v(" "),a("p",[v._v("参数化类型是C++一个重要的组成部分，这部分是C++没有单根结构的缘故。在C++中，用于实现参数化类型的关键字是"),a("code",[v._v("template")]),v._v("（模板）。Java目前尚未提供参数化类型，因为由于使用的是单根结构，所以使用它显得有些笨拙。但这并不能保证以后的版本不会实现，因为"),a("code",[v._v("generic")]),v._v("这个词已被Java“保留到将来实现”（在Ada语言中，"),a("code",[v._v("generic")]),v._v("被用来实现它的模板）。Java采取的这种关键字保留机制其实经常让人摸不着头脑，很难断定以后会发生什么事情。")]),v._v(" "),a("h2",{attrs:{id:"_1-7-4-清除时的困境-由谁负责清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-4-清除时的困境-由谁负责清除"}},[v._v("#")]),v._v(" 1.7.4 清除时的困境：由谁负责清除？")]),v._v(" "),a("p",[v._v("每个对象都要求资源才能“生存”，其中最令人注目的资源是内存。如果不再需要使用一个对象，就必须将其清除，以便释放这些资源，以便其他对象使用。如果要解决的是非常简单的问题，如何清除对象这个问题并不显得很突出：我们创建对象，在需要的时候调用它，然后将其清除或者“析构”。但在另一方面，我们平时遇到的问题往往要比这复杂得多。\n举个例子来说，假设我们要设计一套系统，用它管理一个机场的空中交通（同样的模型也可能适于管理一个仓库的货柜、或者一套影带出租系统、或者宠物店的宠物房。这初看似乎十分简单：构造一个集合用来容纳飞机，然后创建一架新飞机，将其置入集合。对进入空中交通管制区的所有飞机都如此处理。至于清除，在一架飞机离开这个区域的时候把它简单地删去即可。\n但事情并没有这么简单，可能还需要另一套系统来记录与飞机有关的数据。当然，和控制器的主要功能不同，这些数据的重要性可能一开始并不显露出来。例如，这条记录反映的可能是离开机场的所有小飞机的飞行计划。所以我们得到了由小飞机组成的另一个集合。一旦创建了一个飞机对象，如果它是一架小飞机，那么也必须把它置入这个集合。然后在系统空闲时期，需对这个集合中的对象进行一些后台处理。")]),v._v(" "),a("p",[v._v("问题现在显得更复杂了：如何才能知道什么时间删除对象呢？用完对象后，系统的其他某些部分可能仍然要发挥作用。同样的问题也会在其他大量场合出现，而且在程序设计系统中（如C++），在用完一个对象之后必须明确地将其删除，所以问题会变得异常复杂（注释⑥）。")]),v._v(" "),a("p",[v._v("⑥：注意这一点只对内存堆里创建的对象成立（用new命令创建的）。但在另一方面，对这儿描述的问题以及其他所有常见的编程问题来说，都要求对象在内存堆里创建。")]),v._v(" "),a("p",[v._v("在Java中，垃圾收集器在设计时已考虑到了内存的释放问题（尽管这并不包括清除一个对象涉及到的其他方面）。垃圾收集器“知道”一个对象在什么时候不再使用，然后会自动释放那个对象占据的内存空间。采用这种方式，另外加上所有对象都从单个根类"),a("code",[v._v("Object")]),v._v("继承的事实，而且由于我们只能在内存堆中以一种方式创建对象，所以Java的编程要比C++的编程简单得多。我们只需要作出少量的抉择，即可克服原先存在的大量障碍。")]),v._v(" "),a("p",[v._v("(2)垃圾收集器对效率及灵活性的影响")]),v._v(" "),a("p",[v._v("既然这是如此好的一种手段，为什么在C++里没有得到充分的发挥呢？我们当然要为这种编程的方便性付出一定的代价，代价就是运行期的开销。正如早先提到的那样，在C++中，我们可在栈中创建对象。在这种情况下，对象会得以自动清除（但不具有在运行期间随心所欲创建对象的灵活性）。在栈中创建对象是为对象分配存储空间最有效的一种方式，也是释放那些空间最有效的一种方式。在内存堆（Heap）中创建对象可能要付出昂贵得多的代价。如果总是从同一个基类继承，并使所有函数调用都具有“同质多态”特征，那么也不可避免地需要付出一定的代价。但垃圾收集器是一种特殊的问题，因为我们永远不能确定它什么时候启动或者要花多长的时间。这意味着在Java程序执行期间，存在着一种不连贯的因素。所以在某些特殊的场合，我们必须避免用它——比如在一个程序的执行必须保持稳定、连贯的时候（通常把它们叫作“实时程序”，尽管并不是所有实时编程问题都要这方面的要求——注释⑦）。")]),v._v(" "),a("p",[v._v("⑦：根据本书一些技术性读者的反馈，有一个现成的实时Java系统（"),a("code",[v._v("www.newmonics.com")]),v._v("）确实能够保证垃圾收集器的效能。")]),v._v(" "),a("p",[v._v("C++语言的设计者曾经向C程序员发出请求（而且做得非常成功），不要希望在可以使用C的任何地方，向语言里加入可能对C++的速度或使用造成影响的任何特性。这个目的达到了，但代价就是C++的编程不可避免地复杂起来。Java比C++简单，但付出的代价是效率以及一定程度的灵活性。但对大多数程序设计问题来说，Java无疑都应是我们的首选。")])])}),[],!1,null,null,null);_.default=t.exports}}]);