const express = require("express");


const employeeController = require("../Controller/employeeController");

const router = express.Router();

router.get("/", employeeController.getAllEmployee)
router.get("/:employeeId", employeeController.employeeById);

router.post("/", employeeController.createEmployee)

module.exports = router;