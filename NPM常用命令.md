
**1.npm常用命令:**

    npm install <包名>           安装包
    npm i <包名>                 同上
    npm i <包名>@版本号          安装指定版本
    npm i <包名>@版本号 -g       全局安装指定版本
    npm root -g                  查看全局安装包路径
    npm i <包名> --save          将安装包写入package.json依赖列表
    npm i <包名> --save-dev      将安装包写入package.json开发依赖列表
    
    npm search <包名>            搜索包
    npm view <包名>              查看包
    npm uninstall <包名>         卸载包
    npm update <包名>            更新包
    
**2.cnpm常用命令:**

    0.cnpm是淘宝提供的一个完整的npmjs.org镜像，cnpm与npm的内容每10分钟会同步一次（可下载，不能上传）。
    1.npm install -g cnpm --registry=https://registry.npm.taobao.org   安装cnpm
    2.cnpm XXXX                                                        使用同npm
    
**3.常用模块安装：**

     1.npm i -g supervisor
        使用此模块启动node，可实时监听文件 supervisor app.js
     2.npm install -g nodemon
        使用此模块启动node，可实时监听文件 
        nodemon app.js      访问localhost:3000 会直接该项目下，而非src目录下
        nodemon src/app.js  访问localhost:3000 会直接进如src目录   
        nodemon ./server.js localhost 8080
        nodemon --debug ./server.js 80
        nodemon -h     查看帮助
     3.npm i handlebars
        使用：src/helper/route.js
     4.npm i yargs --save

