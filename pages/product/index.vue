<template>
  <div>
    <h3>产品页</h3>
    
    <div>
      {{$store.state.count.count}}, {{$store.getters['count/filterCount']}}
    </div>
    <nuxt-link to="/product/100">产品详情</nuxt-link>
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: 'common'
}
</script>

<style lang="scss" scoped>

</style>
