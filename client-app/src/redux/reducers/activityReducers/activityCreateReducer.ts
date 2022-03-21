import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

interface ActivityCreateState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initalState: ActivityCreateState = {
  success: false,
  loading: false,
  error: null,
};

const activityCreateReducer = (
  state: ActivityCreateState = initalState,
  action: ActivityAction
): ActivityCreateState => {
  switch (action.type) {
    case ActivityActionType.ACTIVITY_CREATE_REQUEST:
      return { ...state, loading: true };
    case ActivityActionType.ACTIVITY_CREATE_SUCCESS:
      return { ...state, loading: false, success: true };
    case ActivityActionType.ACTIVITY_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActivityActionType.ACTIVITY_CREATE_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default activityCreateReducer;
