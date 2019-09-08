// 间接引用
function foo() {
    console.log( this.a );
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
// 赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是
// p.foo() 或者 o.foo() 。根据我们之前说过的，这里会应用默认绑定
(p.foo = o.foo)(); // 2

// 注意：对于默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是
// 函数体是否处于严格模式。如果函数体处于严格模式， this 会被绑定到 undefined ，否则
// this 会被绑定到全局对象