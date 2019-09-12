// 3.3.1 可计算属性名

// ES6 增加了可计算属性名，可以在文字形式中使用 [] 包裹一个表达式来当作属性名
var prefix = "foo";
var myObject = {
  [prefix + "bar"]:"hello", 
  [prefix + "baz"]: "world"
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world


// 3.3.2 属性与方法
// 无论返回值是什么类型，每次访问对象的属性就是属性访问
function foo() { 
  console.log( "foo" );
}
var someFoo = foo; // 对 foo 的变量引用
var myObject = { 
  someFoo: foo
};
foo; // function foo(){..}
someFoo; // function foo(){..} 
myObject.someFoo; // function foo(){..}
// someFoo 和 myObject.someFoo 只是对于同一个函数的不同引用，并不能说明这个函数是特 别的或者“属于”某个对象。如果 foo() 定义时在内部有一个 this 引用，
// 那这两个函数引用的唯一区别就是 myObject.someFoo 中的 this 会被隐式绑定到一个对象。无论哪种引用 形式都不能称之为“方法”
// 函数并不是在定义时成为方法，而是在被调用时根据调用位置的不同成为方法

// 即使你在对象的文字形式中声明一个函数表达式，这个函数也不会“属于”这个对象—— 它们只是对于相同函数对象的多个引用
var myObject = {
  foo: function() {
    console.log( "foo" );
  }
};
var someFoo = myObject.foo; 
someFoo; // function foo(){..} 
myObject.foo; // function foo(){..}
  