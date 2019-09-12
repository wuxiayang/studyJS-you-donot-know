// 3.4 遍历
// 对于数值索引的数组来说，可以使用标准的 for 循环来遍历值:
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) { 
  console.log( myArray[i] );
}
// 1 2 3

// ES5 中增加了一些数组的辅助迭代器，包括 forEach(..)、every(..) 和 some(..)。
// 每种辅 助迭代器都可以接受一个回调函数并把它应用到数组的每个元素上，
// 唯一的区别就是它们 对于回调函数返回值的处理方式不同