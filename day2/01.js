var express=require("express")

var app=express()
// 代表的是get请求
app.get("/",(req,res)=>{
    res.send()
})
// app.post("/list",(req,res)=>{
//     res.send({"success":"jhhhj","post":[{"cdnsj":"nksjd","sdk":"123"}]})
// })

// all代表所有
// 什么情况下使用app.all   解答：有控制全局的功能时要使用all
app.all("/",(req,res)=>{
    res.send({"success":"jkbi","data":[{"cdnsj":"nksjd"}]})
})
app.listen(3000)