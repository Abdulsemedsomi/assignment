import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/employeeActions";

export default function DeleteEmployee({ className, props }) {
  const dispatch = useDispatch();
  const close = () => {
    props.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteEmployee(props.selectedEmployee._id));

    close();
  };
  return (
    <div id="myModal" className={className}>
      <div className="modal-content">
        <h3>Are You sure You wan to delete this Employee</h3>

        <div className="action-div">
          <button onClick={props.onClick}> Cancel </button>
          <button onClick={handleSubmit}> Delete</button>
        </div>
      </div>
    </div>
  );
}
