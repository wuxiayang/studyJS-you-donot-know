// 3.3.9 Getter和Setter
// 对于访问描述符来说，JavaScript 会忽略它们的 value 和 writable 特性，取而代之的是关心 set 和 get(还有 configurable 和 enumerable)特性
var myObject = {
  // 给 a 定义一个 getter 
  get a() {
    return 2; 
  }
};
Object.defineProperty( 
  myObject, // 目标对象 
  "b", // 属性名
  {
    // 描述符
    // 给 b 设置一个 getter
    get: function(){ return this.a * 2 },
    // 确保 b 会出现在对象的属性列表中
    enumerable: true
  }
);
myObject.a; // 2
myObject.b; // 4

// 为了让属性更合理，还应当定义 setter，
// 和你期望的一样，setter 会覆盖单个属性默认的 [[Put]](也被称为赋值)操作。
// 通常来说 getter 和 setter 是成对出现的(只定义一个的话 通常会产生意料之外的行为):
var myObject = {
  // 给 a 定义一个 getter 
  get a() {
    return this._a_; 
  },
  // 给 a 定义一个 setter 
  set a(val) {
    this._a_ = val * 2; 
  }
};
myObject.a = 2;
myObject.a; // 4