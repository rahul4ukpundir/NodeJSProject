import mongoose from "mongoose";
import EmployeeModel from "../Model/Employee/EmployeeModel";

mongoose
  .connect(
    "mongodb+srv://rpundir1:r1QZ79y04BkApMir@cluster0.lqc45.mongodb.net/mydb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connection successfully");
  })
  .catch(() => {
    console.log("database connection failed");
  });

export const createNewEmployee = async (req, res, next) => {
  const createdEmployee = new EmployeeModel();
  createdEmployee.empName = req.body.empName;
  createdEmployee.empEmail = req.body.empEmail;

  const result = await createdEmployee.save();
  return res.json(result);
};

export const getAllEmployee = async (req, res, next) => {
    const result = await EmployeeModel.find().exec();
    return res.json(result);
};
