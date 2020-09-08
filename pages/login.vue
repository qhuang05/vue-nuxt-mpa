<template>
  <div>
      <h3>登录页</h3>
      <div>
          <p>
            <label>
                用户名：<input type="text" v-model="username" />
            </label>
          </p>
          <p>
            <label>
                密码：<input type="password" v-model="password" />
            </label>
          </p>
          <button @click="login">登录</button>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'blank',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            let params = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('user/login', params).then( data => {
                // console.log('login data => ', data);
                this.$router.push('/home');
            })
        }
    }
}
</script>

<style>

</style>
