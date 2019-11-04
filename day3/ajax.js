function AjaxHttp(url,callback){
	xhr=new XMLHttpRequest;
}

AjaxHttp.prototype.get = (url,callback)=>{
	xhr.open("GET",url,true);
	
	xhr.send();
	
	xhr.onload=()=>{
		if(xhr.status === 200){
//			console.log(xhr)
			callback(null,JSON.parse(xhr.responseText))
		}else{
			callback("出错了")
		}
		
	}
}

AjaxHttp.prototype.post = (url,data,callback)=>{
	xhr.open("POST",url,true);
	
	//传送的数据 其实是在body 在发送的时候要把收集的数据 转换成 字符串
	//在发送之前 要设置请求头
	xhr.setRequestHeader("Content-Type","application/json");
	
	xhr.send(JSON.stringify(data));
	
	xhr.onload=()=>{
		callback(null,xhr.responseText)
	}
}

AjaxHttp.prototype.put = (url,data,callback)=>{
	xhr.open("PUT",url,true);
	
	//传送的数据 其实是在body 在发送的时候要把收集的数据 转换成 字符串
	//在发送之前 要设置请求头
	xhr.setRequestHeader("Content-Type","application/json");
	
	xhr.send(JSON.stringify(data));
	
	xhr.onload=()=>{
		callback(null,xhr.responseText)
	}
}



    const obt = new AjaxHttp();
    
    const obj={
    	"name":"lufei",
    	"age":125
    }
     
     obt.post("https://jsonplaceholder.typicode.com/posts",obj,(err,data)=>{
     	if(err){
     		console.log(err)
     	}else{
     		console.log(data)
     	}
     })
    obt.put("https://jsonplaceholder.typicode.com/users/4",obj,(err,data)=>{
     	if(err){
     		console.log(err)
     	}else{
     		console.log(data)
     	}
     })
    
    

//  obt.get("http://api.icndb.com/jokes/random/1",(err, data) =>{
//  	if (err) {
//	   	console.log(err)
//
//	   } else {
//	   	console.log(data)
//
//
//	   }
//    })

    



