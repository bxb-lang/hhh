var fs = require("fs")
var http = require("http")

http.createServer((req, res) => {
    // 读文件   异步读取
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     res.end(data)
    // })

    // 写文件   同步读取
    // fs.writeFile("./static/1.txt","ashdjha",(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    // 创建目录
    // fs.mkdir("./aa", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("mkdir success")
    // })
    // 创建文件
    // fs.writeFile("./static/2.txt", "shujdjsdf", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("cj success")
    // })
    // 删除文件
    // fs.unlink("./static/2.txt", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("unlink success")
    // })
    // 删除目录
    // fs.rmdir("./aa", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("ml success")
    // })
    // 判断文件状态
    // fs.stat("./static/1.txt",(err,stats)=>{
    //     // console.log(stats.isDirectory())
    //     console.log(stats.isFile())
    //     res.end("22")
    // })
    // 改名称
    fs.rename("./static/1.txt","./static/2.txt",(err)=>{
        if(err){
            throw err
        }
        res.end("re sucess")
    })
    // 复制文件
    // fs.copyFile("",)
    // 打开文件

    // 关闭文件

}).listen(3000)