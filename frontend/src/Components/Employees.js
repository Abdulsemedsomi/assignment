import React from "react";
import { useSelector } from "react-redux";

import { EmployeeContainer } from "./EmployeeContainer.style";

export default function Employees({ className, props }) {
  const employees = useSelector((state) => state.allEmployees.employees);

  return (
    <>
      {employees.length > 0 ? (
        <div className={className}>
          {employees?.map((employee) => (
            <EmployeeContainer
              profile={{ props, employee }}
              key={employee?._id}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}> No Employee Registered</div>
      )}
    </>
  );
}
