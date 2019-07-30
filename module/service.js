//导入对象
const obj = require('./util');

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

//exports, require, module, __filename, __dirname
//打印出该模块编译后的函数
console.log(arguments.callee.toString())
//打印出该模块编译后传入的参数
console.log(arguments)
