// 类型
// 内置对象

var strPrimitive = "I am a string"; 
typeof strPrimitive; // "string" 
strPrimitive instanceof String; // false


var strObject = new String( "I am a string" ); 
typeof strObject; // "object"
strObject instanceof String; // true
// strObject 是由 String 构造函数创建的一个对象
// 从代码中可以看 到，strObject 是由 String 构造函数创建的一个对象

// 检查 sub-type 对象
Object.prototype.toString.call( strObject ); // [object String]


// 原始值 "I am a string" 并不是一个对象，它只是一个字面量，并且是一个不可变的值。 
// 如果要在这个字面量上执行一些操作，比如获取长度、访问其中某个字符等，那需要将其转换为 String 对象
// 在必要时语言会自动把字符串字面量转换成一个 String 对象，也就是说你并不需要 显式创建一个对象


var strPrimitive = "I am a string"; 
console.log( strPrimitive.length ); // 13 
console.log( strPrimitive.charAt( 3 ) ); // "m"
// 使用以上两种方法，我们都可以直接在字符串字面量上访问属性或者方法，
// 之所以可以这样做，是因为引擎自动把字面量转换成 String 对象，所以可以访问属性和方法