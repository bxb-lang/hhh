var express=require("express")
var app=express()
var session=require("express-session")

app.use(session({
     // 加密字符串
    secret:"safe",
    // 返回客户端的id
    name:"safe",
    cookie:{maxAge:9000,httpOlny:true},
    // 强制初始化
    resave:true,
    // 保存初始化的session
    saveUninitialized:true

}))
// 获取session
// 清除session
app.get("/",(req,res)=>{
    if(req.session.username){
        res.send("欢迎"+req.session.username+"回来")
    }
    else{
        res.send("未保存session")
    }
})
// 设置session
app.get("/send",(req,res)=>{
    var obj=req.query.username
    req.session.username=obj
    console.log(req.session.username)
    res.send("")
})
app.listen(3000)