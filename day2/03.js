// 接收post传输的数据
// 中间件   body-parser  第三方
var express = require("express")
var bodyparse=require("body-parser")
var app = express()
// 使用中间件   use
// 处理json 数据
app.use(bodyparse.json())
// 处理字符串
app.use(bodyparse.urlencoded({extended:false}))
app.get("/", (req, res) => {
    res.send("首页")
})
app.post("/dopost", (req, res) => {
    console.log(req.body)
    res.send({"data":"接收到的数据是："+req.body.username})
})
app.listen(3000)