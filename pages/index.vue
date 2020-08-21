<template>
  <div>
    <h3>首页</h3>
    <nuxt-link to="/login">登录</nuxt-link>
    <div>
      我是异步数据：
      <!-- <div>{{products}}</div> -->
      <div>{{products2}}</div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    layout: 'default',
    data() {
      return {
        products2: []
      }
    },
    async asyncData({$axios, params}) {
      let ret = await $axios.get('/product/list');
      return {
        products: ret
      }
    },
    methods: {
      async getProducts() {
        // let ret = await axios.get('/api/product/list');
        // this.products2 = ret.data.data;
        
        // axios封装后, 在vue.config.js下配置plugins
        let ret = await this.$http.get('/product/list');
        this.products2 = ret;
      }
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      // this.getProducts();
    }
}
</script>

<style>

</style>
