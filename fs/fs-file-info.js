

//读取文件基本信息
// Stats {
//     dev: 2990105381,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 202380508255255900,
//     size: 37,                        文件大小，单位字节
//     blocks: undefined,
//     atimeMs: 1564294220457.2188,
//     mtimeMs: 1564294220458.2397,
//     ctimeMs: 1564294546967.9153,
//     birthtimeMs: 1564294220457.2188,
//     atime: 2019-07-28T06:10:20.457Z,
//     mtime: 2019-07-28T06:10:20.458Z,
//     ctime: 2019-07-28T06:15:46.968Z,
//     birthtime: 2019-07-28T06:10:20.457Z
// }
const fs = require('fs');

fs.stat("./data-ajax.json",(err,data) => {
    if(err){
        throw err;
    }else{
        console.log(data);
    }
});

