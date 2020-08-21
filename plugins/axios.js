// import Vue from 'vue'
// import axios from 'axios'

// const httpService = axios.create({
//     timeout: 5000,
//     baseURL: '/api'
// });

// httpService.interceptors.request.use(config => {
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// httpService.interceptors.response.use(response => {
//     const ret = response.data;
//     if(ret.status > 0) {
//         return Promise.resolve(ret.data);
//     } else {
//         return Promise.reject(ret.msg || 'error');
//     }
// }, error => {
//     return Promise.reject(error)
// });

// Vue.prototype.$http = httpService;


// export default ctx => {
//     let {$axios, app, params, query, route, redirect} = ctx;

//     $axios.create({
//         timeout: 5000,
//         baseURL: 'http://localhost:7000/api'
//     })

//     $axios.interceptors.request.use(config => {
//         return config;
//     }, error => {
//         return Promise.reject(error);
//     });

//     $axios.interceptors.response.use(response => {
//         const ret = response.data;
//         if(ret.status > 0) {
//             return Promise.resolve(ret.data);
//         } else {
//             return Promise.reject(ret.msg || 'error');
//         }
//     }, error => {
//         return Promise.reject(error)
//     });
// }

export default function ({store, redirect, req, router, app: { $axios }})  {
    // 数据访问前缀
    $axios.defaults.baseURL = 'http://localhost:7000/api';
    if(process.server){
        // 获取服务端的token
        // var token = getCookie.getcookiesInServer(req).token;
    }
    if(process.client){
        // 获取客户端token
        // var token = getCookie.getcookiesInClient('token');
    }
    // request拦截器
    $axios.onRequest(config => {
        if(process.client){
            // 客户端下，请求进度条开始
            NProgress.start();
        }
        // 将获取到token加入到请求头中
        // config.headers.common['Authorization'] = token;
    });
    // response拦截器，数据返回后，可以先在这里进行一个简单的判断
    $axios.interceptors.response.use(response => {
        console.log('response', response)
        const ret = response.data;
        if(ret.status > 0) {
            return Promise.resolve(ret.data);
        } else {
            return Promise.reject(ret.msg || 'error');
        }
    }, error => {
        return Promise.reject(error)
    })
}