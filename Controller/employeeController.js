
import httpError from "../Model/HttpError";

const mockEmployee = [
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
    console.log("POST REQUEST CREATED")
    if(!req.body){
        throw new httpError(404, "Something went wrong!");
    }
    const {empId, empName, empEmail} = req.body;
    console.log(req.body)
    mockEmployee.push({
        empId: empId,
        empName: empName,
        empEmail: empEmail
    });

    res.json({message: "crated successfully"})
}

