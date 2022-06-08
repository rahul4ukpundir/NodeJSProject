import express from "express";
import { createNewEmployee, getAllEmployee } from "./Database/mongooesdb";

const app = express();

app.use(express.json())

app.get("/getEmployee", getAllEmployee)
app.post("/createNewEmployee", createNewEmployee)


app.listen(5000);