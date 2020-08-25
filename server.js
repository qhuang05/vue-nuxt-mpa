const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user/login', (req, res)=>{
    const {username} = req.body;
    if(username=='admin' || username=='test'){
        res.json({
            status: 1000,
            msg: '登录成功',
            data: username
        })
    } else{
        res.json({
            status: -1,
            msg: '用户不存在',
        })
    }
});

app.post('/user/logout', (req, res)=>{
    const {username} = req.body;
    res.json({
        status: 1000,
        msg: '退出成功'
    })
});

app.post('/user/getMenu', (req, res)=>{
    const {username} = req.body;
    let menus = [];
    switch(username){
        case 'admin':
            menus = [{
                name: '首页',
                path: '/'
            }, {
                name: '设计',
                path: '/design',
                children: [
                    {name: '设计器', path: '/design/create'}, {name: '批量设计', path: '/design/batchDesign'}
                ]
            }];
            break;
        default:
            menus = [{
                name: '首页',
                path: '/'
            }, {
                name: '选品',
                path: '/product',
                children: [
                    {name: '全部产品', path: '/product/all'}, 
                    {
                        name: '成本计算器',
                        path: '/counter',
                        children: [
                            {name: 'javascript', path: '/counter/js'}, {name: 'typescript', path: '/counter/ts'}
                        ]
                    }
                ]
            }];
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: menus
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