
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', require('./mock/user'))
app.use('/design', require('./mock/design'))
app.use('/productType', require('./mock/productType'))
// app.use('/product', require('./mock/product'))

app.listen(7000, ()=> {
    console.log('Listening port 7000...');
});