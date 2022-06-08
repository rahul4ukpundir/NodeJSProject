
import httpError from "../Model/HttpError";
import {validationResult} from "express-validator";
let mockEmployee = [
  {
    empId: 101,
    empName: "Rahul",
    empEmail: "rpundir@pkglobal.com",
  },
  {
    empId: 102,
    empName: "Kapil",
    empEmail: "kpundir@pkglobal.com",
  },
];

export const getAllEmployee = (req, res, next) => {
  res.json({ mockEmployee });
};

export const employeeById = (req, res, next) => {
  // THIS IS THE WAY THROUGH WHICH WE CAN GOT ALL THE PARAMS FROM URL
  const employeeId = req.params.employeeId;
  console.log(employeeId);
  // CASE 1: Fetch employee details based on the employee id
  const empById = mockEmployee.find(
    (emp) => emp.empId === parseInt(employeeId)
  );
  if (!empById) {
    throw new httpError(404, "Not Found");
  }
  res.json({ empById });
};

export const createEmployee = (req, res, next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        throw new httpError(404, "Please check input parameters!");
    }
    if(!req.body){
        throw new httpError(404, "Something went wrong!");
    }
    const {empId, empName, empEmail} = req.body;   
     mockEmployee.push({
        empId: empId,
        empName: empName,
        empEmail: empEmail
    });

    res.json({message: "crated successfully"})
}

export const updateEmployeeById =(req, res, next) =>{
    if(!req.body){
        throw new httpError(404, "Something went wrong!");
    }
    const {empId, empName, empEmail} = req.body; 
    const updateMockEmployee = {...mockEmployee.findIndex(emp=>emp.empId === parseInt(empId))};
    console.log(updateMockEmployee);
    const foundIndex = mockEmployee.findIndex(emp=>emp.empId=== parseInt(empId))
    console.log(foundIndex)
    updateMockEmployee.empId = empId;
    updateMockEmployee.empName = empName;
    updateMockEmployee.empEmail = empEmail;
    mockEmployee[foundIndex] = updateMockEmployee;

    res.status(201).json({"updatedEmployee": updateMockEmployee})


}

export const deleteEmployeeById =(req, res, next) =>{
    const employeeId = req.params.employeeId;
    mockEmployee =mockEmployee.filter(emp=>emp.empId !== parseInt(employeeId));
    res.status(202).json({"deletedEmployee": "employee delete successfully"})
}
