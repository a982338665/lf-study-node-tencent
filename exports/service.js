//导入对象
const obj = require('./util');
const fun = require('./function');
const object = require('./obj');

//导入对象属性及方法
const {str,api1,api2,show,api3} =  require('./util');

//直接接收参数打印
console.log(str + "|"+api1+"|"+api2+"|"+ api3);

//返回对象
console.log(obj);
console.log(obj.str);
//调用匿名方法 无返回值 执行完毕后 仍会打印 undefined
console.log(obj.show());
console.log(show());
//判断module.exports 是否等于exports
console.log(module.exports === exports);
console.log(fun());
console.log(object.show());




