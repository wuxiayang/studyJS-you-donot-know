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

// 1. 枚举
var myObject = { };
Object.defineProperty(
  myObject,
  "a",
  // 让 a 像普通属性一样可以枚举 
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  // 让b不可枚举
  { enumerable: false, value: 3 }
);
myObject.b; // 3
("b" in myObject); // true 
myObject.hasOwnProperty( "b" ); // true
// .......
for (var k in myObject) { 
  console.log( k, myObject[k] );
}
// "a" 2

// myObject.b 确实存在并且有访问值，
// 但是却不会出现在 for..in 循环中(尽管 可以通过 in 操作符来判断是否存在)。
// 原因是“可枚举”就相当于“可以出现在对象属性 的遍历中”


// 也可以通过另一种方式来区分属性是否可枚举
var myObject = { };
  Object.defineProperty(
    myObject,
    "a",
    // 让 a 像普通属性一样可以枚举 
    { enumerable: true, value: 2 }
  );
  Object.defineProperty(
    myObject,
    "b",
    // 让 b 不可枚举
    { enumerable: false, value: 3 }
  );
myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false
Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]

// propertyIsEnumerable(..) 会检查给定的属性名是否直接存在于对象中(而不是在原型链 上)
// 并且满足 enumerable:true
// Object.keys(..) 会返回一个数组，包含所有可枚举属性，
// Object.getOwnPropertyNames(..) 会返回一个数组，包含所有属性，无论它们是否可枚举

// in 和 hasOwnProperty(..) 的区别在于是否查找 [[Prototype]] 链，
// 然而，Object.keys(..) 和 Object.getOwnPropertyNames(..) 都只会查找对象直接包含的属性