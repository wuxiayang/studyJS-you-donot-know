foo(); // 1
var foo;
function foo() {
    console.log( 1 );
}
foo = function() {
    console.log( 2 );
};
//console.log输出1

//相当于
function foo() {
    console.log( 1 );
}
foo(); // 1
foo = function() {
    console.log( 2 );
};
// var foo 尽管出现在 function foo()... 的声明之前，
// 但它是重复的声明（因此被忽略了），因为函数声明会被提升到普通变量之前

// 在同一个作用域中进行重复定义
foo(); // 3
function foo() {
    console.log( 1 );
}
var foo = function() {
    console.log( 2 );
};
function foo() {
    console.log( 3 );
}

foo(); // "b"
var a = true;
if (a) {
    function foo() { 
        console.log("a"); 
    }
}
else {
    function foo() { 
        console.log("b"); 
    }
}