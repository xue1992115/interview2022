// 1、引入express
const express = require('express')
// 2、创建应用对象
const app = express()

// 3、创建路由规则
app.get('/server',function(req, res) {
    // 设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 设置消息体
    res.send('hello')
}) 
// 3、创建路由规则
    // app.post('/server',function(req, res) {
    //     // 设置响应头 允许跨域
    //     res.setHeader('Access-Control-Allow-Origin', "*")
    //     // 设置允许的请求头
    //     res.setHeader('Access-Control-Allow-Headers', "*")
    //     // 设置消息体
    //     res.send('hello')
    // }) 
// 可以接受任意类型的请求
app.all('/server',function(req, res) {
    // 设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 设置允许的请求头
    res.setHeader('Access-Control-Allow-Headers', "*")
    // 设置消息体
    res.send('hello')
}) 
app.get('/json',function(req, res) {
    // 设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 设置允许的请求头
    res.setHeader('Access-Control-Allow-Headers', "*")
    // 设置消息体
    const data = {
      name: 'test',
      age: 18
    }
    res.send(JSON.stringify(data))
}) 
app.get('/delay',function(req, res) {
    // 设置响应头 允许跨域
    res.setHeader('Access-Control-Allow-Origin', "*")
    // 设置允许的请求头
    res.setHeader('Access-Control-Allow-Headers', "*")
    // 设置消息体
    const data = {
      name: 'test',
      age: 18
    }
    setTimeout(() => {
        res.send(JSON.stringify(data))
    }, 2000)
    
}) 



// 4、监听端口号
app.listen(3000, () => {
    console.log('服务器连接上啦～～～～～～');
})
