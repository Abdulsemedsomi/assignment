const { required } = require("nodemon/lib/config");

const express = require("express");
const router = express.Router();

const Employee = require("../Models/Employee");
const EmployeeController = require("../Controllers/EmployeeController");
// Routes
// returns all Employees
router.get("/", EmployeeController.index);
// create an Employee
router.post("/", EmployeeController.createEmployee);

//deletes  an Employee
router.delete("/delete/:employeeId", EmployeeController.deleteEmployee);

// update Employee
router.patch("/update/:employeeId", EmployeeController.updateEmployee);

// search Employee
router.get("/search/:employeeId", EmployeeController.searchEmployee);

module.exports = router;
