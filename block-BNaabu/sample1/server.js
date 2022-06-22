var express=require("express");
var app=express();
var logger=require("morgan");
let url=require("url");

app.use(logger('dev'));
app.use('/admin',(req,res,next)=>{
    if(req.url==="admin"){
        return next("Unothorized")
    }
    next()
});
app.get("/",(req,res)=>{
    res.send("Index page")
});
app.get("/about",(req,res)=>{
    res.send("About page")
});
app.use((req,res,next)=>{
    res.send("Page not found")
});

app.use((err,req,res,next)=>{
    res.send(err)
});

app.listen( 3000, ( ) => {
    console.log('server listening on port 3k');
} );