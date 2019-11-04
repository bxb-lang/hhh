 // fs file system   文件系统
// require 加载
var http = require("http")
var fs = require("fs")
var server = http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return
    }
    // 读文件
    fs.readFile("./static/1.txt", function (err, data) {
        console.log(data.toString())
        res.end("hello")
    })

})
server.listen(3000, function () {
    console.log("服务机已挂起")
})
