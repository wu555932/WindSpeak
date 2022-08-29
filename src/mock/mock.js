let express = require('express');
let  mock = require('mockjs');
let ApiArr = require("../api/test")
const bodyparser = require('body-parser');

let app = express();
    
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

    app.listen('3000',()=>{
      console.log('mock服务已启动，服务端口3000');
    })

