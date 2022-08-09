let express=require("express");
let app=express();
let cors=require("cors");
let path=require("path");
let port=4040;

/// set middlewares 
app.use(cors())
app.use(express.json());
app.use(express.static("Public"));
app.disable("x-powered-by");

//set routes
app.get("/", async(req,res)=>{
    res.sendFile(path.join(__dirname,'/Public/Index.html'))
})

// set server to listen for any incoming connection

app.listen(port, async()=>{
    console.log("server is listening @ :",port)
})