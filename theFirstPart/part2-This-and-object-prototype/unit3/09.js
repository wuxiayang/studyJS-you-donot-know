// 3.3.7 [[Get]]
var myObject = { 
  a: 2
};
myObject.a; // 2
// myObject.a 是一次属性访问，但是这条语句并不仅仅是在 myObjet 中查找名字为 a 的属性
// 在语言规范中，myObject.a 在 myObject 上实际上是实现了 [[Get]] 操作(有点像函数调 用:[[Get]]())。
// 对象默认的内置 [[Get]] 操作首先在对象中查找是否有名称相同的属性， 如果找到就会返回这个属性的值

// 如果无论如何都没有找到名称相同的属性，那 [[Get]] 操作会返回值 undefined
var myObject = { 
  a:2
};
myObject.b; // undefined

// 这种方法和访问变量时是不一样的。如果你引用了一个当前词法作用域中不存在的 变量，
// 并不会像对象属性一样返回 undefined，而是会抛出一个 ReferenceError 异常
var myObject = { 
  a: undefined
};
myObject.a; // undefined
myObject.b; // undefined

// 3.3.8 [[Put]]
