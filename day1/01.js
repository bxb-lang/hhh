//初始服务器  node模块
// require 加载
// 加载http模块
// request 请求  response 响应 


var http=require("http")
// 搭建服务器
 var server=http.createServer(function(req,res){
    res.end("hello world")
})

// 监听端口
server.listen(3000,function(){
    console.log("服务机已挂起")
})


