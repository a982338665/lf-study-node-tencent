// 承诺对象 promise
// 同一个模块中有两个异步，则执行结果的顺序不确定
// promise则用来控制异步执行结果的顺序

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

//打印数据，第一个参数成功，第二个失败
promise1.then(function (data) {
    console.log("success:%s",data);
    const promise2 = new Promise((reslove,reject) => {
        fs.readFile('./file3.txt',function (err,data) {
            if(err){
                reject("file2 读取失败!");
            }else{
                reslove(data.toString());
            }
        });
    });
    promise2.then(function (data) {
        const promise3 = new Promise((reslove,reject) => {
            fs.readFile('./file3.txt',function (err,data) {
                if(err){
                    reject("file2 读取失败!");
                }else{
                    reslove(data.toString());
                }
            });
        });
        console.log("success:%s",data);
    },function (err) {
        console.log("fail:%s",err);
    });

},function (err) {
    console.log("fail:%s",err);
});

//
// fs.readFile('./file2.txt',function (err,data) {
//    console.log(data.toString())
// });