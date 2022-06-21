let express =require("express");
let app=express();

// middelware is a function that has access to the request and response object  and to the next function 

///First way

// function logger(req,res,next){
//     console.log(req.method,req.url);
//     next();
// }
// app.use(logger)

//// Second way

app.use((req,res,next)=>{
    console.log(req.method,req.url);
        next();
})

app.get("/",(req,res)=>{
    res.send("Middelware")
})
app.listen(4000,()=>{
    console.log("server listening on 4k0 port")
})
