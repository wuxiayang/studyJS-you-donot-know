//欺骗词法
//eval
function foo(str, a) { 
  eval( str );
  console.log(str,a); 
  // 欺骗! console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 ); // 1, 3
// var b = 3; 1

// 在严格模式的程序中，eval(..) 在运行时有其自己的词法作用域，意味着其 中的声明无法修改所在的作用域
function foo(str) { 
  "use strict";
  eval( str );
  console.log( a ); // ReferenceError: a is not defined
}
foo( "var a = 2" );

//with
var obj = { 
  a: 1,
  b: 2,
  c: 3 
};
// 单调乏味的重复 "obj" obj.a = 2;
obj.b = 3;
obj.c = 4;
// 简单的快捷方式 
with (obj) {
  a = 3;
  b = 4;
  c = 5;
}