<template>
  <div class="container">
    <h2 class="title">Talk Window </h2>
    <!-- <input type="input" v-model="message" />
    <button style="width:50px;height:50px;" @click="init">send</button> -->
    <ul class="textbox" id="textbox"></ul>
    <div class="input">
      <Input ref="input" v-model="message" type="text" placeholder="Enter something..." />
      <Button type="primary" @click="send">Send</Button>
    </div>

  </div>
</template>

<script>
import socketClient from 'socket.io-client'
// import Vue from 'vue'
  export default {
    name: "SocketPage",
    data() {
      return {
        message: '',
        socket: ''
      }
    },
    methods: {
      init() {
        //初始化创建一个websocket连接
        return  new Promise((resolve,reject)=> {
          try {
            let s = socketClient('http://192.168.100.5:3000/');
            resolve(s)
          } catch (error) {
            reject('error',error)
          }
        })
      },
      send() {
        if(this.socket) {
          this.socket.emit('message',{
            client: this.message,
          })
          this.message = '';
        } else {
          this.init().then((res)=> {
            this.socket = res;
            this.socket.emit('message',{
              client: this.message,
            })
            this.message = ''
          });
        }
      },
      entrysend(e) {
        let code = e.keyCode;
        if(code === 13) {
          this.send();
        }
      },
      // addNode(data) {
      //   console.log("data",data);
      //   let Profile = Vue.extend({
      //     template: "<div><p style='color:#ccc;'><span class='user'>{{data.user}}</span>{{data.CreateAt}}</p><p class='content'>{{data.content.client}}</p></div>",
      //     data() {
      //       return {
      //         data: data
      //       }
      //     }
      //   })
      //   new Profile().$mount('#textbox')
      // }
    },
    mounted() {
      //打开websocket连接
      this.$socket.open();
      console.log("ref",this.$refs.input);
      //设置回车发送消息
      this.$refs.input.handleKeydown = (e) =>{
        this.entrysend(e)
      }
      
    },
    watch: {
      socket() {
        if(this.socket) {
          //获取服务端广播的内容
        this.socket.on('message',(data)=> {
            // console.log("服务端发来的消息",data.content.client);
            // this.addNode(data)
            let ul = document.querySelector('#textbox');
            let li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = `<p style='color:#ccc;'>
                                  <span class="user">${data.user}</span>
                                  ${data.CreateAt}
                                </p>
                                <p class="content">${data.content.client}</p>`
                ul.appendChild(li);
                ul.scrollTop =  ul.scrollHeight;

           })
      }
      }
    },
    destroyed() {
      //关闭websocket连接
      this.$socket.close();
    },
    sockets: {
    connecting () {
      console.log("Socket 正在连接");
    },
    disconnect () {
      alert("Socket 断开");
    },
    connect_error () {
      console.log("Socket 连接失败");
    },
    connect () {
      console.log("Socket 连接成功");
    },
  },
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // display: flex;
  // justify-content: center;
  .title {
    text-align: center;
  }
  .textbox {
    width: 100%;
    height: 300px;
    overflow: scroll;
  }
  .input {
    display: flex;
  }
}
</style>