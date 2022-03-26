(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{441:function(e,n,o){"use strict";o.r(n);var t=o(56),c=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_12-3-克隆的控制"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-克隆的控制"}},[e._v("#")]),e._v(" 12.3 克隆的控制")]),e._v(" "),o("p",[e._v("为消除克隆能力，大家也许认为只需将"),o("code",[e._v("clone()")]),e._v("方法简单地设为"),o("code",[e._v("private")]),e._v("（私有）即可，但这样是行不通的，因为不能采用一个基类方法，并使其在派生类中更“私有”。所以事情并没有这么简单。此外，我们有必要控制一个对象是否能够克隆。对于我们设计的一个类，实际有许多种方案都是可以采取的：")]),e._v(" "),o("p",[e._v("(1) 保持中立，不为克隆做任何事情。也就是说，尽管不可对我们的类克隆，但从它继承的一个类却可根据实际情况决定克隆。只有"),o("code",[e._v("Object.clone()")]),e._v("要对类中的字段进行某些合理的操作时，才可以作这方面的决定。")]),e._v(" "),o("p",[e._v("(2) 支持"),o("code",[e._v("clone()")]),e._v("，采用实现"),o("code",[e._v("Cloneable")]),e._v("（可克隆）能力的标准操作，并覆盖"),o("code",[e._v("clone()")]),e._v("。在被覆盖的"),o("code",[e._v("clone()")]),e._v("中，可调用"),o("code",[e._v("super.clone()")]),e._v("，并捕获所有异常（这样可使"),o("code",[e._v("clone()")]),e._v("不“抛”出任何异常）。")]),e._v(" "),o("p",[e._v("(3) 有条件地支持克隆。若类容纳了其他对象的引用，而那些对象也许能够克隆（集合类便是这样的一个例子），就可试着克隆拥有对方引用的所有对象；如果它们“抛”出了异常，只需让这些异常通过即可。举个例子来说，假设有一个特殊的"),o("code",[e._v("Vector")]),e._v("，它试图克隆自己容纳的所有对象。编写这样的一个"),o("code",[e._v("Vector")]),e._v("时，并不知道客户程序员会把什么形式的对象置入这个"),o("code",[e._v("Vector")]),e._v("中，所以并不知道它们是否真的能够克隆。")]),e._v(" "),o("p",[e._v("(4) 不实现"),o("code",[e._v("Cloneable()")]),e._v("，但是将"),o("code",[e._v("clone()")]),e._v("覆盖成"),o("code",[e._v("protected")]),e._v("，使任何字段都具有正确的复制行为。这样一来，从这个类继承的所有东西都能覆盖"),o("code",[e._v("clone()")]),e._v("，并调用"),o("code",[e._v("super.clone()")]),e._v("来产生正确的复制行为。注意在我们实现方案里，可以而且应该调用"),o("code",[e._v("super.clone()")]),e._v("——即使那个方法本来预期的是一个"),o("code",[e._v("Cloneable")]),e._v("对象（否则会抛出一个异常），因为没有人会在我们这种类型的对象上直接调用它。它只有通过一个派生类调用；对那个派生类来说，如果要保证它正常工作，需实现"),o("code",[e._v("Cloneable")]),e._v("。")]),e._v(" "),o("p",[e._v("(5) 不实现"),o("code",[e._v("Cloneable")]),e._v("来试着防止克隆，并覆盖"),o("code",[e._v("clone()")]),e._v("，以产生一个异常。为使这一设想顺利实现，只有令从它派生出来的任何类都调用重新定义后的"),o("code",[e._v("clone()")]),e._v("里的"),o("code",[e._v("suepr.clone()")]),e._v("。")]),e._v(" "),o("p",[e._v("(6) 将类设为"),o("code",[e._v("final")]),e._v("，从而防止克隆。若"),o("code",[e._v("clone()")]),e._v("尚未被我们的任何一个上级类覆盖，这一设想便不会成功。若已被覆盖，那么再一次覆盖它，并“抛”出一个"),o("code",[e._v("CloneNotSupportedException")]),e._v("（克隆不支持）异常。为担保克隆被禁止，将类设为"),o("code",[e._v("final")]),e._v("是唯一的办法。除此以外，一旦涉及保密对象或者遇到想对创建的对象数量进行控制的其他情况，应该将所有构造器都设为"),o("code",[e._v("private")]),e._v("，并提供一个或更多的特殊方法来创建对象。采用这种方式，这些方法就可以限制创建的对象数量以及它们的创建条件——一种特殊情况是第16章要介绍的singleton（单例）方案。")]),e._v(" "),o("p",[e._v("下面这个例子总结了克隆的各种实现方法，然后在层次结构中将其“关闭”：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("//: CheckCloneable.java\n// Checking to see if a handle can be cloned\n\n// Can't clone this because it doesn't\n// override clone():\nclass Ordinary {}\n\n// Overrides clone, but doesn't implement\n// Cloneable:\nclass WrongClone extends Ordinary {\n  public Object clone()\n      throws CloneNotSupportedException {\n    return super.clone(); // Throws exception\n  }\n}\n\n// Does all the right things for cloning:\nclass IsCloneable extends Ordinary\n    implements Cloneable {\n  public Object clone()\n      throws CloneNotSupportedException {\n    return super.clone();\n  }\n}\n\n// Turn off cloning by throwing the exception:\nclass NoMore extends IsCloneable {\n  public Object clone()\n      throws CloneNotSupportedException {\n    throw new CloneNotSupportedException();\n  }\n}\n\nclass TryMore extends NoMore {\n  public Object clone()\n      throws CloneNotSupportedException {\n    // Calls NoMore.clone(), throws exception:\n    return super.clone();\n  }\n}\n\nclass BackOn extends NoMore {\n  private BackOn duplicate(BackOn b) {\n    // Somehow make a copy of b\n    // and return that copy. This is a dummy\n    // copy, just to make the point:\n    return new BackOn();\n  }\n  public Object clone() {\n    // Doesn't call NoMore.clone():\n    return duplicate(this);\n  }\n}\n\n// Can't inherit from this, so can't override\n// the clone method like in BackOn:\nfinal class ReallyNoMore extends NoMore {}\n\npublic class CheckCloneable {\n  static Ordinary tryToClone(Ordinary ord) {\n    String id = ord.getClass().getName();\n    Ordinary x = null;\n    if(ord instanceof Cloneable) {\n      try {\n        System.out.println(\"Attempting \" + id);\n        x = (Ordinary)((IsCloneable)ord).clone();\n        System.out.println(\"Cloned \" + id);\n      } catch(CloneNotSupportedException e) {\n        System.out.println(\n          \"Could not clone \" + id);\n      }\n    }\n    return x;\n  }\n  public static void main(String[] args) {\n    // Upcasting:\n    Ordinary[] ord = {\n      new IsCloneable(),\n      new WrongClone(),\n      new NoMore(),\n      new TryMore(),\n      new BackOn(),\n      new ReallyNoMore(),\n    };\n    Ordinary x = new Ordinary();\n    // This won't compile, since clone() is\n    // protected in Object:\n    //! x = (Ordinary)x.clone();\n    // tryToClone() checks first to see if\n    // a class implements Cloneable:\n    for(int i = 0; i < ord.length; i++)\n      tryToClone(ord[i]);\n  }\n} ///:~\n")])])]),o("p",[e._v("第一个类"),o("code",[e._v("Ordinary")]),e._v("代表着大家在本书各处最常见到的类：不支持克隆，但在它正式应用以后，却也不禁止对其克隆。但假如有一个指向"),o("code",[e._v("Ordinary")]),e._v("对象的引用，而且那个对象可能是从一个更深的派生类向上转换来的，便不能判断它到底能不能克隆。")]),e._v(" "),o("p",[o("code",[e._v("WrongClone")]),e._v("类揭示了实现克隆的一种不正确途径。它确实覆盖了"),o("code",[e._v("Object.clone()")]),e._v("，并将那个方法设为"),o("code",[e._v("public")]),e._v("，但却没有实现"),o("code",[e._v("Cloneable")]),e._v("。所以一旦发出对"),o("code",[e._v("super.clone()")]),e._v("的调用（由于对"),o("code",[e._v("Object.clone()")]),e._v("的一个调用造成的），便会无情地抛出"),o("code",[e._v("CloneNotSupportedException")]),e._v("异常。")]),e._v(" "),o("p",[e._v("在"),o("code",[e._v("IsCloneable")]),e._v("中，大家看到的才是进行克隆的各种正确行动：先覆盖"),o("code",[e._v("clone()")]),e._v("，并实现了"),o("code",[e._v("Cloneable")]),e._v("。但是，这个"),o("code",[e._v("clone()")]),e._v("方法以及本例的另外几个方法并不捕获"),o("code",[e._v("CloneNotSupportedException")]),e._v("异常，而是任由它通过，并传递给调用者。随后，调用者必须用一个"),o("code",[e._v("try-catch")]),e._v("代码块把它包围起来。在我们自己的"),o("code",[e._v("clone()")]),e._v("方法中，通常需要在"),o("code",[e._v("clone()")]),e._v("内部捕获"),o("code",[e._v("CloneNotSupportedException")]),e._v("异常，而不是任由它通过。正如大家以后会理解的那样，对这个例子来说，让它通过是最正确的做法。")]),e._v(" "),o("p",[e._v("类"),o("code",[e._v("NoMore")]),e._v("试图按照Java设计者打算的那样“关闭”克隆：在派生类"),o("code",[e._v("clone()")]),e._v("中，我们抛出"),o("code",[e._v("CloneNotSupportedException")]),e._v("异常。"),o("code",[e._v("TryMore")]),e._v("类中的"),o("code",[e._v("clone()")]),e._v("方法正确地调用"),o("code",[e._v("super.clone()")]),e._v("，并解析成"),o("code",[e._v("NoMore.clone()")]),e._v("，后者抛出一个异常并禁止克隆。")]),e._v(" "),o("p",[e._v("但在已被覆盖的"),o("code",[e._v("clone()")]),e._v("方法中，假若程序员不遵守调用"),o("code",[e._v("super.clone()")]),e._v("的“正确”方法，又会出现什么情况呢？在"),o("code",[e._v("BackOn")]),e._v("中，大家可看到实际会发生什么。这个类用一个独立的方法"),o("code",[e._v("duplicate()")]),e._v("制作当前对象的一个副本，并在"),o("code",[e._v("clone()")]),e._v("内部调用这个方法，而不是调用"),o("code",[e._v("super.clone()")]),e._v("。异常永远不会产生，而且新类是可以克隆的。因此，我们不能依赖“抛”出一个异常的方法来防止产生一个可克隆的类。唯一安全的方法在"),o("code",[e._v("ReallyNoMore")]),e._v("中得到了演示，它设为"),o("code",[e._v("final")]),e._v("，所以不可继承。这意味着假如"),o("code",[e._v("clone(")]),e._v(")在"),o("code",[e._v("final")]),e._v("类中抛出了一个异常，便不能通过继承来进行修改，并可有效地禁止克隆（不能从一个拥有任意继承级数的类中明确调用"),o("code",[e._v("Object.clone()")]),e._v("；只能调用"),o("code",[e._v("super.clone()")]),e._v("，它只可访问直接基类）。因此，只要制作一些涉及安全问题的对象，就最好把那些类设为"),o("code",[e._v("final")]),e._v("。")]),e._v(" "),o("p",[e._v("在类"),o("code",[e._v("CheckCloneable")]),e._v("中，我们看到的第一个类是"),o("code",[e._v("tryToClone()")]),e._v("，它能接纳任何"),o("code",[e._v("Ordinary")]),e._v("对象，并用"),o("code",[e._v("instanceof")]),e._v("检查它是否能够克隆。若答案是肯定的，就将对象转换成为一个"),o("code",[e._v("IsCloneable")]),e._v("，调用"),o("code",[e._v("clone()")]),e._v("，并将结果转换回"),o("code",[e._v("Ordinary")]),e._v("，最后捕获有可能产生的任何异常。请注意用运行期类型识别（见第11章）打印出类名，使自己看到发生的一切情况。")]),e._v(" "),o("p",[e._v("在"),o("code",[e._v("main()")]),e._v("中，我们创建了不同类型的"),o("code",[e._v("Ordinary")]),e._v("对象，并在数组定义中向上转换成为"),o("code",[e._v("Ordinary")]),e._v("。在这之后的头两行代码创建了一个纯粹的"),o("code",[e._v("Ordinary")]),e._v("对象，并试图对其克隆。然而，这些代码不会得到编译，因为"),o("code",[e._v("clone()")]),e._v("是"),o("code",[e._v("Object")]),e._v("中的一个"),o("code",[e._v("protected")]),e._v("（受到保护的）方法。代码剩余的部分将遍历数组，并试着克隆每个对象，分别报告它们的成功或失败。输出如下：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Attempting IsCloneable\nCloned IsCloneable\nAttempting NoMore\nCould not clone NoMore\nAttempting TryMore\nCould not clone TryMore\nAttempting BackOn\nCloned BackOn\nAttempting ReallyNoMore\nCould not clone ReallyNoMore\n")])])]),o("p",[e._v("总之，如果希望一个类能够克隆，那么：")]),e._v(" "),o("p",[e._v("(1) 实现"),o("code",[e._v("Cloneable")]),e._v("接口\n(2) 覆盖"),o("code",[e._v("clone()")]),e._v("\n(3) 在自己的"),o("code",[e._v("clone()")]),e._v("中调用"),o("code",[e._v("super.clone()")]),e._v("\n(4) 在自己的"),o("code",[e._v("clone()")]),e._v("中捕获异常")]),e._v(" "),o("p",[e._v("这一系列步骤能达到最理想的效果。")]),e._v(" "),o("h2",{attrs:{id:"_12-3-1-副本构造器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-1-副本构造器"}},[e._v("#")]),e._v(" 12.3.1 副本构造器")]),e._v(" "),o("p",[e._v("克隆看起来要求进行非常复杂的设置，似乎还该有另一种替代方案。一个办法是制作特殊的构造器，令其负责复制一个对象。在C++中，这叫作“副本构造器”。刚开始的时候，这好象是一种非常显然的解决方案（如果你是C++程序员，这个方法就更显亲切）。下面是一个实际的例子：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('//: CopyConstructor.java\n// A constructor for copying an object\n// of the same type, as an attempt to create\n// a local copy.\n\nclass FruitQualities {\n  private int weight;\n  private int color;\n  private int firmness;\n  private int ripeness;\n  private int smell;\n  // etc.\n  FruitQualities() { // Default constructor\n    // do something meaningful...\n  }\n  // Other constructors:\n  // ...\n  // Copy constructor:\n  FruitQualities(FruitQualities f) {\n    weight = f.weight;\n    color = f.color;\n    firmness = f.firmness;\n    ripeness = f.ripeness;\n    smell = f.smell;\n    // etc.\n  }\n}\n\nclass Seed {\n  // Members...\n  Seed() { /* Default constructor */ }\n  Seed(Seed s) { /* Copy constructor */ }\n}\n\nclass Fruit {\n  private FruitQualities fq;\n  private int seeds;\n  private Seed[] s;\n  Fruit(FruitQualities q, int seedCount) {\n    fq = q;\n    seeds = seedCount;\n    s = new Seed[seeds];\n    for(int i = 0; i < seeds; i++)\n      s[i] = new Seed();\n  }\n  // Other constructors:\n  // ...\n  // Copy constructor:\n  Fruit(Fruit f) {\n    fq = new FruitQualities(f.fq);\n    seeds = f.seeds;\n    // Call all Seed copy-constructors:\n    for(int i = 0; i < seeds; i++)\n      s[i] = new Seed(f.s[i]);\n    // Other copy-construction activities...\n  }\n  // To allow derived constructors (or other\n  // methods) to put in different qualities:\n  protected void addQualities(FruitQualities q) {\n    fq = q;\n  }\n  protected FruitQualities getQualities() {\n    return fq;\n  }\n}\n\nclass Tomato extends Fruit {\n  Tomato() {\n    super(new FruitQualities(), 100);\n  }\n  Tomato(Tomato t) { // Copy-constructor\n    super(t); // Upcast for base copy-constructor\n    // Other copy-construction activities...\n  }\n}\n\nclass ZebraQualities extends FruitQualities {\n  private int stripedness;\n  ZebraQualities() { // Default constructor\n    // do something meaningful...\n  }\n  ZebraQualities(ZebraQualities z) {\n    super(z);\n    stripedness = z.stripedness;\n  }\n}\n\nclass GreenZebra extends Tomato {\n  GreenZebra() {\n    addQualities(new ZebraQualities());\n  }\n  GreenZebra(GreenZebra g) {\n    super(g); // Calls Tomato(Tomato)\n    // Restore the right qualities:\n    addQualities(new ZebraQualities());\n  }\n  void evaluate() {\n    ZebraQualities zq =\n      (ZebraQualities)getQualities();\n    // Do something with the qualities\n    // ...\n  }\n}\n\npublic class CopyConstructor {\n  public static void ripen(Tomato t) {\n    // Use the "copy constructor":\n    t = new Tomato(t);\n    System.out.println("In ripen, t is a " +\n      t.getClass().getName());\n  }\n  public static void slice(Fruit f) {\n    f = new Fruit(f); // Hmmm... will this work?\n    System.out.println("In slice, f is a " +\n      f.getClass().getName());\n  }\n  public static void main(String[] args) {\n    Tomato tomato = new Tomato();\n    ripen(tomato); // OK\n    slice(tomato); // OOPS!\n    GreenZebra g = new GreenZebra();\n    ripen(g); // OOPS!\n    slice(g); // OOPS!\n    g.evaluate();\n  }\n} ///:~\n')])])]),o("p",[e._v("这个例子第一眼看上去显得有点奇怪。不同水果的质量肯定有所区别，但为什么只是把代表那些质量的数据成员直接置入"),o("code",[e._v("Fruit")]),e._v("（水果）类？有两方面可能的原因。第一个是我们可能想简便地插入或修改质量。注意"),o("code",[e._v("Fruit")]),e._v("有一个"),o("code",[e._v("protected")]),e._v("（受到保护的）"),o("code",[e._v("addQualities()")]),e._v("方法，它允许派生类来进行这些插入或修改操作（大家或许会认为最合乎逻辑的做法是在"),o("code",[e._v("Fruit")]),e._v("中使用一个"),o("code",[e._v("protected")]),e._v("构造器，用它获取"),o("code",[e._v("FruitQualities")]),e._v("参数，但构造器不能继承，所以不可在第二级或级数更深的类中使用它）。通过将水果的质量置入一个独立的类，可以得到更大的灵活性，其中包括可以在特定"),o("code",[e._v("Fruit")]),e._v("对象的存在期间中途更改质量。")]),e._v(" "),o("p",[e._v("之所以将"),o("code",[e._v("FruitQualities")]),e._v("设为一个独立的对象，另一个原因是考虑到我们有时希望添加新的质量，或者通过继承与多态性改变行为。注意对"),o("code",[e._v("GreenZebra")]),e._v("来说（这实际是西红柿的一类——我已栽种成功，它们简直令人难以置信），构造器会调用"),o("code",[e._v("addQualities()")]),e._v("，并为其传递一个"),o("code",[e._v("ZebraQualities")]),e._v("对象。该对象是从"),o("code",[e._v("FruitQualities")]),e._v("派生出来的，所以能与基类中的"),o("code",[e._v("FruitQualities")]),e._v("引用联系在一起。当然，一旦"),o("code",[e._v("GreenZebr")]),e._v("a使用"),o("code",[e._v("FruitQualities")]),e._v("，就必须将其向下转换成为正确的类型（就象"),o("code",[e._v("evaluate()")]),e._v("中展示的那样），但它肯定知道类型是"),o("code",[e._v("ZebraQualities")]),e._v("。")]),e._v(" "),o("p",[e._v("大家也看到有一个"),o("code",[e._v("Seed")]),e._v("（种子）类，"),o("code",[e._v("Fruit")]),e._v("（大家都知道，水果含有自己的种子）包含了一个"),o("code",[e._v("Seed")]),e._v("数组。")]),e._v(" "),o("p",[e._v("最后，注意每个类都有一个副本构造器，而且每个副本构造器都必须关心为基类和成员对象调用副本构造器的问题，从而获得“深层复制”的效果。对副本构造器的测试是在"),o("code",[e._v("CopyConstructor")]),e._v("类内进行的。方法"),o("code",[e._v("ripen()")]),e._v("需要获取一个"),o("code",[e._v("Tomato")]),e._v("参数，并对其执行副本构建工作，以便复制对象：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("t = new Tomato(t);\n")])])]),o("p",[e._v("而"),o("code",[e._v("slice()")]),e._v("需要获取一个更常规的"),o("code",[e._v("Fruit")]),e._v("对象，而且对它进行复制：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("f = new Fruit(f);\n")])])]),o("p",[e._v("它们都在"),o("code",[e._v("main()")]),e._v("中伴随不同种类的"),o("code",[e._v("Fruit")]),e._v("进行测试。下面是输出结果：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("In ripen, t is a Tomato\nIn slice, f is a Fruit\nIn ripen, t is a Tomato\nIn slice, f is a Fruit\n")])])]),o("p",[e._v("从中可以看出一个问题。在"),o("code",[e._v("slice()")]),e._v("内部对"),o("code",[e._v("Tomato")]),e._v("进行了副本构建工作以后，结果便不再是一个"),o("code",[e._v("Tomato")]),e._v("对象，而只是一个"),o("code",[e._v("Fruit")]),e._v("。它已丢失了作为一个"),o("code",[e._v("Tomato")]),e._v("（西红柿）的所有特征。此外，如果采用一个"),o("code",[e._v("GreenZebra")]),e._v("，"),o("code",[e._v("ripen()")]),e._v("和"),o("code",[e._v("slice()")]),e._v("会把它分别转换成一个"),o("code",[e._v("Tomato")]),e._v("和一个"),o("code",[e._v("Fruit")]),e._v("。所以非常不幸，假如想制作对象的一个本地副本，Java中的副本构造器便不是特别适合我们。")]),e._v(" "),o("p",[e._v("(1) 为什么在C++的作用比在Java中大？")]),e._v(" "),o("p",[e._v("副本构造器是C++的一个基本构成部分，因为它能自动产生对象的一个本地副本。但前面的例子确实证明了它不适合在Java中使用，为什么呢？在Java中，我们操控的一切东西都是引用，而在C++中，却可以使用类似于引用的东西，也能直接传递对象。这时便要用到C++的副本构造器：只要想获得一个对象，并按值传递它，就可以复制对象。所以它在C++里能很好地工作，但应注意这套机制在Java里是很不通的，所以不要用它。")])])}),[],!1,null,null,null);n.default=c.exports}}]);