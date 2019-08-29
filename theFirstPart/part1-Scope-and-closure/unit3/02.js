// 规避冲突
function foo() { 
  function bar(a) {
    i = 3; // 修改for循环所属作用域中的i
    console.log( a + i );
  }
  // bar(..) 内部的赋值表达式 i = 3 意外地覆盖了声明在 foo(..) 内部 for 循环中的 i。在这
  // 个例子中将会导致无限循环，因为 i 被固定设置为 3，永远满足小于 10 这个条件。  
  for (var i=0; i<10; i++) {
    bar( i * 2 ); // 糟糕，无限循环了!
  } 
}
foo();

// 1. 全局命名空间
// 这些库通常会在全局作用域中声明一个名字足够独特的变量，通常是一个对象。
// 这个对象被用作库的命名空间，所有需要暴露给外界的功能都会成为这个对象(命名空间)的属性，
// 而不是将自己的标识符暴漏在顶级的词法作用域中。
var MyReallyCoolLibrary = { 
  awesome: "stuff", 
  doSomething: function() {
    // ... 
  },
  doAnotherThing: function() {
    // ...
  } 
};


