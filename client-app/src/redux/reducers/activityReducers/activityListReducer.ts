import { ActivityAction, ActivityActionType } from "../../actionTypes/activityActionType";

interface ActivitiesState {
  activities: Activity[];
  loading: boolean;
  error: string | null;
}

const initalState: ActivitiesState = {
  activities: [],
  loading: false,
  error: null,
};

const activityListReducer = (
  state: ActivitiesState = initalState,
  action: ActivityAction
): ActivitiesState => {
  switch (action.type) {
    case ActivityActionType.ACTIVITY_LIST_REQUEST:
      return { ...state, loading: true };
    case ActivityActionType.ACTIVITY_LIST_SUCCESS:
      return { ...state, loading: false, activities: action.payload };
    case ActivityActionType.ACTIVITY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default activityListReducer;
