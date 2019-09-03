// 绑定规则
// ----默认绑定
function foo() { 
  console.log( this.a );
  // 当调用 foo() 时，this.a 被解析成了全局变量 a
}
// 函数调用时应用了 this 的默认绑定，因此 this 指向全局对象
var a = 2; 
foo(); // 2

// 如果使用严格模式(strict mode)，那么全局对象将无法使用默认绑定，因此 this 会绑定到 undefined
function foo() { 
  "use strict";
  console.log( this.a );
}
var a = 2;
foo(); // TypeError: this is undefined

function foo() { 
  console.log( this.a );
}
var a = 2;
(function(){
  "use strict";
  foo(); // 2
})();


//----隐式绑定
// 当函数引 用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象
function foo() { 
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo 
};
obj.foo(); // 2
// 当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时,
// 隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
// 因为调用 foo() 时this被绑定到 obj，因此 this.a 和 obj.a 是一样的


// 对象属性引用链中只有最顶层或者说最后一层会影响调用位置
function foo() { 
  console.log( this.a );
}
var obj2 = { 
  a: 42,
  foo: foo 
};
var obj1 = { 
  a: 2,
  obj2: obj2 
};
obj1.obj2.foo(); // 42

// 隐式丢失

function foo() { 
  console.log( this.a );
}
var obj = { 
  a: 2,
  foo: foo 
};
var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性 
bar(); // "oops, global"
// 它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定

// 在传入回调函数时
function foo() { 
  console.log( this.a );
}
function doFoo(fn) {
  // fn 其实引用的是 foo 
  fn(); // <-- 调用位置!
}
var obj = { 
  a: 2,
  foo: foo 
};
var a = "oops, global"; // a 是全局对象的属性 
doFoo( obj.foo ); // "oops, global"