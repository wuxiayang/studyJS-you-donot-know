function foo() { 
  console.log( this.a );
}
var obj = { 
  a:2
};
foo.call( obj ); // 2
// 通过 foo.call(..)，我们可以在调用 foo 时强制把它的 this 绑定到 obj 上



// 硬绑定
function foo() { 
  console.log( this.a );
}
var obj = { 
  a:2
};
var bar = function() { 
  foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// 硬绑定的 bar 不可能再修改它的 this 
bar.call( window ); // 2



// 创建一个包裹函数，传入所有的参数并返回接收到的所有值
function foo(something) { 
  console.log( this.a, something ); 
  return this.a + something;
}
var obj = { 
  a:2
};
var bar = function() {
  return foo.apply( obj, arguments );
};
var b = bar( 3 ); // 2 3 
console.log( b ); // 5


// 创建一个 i 可以重复使用的辅助函数
function foo(something) { 
  console.log( this.a, something ); 
  return this.a + something;
}
// 简单的辅助绑定函数 
function bind(fn, obj) {
  return function() {
    return fn.apply( obj, arguments );
}; }
var obj = { 
  a:2
};
var bar = bind( foo, obj );
var b = bar( 3 ); // 2 3 
console.log( b ); // 5

// 在 ES5 中提供了内置的方法 Function.prototype. bind，它的用法如下
function foo(something) { 
  console.log( this.a, something ); 
  return this.a + something;
}
var obj = { 
  a:2
};
var bar = foo.bind( obj );
var b = bar( 3 ); // 2 3 
console.log( b ); // 5


// API调用的“上下文”
function foo(el) {
  console.log( el, this.id );
}
var obj = {
  id: "awesome"
};
// 调用 foo(..) 时把 this 绑定到 obj 
[1, 2, 3].forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome
  