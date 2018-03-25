var express=require('express');
var loginService=require('./service/login.js');
var bodyParser = require('body-parser');
var models  = require("./models");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.get('/page',function(req,res){
    res.render('pages/index');
});

app.get('/login',function(req,res){
    res.render('pages/login',{'message':''});
});

app.post('/dologin',function(req,res){
    loginService.checkCredentian(req.body.username,req.body.password,function(isValid){
        if(isValid){
            res.render('pages/index');
        }
        else{
            res.render('pages/login',{'message':'invalid credential'});
        }
    });
});

app.listen(8080,()=>{
         console.log('started');
});