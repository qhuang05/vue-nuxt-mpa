<template>
  <div>
    <h3>首页</h3>
    <nuxt-link to="/login">登录</nuxt-link>
    <div>
      asyncData数据预取：
      <div>{{products}}</div>
      组件异步数据：
      <div>{{products2}}</div>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
      return {
        products2: []
      }
    },
    async asyncData(ctx) {
      // axios未封装
      // let {$axios, params} = ctx;
      // let ret = await $axios.get('/api/product/list');
      // return {
      //   products: ret.data.data
      // }

      // axios封装后，在vue.config.js下配置plugins
      let {$axios, params} = ctx;
      let ret = await $axios.get('/api/product/list');
      return {
        products: ret
      }
    },
    methods: {
      async getProducts() {
        // axios未封装
        // let ret = await this.$axios.get('/api/product/list');
        // this.products2 = ret.data.data;
        
        // axios封装后, 在vue.config.js下配置plugins
        let ret = await this.$axios.get('/api/product/list');
        this.products2 = ret;
      }
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      this.getProducts();
    }
}
</script>

<style>

</style>
