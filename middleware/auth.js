// 路由鉴权
import Cookie from 'js-cookie'

const whiteList = ['/', '/login'];

export default async ({route, store, redirect, req, res}) => {
    console.log('===== middleware auth =====');
    let token;
    if(process.client){
        token = Cookie.get('token');
    } else {
        console.log('req', req.headers.cookie)
    }
    console.log('token', token);
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