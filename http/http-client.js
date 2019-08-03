
let http = require('http');
let fs = require('fs');

//get 用于从服务器获取数据 模拟浏览器请求
http.get('http://www.baidu.com/',(res) => {
    //打印请求头等所有对象信息
    console.log(res);
    //流的方式监听读取数据
    res.on('data',(a) => {
        //打印网页内容
        console.log(a.toString())
    });

    //流的方式下载文件
    res.pipe(fs.createWriteStream('./xxx.html'));
});
