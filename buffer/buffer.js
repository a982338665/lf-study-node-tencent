//创建指定长度缓存区
let buffer1 = new Buffer.alloc(5);
console.log(buffer1);

//添加数据 a 61 字节码16进制，可在ASCII码表中查询
//nodejs中默认使用utf8编码，一个中文占三个字节
buffer1.write('a');//61
console.log(buffer1);

//创建带内容的缓存区: 数组中内容为10进制内容 abcAB
let buffer2 = new Buffer.from([97, 98, 99, 65, 66]);
console.log(buffer2.toString());

//按指定字符创建缓冲区
let buffer3 = new Buffer.from("张三");
//读取缓存区
console.log(buffer3.toString());
//写入缓存区域
buffer3.write("李四");
console.log(buffer3.toString());
//复制缓存区
buffer3.copy(buffer1);
console.log(buffer3.toString()+"|"+buffer1.toString());




