
//常量申明
const str = "常量引用";
const api1 ="1";
const api2 ="2";


//常量暴露
exports.str = str;
exports.api1 = api1;
exports.api2 = api2;

//暴露常量+ 申明
exports.api3 = "api3";


//匿名方法暴露 无返回值
exports.show = function () {
  console.log("匿名方法暴露");
};