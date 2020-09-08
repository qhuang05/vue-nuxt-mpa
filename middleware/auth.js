import Cookie from 'js-cookie'

// export default (ctx) => {
//     let {app, store, route, params, redirect} = ctx;
//     app.router.beforeEach(async (to, from, next) => {
//         console.log('middle auth mmmmmm');
//         // if(process.client){
//         //     let token = Cookie.get('token');
//         //     console.log('middle auth', token);
//         //     if(token){
//         //         next()
//         //     } else{

//         //     }
//         // }
//     })
// }

export default ({app}) => {
    app.router.beforeEach((to, from, next) => {
        if(process.client){
            const token = Cookie.get('token');
            console.log('token', token)
            if(token){
                redirect({to: '/home'})
            }
        }
    })
}