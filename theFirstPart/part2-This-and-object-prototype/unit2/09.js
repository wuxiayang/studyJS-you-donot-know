function foo() {
    // 返回一个箭头函数
    return (a) => {
        //this 继承自 foo()
        console.log( this.a );
    };
}
var obj1 = {
    a:2
};
var obj2 = {
    a:3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 不是 3 ！
// foo() 内部创建的箭头函数会捕获调用时 foo() 的 this 。由于 foo() 的 this 绑定到 obj1 ，
// bar （引用箭头函数）的 this 也会绑定到 obj1 ，箭头函数的绑定无法被修改。（ new 也不
// 行！

// 箭头函数最常用于回调函数中，例如事件处理器或者定时器
function foo() {
    setTimeout(() => {
        // 这里的 this 在此法上继承自 foo()
        console.log( this.a );
    },100);
}
var obj = {
    a:2
};
foo.call( obj ); // 2

// 箭头函数可以像 bind(..) 一样确保函数的 this 被绑定到指定对象，此外，其重要性还体
// 现在它用更常见的词法作用域取代了传统的 this 机制
function foo() {
    var self = this; // lexical capture of this
    setTimeout( function(){
        console.log( self.a );
    }, 100 );
}
var obj = {
    a: 2
};
foo.call( obj ); // 2