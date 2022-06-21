let express=require("express");
let app=express();
let logger=require("morgan");
let cookieParser=require("cookie-parser");

app.use(logger,("dev"));
app.use(cookieParser());
app.use((req,res,next)=>{
    res.cookie("username","Vishal Goswami")
    next()
})

app.get("/about",(req,res)=>{
    res.send("cookie")
})

app.listen(5000 ,()=>{
    console.log('Listening the request on the 9K port ');
})