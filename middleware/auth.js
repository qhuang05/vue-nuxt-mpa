// 路由鉴权。
// 使用中间件方法有一个问题，首次访问页面或刷新时，只执行process.server。
// 解决方法是将nuxt.config.js中的mode从'universal'改为'spa'

import Cookie from 'js-cookie'

const whiteList = ['/', '/login'];

export default async ({app, route, store, redirect, req, res}) => {
    // console.log('===== middleware auth =====');
    if(process.client){
        let token = Cookie.get('token');
        console.log('token => ', token);
        if(token) { //已登录
            if(route.path == '/login'){
                redirect('/home');
            } else {
                // 是否有用户信息，如果没有则获取
                let userInfo = store.state.user.userInfo;
                if(!userInfo.username){
                    userInfo = await store.dispatch('user/getUserInfo');
                }
                await store.dispatch('user/getMenu', {username: userInfo.username});

                // 判断是否有路由权限
                let {isAuth} = await store.dispatch('user/checkUrlAuth', {path: route.path});
                if(!isAuth){
                    redirect('/home');
                }
            }
        } else { //未登录
            if(!whiteList.includes(route.path)) {
                redirect(`/login?redirect=${route.path}`);
            }
        }
    }
}