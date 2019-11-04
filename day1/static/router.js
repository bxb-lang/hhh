// 路由视图
function home(req,res){
    res.end("home")
}
function about(req,res){
    res.end("about")
}
function app(req,res){
    res.end("app")
}
exports.home=home;
exports.about=about;
exports.app=app;