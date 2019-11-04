var http=require("http")
var form=require("formidable")
var path=require("path")
var sd=require("silly-datetime")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/dopost"){
        var fm=form.IncomingForm()
        // fields  文本域 files  文件域
        // console.log(fm)
        fm.uploadDir="./uploads"
        fm.parse(req,function(err,fields,files){
            // console.log(fields)
            // console.log(files)
            
           // 获取后缀名
            // var extname=path.extname(files.pic.name)
            // console.log(extname)
            //新的名称 和目录名称进行拼接
            // var pt=path.resolve(__dirname,"./uploads/")
            // console.log(pt)
            // 
            // var picurl=files.pic.path+extname
            // console.log(picurl)
            // var base=path.basename(picurl)
            // console.log(pt+base)
            // 获取文件路径
            var low=files.pic.path
            console.log(low)
            // 获取后缀名
            var extname=path.extname(files.pic.name)
            // console.log(extname)
            // 
            var time=sd.format(new Date(),"YYYYMMDDmmss")
            var fanishon="./uploads/"+time+extname
            // console.log(fanishon)
            fs.rename(low,fanishon,(err)=>{
                if(err) throw err 
            })
        })
        res.end("success")
    }
}).listen(3000,"127.0.0.1")