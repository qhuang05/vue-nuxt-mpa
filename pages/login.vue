<template>
  <div>
      <h3>登录页</h3>
      <div>
          <p>
            <label>
                <input type="text" v-model="username" />
            </label>
          </p>
          <p>
            <label>
                <input type="password" v-model="password" />
            </label>
          </p>
          <button @click="login">登录</button>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$router.push('/home');
        }
    }
}
</script>

<style>

</style>
