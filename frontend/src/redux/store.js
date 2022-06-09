import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [sagaMiddleware];
const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middleWare))
);
sagaMiddleware.run(watcherSaga);
export default store;
