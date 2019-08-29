//2.1词法阶段
function foo(a) { 
  var b = a * 2;
  function bar(c) { 
    console.log( a, b, c );
  }
  bar( b * 3 ); 
}
  foo( 2 ); // 2, 4, 12

// 在这个例子中有三个逐级嵌套的作用域
//  包含着整个全局作用域，其中只有一个标识符:foo。
// 包含着 foo 所创建的作用域，其中有三个标识符:a、bar 和 b。
// 包含着 bar 所创建的作用域，其中只有一个标识符:c。