function foo() {
  console.log( a ); // 3(不是 2 !)
}
function bar() { 
  var a = 3;
  foo(); 
}
var a = 2; 
bar();
// 因为当 foo() 无法找到a的变量引用时，会顺着调用栈在调用 foo()的地方查找a，
// 而不是在嵌套的词法作用域链中向上查找。由于 foo()是在 bar()中调用的，
// 引擎会检查 bar() 的作用域，并在其中找到值为 3 的变量 a