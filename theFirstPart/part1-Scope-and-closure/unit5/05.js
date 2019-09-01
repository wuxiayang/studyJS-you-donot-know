bar.js
function hello(who) {
return "Let me introduce: " + who;
}
export hello;

// foo.js
// 仅从 "bar" 模块导入 hello()
import hello from "bar";
var hungry = "hippo";
function awesome() {
console.log(
hello( hungry ).toUpperCase()
);
}
export awesome;

// baz.js
// 导入完整的 "foo" 和 "bar" 模块
module foo from "foo";
module bar from "bar";
console.log(
bar.hello( "rhino" )
); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO