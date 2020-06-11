const express = require("express");
const app = express();

app.get("/", (req,res,next)=>{
res.status(200).send("hello world");
});

app.post("/upload", function(req,res,next){

  console.log(req.files);
  res.send({

    success: true,
    message:"file uploaded"

  });
});

app.listen(3000,()=>{

  console.log("server started");
});