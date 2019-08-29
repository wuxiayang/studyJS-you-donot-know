//3.4 块作用域
//let
var foo = true;
if (foo) {
  let bar = foo * 2;
  // 使用 { .. } 括号来为 let 创建一个用于绑定的块
  bar = something( bar ); 
  console.log( bar );
  // 用 let 将变量附加在一个已经存在的块作用域上的行为是隐式的
}
console.log( bar ); // ReferenceError

//1.垃圾收集

function process(data) {
  // 在这里做点有趣的事情
}
var someReallyBigData = { 
  // .. 
};
// 但是，由于 click 函数形成 了一个覆盖整个作用域的闭包，JavaScript 引擎极有可能依然保存着这个结构(取决于具体 实现)
process( someReallyBigData );  
//在执行btn的onclick事件时，没有用到这个变量
// 理论上这意味着当 process(..) 执 行后，在内存中占用大量空间的数据结构就可以被垃圾回收了。
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", 
  function click(evt) {
    console.log("button clicked");
  }, 
/*capturingPhase=*/
false );

// 改良版
function process(data) {
  // 在这里做点有趣的事情
}
// 在这个块中定义的内容可以销毁了! 
{
  let someReallyBigData = { 
    // .. 
  }; 
  process( someReallyBigData );
}
// 为变量显式声明块作用域，并对变量进行本地绑定是非常有用的工具
var btn = document.getElementById( "my_button" );
      btn.addEventListener( "click", function click(evt){
          console.log("button clicked");
}, /*capturingPhase=*/false );

//2.let循环
for (let i=0; i<10; i++) { 
  console.log( i );
}
console.log( i ); // ReferenceError
// for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，
// 事实上它将其重新绑定到了循环 的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值

//改良版
{
  let j;
  for (j=0; j<10; j++) {
    let i = j; // 每个迭代重新绑定!
    console.log( i );
  }
}

//用let重构
//1
var foo = true, baz = 10; 
if (foo) {
  var bar = 3;
  if (baz > bar) { 
    console.log( baz );
  }
  // ... 
}
//2
var foo = true, baz = 10;
if (foo) {
  var bar = 3;
// ... 
}
if (baz > bar) { 
  console.log( baz );
}
//3
var foo = true, baz = 10; 
if (foo) {
  let bar = 3;
  if (baz > bar) { // <-- 移动代码时不要忘了 bar! 
    console.log( baz );
  } 
}