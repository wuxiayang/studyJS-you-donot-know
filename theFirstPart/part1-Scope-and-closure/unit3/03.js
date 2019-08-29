//函数作用域
var a = 2;
function foo() { // <-- 添加这一行
  var a = 3; 
  console.log( a ); // 3
} // <-- 以及这一行 
foo(); // <-- 以及这一行
console.log( a ); // 2
// 必须声明一个具名函数 foo()，意味着 foo 这个名称本身“污染”了所在作用域(在这个 例子中是全局作用域)。
// 其次，必须显式地通过函数名(foo())调用这个函数才能运行其 中的代码


var a = 2;
(function foo(){ // <-- 添加这一行 
  var a = 3;
  console.log( a ); // 3 
})(); // <-- 以及这一行 
console.log( a ); // 2
// 包装函数的声明以 (function... 而不仅是以 function... 开始。
// 函数会被当作函数表达式而不是一个标准的函数声明来处理

// 函数声明和函数表达式之间最重要的区别是它们的名称标识符将会绑定在何处
// 第一个片段中 foo 被绑定在所在作用域中，可以直接通过foo() 来调用它。
// 第二个片段中 foo 被绑定在函数表达式自身的函数中而不是所在作用域中。
// (function foo(){ .. })作为函数表达式意味着foo只能在..所代表的位置中被访问，外部作用域则不行。
// foo变量名被隐藏在自身中意味着不会非必要地污染外部作用域。


//匿名+具名
setTimeout( function() {
  console.log("I waited 1 second!");
}, 1000 );  //对于函数表达式你最熟悉的场景可能就是回调参数了

// 行内函数表达式非常强大且有用——匿名和具名之间的区别并不会对这点有任何影响。给函数表达式指定一个函数名可以有效解决以上问题。始终给函数表达式命名是一个最佳实践:
setTimeout( 
  function timeoutHandler() { // <-- 快看，我有名字了! 
    console.log( "I waited 1 second!" );
  }, 
1000 );

//立即执行函数表达式
var a = 2;
(function foo() { 
  var a = 3;
  console.log( a ); // 3
})();
console.log( a ); // 2
// 由于函数被包含在一对 ( ) 括号内部，因此成为了一个表达式，通过在末尾加上另外一个 ( ) 可以立即执行这个函数，
// 比如 (function foo(){ .. })()。
// 第一个 ( ) 将函数变成表 达式，第二个 ( ) 执行了这个函数。

//常见用法-----使用一个匿名函数表达式
var a = 2; 
(function IIFE() {
  var a = 3; 
  console.log( a ); // 3
})();
console.log( a ); // 2

//进阶用法-----
// 把它们当作函数调用并传递参数进去
var a = 2;
(function IIFE( global ) {
  var a = 3;
  console.log( a ); // 3 
  console.log( global.a ); // 2
})( window );
console.log( a ); // 2
// 我们将 window 对象的引用传递进去，但将参数命名为 global，
// 因此在代码风格上对全局对象的引用变得比引用一个没有“全局”字样的变量更加清晰。


// 解决 undefined 标识符的默认值被错误覆盖导致的异常
undefined = true; // 给其他代码挖了一个大坑!绝对不要这样做! 
(function IIFE( undefined ) {
  var a;
  if (a === undefined) {
    console.log( "Undefined is safe here!" );
  }
})();

//倒置代码的运行顺序
var a = 2;
(function IIFE( def ) { 
  def( window );
})(function def( global ) 
  {
    var a = 3;
    console.log( a ); // 3 
    console.log( global.a ); // 2
  }
);
// 函数表达式 def 定义在片段的第二部分，然后当作参数(这个参数也叫作 def)被传递进 IIFE 函数定义的第一部分中。
// 最后，参数 def(也就是传递进去的函数)被调用，并将 window 传入当作 global 参数的值
