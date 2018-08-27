const http = require('http');
const querystring = require('querystring')
const nUrl = require('url');
var util = require('util'); 
const config = require('./config');
const controller = require('./controller');
const route = require('./route').map(item => {
    console.log(`route ${item.method}:${item.path}`);

    let tuple = item.impl.split('.');
    item.impl = controller[tuple[0]][tuple[1]];
    return item;
});

const server = http.createServer((req, res) => {
    let method = req.method;
    let url = nUrl.parse(req.url);

    // 解析 url 参数
    if (method ==="GET"){
        var params = url.parse(req.url, true).query;
        console.log(params) 
    } else if (method ==="POST"){
        var post = '';

        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function (chunk) {
            post += chunk;
        });
        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function () {
            console.log(post)
            post = querystring.parse(post);
            // console.log(util.inspect(post))
        });
    }
   
    let matchRoute = route.find(item => {
        return item.method === method && item.path === url.pathname;
    });

    if (matchRoute) {
        console.log(matchRoute)
        matchRoute.impl(req, res);
        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('Not Found');
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});``