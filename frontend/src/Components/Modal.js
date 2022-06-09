import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerEmployee } from "../redux/actions/employeeActions";

export default function Modal({ className, props }) {
  const [name, setName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [salary, setSalary] = useState();
  const [gender, setGender] = useState("not selected");
  const dispatch = useDispatch();
  const input = {
    name: name,
    dateOfBirth: dateOfBirth,
    salary: salary,
    gender: gender,
  };
  const addEmployee = (e) => {
    console.log(input, "component");
    dispatch(registerEmployee(input));
    props.onClick();
  };

  return (
    <div id="myModal" className={className}>
      <div className="modal-content">
        <h3>Add Employee</h3>
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          required
        ></input>
        <label>Date of Birth</label>
        <input
          onChange={(e) => setDateOfBirth(e.target.value)}
          type={"date"}
          required
        ></input>
        <label>salary</label>
        <input
          onChange={(e) => setSalary(e.target.value)}
          type={"number"}
          required
        ></input>
        <label>Gender</label>

        <select
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="male">male</option>
          <option value="Female">female</option>
        </select>
        <div className="action-div">
          <button onClick={props.onClick}> Cancel </button>{" "}
          <button onClick={addEmployee}> submit</button>
        </div>
      </div>
    </div>
  );
}
