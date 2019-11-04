var querystring=require("querystring")
// 字符串解析成对象
// var obj=querystring.parse("name=tom&sex=0&id=1")
// 对象解析成字符串
// var obj=querystring.stringify({ name: 'tom', sex: '0', id: '1' })
// 对字符串进行编码
// var obj=querystring.escape("name=三季度")
// 对字符串进行解码
var obj=querystring.unescape("name%3D%E4%B8%89%E5%AD%A3%E5%BA%A6")
console.log(obj)