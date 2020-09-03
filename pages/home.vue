<template>
  <div>
      <h3>Home Page</h3>
      
      <div>
        vuex使用测试：{{$store.state.count.count}}, {{$store.getters['count/filterCount']}}
        <button @click="add">Add</button>
        <button @click="asyncAdd">asyncAdd</button>
      </div>

      <div>
        字体图标测试：
        <span class="iconfont bubble-icon">&#xe630;</span>
        <span class="iconfont zw_icon-img_pay_zhjhzf zs-icon"></span>
        <svg class="svg-icon" aria-hidden="true">
          <use xlink:href="#zw_icon-icon_excel"></use>
        </svg>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'common',
    async asyncData(ctx) {
      // ctx.app.fooServer('66');
      ctx.app.$fooInject('i66');
    },
    mounted() {
      this.$fooClient('55');
      this.$fooInject('i55');
      console.log(this.$store);
    },
    methods: {
      add(){
        this.$store.commit('count/ADD', 1);
      },
      async asyncAdd() {
        await this.$store.dispatch('count/asyncAdd', 2);
      }
    },
    // beforeCreate(){
    //   document.querySelector('body').setAttribute('style', 'background:red');
    // },
    // beforeDestroy(){
    //    document.querySelector('body').setAttribute('style', 'background:""');
    // }
}
</script>

<style lang="scss" scoped>
  .bubble-icon{
    color: red;
  }
  .zs-icon{
    color: green;
  }
</style>
