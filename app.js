// 创建web服务器
const express = require('express');
const app = express();
app.listen(3000,()=> console.log('服务器启动'))

// 使用中间件处理文件资源
app.use(express.static('manager'));


// 处理post请求体
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

  