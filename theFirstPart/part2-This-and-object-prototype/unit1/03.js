function foo(num) {
  console.log( "foo: " + num );
  // 记录 foo 被调用的次数
  data.count++;
}
var data = { 
  count: 0
};
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
console.log( data.count ); // 4
// this 的含义和工作原理——而是返回舒适区，使用了一种更熟悉的技术:词法作用域