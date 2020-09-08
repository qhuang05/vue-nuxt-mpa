import Cookie from 'js-cookie'

export default ({app, store, route, redirect}, inject) => {
    app.router.beforeEach((to, from, next) => {
        console.log('path => ', to.path);
        if(process.client){
            let token = Cookie.get('token');
            if(token){
                if(to.path == '/login') {
                    next();
                    app.router.push('/home');
                } else{
                    // // 判断页面权限
                    // store.dispatch('user/checkUrlAuth', {path: to.path}).then(ret=>{
                    //     if(ret.isAuth){
                    //         next();
                    //     } else{
                    //         next();
                    //         // app.router.push(`/login?redirect=${to.path}`);
                    //         redirect(302, `/login?redirect=${to.path}`);
                    //     }
                    // }).catch(error=>{
                    //     next();
                    //     app.router.push(`/login?redirect=${to.path}`);
                    // })
                    next();
                }
            } else{
                next();  // 没有写next()页面会崩溃, 也不能使用next('/login'), 原因未解决。
                app.router.push({path: '/login'});
            }
        } else {
            next();
        }
    })
}
