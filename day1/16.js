var fs=require("fs")
// 压缩模块   zilb
var zlib=require("zlib")
var readStream=fs.createReadStream("./static/2.txt")
var writeStream=fs.createWriteStream("./static/2.txt.gz")
// 流支持链式操作   zlib.createGzip() 创建压缩包
readStream.pipe(zlib.createGzip()).pipe(writeStream)
