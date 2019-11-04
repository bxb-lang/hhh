var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // 普通获取文件方式
    // fs.readFile("./static/2.txt",(err,data)=>{
    //     console.log(data)
    //     res.end(data)
    // })
    // pipe    创建文件读取流
    // 通过流的方式获取数据       source
    var fastream=fs.createReadStream("./static/2.txt")
    fastream.pipe(res)
}).listen(3000)