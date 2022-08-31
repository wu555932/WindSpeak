let express = require('express');
let ApiArr = require("../api/test")
const bodyparser = require('body-parser');
let app = express();
let server = require('http').Server(app)  //为web服务器添加一个http协议
let io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})     //创建一个socke服务器，挂载到web服务器上
    app.use(bodyparser.json());         //处理post请求的参数
    app.all('*',(req,res,next)=>{       //设置请求的请求头
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    })


    for(let index in ApiArr) {
      if(ApiArr[index].method === 'get') {
        app.get(ApiArr[index].path,(req,res)=> {
          res.json(ApiArr[index].response)
      })
      }
      if(ApiArr[index].method === 'post') {
        app.post(ApiArr[index].method,(req,res)=> {
          res.json(ApiArr[index].response)
        })
      }
      if(ApiArr[index].method === 'put') {
        app.post(ApiArr[index].method,(req,res)=> {
          res.json(ApiArr[index].response)
        })
      }
      if(ApiArr[index].method === 'delete') {
        app.post(ApiArr[index].method,(req,res)=> {
          res.json(ApiArr[index].response)
        })
      }
    }
    // console.log(apiarr);
    io.on('connection',(socket)=> {
      console.log('介入连接');
      socket.on('message',(data)=> {
        //向大厅所有房间广播
        io.emit('message', {
          user: 'system',
          content: data,
          CreateAt: new Date().toLocaleString()
        })
        console.log('服务端接收到message事件的消息',data);
      })
      //服务端监听emit_method事件
      socket.on('emit_method',(data)=> {
        console.log('服务端接收到emit_method事件的消息',data);
      })
    })
    server.listen('3000','192.168.100.5',()=>{
      console.log('mock、websocket服务已启动，服务端口3000');
    })

