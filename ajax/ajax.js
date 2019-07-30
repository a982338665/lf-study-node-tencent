


let array = [1,2,3,4];
console.log('回调函数不一定是异步：');
console.log('----------------');
array.forEach(function (v,i,t) {
    console.log(v+"="+i+"="+t);
});
console.log('----------------');
console.log('异步一定有回调函数：');
console.log('----------------');
setTimeout(function () {
    console.log("回调返回!")
},1000);
console.log('----------------');
