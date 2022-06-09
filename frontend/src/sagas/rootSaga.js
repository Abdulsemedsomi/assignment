import { takeLatest, all, fork } from "redux-saga/effects";
import { ActionTypes } from "./../redux/constants/actionTypes";
import {
  handleDeleteEmployee,
  handleGetEmployee,
  handleRegisterEmployee,
  handleUpdateEmployee,
} from "./handlers/employee";

function* registerEmployeeWatcher() {
  yield takeLatest(ActionTypes.REGISTER_EMPLOYEE, handleRegisterEmployee);
}
function* getEmployeeWatcher(action) {
  yield takeLatest(ActionTypes.GET_EMPLOYEES, handleGetEmployee);
}
function* updateEmployeeWatcher(action) {
  yield takeLatest(ActionTypes.UPDATE_EMPLOYEE, handleUpdateEmployee);
}
function* deleteEmployeeWatcher(action) {
  yield takeLatest(ActionTypes.DELETE_EMPLOYEE, handleDeleteEmployee);
}

export function* watcherSaga() {
  yield all([
    fork(registerEmployeeWatcher),
    fork(getEmployeeWatcher),
    fork(deleteEmployeeWatcher),
    fork(updateEmployeeWatcher),
  ]);
}
