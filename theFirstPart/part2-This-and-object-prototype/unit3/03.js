// 3.3 内容
var myObject = { 
  a: 2
};
myObject.a; // 2
myObject["a"]; // 2

// 如果要访问 myObject 中 a 位置上的值，我们需要使用 . 操作符或者 [] 操作符。
// .a 语法通 常被称为“属性访问”，["a"] 语法通常被称为“键访问”。
// 实际上它们访问的是同一个位 置，并且会返回相同的值 2，所以这两个术语是可以互换的。
// 在本书中我们会使用最常见 的术语“属性访问”

// 这两种语法的主要区别在于
//  . 操作符要求属性名满足标识符的命名规范
// 而 [".."] 语法 可以接受任意 UTF-8/Unicode 字符串作为属性名

// 由于 [".."] 语法使用字符串来访问属性，所以可以在程序中构造这个字符串
var myObject = { 
  a:2
};
var idx;
if (wantA) { 
  idx = "a";
}
// 之后
console.log( myObject[idx] ); // 2

// 如果你使用 string(字面量)以外的其他值作为属性名，那它首先会被转换为一个字符串。
// 即使是数字也不例外，虽然在数组下标中使用的的确是数字，
// 但是在对象属性名中数字会被转换成字符串，所以当心不要搞混对象和数组中 数字的用法
var myObject = { };
myObject[true] = "foo"; myObject[3] = "bar"; myObject[myObject] = "baz";
myObject["true"]; // "foo"
myObject["3"]; // "bar"
myObject["[object Object]"]; // "baz"