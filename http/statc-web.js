const http = require('http');
const fs = require('fs');
const path = require('path');

let server = http.createServer();

server.on('request', (req, res) => {

    if (req.url === '/') {
        req.url = '/index.html';//默认首页
    }
    let fn = './www' + req.url;
    let ext = path.extname(fn);
    let exts = {'.html': 'text/html', '.css': 'text/css'}
    fs.readFile(fn, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': exts[ext] + ';charset=utf8'});
            res.end('该访问资源不存在');
        } else {
            res.writeHead(200, {'Content-Type': exts[ext] + ';charset=utf8'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(8888, () => {
//启动 终端打印信息
    console.log('Server running at http://localhost:8888/');
});