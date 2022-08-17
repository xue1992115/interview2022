const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  // 监听客户端发送的消息
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // 服务器端上客户端发送消息
    io.emit('chat message', msg);
  });
});
// 监听端口号
server.listen(3000, () => {
  console.log('listening on *:3000 ');
});