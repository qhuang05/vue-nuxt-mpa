<template>
  <div>
    <h3>产品详情</h3>
    <div>
      资源文件：
      <img src="~/assets/600-600.jpg" width="80" />
      <img src="/t1.jpg" width="80" />
    </div>

    <div>
      页面上下文参数：{{productId}}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'common',
  async asyncData(ctx) {
    let { params } = ctx;
    return {
      productId: params
    }
  }
}
</script>

<style>

</style>
