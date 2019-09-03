// new绑定
function foo(a) { 
  this.a = a;
}
var bar = new foo(2); 
console.log( bar.a ); // 2

// 使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this 上。
// new 是最后一种可以影响函数调用时 this 绑定行为的方法，我们称之为 new 绑定。
