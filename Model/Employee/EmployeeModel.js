import mongoose from "mongoose";

const employeeScheme = new mongoose.Schema({
    empName: {type: String, required: true},
    empEmail: {type: String, required: true}
});

export default mongoose.model("EmployeeModel", employeeScheme);