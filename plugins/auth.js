// 路由鉴权插件写法(首选中间件)
import Cookie from 'js-cookie'

const whiteList = ['/', '/login'];

export default ({app, store, route, redirect}, inject) => {
    app.router.afterEach(async (to, from, next) => {
        console.log('==== plugins router ====>', to.path);
        let token = Cookie.get('token');
        if(token) { //已登录
            // 是否有用户信息，如果没有则获取
            let userInfo = store.state.user.userInfo;
            if(!userInfo.username){
                userInfo = await store.dispatch('user/getUserInfo');
            }
            store.dispatch('user/getMenu', {username: userInfo.username});
            if(to.path == '/login'){
                redirect('/home');
            } else {
                // 判断是否有路由权限
                let {isAuth} = await store.dispatch('user/checkUrlAuth', {path: to.path});
                if(!isAuth){
                    redirect('/home');
                }
            }
        } else {
            if(!whiteList.includes(to.path)) {
                redirect(`/login?redirect=${to.path}`);
            }
        }
    })
}
