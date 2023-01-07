import Express from 'express';
import path from "path"
const __dirname = path.resolve();

import step from './api/step.js';
// import get_ipinfo from './api/ipdb.js';

// 创建服务器
const app = Express()

app.set('x-powered-by', false)
app.use(Express.json())
// 配置中间件
app.use(Express.urlencoded({ extended: false }))
// app.use(Express.static(__dirname+'/public'));



// 配置路由
// app.get('/price/:purl', hisprice)
// app.post('/create', create)
// app.get('/:slug', redirect)

app.get('/ip', (req, res) => {
    // console.log(req.get('x-forwarded-for'));
    const ipinfo = get_ipinfo(req.get('x-forwarded-for'))
    res.send(ipinfo)
})


app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><mete content="text/html; charset=utf-8" http-equiv="Content-Type"></mete><title>修改步数</title></head><body><h1>欢迎使用</h1></body></html>')
})

app.all('/step', step)


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Start service success! listening port: http://127.0.0.1:' + port);
})