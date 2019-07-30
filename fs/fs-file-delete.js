const fs = require('fs');

//unlink删除的文件可恢复
fs.unlink('./data-ajax-write.json',(err) => {
    console.log(err?err:'成功');
});