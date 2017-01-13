var express = require('express');
var app = express();

var request = require('request');
var router = express.Router(); 
var bodyParser = require('body-parser');
app.use(bodyParser());

//系统配置
var devUrl = "";//http://searchagent2.woaap.com/";
var PHPSESSID = '1'; 

app.use('/',express.static(__dirname+'/public/'));

function getApiData(url,req,res){
	console.log(devUrl+url);
	request({url:devUrl+url},function(err,response,body){
		console.log(devUrl+url);
		res.send(body);
	});
}
//post请求后台
function postApiData(url,data,req,res){ 	
	request.post({url:devUrl+url,form:data},function(err,response,body){	
	console.log(devUrl+url);	
	console.log(body);	
		//body=JSON.parse(body); 
		res.send(body);
	});
}

//get中转
app.get('/getdata/*',function(req,res){
	console.log(url);
	var url = req.url.replace('/getdata','');
	getApiData(url,req,res);
});
//post中转
app.post('/getdata/*',function(req,res){
	var url = req.url.replace('/getdata','');
	var reqData = req.body;
	postApiData(url,reqData,req,res);
});

//获取IP
// var os = require('os');  
// var IPv4,hostName;  
// for(var i=0;i<os.networkInterfaces().en0.length;i++){  
//     if(os.networkInterfaces().en0[i].family=='IPv4'){  
//         IPv4=os.networkInterfaces().en0[i].address;  
//     }
// }

var server = app.listen(3009,function(){
	console.log('服务地址', server.address().port);
});