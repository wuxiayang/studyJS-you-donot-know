// 3.3.1 可计算属性名

// ES6 增加了可计算属性名，可以在文字形式中使用 [] 包裹一个表达式来当作属性名
var prefix = "foo";
var myObject = {
  [prefix + "bar"]:"hello", 
  [prefix + "baz"]: "world"
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world