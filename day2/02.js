var express=require("express")
var app=express()

app.get("/",(req,res)=>{
     res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log("接收的数据是："+req.query.username)
    res.send({"data":req.query.username})
})
app.get("/getid/:id",(req,res)=>{
    console.log("接收的数据是："+req.params.username)
    res.send({"data":req.params.id})
})
app.listen(3000)