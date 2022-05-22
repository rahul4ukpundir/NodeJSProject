import express from "express";
import routes from "./Routes/employeeRoute";

// create express server
const app = express();
// add for handling the requrest body as json format
app.use(express.json())

// added router with default routers
app.use("/api/employee",routes);

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code)
    res.json(error.message)
})

app.listen(5000);