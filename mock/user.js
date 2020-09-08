const express = require('express')
const router = express.Router()

// 登录
router.post('/login', (req, res)=>{
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
router.post('/logout', (req, res)=>{
    const {username} = req.body;
    res.json({
        status: 1000,
        msg: '退出成功'
    })
});

// 获取导航栏
router.post('/getMenu', (req, res)=>{
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
                name: '选品',
                path: '',
                children: [
                    {
                        title: '选品管理', 
                        items: [{
                            name: '全部产品',
                            path: '/productType'
                        }, {
                            name: '成本计算器',
                            path: '/productType/counter'
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

module.exports = router