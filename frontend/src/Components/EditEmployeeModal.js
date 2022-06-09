import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../redux/actions/employeeActions";

export default function EditEmployeeModal({ className, props }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(props.selectedEmployee.name);
  const [dateOfBirth, setDateOfBirth] = useState(
    props.selectedEmployee.dateOfBirth
  );
  const [salary, setSalary] = useState(props.selectedEmployee.salary);
  const [_id, setId] = useState(props.selectedEmployee._id);
  const close = () => {
    props.close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      name: name,
      dateOfBirth: dateOfBirth,
      salary: salary,
      _id: _id,
    };

    dispatch(updateEmployee(input));

    close();
  };
  return (
    <div id="myModal" className={className}>
      <div className="modal-content">
        <h3>Edit Employee</h3>
        <label>Name</label>
        <input
          type={"text"}
          name="name"
          placeholder={props.selectedEmployee.name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Date of Birth</label>
        <input
          onChange={(e) => setDateOfBirth(e.target.value)}
          name="dateOfBirth"
          type={"date"}
          placeholder={new Date(props.selectedEmployee.dateOfBirth)
            .toISOString()
            .slice(0, 10)}
        />
        <label>salary</label>
        <input
          name="salary"
          type={"number"}
          placeholder={props.selectedEmployee.salary}
          onChange={(e) => setSalary(e.target.value)}
        ></input>
        <div className="action-div">
          <button onClick={props.onClick}> Cancel </button>{" "}
          <button onClick={handleSubmit}> submit</button>
        </div>
      </div>
    </div>
  );
}
