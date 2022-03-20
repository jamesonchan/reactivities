import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

interface ActivityViewState {
  activity: Activity | null;
  loading: boolean;
  error: string | null;
}

const initalState: ActivityViewState = {
  activity: null,
  loading: false,
  error: null,
};

const activityViewReducer = (
  state: ActivityViewState = initalState,
  action: ActivityAction
): ActivityViewState => {
  switch (action.type) {
    case ActivityActionType.ACTIVITY_VIEW_REQUEST:
      return { ...state, loading: true };
    case ActivityActionType.ACTIVITY_VIEW_SUCCESS:
      return { ...state, loading: false, activity: action.payload };
    case ActivityActionType.ACTIVITY_VIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActivityActionType.ACTIVITY_VIEW_RESET:
      return { ...state, activity: null };
    default:
      return state;
  }
};

export default activityViewReducer;
