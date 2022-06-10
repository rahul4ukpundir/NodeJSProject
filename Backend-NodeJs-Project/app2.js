import express from "express";
import { createNewEmployee, getAllEmployee } from "./Database/mongooesdb";

const app = express();

app.use(express.json());
/*cross origin issue resloved*/
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorize"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUTCH");
  next();
});

app.get("/getEmployee", getAllEmployee);
app.post("/createNewEmployee", createNewEmployee);

app.listen(5000);
