


console.log("aaaaaaaaaa");
setTimeout(function () {
    console.time("time");
    for (let i = 0; i < 9999999 ; i++) {

    }
    console.timeEnd("time");
},1000);
console.log('bbbbbbbbb');