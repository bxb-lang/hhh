var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
http.createServer((req,res)=>{
    // var list=["vue","react","node"]
    fs.readFile("./view/index.ejs",(err,data)=>{
        var template=data.toString()
        var list=["vue","react","node"]

        var result=ejs.render(template,{list:list})
        //response 响应前端请求
        res.end(result)
    })
    
}).listen(3000)