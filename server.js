const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/user/login', (req, res)=>{
    const {username} = req.body;
    if(username=='admin' || username=='test'){
        res.json({
            status: 1000,
            msg: '登录成功(local proxy)',
            data: username
        })
    } else{
        res.json({
            status: -1,
            msg: '用户不存在(local proxy)'
        })
    }
});

app.post('/user/logout', (req, res)=>{
    const {username} = req.body;
    res.json({
        status: 1000,
        msg: '退出成功(local proxy)'
    })
});

app.post('/user/getRoles', (req, res)=>{
    const {username} = req.body;
    let roles = [];
    switch(username){
        case 'test':
            roles = ['test'];
            break;
        default:
            roles = ['admin'];
    }
    res.json({
        status: 1000,
        msg: '操作成功(local proxy)',
        data: roles
    })
});

app.listen(7000, ()=> {
    console.log('Listening port 7000...');
});