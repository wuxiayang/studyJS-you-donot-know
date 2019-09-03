function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call( this ); 
  console.log( greeting );
}
var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};
identify.call( me ); // KYLE
identify.call( you ); // READER
speak.call( me ); // Hello, 我是 KYLE speak.call( you ); // Hello, 我是 READER

// 如果不使用 this，那就需要给 identify() 和 speak() 显式传入一个上下文对象。
function identify(context) {
  return context.name.toUpperCase();
}
function speak(context) {
  var greeting = "Hello, I'm " + identify( context ); 
  console.log( greeting );
}
identify( you ); // READER
speak( me ); //hello, 我是 KYLE
