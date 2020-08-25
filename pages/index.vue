<template>
  <div>
    <h3>首页</h3>
    <nuxt-link to="/login">登录</nuxt-link>

    <div class="mt30 mb30">
      服务端渲染数据：
      <div>{{preList}}</div>
      页面ajax数据：
      <div>{{list}}</div>
    </div>

    <Hello msg="我是Hello组件, asynData不能用于组件中" />
  </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
      return {
        list: []
      }
    },
    async asyncData(ctx) {
      let {$axios, params} = ctx;
      let ret = await $axios.get('/product/list');
      return {
        // preList: ret.data.data,   //axios未封装(在nuxt.config.js中配置axios => prefix: '/api')
        preList: ret              //axios封装后, 在vue.config.js下配置plugins(axios.js)
      }
    },
    methods: {
      async getList() {
        let ret = await this.$axios.get('/product/list');
        // this.list = ret.data.data;  //axios未封装(在nuxt.config.js中配置axios => prefix: '/api')
        this.list = ret;            //axios封装后, 在vue.config.js下配置plugins(axios.js)
      }
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      this.getList();
    }
}
</script>

<style lang="scss">
  .mt30{
    margin-top: 30px;
  }
  .mb30{
    margin-bottom: 30px;
  }
</style>
