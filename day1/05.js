var http=require("http")
var url=require("url")
// var path=require("path")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/tml;charset=utf-8"})
    var obj=url.parse(req.url,true).query
    // 可以处理get请求
    res.end("接收的是username是"+obj.username)
}).listen(3000) 