// 解决乱码


var http=require("http")

var server=http.createServer(function(req,res){
     // 设置请求响应头  文本类型
    //  
    res.writeHead(200,{"content-Type":"text/tml;charset=utf-8"})
    res.end("书宿建德江")
})

// 监听端口
server.listen(3000,function(){
    console.log("服务机已挂起")
})
