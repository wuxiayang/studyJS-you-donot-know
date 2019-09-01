for (var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })( i );
}

// 在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的
// 作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问

for (var i=1; i<=5; i++) {
    let j = i; // 是的，闭包的块作用域！
    setTimeout( function timer() {
        console.log( j );
    }, j*1000 );
}