<template>
  <div>
    <h3 class="tc">商品详情</h3>
    商品ID：{{productId}}
    商品图片：
    <img src="~/assets/images/600-600.jpg" width="80" />
    <img src="/t1.jpg" width="80" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData(ctx) {
    let { params } = ctx;
    return {
      productId: params
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
