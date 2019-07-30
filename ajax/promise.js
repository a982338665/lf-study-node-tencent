// 承诺对象 promise
// 同一个模块中有两个异步，则执行结果的顺序不确定
// promise则用来控制异步执行结果的顺序

const fs = require('fs');

fs.readFile('./file1.txt',function (err,data) {
   console.log(data.toString())
});

fs.readFile('./file2.txt',function (err,data) {
   console.log(data.toString())
});