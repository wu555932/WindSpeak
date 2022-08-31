const express = require('express');
const app = express();
let server = require('http').server(app)    //创建websocket服务器
let io = require('socket.io')(server)


    io.on('connection',function(socket) {
      console.log('接入连接');
      socket.on('emit_method',function(data){
        console.log("data",data);
      })
    })
server.listen(8000,()=> {
  console.log('websocket服务已启动');
})