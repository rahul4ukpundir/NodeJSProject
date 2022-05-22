const { Console } = require("console");
const express = require("express");

const router = express.Router();

const httpError = require("../Model/HttpError");

const mockEmployee =[{
    empId: 101,
    empName: "Rahul",
    empEmail: "rpundir@pkglobal.com"
},
{
    empId: 102,
    empName: "Kapil",
    empEmail: "kpundir@pkglobal.com"
}]

router.get("/:Id", (req, res, next) => {
  console.log("GET REQUEST")
   // THIS IS THE WAY THROUGH WHICH WE CAN GOT ALL THE PARAMS FROM URL
   const employeeId = req.params.Id;
   // CASE 1: Fetch employee details based on the employee id
  const empById = mockEmployee.find(emp=> emp.empId === parseInt(employeeId));
  if(!empById){
   //CASE 2: SEND ERROR WHEN DATA IS NOT FINDING
   // return res.status(404).json({message: "No data found"})

    //CASE 3: THROW CUSTOME ERROR
    // const error = new Error();
    // error.code =404;
    // error.message ="No found";
    // throw(error) // for throwing error

    //CASE 4 - Optimize error code to resue in every function
    // creqted commmon error class and pass the code and message to it.

    throw new httpError(404, "Not Found")

  }
  res.json({empById});
});

module.exports = router;
