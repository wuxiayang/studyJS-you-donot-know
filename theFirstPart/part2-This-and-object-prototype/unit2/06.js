// 被忽略的 this
function foo() {
    console.log( this.a );
}
var a = 2;
foo.call( null ); // 2
// 一种非常常见的做法是使用 apply(..) 来“展开”一个数组，并当作参数传入一个函数。
// 类似地， bind(..) 可以对参数进行柯里化（预先设置一些参数），这种方法有时非常有用：
function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}
// 把数组“展开”成参数
foo.apply( null, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3

// 更安全的 this
// Object.create(null) 和 {} 很像，但是并不会创建 Object.prototype 这个委托，所以它比 {} “更空”
function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}
// 我们的 DMZ 空对象
var ø = Object.create( null );
// 把数组展开成参数
foo.apply( ø, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3