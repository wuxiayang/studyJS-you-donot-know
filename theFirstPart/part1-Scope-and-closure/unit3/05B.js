// B.1 Traceur
{
  try {
  throw undefined;
  } catch (a) { 
    a = 2;
    console.log( a );//2
  }
}
console.log( a );//undefined
// B.2 隐式和显式作用域
// 称作 let 作用域或 let 声明
let (a = 2) {
  // 通过强制 性地将所有变量声明提升到块的顶部来产生更简洁的代码
  console.log( a ); // 2
}
console.log( a ); // ReferenceError