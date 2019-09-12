// 3.3.10 存在性
// 可以在不访问属性值的情况下判断对象中是否存在这个属性
// in 操作符会检查属性是否在对象及其 [[Prototype]] 原型链中
var myObject = { 
  a:2
};
("a" in myObject); // true
("b" in myObject); // false
myObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "b" ); // false