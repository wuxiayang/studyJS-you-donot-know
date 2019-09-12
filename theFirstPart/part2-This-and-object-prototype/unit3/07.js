// 3.3.5 属性描述符
var myObject = { 
  a:2
};
Object.getOwnPropertyDescriptor( myObject, "a" );
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true 
// }


// 在创建普通属性时属性描述符会使用默认值，
// 我们也可以使用 Object.defineProperty(..) 来添加一个新属性或者修改一个已有属性(如果它是 configurable)并对特性进行设置
var myObject = {};
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true, 
  configurable: true, 
  enumerable: true
} );
myObject.a; // 2
// 使用 defineProperty(..) 给 myObject 添加了一个普通的属性并显式指定了一些特性



// writable -------
// 决定是否可以修改属性的值
var myObject = {};
  Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // 不可写! 
    configurable: true, 
    enumerable: true
} );
myObject.a = 3;
myObject.a; // 2
// 如果在严格模式下，这 种方法会出错
"use strict";
var myObject = {};
     Object.defineProperty( myObject, "a", {
         value: 2,
writable: false, // 不可写! configurable: true, enumerable: true
     } );
     myObject.a = 3; // TypeError
// TypeError 错误表示我们无法修改一个不可写的属性。

// Configurable-----
// 只要属性是可配置的，就可以使用 defineProperty(..) 方法来修改属性描述符
var myObject = { 
  a:2
};
myObject.a = 3;
myObject.a; // 3
Object.defineProperty( myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // 不可配置!
  enumerable: true 
} );
myObject.a; // 4
myObject.a = 5;
myObject.a; // 5
Object.defineProperty( myObject, "a", {
  value: 6,
  writable: true, 
  configurable: true, 
  enumerable: true
} ); // TypeError

// 属性是 configurable:false
// 即便属性是 configurable:false，我们还是可以 把 writable 的状态由 true 改为 false，但是无法由 false 改为 true
// 最后一个 delete 语句(静默)失败了，因为属性是不可配置的
// 除了无法修改，configurable:false 还会禁止删除这个属性:
var myObject = { 
  a:2
};
myObject.a; // 2
delete myObject.a; 
myObject.a; // undefined
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true, 
  configurable: false, 
  enumerable: true
} );
myObject.a; // 2 
delete myObject.a; 
myObject.a; // 2
// delete 只用来直接删除对象的(可删除)属性。如果对象的某个属性是某个对象 / 函数的最后一个引用者，
// 对这个属性执行 delete 操作之后，这个未引用的对象 / 函数就可以被垃圾回收。
// 但是，不要把 delete 看作一个释放内存的工具(就像 C/C++ 中那 样)，它就是一个删除对象属性的操作，仅此而已

// Enumerable
// 这个描述符控制的是属性是否会出现在对象的属性枚举中