// 3.3.6 不变性
// 所有的方法创建的都是浅不变形，也就是说，它们只会影响目标对象和它的直接属性。
// 如果目标对象引用了其他对象(数组、对象、函数，等)，其他对象的内容不受影响，仍然是可变的
myImmutableObject.foo; // [1,2,3]
myImmutableObject.foo.push( 4 );
myImmutableObject.foo; // [1,2,3,4]
// 1. 对象常量
// 结合 writable:false 和 configurable:false 就可以创建一个真正的常量属性(不可修改、 重定义或者删除)
var myObject = {};
Object.defineProperty( myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false 
} );

// 2. 禁止扩展
// 如果你想禁止一个对象添加新属性并且保留已有属性，可以使用 Object.prevent Extensions(..)
var myObject = { 
  a:2
};
Object.preventExtensions( myObject );
myObject.b = 3;
myObject.b; // undefined
// 在非严格模式下，创建属性 b 会静默失败。在严格模式下，将会抛出 TypeError 错误

// 3. 密封



// 4. 冻结