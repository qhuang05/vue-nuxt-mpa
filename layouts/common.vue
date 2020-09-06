<template>
  <div>
      <top-menu></top-menu>
      <!-- <header>
        <nuxt-link to="/home">首页</nuxt-link>
        <nuxt-link to="/product">产品页</nuxt-link>
        <div class="fr" v-if="username">
          当前用户：{{username}}
          <button @click="logout">退出</button>
        </div>
      </header> -->
      <div>
        导航菜单：
        <Menu />
      </div>
      <div class="container">
        <nuxt />
      </div>
      <footer>底部</footer>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    computed: {
      username(){
        if(process.client){
          let userInfo = window.localStorage.getItem('userInfo');
          return userInfo ? JSON.parse(userInfo).username : '';
        }
        return ''
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/logout').then(()=>{
          this.$router.push('/')
        })
      }
    },
    mounted() {
      
    }
}
</script>

<style>
  header, footer {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #000;
    color: #fff;
    text-align:center;
    position: fixed;
    top: 0;
    left: 0;
  }
  footer{
    top: auto;
    bottom:0;
  }
  header a{
    color: #fff;
    margin: 0 10px;
  }
  .container{
    padding-top: 30px;
  }
  .fr{
    float:right;
  }
</style>