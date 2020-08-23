<template>
  <div>
      <header>
        <nuxt-link to="/home">首页</nuxt-link>
        <nuxt-link to="/product/index">产品页</nuxt-link>
      </header>
      <div class="container">
        <nuxt />
      </div>
      <footer>底部</footer>
  </div>
</template>

<script>
export default {
    
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
</style>