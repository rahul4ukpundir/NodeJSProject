import { Router } from "express";
import { getAllEmployee, employeeById, createEmployee } from "../Controller/employeeController";

const router = Router();

router.get("/", getAllEmployee)
router.get("/:employeeId", employeeById);
router.post("/", createEmployee)

export default router;