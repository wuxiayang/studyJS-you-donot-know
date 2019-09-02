// ES6 添加了一个特殊的语法形式用于函数声明，叫作箭头函数。
var foo = a => { 
  console.log( a );
};
foo( 2 ); // 2

var obj = {
  id: "awesome",
  cool: function coolFn() {
      console.log( this.id );
  } 
};
var id = "not awesome"
obj.cool(); // 酷
setTimeout( obj.cool, 100 ); // 不酷
// 问题在于 cool() 函数丢失了同 this 之间的绑定
// awesome
// 1
// not awesome


//解决方法
// var self = this 这种解决方案圆满解决了理解和正确使用 this 绑定的问题
var obj = { count: 0,
  cool: function coolFn() { 
    var self = this;
    if (self.count < 1) {
      setTimeout( function timer(){
        self.count++;
        console.log( "awesome?" );
      }, 100 );
    } 
  }
};
obj.cool(); 
// awesome?
// var self = this 这种解决方案圆满解决了理解和正确使用 this 绑定的问题，
// 并且没有把 问题过于复杂化，它使用的是我们非常熟悉的工具:词法作用域。
// self 只是一个可以通过 词法作用域和闭包进行引用的标识符，


// this 词法的行为
var obj = { count: 0,
  cool: function coolFn() { 
    if (this.count < 1) {
  setTimeout( () => { 
    // 箭头函数是什么鬼东西? this.count++;
      console.log( "awesome?" );
  }, 100 );} 
  }
};
obj.cool(); // 很酷吧 ?
// 箭头函数在涉及 this 绑定时的行为和普通函数的行为完全不一致。它放弃了所 有普通 this 绑定的规则，
// 取而代之的是用当前的词法作用域覆盖了 this 本来的值