 const express = require("express");
 const bodyParser = require("body-parser");

 const app = express();

 app.use(bodyParser.urlencoded( {extended : false}));

 app.post("/users", (req, res, next)=>{
   res.send("hello"+ req.body.userName)
 })

 app.get("/", (req, res, next)=>{ 
    res.setHeader("content-type", "text/html")
    res.end(
        '<form action ="./users" method="Post"><input type="text" name="userName" /><button type="submit">Submit</button></form>'
      );
 })

 app.listen(5000);
