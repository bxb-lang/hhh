var http=require("http")
var fs=require("fs")
var server=http.createServer(function(req,res){
    //  if(req.url == "favicon.ico"){
    //      return
    //  }

     if(req.url == "/bar"){
         fs.readFile("./static/bar.html",(err,data)=>{
             res.end(data)
         })
     }
     else if(req.url == "/foo"){
        fs.readFile("./static/foo.html",(err,data)=>{
            res.end(data)
        })
     }
     else{
        fs.readFile("./static/404.html",(err,data)=>{
            res.end(data)
        })
     }
    
})

// 监听端口
server.listen(3000,function(){
    console.log("服务机已挂起")
})