<template>
  <div>
      <h3>Home Page</h3>
      
      <div>
        vuex使用测试：{{$store.state.count.count}}, {{$store.getters['count/filterCount']}}
        <button @click="add">Add</button>
        <button @click="asyncAdd">asyncAdd</button>
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
    }
}
</script>

<style>

</style>
