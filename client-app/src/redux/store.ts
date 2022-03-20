import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import activityCreateReducer from "./reducers/activityReducers/activityCreateReducer";
import activityDeleteReducer from "./reducers/activityReducers/activityDeleteReducer";
import activityListReducer from "./reducers/activityReducers/activityListReducer";
import activityViewReducer from "./reducers/activityReducers/activityViewReducer";
import formOpenReducer from "./reducers/formReducers/formOpenReducer";

const reducer = combineReducers({
  activityList: activityListReducer,
  activityView: activityViewReducer,
  activityDelete: activityDeleteReducer,
  activityCreate: activityCreateReducer,
  formOpen: formOpenReducer,
});

const initialState = {};

const middleware = [thunk];

// export types
export type RootState = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
