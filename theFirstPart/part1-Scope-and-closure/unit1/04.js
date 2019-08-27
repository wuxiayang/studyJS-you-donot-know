//1.4异常
function foo(a) { console.log( a + b ); b = a;
}
foo( 2 );
// 严格模式禁止自动或隐式地创建全局变量
// 如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError 异常。值得注意的是，ReferenceError 是非常重要的异常类型
// 对一个非函数类型的值进行函数调用，或着引用null或undefined类型的值中的属性，那么引擎会抛出另外一种类型的异常，叫作 TypeError
// ReferenceError 同作用域判别失败相关，而 TypeError 则代表作用域判别成功了，但是对结果的操作是非法或不合理的