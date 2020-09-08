// 问题：使用中间件来拦截时，手动输入的地址无法拦截，所以改用插件
import Cookie from 'js-cookie'

export default ({app}) => {
    app.router.beforeEach((to, from, next) => {
        // if(process.client){
            let token = Cookie.get('token');
            console.log('middleware 路由拦截', token, from)
            if(token){
                console.log('to => ', to.path)
                if(to.path == '/login') {
                    next();
                    app.router.push('/home');
                } else{
                    next();
                }
            } else{
                next();  // 没有写next()页面会崩溃, 也不能使用next('/login'), 原因未解决。
                app.router.push({path: '/login', query: {path: to.path}});
            }
        // }
    })
}