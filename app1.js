import express from "express";
import {createNewEmployee, getAllEmployee} from "./Database/mongodb"

const app = express();

app.use(express.json())

app.get("/getEmployee", getAllEmployee)
app.post("/createEmployee", createNewEmployee);

app.listen(5000);