//1.1编译原理
//分词
var a = 2 ;
// 会被分解为 var   a   =  2  ;

//语法分析
// var a=2的抽象树

//      VariableDeclaration

// Identifier           AssignmentExpression 
//     a                  
//                       NumericLiteral
//                            2


//代码生成
// var a = 2的AST =>指令 =》创建一个叫作a的变量（包括分配内存），并将一个值储存在a中;