let express=require("express");
let app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to express")
})
app.listen(3000,()=>{
    console.log("'server is running on the 3K port')")
})