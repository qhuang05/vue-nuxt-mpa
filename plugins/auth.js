// 路由鉴权插件写法(首选中间件)
import Cookie from 'js-cookie'

const whiteList = ['/', '/login'];

export default ({app, store, route, redirect}, inject) => {
    app.router.beforeEach((to, from, next) => {
        console.log('==== plugins router ====>', to.path);
        let token = Cookie.get('token');
        if(token){
            if(to.path == '/login'){
                redirect('/home');
            } else {
                store.dispatch('user/checkUrlAuth', {path: to.path}).then(res => {
                    if(!res.isAuth){
                        redirect('/home');
                    } else {
                        next();
                    }
                })
            }
        } else {
            if(!whiteList.includes(to.path)) {
                redirect(`/login?redirect=${to.path}`);
            } else {
                next();
            }
        }
    })
}
