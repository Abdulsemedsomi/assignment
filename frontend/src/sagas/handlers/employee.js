import { call, put } from "redux-saga/effects";
import {
  setEmployees,
  getEmployees,
} from "../../redux/actions/employeeActions";
import {
  requestGetEmployees,
  requestRegisterEmployees,
  requestUpdateEmployees,
  requestDeleteEmployees,
} from "../requests/employees";

export function* handleGetEmployee() {
  try {
    const response = yield call(requestGetEmployees);
    const { data } = response;
    yield put(setEmployees(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleRegisterEmployee(action) {
  try {
    const response = yield call(requestRegisterEmployees, action.payload);
    console.log(response);
    yield put(getEmployees());
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateEmployee(action) {
  try {
    const response = yield call(requestUpdateEmployees, action.payload);
    console.log(response);
    yield put(getEmployees());
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteEmployee(action) {
  try {
    const response = yield call(requestDeleteEmployees, action.payload);
    console.log(response);
    yield put(getEmployees());
  } catch (error) {
    console.log(error);
  }
}
