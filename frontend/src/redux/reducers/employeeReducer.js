import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  employees: [],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: action.employees };
    default:
      return state;
  }
};
