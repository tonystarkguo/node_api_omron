var fs = require("fs");
const nUrl = require('url');
const querystring = require('querystring')
exports.userById = userById;
exports.createUser = createUser;
exports.productInfo = productInfo;
exports.componenteEmployInfo = componenteEmployInfo;
exports.exportFile = exportFile;
exports.componenteEmployInfo_detail =componenteEmployInfo_detail
exports.componentBatchNoInfo = componentBatchNoInfo

var types=require('./types.js').types;
function userById(req, res) {
    fs.readFile('./controller/input.text',"utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
        var fileType = types;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end(data.toString());
    });
}

function createUser(req, res) {
    fs.readFile('./controller/product.json', "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
        var fileType = types;
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.end(data.toString());
    });
}

function productInfo(req,res){
  
    fs.readFile('./controller/product.json', "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
        var fileType = types;
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.end(data.toString());
    });
}

function componenteEmployInfo(req, res) {
    
    fs.readFile('./controller/product.json', "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        // console.log("异步读取: " + data.toString());
        var fileType = types;
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.end(data.toString());
    });
}
function exportFile(req,res){
    var path = "./controller/input.text";
    var f = fs.createReadStream(path);
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=input.text'
    });
    // res.setHeader('Content-Type', 'application/octet-stream');
    f.pipe(res);
    // fs.readFile('./controller/input.text', "utf-8", function (err, data) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     // console.log("异步读取: " + data.toString());
    //     var fileType = types;
    //     res.setHeader('Content-Type', 'text/application/octet-stream')
    //     res.setHeader("Access-Control-Allow-Origin", "*");
    //     res.setHeader('Content-Disposition', 'attachment; filename=input.text')

        
    //     // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    //     // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //     // res.end(data.toString());
    // });
    // res.setHeader("Content-Type", "text/html");
    // var data={"error":"",data:""};
    // res.end(data.toString());
}


function componenteEmployInfo_detail(req, res) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    let method = req.method;
    let url = nUrl.parse(req.url);
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        console.log(post)
        // post = querystring.parse(post);
        // console.log(util.inspect(post))
        
    });
    
    fs.readFile('./controller/com_detail.json', "utf-8", function (err, data) {
        
        if (err) {
            return console.error(err);
        }
        // console.log("异步读取: " + data.toString());
        var productInfo = JSON.parse(post)
        console.log("VVVVV" + productInfo)
        var fileType = types;
        if (productInfo.detail_type!=4){
            res.end(data.toString());
        }
       
    });
    fs.readFile('./controller/json/productInfo_detail.json', "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        // console.log("异步读取: " + data.toString());
        var productInfo = JSON.parse(post)
        console.log("VVVVV-" + productInfo.detail_type)
        var fileType = types;
       
        if (productInfo.detail_type == 4) {
            res.end(data.toString());
        }
    });
    
}

function componentBatchNoInfo(req, res) {

    fs.readFile('./controller/json/componentBatchNoInfo.json', "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        // console.log("异步读取: " + data.toString());
        var fileType = types;
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.end(data.toString());
    });
}