// 现代的模块机制
var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();
// 这段代码的核心是 modules[name] = impl.apply(impl, deps) 。为了模块的定义引入了包装
// 函数（可以传入任何依赖），并且将返回值，也就是模块的 API，储存在一个根据名字来管理的模块列表中

MyModules.define( "bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
} );
MyModules.define( "foo", ["bar"], function(bar) {
    var hungry = "hippo";
    function awesome() {
        console.log( bar.hello( hungry ).toUpperCase() );
    }
    return {
        awesome: awesome
    };
} );
var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );
console.log(
    bar.hello( "hippo" )
); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO
// " foo " 和 "bar" 模块都是通过一个返回公共 API 的函数来定义的。
//  "foo" 甚至接受 "bar" 的示例作为依赖参数，并能相应地使用它。