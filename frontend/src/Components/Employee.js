import React, { useState } from "react";
import { StyledEditEmployeeModal } from "./EditEmployeeModal.style";
import { StyledAlert } from "./DeleteEmployeeAlert.style";
export default function Employee({ className, profile }) {
  const [editModalToggle, setEditModalToggle] = useState(false);

  const [deleteModalToggle, setDeleteModalToggle] = useState(false);
  function openDeleteModal() {
    setDeleteModalToggle(true);
  }
  function closeDeleteModal() {
    setDeleteModalToggle(false);
  }
  function closeEditModal() {
    setEditModalToggle(false);
  }
  function openEditModal() {
    setEditModalToggle(true);
  }

  let selectedEmployee = profile.employee;

  return (
    <>
      <div className={className}>
        <div className="employee-container">
          <div className="personal-info">
            <div>
              <div className="group-one">
                <div className="avatar">
                  {" "}
                  {profile.employee?.name.charAt(0)}{" "}
                </div>
                <div className="profile">
                  <div className="name">{profile.employee?.name}</div>

                  <div className="birthday">
                    {new Date(profile.employee?.dateOfBirth).toLocaleDateString(
                      "en-us",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
            <h4 className="salary">{profile.employee?.salary} $</h4>
          </div>

          <div className="btn">
            <button onClick={openEditModal}>
              <ion-icon name="create"></ion-icon>
            </button>
            <button onClick={openDeleteModal}>
              <ion-icon name="trash"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {editModalToggle ? (
        <StyledEditEmployeeModal
          props={{
            selectedEmployee,
            onClick: function () {
              closeEditModal();
            },
            close: function () {
              closeEditModal();
            },
          }}
        />
      ) : (
        <></>
      )}
      {deleteModalToggle ? (
        <StyledAlert
          props={{
            selectedEmployee,
            onClick: function () {
              closeDeleteModal();
            },
            close: function () {
              closeDeleteModal();
            },
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
