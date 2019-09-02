foo();
function foo() {
    console.log( a ); // undefined
    var a = 2;
}
// foo 函数的声明（这个例子还包括实际函数的隐含值）被提升了，
// 因此第一行中的调用可以正常执行

function foo() {
    var a;
    console.log( a ); // undefined
    a = 2;
}
foo();
//正在讨论的 foo(..) 函数自身也会在内部对 var a 进行提升（显然并不是提升到了整个程序的最上方）

// 函数声明会被提升，但是函数表达式却不会被提升。
foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function b () {
// ...
};
// foo 此时并没有赋值（如果它是一个函数声明而不是函数表达式，那么就会赋值）
// foo() 由于对 undefined 值进行函数调用而导致非法操作，因此抛出 TypeError 异常

// 即使是具名的函数表达式，名称标识符在赋值之前也无法在所在作用域中使用
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
// ...
};
// |
var foo;
foo(); // TypeError
bar(); // ReferenceError
foo = function() {
// var bar = ...self...
// ...
}