
let  path = require('path');

//常用

let p1 = "./11/22/33.txt";

//拼接字符串 00\11\22\33.txt
console.log(path.join('00',p1));
//相对路径转绝对路径  D:\git-20190711\node-tencent\path\11\22\33.txt
console.log(path.join(__dirname,p1));


//获取路径的文件夹部分 ./11/22
console.log(path.dirname(p1));
//获取路径的文件部分 (文件名 + 拓展名) 33.txt
console.log(path.basename(p1));
//获取路径中的拓展名 .txt
//指定上传资源 一般不允许js上传，防止破坏性文件，需要上传的文件需要指定拓展名
console.log(path.extname(p1));


//解析路径对象
// { root: '',
//     dir: './11/22',
//     base: '33.txt',
//     ext: '.txt',
//     name: '33' }
console.log(path.parse(p1));

