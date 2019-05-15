const Koa = require('koa');

// 这里是一些常量的配置文件
const config = require('./config');

const mongoose = require('mongoose');

const app = new Koa();


//连接数据库
mongoose.connect(config.db, {
    useNewUrlParser: true
}, err => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});
//断开数据库
//setTimeout(function(){
//    mongoose.disconnect(function(){
//        console.log("断开连接");
//    })
//}, 2000);

//解决跨域的哈
const cors = require('koa2-cors');
app.use(cors());

//post请求
const koaBody = require('koa-body');
app.use(koaBody({
    patchNode: true,
}));

const example_router = require('./routes/api/example_router');

app.use(example_router.routes()).use(example_router.allowedMethods());

app.listen(config.port);
