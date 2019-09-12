// 3.3.4 复制对象
function anotherFunction() { /*..*/ }
var anotherObject = { 
  c: true
};
var anotherArray = [];
var myObject = { 
  a: 2,
  b: anotherObject, // 引用，不是复本! 
  c: anotherArray, // 另一个引用!
  d: anotherFunction
};
anotherArray.push( anotherObject, myObject );

// 对于浅拷贝来说，复制出的新对象中 a 的值会 复制旧对象中 a 的值，也就是 2，
// 但是新对象中 b、c、d 三个属性其实只是三个引用，
// 它们 和旧对象中 b、c、d 引用的对象是一样的

// 对于深复制来说，除了复制 myObject 以外还会复 制 anotherObject 和 anotherArray。
// 这时问题就来了，anotherArray 引用了 anotherObject 和 myObject，
// 所以又需要复制 myObject，这样就会由于循环引用导致死循环

// 对于JSON安全(也就是说可以被序列化为一个JSON字符串并且可以根据这个字符串解析出一个结构和值完全一样的对象)的对象来说，有一种巧妙的复制方法
// var newObj = JSON.parse( JSON.stringify( someObj ) );

// Object.assign(..) 方法的第一个参数是目标对象，之后还可以跟一个 或多个源对象。
// 它会遍历一个或多个源对象的所有可枚举(enumerable，参见下面的代码) 的自有键(owned key，很快会介绍)
// 并把它们复制(使用 = 操作符赋值)到目标对象，最 后返回目标对象
var newObj = Object.assign( {}, myObject );
newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true
