var http = require("http")
var url = require("url")
http.createServer((req, res) => {
//                 协议    主机/域名  端口  ？seach     #hash
    // var result = "http://localhost:3000/?username=232&password=123"
    // var obj = url.parse(result)
    // console.log(obj)





    var obj = url.format({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=232&age=123',
        query: 'username=232&age=123',
        pathname: '/',
        path: '/?username=232&age=123',
        href: 'http://localhost:3000/?username=232&age=123'
    })
    console.log(obj)





    
    // var obj=url.resolve("http://localhost:3000","/new")
    // console.log(obj)
    res.end()
}).listen(3000)