<template>
  <div>
      <zw-header></zw-header>
      <div class="main">
        <nuxt />
      </div>
      <zw-footer></zw-footer>
      <!-- <header>
        <nuxt-link to="/home">首页</nuxt-link>
        <nuxt-link to="/product">产品页</nuxt-link>
        <div class="fr" v-if="username">
          当前用户：{{username}}
          <button @click="logout">退出</button>
        </div>
      </header>
      <div>
        导航菜单：
        <Menu />
      </div> -->
      <!-- <div class="container">
        <nuxt />
      </div> -->
      <!-- <footer>底部</footer> -->
  </div>
</template>

<script>
// import Cookie from 'js-cookie'
// export default {
//     computed: {
//       username(){
//         if(process.client){
//           let userInfo = window.localStorage.getItem('userInfo');
//           return userInfo ? JSON.parse(userInfo).username : '';
//         }
//         return ''
//       }
//     },
//     methods: {
//       logout() {
//         this.$store.dispatch('user/logout').then(()=>{
//           this.$router.push('/')
//         })
//       }
//     },
//     mounted() {
      
//     }
// }
</script>

<style>

</style>