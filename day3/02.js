// cookie-parser
var express=require("express")
var cookieparser=require("cookie-parser")
var path=require("path")
var app=express()
// 让express和cookieparser建立联系
app.use(cookieparser())
// var static=path.resolve(__dirname,"public")
// // console.log(static)
// app.use(express.static(static))
app.get("/",(req,res)=>{
    console.log(":"+req.cookies)
    res.send({"data":"login中的cookie为："+req.cookies})
})
// 设置setcookie
app.get("/login",(req,res)=>{
    var obj=req.query.username
    // req.cookies.cookiename=obj
    // console.log(obj)
    // 设置cookie maxAge:过期时间，httponly：只允许在服务器修改值
    // sigend   是否生成签名     domain   域名   secure 
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({"data":obj})
})
// 获取getcookie
app.get("/list",(req,res)=>{
    console.log(req.cookies.username)
    res.send()
})
app.listen(3000)