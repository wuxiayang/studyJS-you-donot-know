function doSomething(a) {
  b = a + doSomethingElse( a * 2 );
  console.log( b * 3 );
  // 变量 b 和函数 doSomethingElse(..) 应该是 doSomething(..) 内部具体 实现的“私有”内容
}
function doSomethingElse(a) { 
  return a - 1;
}
var b;
doSomething( 2 ); // 15

// 给予外部作用域对 b 和 doSomethingElse(..) 的“访问权限”不仅 没有必要，而且可能是“危险”的，
// 因为它们可能被有意或无意地以非预期的方式使用， 从而导致超出了 doSomething(..) 的适用条件

// 更“合理”的设计会将这些私有的具体内 容隐藏在 doSomething(..) 内部
function doSomething(a) { 
  function doSomethingElse(a) {
    return a - 1; 
  }
  var b;
  b = a + doSomethingElse( a * 2 );
  console.log( b * 3 );
}
doSomething( 2 ); // 15

// b 和 doSomethingElse(..) 都无法从外部被访问，而只能被 doSomething(..) 所控制。 
// 功能性和最终效果都没有受影响，但是设计上将具体内容私有化了，设计良好的软件都会依此进行实现