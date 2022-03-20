import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

interface ActivityDeleteState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initalState: ActivityDeleteState = {
  success: false,
  loading: false,
  error: null,
};

const activityDeleteReducer = (
  state: ActivityDeleteState = initalState,
  action: ActivityAction
): ActivityDeleteState => {
  switch (action.type) {
    case ActivityActionType.ACTIVITY_DELETE_REQUEST:
      return { ...state, loading: true };
    case ActivityActionType.ACTIVITY_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case ActivityActionType.ACTIVITY_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default activityDeleteReducer;
