// 路由鉴权。使用中间件方法有一个问题，首次访问页面只执行SSR Server，无法进行鉴权，改用plugins方法没有这个问题。
import Cookie from 'js-cookie'

const whiteList = ['/', '/login'];

export default async ({route, store, redirect, req, res}) => {
    console.log('===== middleware auth =====');
    if(process.client){
        let token = Cookie.get('token');
        // console.log('token', token);
        if(token) {
            if(route.path == '/login'){
                redirect('/home');
            } else {
                let {isAuth} = await store.dispatch('user/checkUrlAuth', {path: route.path});
                if(!isAuth){
                    redirect('/home');
                }
            }
        } else {
            if(!whiteList.includes(route.path)) {
                redirect(`/login?redirect=${route.path}`);
            }
        }
    }
}