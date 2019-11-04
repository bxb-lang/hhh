var http=require("http")
// var fs=require("fs")

// exports module.exports
// 抛出  暴露
var router=require("./static/router")
http.createServer((req,res)=>{
    // req.url
    // if(req.url == "/"){
    //     // fs.readFile("")
    //     router.home(req,res)
    // }
    // else if(req.url == "/about"){
    //     router.about(req,res)
    // }
    // else if(req.url == "/app"){
    //     router.app(req,res)
    // }
    // else{
    //     res.end("404")
    // }
    switch(req.url){
        case "/": router.home(req,res);
        break;
        case "/about": router.about(req,res);
        break;
        case "/app": router.app(req,res);
        break;
    }
    res.end("22")
}).listen(3000)