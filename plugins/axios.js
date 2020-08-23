// 在axios未封装前, asyncData使用ctx.$axios.get调用(asyncData属于服务端的请求, 有一个上下文参数ctx), 组件内使用this.$axios.get调用
// 只需要在nuxt.config.js中配置proxy即可。
// 将axios封装成client和server端通用的: 在nuxt.config.js中的plugins添加@/plugins/axios, 可以注册拦截器和更改全局配置

export default ctx => {
    let {$axios, app, params, query, route, redirect} = ctx;
    
    $axios.create({
        timeout: 5000
    });

    $axios.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    });
    
    $axios.interceptors.response.use(response => {
        const ret = response.data;
        if(ret.status > 0) {
            return Promise.resolve(ret.data);
        } else {
            return Promise.reject(ret.msg || 'error');
        }
    }, error => {
        return Promise.reject(error)
    });

    // 或：
    // $axios.defaults.timeout = 5000;
    // $axios.onRequest(config => {
    //     return config
    // }, error => {
    //     return Promise.reject(error);
    // });
    // $axios.onResponse(response => {
    //     const ret = response.data;
    //     if(ret.status > 0) {
    //         return Promise.resolve(ret.data);
    //     } else {
    //         return Promise.reject(ret.msg || 'error');
    //     }
    // });
}
