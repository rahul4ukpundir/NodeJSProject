const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./Routes/route");

//before go to route we need to parse body
app.use(bodyParser.json());

app.use("/api/employee",routes);

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code)
    res.json(error.message)
})

app.listen(5000);