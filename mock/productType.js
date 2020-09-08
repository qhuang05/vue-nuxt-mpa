const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
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

module.exports = router