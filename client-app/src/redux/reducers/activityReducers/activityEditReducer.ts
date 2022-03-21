import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

interface ActivityEditState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initalState: ActivityEditState = {
  success: false,
  loading: false,
  error: null,
};

const activityEditReducer = (
  state: ActivityEditState = initalState,
  action: ActivityAction
): ActivityEditState => {
  switch (action.type) {
    case ActivityActionType.ACTIVITY_EDIT_REQUEST:
      return { ...state, loading: true };
    case ActivityActionType.ACTIVITY_EDIT_SUCCESS:
      return { ...state, loading: false, success: true };
    case ActivityActionType.ACTIVITY_EDIT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActivityActionType.ACTIVITY_EDIT_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default activityEditReducer;
