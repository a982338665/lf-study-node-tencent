// 承诺对象 promise
// 同一个模块中有两个异步，则执行结果的顺序不确定
// promise则用来控制异步执行结果的顺序
// 统筹

const fs = require('fs');

//将异步数据交给promise对象处理
const promise1 = new Promise(function (reslove,reject) {
    fs.readFile('./file1.txt',function (err,data) {
        if(err){
            reject("file1 读取失败!");
        }else{
           reslove(data.toString());
        }
    });
});
const promise2 = new Promise(function (reslove,reject) {
    fs.readFile('./file2.txt',function (err,data) {
        if(err){
            // reject("file2 读取失败!");
        }else{
           reslove(data.toString());
        }
    });
});

//使用promise控制顺序结果
//[promise1,promise2]决定先后顺序，哪个在前先出哪个
// 若其中一个读取错误，则无法输出datas数据，类似于同步，一旦其中一个出错，则停止不在继续
Promise.all([promise1,promise2]).then(function (datas) {
    console.log(datas);
},function (errs) {
    console.log(errs);
});