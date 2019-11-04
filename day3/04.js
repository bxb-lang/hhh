var express=require("express")
var app=express()
// 设置模板引擎
app.engine("html",require("express-art-template"))
// app.set("view engine","html")
app.get("/",(req,res)=>{
    var list=["sdf","sdf","sdf"]
    res.render("kon.html",{list:list})
})
app.listen(3000)