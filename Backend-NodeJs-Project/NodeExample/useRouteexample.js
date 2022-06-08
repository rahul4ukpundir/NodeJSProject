const express = require("express");

const app = express();

const routeConfig = require("./Routes/routeConfig");

// define the custome path - /api/employee
app.use("/api/employee",routeConfig);

//Create middleware fro sending all the error

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500)
    res.json({message: error.message || "unkonwn error"})
})

app.listen(5000);