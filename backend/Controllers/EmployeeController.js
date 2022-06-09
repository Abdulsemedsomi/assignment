const { find } = require("../Models/Employee");
const Employee = require("../Models/Employee");

// Returns all Employees
const index = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.json({ message: err });
  }
};

//  Creates a new Employee
const createEmployee = async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    salary: req.body.salary,
  });
  try {
    const registeredEmployee = await employee.save();
    res.json(registeredEmployee);
  } catch (err) {
    res.json({ message: err });
  }
};

// Updates Employee
const updateEmployee = async (req, res) => {
  try {
    const UpdatedEmployee = await Employee.updateOne(
      { _id: req.params.employeeId },
      {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary: req.body.salary,
      }
    );
    res.json(UpdatedEmployee);
  } catch (err) {
    res.json({ message: err });
  }
};

// Deletes Employee
const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.remove({
      _id: req.params.employeeId,
    });
    req.json(deletedEmployee);
  } catch (err) {
    res.json({ message: err });
  }
};

// searches an Employee
const searchEmployee = async (req, res) => {
  try {
    const user = await Employee.findById(req.params.employeeId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};
module.exports = {
  createEmployee,
  index,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
};
