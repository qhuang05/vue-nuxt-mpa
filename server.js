const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 登录
app.post('/user/login', (req, res)=>{
    const {username} = req.body;
    if(username=='admin' || username=='test'){
        res.json({
            status: 1000,
            msg: '登录成功',
            data: {username, level:4}
        })
    } else{
        res.json({
            status: -1,
            msg: '用户不存在',
        })
    }
});

// 退出
app.post('/user/logout', (req, res)=>{
    const {username} = req.body;
    res.json({
        status: 1000,
        msg: '退出成功'
    })
});

// 获取导航栏
app.post('/user/getMenu', (req, res)=>{
    const {username} = req.body;
    let menuList = [], sideMenuList = [];
    sideMenuList = [{
        title: '账号管理',
        items: [{
            name: '我的账号',
            path: '/account/index'
        }, {
            name: '绑定登录',
            path: '/account/bindAccount'
        }]}, {
            title: '权限管理',
            items: [{
                name: '角色权限',
                path: '/customerRole/index'
            }]
        }
    ];
    switch(username){
        case 'admin':
            menuList = [{
                name: '首页',
                path: '/'
            }, {
                name: '图库',
                path: '',
                children: [
                    {
                        title: '图库管理', 
                        items: [{
                            name: '我的图库',
                            path: '/customerGallery/index'
                        }, {
                            name: '归档图库',
                            path: '/customerGallery/customerGalleryCategory'
                        }, {
                            name: '出单图库',
                            path: '/customerOrderGallery/index'
                        }]
                    }
                ]
            }];
            break;
        default:
            menuList = [{
                name: '首页',
                path: '/'
            }, {
                name: '设计',
                path: '',
                children: [
                    {
                        title: '设计',
                        items: [{
                            name: '设计器',
                            path: '/design/create'
                        }, {
                            name: '批量设计',
                            path: '/design/batchDesign'
                        }]
                    }
                ]
            }];
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: {menuList, sideMenuList}
    })
});

app.get('/product/list', (req, res) => {
    res.json({
        status: 1000,
        msg: '操作成功',
        data: [
            {id: 1, name: 'aaa'},
            {id: 2, name: 'bbb'},
            {id: 3, name: 'ccc'}
        ]
    })
});
app.post('/product/test', (req, res) => {
    res.json({
        status: 1000,
        msg: '操作成功',
        data: 'success'
    })
})

app.listen(7000, ()=> {
    console.log('Listening port 7000...');
});