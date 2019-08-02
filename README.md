# node-tencent
# node文档:nodejs.cn/api/

**0.开发人员必知的5种开源协议(BSD,Apache,GPL,LGPL,MIT)：**
    
    BSD:可二次开发可商用，公司首选 
    Apache:可二次开发可商用,要标原代码注著作权
    GPL:可二次开发可商用，不允许修改后和衍生的代码做为闭源的商业软件发布和销售，这就是能够使用各种免费linux的原因
    LGPL:允许商业软件通过类库引用(link)方式使用LGPL类库而不需要开源商业软件的代码
        GPL/LGPL都保障原作者的知识产权，避免有人利用开源代码复制并开发类似的产品
    MIT:MIT是和BSD一样宽范的许可协议,作者只想保留版权,而无任何其他了限制.
    
**1.nodejs简介:**

    1.nodejs = js执行环境 + js拓展功能
    2.nodejs 基于Chrome V8引擎的 javaScript 运行环境
    3.nodejs 使用了一个事件驱动，非阻塞式io模型
    4.nodejs 的包管理器npm，是全球最大的开源生态系统
    5.nodejs 是一个运行js 的环境
    
**2.nodejs 和 js 的区别:**

    1.nodejs 是一个js的运行环境，与浏览器的js执行功能一样
    2.js 是一门编程语言

**3.nodejs 下载安装：**
    
    1.node -v
    2.node xx.js

**4.nodejs 模块：**

    1.自定义模块:所有js文件均可单独做为一个模块
    2.主模块:程序入口启动模块，通常起名为 main.js /app.js /index.js 即在package.json中的main申明
    3.一个文件即一个模块(函数)，经过编译后可发现，每个文件中的内容最后都会包裹在一个function函数中，可使用console.log(arguments.callee.toString())查看
      function (    -->执行node时，每个文件都会被封装在此函数中
        exports,    -->用来暴露对象
        require,    -->用来引用暴露对象
        module,     -->模块对象，包含当前文件所有内容
        __filename, -->文件路径
        __dirname   -->目录路径
      ) {}
      
**5.require模块:返回对象**

    0.nodejs中查找模块默认在 node_module模块下
    1.引入自定义模块：const obj = require('./util'); 
    2.引入第三方模块：const obj = require('util'); 
        npmjs.com
    3.引入核心模块：const obj = require('fs'); 
    4.注意事项：
        ·一个模块中多次引入另一个模块，该模块只加载一次，其余变量赋值(因为第一次读取会将数据加载在缓存中)
    
**6.exports模块：**

    1.module.exports === exports :exports是module.exports的引用
    2.因为exports是module.exports的引用，所以如果仅 暴露函数，而非暴露对象需要使用module.exports去暴露函数，若使用exports暴露则不会成功，
      因为他只是module.exports的引用。若直接暴露函数，则原来的exports指向则会失效仅存在一个
    3.当module.exports的指向被改变，则exports就会变成普通对象
    
**7.module模块:**

    0.exports是module.exports的引用
    1.module.exports.属性 = 值
    2.module.exports.方法 = 函数
    3.module.exports = 值/函数 
    4.console.log(arguments.callee.toString())可查看
    
**8.package包描述文件管理：**

    1.NPM = Node Package Manager (node 包管理工具)
    2.默认的入口模块为index.js,或者在package.json文件中的main属性中设置入口模块
    3.package.json文件：nodejs的项目描述文件
        ·创建package.json文件：npm init
            package name: (tencent) node-tencent
            version: (1.0.0)
            description: hello
            entry point: (index.js)
            test command:
            git repository: (https://github.com/a982338665/node-tencent.git)
            keywords:
            author: luofeng
            license: (ISC) MIT  开源
        ·创建package.json文件：npm init -y （自动获取创建内容）
    4.npm常用命令：
        npm install <包名>           安装包
        npm i <包名>                 同上
        npm i <包名>@版本号          安装指定版本
        npm i <包名>@版本号 -g       全局安装指定版本
        npm root -g                  查看全局安装包路径
        npm i <包名> --save          将安装包写入package.json依赖列表
        npm i <包名> --save-dev      将安装包写入package.json开发依赖列表
        
**9.控制台输出:**

**10.nodejs作用域:**

    1.局部对象  var 需要exports暴露才可以使用
    2.全局对象：global   不需要暴露，直接引入即可使用 (使用时global可不写,等同于window) --一般不建议使用
    
**11.nodejs回调函数：**
    
    1.定义一个普通函数
    2.将该函数作为参数传递给另一个函数
    3.用途：回调任务 当异步获取时，需等待结果回调
    4.异步方法总会在同步方法执行之后执行
    
**12.异步的实现:node-tencent\ajax**

    1.回调函数：回调函数不一定是异步，异步一定有回调函数
    2.事件: 事件绑定
    3.promise对象: 是ES6中新增的承诺对象，用于对异步的操作进行消息的传递, promise则用来控制异步执行结果的顺序
      promise状态：只能从一个到另一个 Pending->Resolved 或者 Pending->Rejected
        1.Pending   等待中
        2.Resolved  成功
        3.Rejected  失败 
    
**13.缓存区buffer：node-tencent\buffer**

    1.内存中开辟出的用来存放字节码临时区域,字节码16进制，可在ASCII码表中查询
    2.创建缓存区：--
    
**14.fs文件读取：**

    1.文件读取的两种方式：
        1.直接读取：将硬盘上所有内容一次性读入内存中才出发回调函数
            sync:-- node-tencent\fs\fs-sync.js
            ajax:-- node-tencent\fs\fs-ajax.js
        2.流式读取： 一节一节读取，适用于大文件读取
            
**15.网络路径与http模块:**

    
    