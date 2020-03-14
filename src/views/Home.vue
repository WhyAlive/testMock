<template>
  <div class="home">
    <h1>测试Mock数据</h1>
    <button @click="handleLogin">获取登录数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { Login, Info } from '@/api/login'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      loginParams: {
        username: 'admin',
        password: '123'
      }
    }
  },
  created() {
    // this.handleLogin()
    // this.testLogin()
    this.testInfo()
  },
  methods: {
    async testInfo() {
      const data = await Info()
      console.log(data)
    },
    async testLogin() {
      const data = await Login(this.loginParams)
      console.log(data)
    },
    handleLogin() {
      axios.post('/login', this.loginParams).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>
<style lang="less" scoped>
</style>
