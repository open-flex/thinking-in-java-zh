(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{577:function(t,v,_){"use strict";_.r(v);var a=_(56),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"第9章-异常差错控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第9章-异常差错控制"}},[t._v("#")]),t._v(" 第9章 异常差错控制")]),t._v(" "),_("p",[t._v("Java的基本原理就是“形式错误的代码不会运行”。")]),t._v(" "),_("p",[t._v("与C++类似，捕获错误最理想的是在编译期间，最好在试图运行程序以前。然而，并非所有错误都能在编译期间侦测到。有些问题必须在运行期间解决，让错误的缔结者通过一些手续向接收者传递一些适当的信息，使其知道该如何正确地处理遇到的问题。")]),t._v(" "),_("p",[t._v("在C++和其他早期语言中，可通过几种手续来达到这个目的。而且它们通常是作为一种规定建立起来的，而非作为程序设计语言的一部分。典型地，我们需要返回一个值或设置一个标志（位），接收者会检查这些值或标志，判断具体发生了什么事情。然而，随着时间的流逝，终于发现这种做法会助长那些使用一个库的程序员的麻痹情绪。他们往往会这样想：“是的，错误可能会在其他人的代码中出现，但不会在我的代码中”。这样的后果便是他们一般不检查是否出现了错误（有时出错条件确实显得太愚蠢，不值得检验；注释①）。另一方面，若每次调用一个方法时都进行全面、细致的错误检查，那么代码的可读性也可能大幅度降低。由于程序员可能仍然在用这些语言维护自己的系统，所以他们应该对此有着深刻的体会：若按这种方式控制错误，那么在创建大型、健壮、易于维护的程序时，肯定会遇到不小的阻挠。")]),t._v(" "),_("p",[t._v("①：C程序员研究一下"),_("code",[t._v("printf()")]),t._v("的返回值便知端详。")]),t._v(" "),_("p",[t._v("解决的方法是在错误控制中排除所有偶然性，强制格式的正确。这种方法实际已有很长的历史，因为早在60年代便在操作系统里采用了“异常控制”手段；甚至可以追溯到BASIC语言的on error "),_("code",[t._v("goto")]),t._v("语句。但C++的异常控制建立在Ada的基础上，而Java又主要建立在C++的基础上（尽管它看起来更象Object Pascal）。")]),t._v(" "),_("p",[t._v("“异常”（"),_("code",[t._v("Exception")]),t._v("）这个词表达的是一种“例外”情况，亦即正常情况之外的一种“异常”。在问题发生的时候，我们可能不知具体该如何解决，但肯定知道已不能不顾一切地继续下去。此时，必须坚决地停下来，并由某人、某地指出发生了什么事情，以及该采取何种对策。但为了真正解决问题，当地可能并没有足够多的信息。因此，我们需要将其移交给更级的负责人，令其作出正确的决定（类似一个命令链）。")]),t._v(" "),_("p",[t._v("异常机制的另一项好处就是能够简化错误控制代码。我们再也不用检查一个特定的错误，然后在程序的多处地方对其进行控制。此外，也不需要在方法调用的时候检查错误（因为保证有人能捕获这里的错误）。我们只需要在一个地方处理问题：“异常控制模块”或者“异常控制器”。这样可有效减少代码量，并将那些用于描述具体操作的代码与专门纠正错误的代码分隔开。一般情况下，用于读取、写入以及调试的代码会变得更富有条理。")]),t._v(" "),_("p",[t._v("由于异常控制是由Java编译器强行实现的，所以毋需深入学习异常控制，便可正确使用本书编写的大量例子。本章向大家介绍了用于正确控制异常所需的代码，以及在某个方法遇到麻烦的时候，该如何生成自己的异常。")])])}),[],!1,null,null,null);v.default=e.exports}}]);