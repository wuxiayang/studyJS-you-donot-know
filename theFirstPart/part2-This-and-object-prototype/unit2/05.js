//优先级
function foo() {
    console.log( this.a );
}
var obj1 = {
    a: 2,
    foo: foo
};
var obj2 = {
    a: 3,
    foo: foo
};
//隐式绑定
obj1.foo(); // 2
obj2.foo(); // 3
//显式绑定
obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2


function foo(something) {
    this.a = something;
}
var obj1 = {
    foo: foo
};
var obj2 = {};
obj1.foo( 2 );
console.log( obj1.a ); // 2
obj1.foo.call( obj2, 3 );//隐式绑定
console.log( obj2.a ); // 3
var bar = new obj1.foo( 4 ); // new 绑定
console.log( obj1.a ); // 2
console.log( bar.a ); // 4

// 硬绑定（也是显式绑定的一种）似乎比 new 绑定的优先级更高
function foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2
var baz = new bar(3);
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
// bar 被硬绑定到 obj1 上，但是 new bar(3) 并没有像我们预计的那样把 obj1.a修改为 3。
// 相反， new 修改了硬绑定（到 obj1 的）调用 bar(..) 中的 this 。
// 因为使用了new 绑定，我们得到了一个名字为 baz 的新对象，并且 baz.a 的值是 3