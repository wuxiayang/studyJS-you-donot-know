//1.2理解作用域
// 1. 遇到 var a，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。
// 如果是，编译器会忽略该声明，继续进行编译;
// 否则它会要求作用域在当前作 用域的集合中声明一个新的变量，并命名为a。

// 2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值操作。
// 引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a 的 变量。
// 如果是，引擎就会使用这个变量;如果否，引擎会继续查找该变量(查看 1.3 节)。

// 如果引擎最终找到了 a 变量，就会将 2 赋值给它。否则引擎就会举手示意并抛出一个异 常!