import axios from "axios";
import { Dispatch } from "react";
import { ActivityAction, ActivityActionType } from "../../actionTypes/activityActionType";

const loadActivityList = () => async (dispatch: Dispatch<ActivityAction>) => {
  try {
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_REQUEST,
    });

    const { data } = await axios.get<Activity[]>("/api/activities");
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default loadActivityList;
