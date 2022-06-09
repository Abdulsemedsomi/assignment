import { ActionTypes } from "../constants/actionTypes";

export const getEmployees = () => ({
  type: ActionTypes.GET_EMPLOYEES,
});
export const setEmployees = (employees) => ({
  type: ActionTypes.SET_EMPLOYEES,
  employees,
});

export const deleteEmployee = (employee) => {
  return {
    type: ActionTypes.DELETE_EMPLOYEE,
    payload: employee,
  };
};

export const updateEmployee = (employee) => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE,
    payload: employee,
  };
};

export const registerEmployee = (employee) => {
  return {
    type: ActionTypes.REGISTER_EMPLOYEE,
    payload: employee,
  };
};
