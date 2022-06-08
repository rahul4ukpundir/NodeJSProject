import express from "express";
import { createNewEmployee } from "./Database/mongooesdb";

const app = express();

app.use(express.json())

app.post("/createNewEmployee", createNewEmployee)

app.listen(5000);