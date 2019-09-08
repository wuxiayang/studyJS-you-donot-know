// 软绑定
if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call( arguments, 1 );
    var bound = function() {
        return fn.apply(
            (!this || this === (window || global)) ?
            obj : this
            curried.concat.apply( curried, arguments )
        );
    };
        bound.prototype = Object.create( fn.prototype );
        return bound;
    };
}
// softBind(..) 的其他原理和 ES5 内置的 bind(..) 类似。它会对指定的函
// 数进行封装，首先检查调用时的 this ，如果 this 绑定到全局对象或者 undefined ，那就把
// 指定的默认对象 obj 绑定到 this ，否则不会修改 this

function foo() {
    console.log("name: " + this.name);
}
var obj = { name: "obj" },
obj2 = { name: "obj2" },
obj3 = { name: "obj3" };
var fooOBJ = foo.softBind( obj );
fooOBJ(); // name: obj
obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2 <---- 看！！！
fooOBJ.call( obj3 ); // name: obj3 <---- 看！
setTimeout( obj2.foo, 10 );
// name: obj <---- 应用了软绑定

// 可以看到，软绑定版本的 foo() 可以手动将 this 绑定到 obj2 或者 obj3 上，但如果应用默
// 认绑定，则会将 this 绑定到 obj 