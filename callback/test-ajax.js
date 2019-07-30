


console.log("aaaaaaaaaa");
setTimeout(function () {
    console.log("TTTTTT");
},0);//windows 写0 至少也是在15毫秒后执行，linux在10毫秒后执行
//以上方法执行大概在1秒左右
for (let i = 0; i < 9999999999; i++) {

}
console.log('bbbbbbbbb');