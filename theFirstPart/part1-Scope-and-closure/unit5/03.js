// 模块
function foo() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log( something );
    }
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
}
// 只有两个私有数据变量 something和 another ，
// 以及 doSomething() 和 doAnother() 两个内部函数，它们的词法作用域（而这就是闭包）也就是 foo() 的内部作用域
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log( something );
    }
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
// 这个模式在 JavaScript 中被称为模块
// 首先， CoolModule() 只是一个函数，必须要通过调用它来创建一个模块实例。
// 如果不执行外部函数，内部作用域和闭包都无法被创建。
// 其次， CoolModule() 返回一个用对象字面量语法 { key: value, ... } 来表示的对象。
// 这个返回的对象中含有对内部函数而不是内部数据变量的引用。
// 我们保持内部数据变量是隐藏且私有的状态。可以将这个对象类型的返回值看作本质上是模块的公共 API。
// 这个对象类型的返回值最终被赋值给外部的变量 foo ，
// 然后就可以通过它来访问 API 中的属性方法，比如 foo.doSomething() 

// doSomething() 和 doAnother() 函数具有涵盖模块实例内部作用域的闭包（通过调用CoolModule() 实现）。
// 当通过返回一个含有属性引用的对象的方式来将函数传递到词法作用域外部时，我们已经创造了可以观察和实践闭包的条件

// 一个具有函数属性的对象本身并不是真正的模块。从方便观察的角度看，
// 一个从函数调用所返回的，只有数据属性而没有闭包函数的对象并不是真正的模块。
var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log( something );
    }
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// 模块也是普通的函数，因此可以接受参数
function CoolModule(id) {
    function identify() {
        console.log( id );
    }
    return {
        identify: identify
    };
}
var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );
foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"

// 命名将要作为公共 API 返回的对象
var foo = (function CoolModule(id) {
    function change() {
    // 修改公共 API
        publicAPI.identify = identify2;
    }
    function identify1() {
        console.log( id );
    }
    function identify2() {
        console.log( id.toUpperCase() );
    }
    var publicAPI = {
        change: change,
        identify: identify1
    };
    return publicAPI;
})( "foo module" );
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE



