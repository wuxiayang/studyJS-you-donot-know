a = 2;
var a;
console.log( a );
// 因为 var a 声明在 a = 2 之后，他们自然而然地认为变量
// 被重新赋值了，因此会被赋予默认值 undefined 。但是，真正的输出结果是 2

console.log( a );
var a = 2;
// 输出来的会是 undefined 

// 当你看到 var a = 2; 时，可能会认为这是一个声明。
// 但 JavaScript 实际上会将其看成两个声明： var a; 和 a = 2; 。
// 第一个定义声明是在编译阶段进行的。
// 第二个赋值声明会被留在原地等待执行阶段。
// 我们的第一个代码片段会以如下形式进行处理：
// var a;
// a = 2;
// console.log( a );
// 其中第一部分是编译，而第二部分是执行。

// 我们的第二个代码片段实际是按照以下流程处理的：
// var a;
// console.log( a );
// a = 2;
// 因此，打个比方，这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动”到了最上面。这个过程就叫作提升。
// 换句话说，先有蛋（声明）后有鸡（赋值）。