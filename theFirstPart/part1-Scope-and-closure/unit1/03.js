//1.3作用域嵌套
function foo(a) { 
  console.log( a + b );
  // 对 b 进行的 RHS 引用无法在函数 foo 内部完成，但可以在上一级作用域(在这个例子中就 是全局作用域)中完成
}
var b = 2; 
foo( 2 ); // 4
