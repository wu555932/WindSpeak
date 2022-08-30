import axios  from "axios";

class HttpRequest {
  get(url, params) {
  return  new Promise((resolve,reject)=> {
    axios({
      method: 'get',
      url: url,
      data:params
    }).then((res)=>{
      if (res.status === 200) {
        resolve(res)
      } else {
        reject(res)
      }
    })
    })
  }

  post(url, params) {
    return new Promise((resolve, reject)=> {
      axios({
        method:'post',
        url: url,
        data: params
      }).then((res)=> {
        if (res.status === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  }
}



export default new HttpRequest();