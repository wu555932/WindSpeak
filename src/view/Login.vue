<template>
  <div class="contanier">
    <div class="head">
      <h2>Login</h2>
    </div>
    <div class="form">
        <Form :label-width="80">
          <FormItem label="user">
            <Input v-model="formdata.user" placeholder="账号" />
          </FormItem>
          <FormItem label="password">
            <Input v-model="formdata.password" type="password" placeholder="密码"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submit">Submit</Button>
            <Button style="margin-left: 8px" @click="cancel">Cancel</Button>
          </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import HttpRequest from "../api/axios"
  export default {
    name:"LoginPage",
    data(){
      return {
        formdata:{
          user:"",
          password: ""
        }
      }
    },
    methods: {
      submit() {
        const params = {
          user:this.formdata.user,
          password: this.formdata.password
        }
      HttpRequest.get('/api/login',params).then((res)=> {
        if(res.status === 200) {
          this.$router.push("/home")
        }
      });
      },
      cancel() {

      }
    }
  }
</script>

<style lang="scss" scoped>
.contanier {
  width: 600px;
  height: 300px;
  border: 1px solid #333;
  margin: 200px auto;
  .head {
   width: 100%;
   text-align: center;
   margin-top: 25px;
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>