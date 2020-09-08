const express = require('express')
const router = express.Router()

router.post('/save', (req, res) => {
    res.json({
        status: 1000,
        msg: '操作成功'
    })
});

module.exports = router