var http=require("http")
var fs=require("fs")
var art=require("art-template")
// console.log("art")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readFile("./static/index.art",(err,data)=>{
        // 获取art-template模板
        var template=data.toString()

        var list=["tom","joke","smon"]
        var htmlData=art.render(template,{l:list})
        res.end(htmlData)
    })
}).listen(3000)