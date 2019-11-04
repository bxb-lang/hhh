// express-template
// public
var express=require("express")
var path=require("path")
var app=express()
var static=path.resolve(__dirname,"public")
// console.log(static)
app.use(express.static(static))
// 直接写死访问路径
// app.use(express.static("./public"))
app.get("/",(req,res)=>{
    res.end("接收成功")
})

app.listen(3000)