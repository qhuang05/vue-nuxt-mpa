<template>
  <div>
      <Header></Header>
      <div class="main transition" :class="{'left-hidden': leftHidden}">
        <Leftbar />
        <div class="content">
          <nuxt />
        </div>
      </div>
      <Footer></Footer>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      leftHidden(){
        return this.$store.state.left.isHidden;
      }
    }
  }
</script>

<style lang="scss">
  .main{
    padding: 20px;
    display: flex;
    transition: all 0.3s;
    &>.content{
      flex: 1;
      margin-left: 10px;
    }
    &.left-hidden{
      margin-left: -232px;
      &>.content{
        margin-left: 20px;
      }
    }
  }
</style>