// 如果要从函数对象内部引用它自身，那只使用 this 是不够的。一般来说你需要通过一个指 向函数对象的词法标识符(变量)来引用它
function foo() {
  foo.count = 4; // foo 指向它自身
}
// 传入 setTimeout(..) 的回调函数没有名称标识符(这种函数被称为 匿名函数)，因此无法从函数内部引用自身
setTimeout( 
  function(){
  // 匿名(没有名字的)函数无法指向自身
  }, 
10 );
// 另一种解决方法是使用 foo 标识符替代 this 来引用函数 对象
function foo(num) {
  console.log( "foo: " + num );
  // 记录 foo 被调用的次数
  foo.count++;
}
foo.count=0 
var i;
for (i=0; i<10; i++) { 
  if (i > 5) {
    foo( i ); 
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次? 
console.log( foo.count ); // 4


// 另一种方法是强制 this 指向 foo 函数对象
function foo(num) {
  console.log( "foo: " + num );
  // 记录 foo 被调用的次数
  // 注意，在当前的调用方式下(参见下方代码)，this 确实指向 foo 
  this.count++;
}
foo.count = 0; 
var i;
  for (i=0; i<10; i++) { 
    if (i > 5) {
  // 使用 call(..) 可以确保 this 指向函数对象 foo 本身
      foo.call( foo, i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次? 
console.log( foo.count ); // 4


function foo() { 
  var a = 2;
  this.bar(); 
}
function bar() { 
  console.log( this.a );
}
foo(); // ReferenceError: a is not defined
// 调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符