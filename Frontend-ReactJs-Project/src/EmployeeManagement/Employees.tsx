import { Employee } from "./Employee";
import axios from "axios";
import { useEffect, useState } from "react";
import { IEmployeeModel } from "../Model/EmployeeModel";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const getAllEmployeeDetails = async () => {
    const result = await axios("http://localhost:5000/getEmployee");
    setEmployees(result.data);
  };
  useEffect(() => {
    getAllEmployeeDetails();
  }, []);

  return (
    <div>
      {employees.map((emp: IEmployeeModel) => {
        return <Employee data={emp} />;
      })}
    </div>
  );
};

export default Employees;
