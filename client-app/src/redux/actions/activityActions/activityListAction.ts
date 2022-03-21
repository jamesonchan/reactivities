import axios from "axios";
import { Dispatch } from "react";
import { dateFormat } from "../../../utils/dateFormat";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const loadActivityList = () => async (dispatch: Dispatch<ActivityAction>) => {
  try {
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_REQUEST,
    });

    const { data } = await axios.get<Activity[]>("/api/activities");
    // change date format
    const activities = dateFormat(data);

    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_SUCCESS,
      payload: activities,
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
