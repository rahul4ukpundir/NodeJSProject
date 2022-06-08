import { Router } from "express";
import { getAllEmployee, employeeById, createEmployee, updateEmployeeById, deleteEmployeeById }
 from "../Controller/employeeController";
import { check } from "express-validator";

const router = Router();

router.get("/", getAllEmployee)
router.get("/:employeeId", employeeById);
router.post("/",
[
    check("empName", "please check employee name").not().isEmpty(),
    check("empEmail", "please check employee email").not().isEmpty(),

],
createEmployee)
router.patch("/", updateEmployeeById)
router.patch("/:employeeId", deleteEmployeeById)
export default router;